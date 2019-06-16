import { socket } from '../../lib/sockets';
import socketActions from '../../lib/sockets/socketActions';

const w: any = window;


const RTCutils = {
    getRTCIceCandidate: () => {
        w.RTCIceCandidate =
            w.RTCIceCandidate ||
            w.webkitRTCIceCandidate ||
            w.mozRTCIceCandidate ||
            w.msRTCIceCandidate;

        return w.RTCIceCandidate;
    },

    getRTCPeerConnection() {
        w.RTCPeerConnection =
            w.RTCPeerConnection ||
            w.webkitRTCPeerConnection ||
            w.mozRTCPeerConnection ||
            w.msRTCPeerConnection;

        return w.RTCPeerConnection;
    },

    getRTCSessionDescription() {
        w.RTCSessionDescription =
            w.RTCSessionDescription ||
            w.webkitRTCSessionDescription ||
            w.mozRTCSessionDescription ||
            w.msRTCSessionDescription;
        return w.RTCSessionDescription;
    },
}

class Connection {
    constructor({ userId, channelId, onClientConnect, onCandidateConnect }: any) {
        this.userId = userId;
        this.channelId = channelId
        this.onCandidateConnect = onCandidateConnect;
        this.onClientConnect = onClientConnect;


    }

    channelId: any = null;
    userId: any = null;

    caller: any = null;
    channel: any = null;
    localUserMedia: any = null;
    localRemoteUserMedia: any = null;
    iceCandidate = null

    onCandidateConnect: any = null
    onClientConnect: any = null

    initCaller = () => {
        //Initializing a peer connection
        this.caller = new w.RTCPeerConnection();
        //Listen for ICE Candidates and send them to remote peers
        this.caller.onicecandidate = (evt: any) => {
            if (!evt.candidate) return;

            socket.emit(socketActions.channel_client_candidate, {
                "candidate": evt.candidate,
            });
        };

        //onaddstream handler to receive remote feed and show in remoteview video element
        // this.caller.ontrack = (evt: any) => {
        //     console.log("ontrack called", evt);
        //     this.onCandidateConnect(evt.streams[0])
        // };

        this.caller.onaddstream = (evt: any) => {
            console.log("onaddstream     called", evt);
            this.onCandidateConnect(evt.stream)
        };
    }


    async callUser() {
        try {
            const stream = await this.getCam();

            this.caller.addStream(stream);

            this.localUserMedia = stream;

            this.onClientConnect(stream)

            const desc = await this.caller.createOffer();

            this.caller.setLocalDescription(new RTCSessionDescription(desc));

            console.log('OFFER SENDED', desc)
            socket.emit(socketActions.channel_client_sdp, { sdp: desc })

        } catch (err) {
            console.log("an error occured", err);
        }
    }

    getCam() {
        //Get local audio/video feed and show it in selfview video element
        console.log(navigator);
        return navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        });
    }

    onSDPconnect = async (msg: any) => {
        console.log("channel_client_sdp", msg);

        try {
            const stream = await this.getCam();

            this.onClientConnect(stream)

            this.caller.addStream(stream);

            await this.caller.setRemoteDescription(new RTCSessionDescription(msg.sdp));

            const sdp = await this.caller.createAnswer()

            await this.caller.setLocalDescription(new RTCSessionDescription(sdp));

            socket.emit(socketActions.channel_client_answer, { sdp: sdp })

        } catch (error) {
            console.log('an error occured', error);
        }

    }

    onClientCandidate = (msg: any) => {
        console.log('channel_client_candidate', msg)

        this.caller.addIceCandidate(new RTCIceCandidate(msg.candidate));
    }

    onClientAnswer = ({ sdp, userId, channelId }: any) => {

        console.log("channel_client_answer", sdp, { userId, channelId });
        this.caller.setRemoteDescription(new RTCSessionDescription(sdp));
    }

    init = () => {
        socket.on(socketActions.channel_client_sdp, this.onSDPconnect);
        socket.on(socketActions.channel_client_answer, this.onClientAnswer);
        socket.on(socketActions.channel_client_candidate, this.onClientCandidate);

        RTCutils.getRTCPeerConnection();
        RTCutils.getRTCSessionDescription();
        RTCutils.getRTCIceCandidate();

        this.initCaller();

    }

    createConnect = () => {
        this.callUser();
    }
}

export default Connection;