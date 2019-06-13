import React from 'react';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
 
import { videosApi } from '../../api';
import Connection from '../../lib/webrtc';

import { usersApi } from '../../api';
import socket from '../../lib/sockets';

const navigator: any = window.navigator;

function hasGetUserMedia() {
    return !!(
        (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
        || navigator.webkitGetUserMedia
        || navigator.mozGetUserMedia
        || navigator.msGetUserMedia
    );
}

function getUserMediaFunc() {
    return navigator.mediaDevices.getUserMedia
        || navigator.webkitGetUserMedia
        || navigator.mozGetUserMedia
        || navigator.msGetUserMedia;

}

export default class VideoFragment extends React.Component {
    state = {
        hasUserMedia: hasGetUserMedia(),
        stream: '',
        src: undefined,

        userId: undefined,
        receiverId: undefined,
        users: []
    }
    stream: any = ''
    video: any = React.createRef()

    videoConstraints = {};
    audioConstraints = null;

    async componentDidMount() {
        // if (!hasGetUserMedia()) return;

        const { state } = this;

        const result = await usersApi.getAllByQuery();

        this.setState({
            users: result.rows,
        })

        if (state.hasUserMedia) {
            this.requestUserMedia();
        }

        socket.on('user_status', (isOnline: boolean) => {
            console.log('user', isOnline)
        })
    }

    requestUserMedia() {
        const { props } = this;

        navigator.getUserMedia = getUserMediaFunc();
        const optionalSource = (id: any) => ({ optional: [{ sourceId: id }] });

        const sourceSelected = async (audioConstraints: any, videoConstraints: any) => {
            const constraints = {
                video: videoConstraints || true,
            };

            navigator.mediaDevices
                .getUserMedia(constraints)
                .then((stream: any) => {
                    this.handleUserMedia(null, stream);
                })
                .catch((e: any) => {
                    console.log(e);
                    // Webcam.mountedInstances.forEach((instance: any) => instance.handleUserMedia(e));
                });
        };

        if ('mediaDevices' in navigator) {
            sourceSelected(null, this.videoConstraints);
        } else {
            const constraintToSourceId = (constraint: any) => {
                const { deviceId }: any = constraint || {};

                if (typeof deviceId === 'string') {
                    return deviceId;
                }

                if (Array.isArray(deviceId) && deviceId.length > 0) {
                    return deviceId[0];
                }

                if (typeof deviceId === 'object' && deviceId.ideal) {
                    return deviceId.ideal;
                }

                return null;
            };

            navigator.mediaDevices.enumerateDevices()
                .then((sources: any) => {
                    let audioSource = null;
                    let videoSource = null;

                    sources.forEach((source: any) => {
                        if (source.kind === 'audioinput') {
                            audioSource = source.deviceId;
                        } else if (source.kind === 'videoinput') {
                            videoSource = source.deviceId;
                        }
                    });

                    const audioSourceId = constraintToSourceId(this.audioConstraints);
                    if (audioSourceId) {
                        audioSource = audioSourceId;
                    }

                    const videoSourceId = constraintToSourceId(this.videoConstraints);
                    if (videoSourceId) {
                        videoSource = videoSourceId;
                    }

                    sourceSelected(
                        optionalSource(audioSource),
                        optionalSource(videoSource),
                    );
                })
                .catch(function (err: any) {
                    console.log(err.name + ": " + err.message);
                });
        }

    }

    startRecording() {

        setInterval(() => this.postVideoToServer(this.stream.getTracks()), 5000);
    }


    createPeerConnection = async () => {
        Connection.init();

        console.log(Connection.caller);

    }

    postVideoToServer = async (videoblob: any) => {
        console.log(videoblob);

        var data: any = {};
        data.video = videoblob;
        data.metadata = 'test metadata';
        data.action = "upload_video";


        await videosApi.upload(1, data);
    }

    handleUserMedia(err: any, stream: any) {
        if (err) {
            return;
        }

        this.stream = stream;

        try {

            this.video.current.srcObject = stream;
            // this.startRecording();
            this.createPeerConnection();
            this.setState({
                hasUserMedia: true,
            });
        } catch (error) {
            console.log(error)
            this.setState({
                hasUserMedia: true,
                src: window.URL.createObjectURL(stream),
            });
        }
    }

    handleChange = (event: any) => {
        switch (event.target.name) {
            case 'userId': {
                socket.emit('set_user_id', event.target.value)
            }
            case 'receiverId': {
                socket.emit('is_user_online', event.target.value)
            }
        }
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    sendRequest = (event: any) => {
        const userId = this.state.userId;
    }

    render() {
        return (
            <Container fixed={true}> 
                <div>
                    <Select
                        placeholder={'User'}
                        onChange={this.handleChange}
                        value={this.state.userId}
                        name="userId"
                        style={{ width: '200px' }}
                    >

                        {
                            this.state.users.map(({ fullName, id }) => {
                                return <MenuItem value={id}>{fullName}</MenuItem>
                            })
                        }

                    </Select>

                    <Button
                        onClick={this.sendRequest}
                        children={'Send'}
                    />

                </div>

                <div>
                    <Select
                        placeholder={'Receiver'}
                        onChange={this.handleChange}
                        value={this.state.receiverId}
                        name="receiverId"
                        style={{ width: '200px' }}
                    >

                        {
                            this.state.users.map(({ fullName, id }) => {
                                return <MenuItem value={id}>{fullName}</MenuItem>
                            })
                        }

                    </Select>

                    <Button
                        onClick={this.sendRequest}
                        children={'Send'}
                    />

                </div>
                <div style={{
                    height: '600px',
                    display: 'flex',
                }}>

                    <video
                        key="video"
                        autoPlay={true}
                        muted={true}
                        playsInline={true}
                        ref={this.video}
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                    />

                    <video
                        key="video2"
                        autoPlay={true}
                        src=""
                        muted={true}
                        playsInline={true}
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                    />

                </div>
            </Container>
        )
    }
}