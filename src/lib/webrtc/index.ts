import { ninvoke } from "q";

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
    room: any = null;
    userId: any = null;
    channel: any = null;
    caller: any = null;
    localUserMedia: any = null;

    initCaller() {
        //Initializing a peer connection
        this.caller = new w.RTCPeerConnection();
        //Listen for ICE Candidates and send them to remote peers
        this.caller.onicecandidate = function (evt: any) {
            if (!evt.candidate) return;
            console.log("onicecandidate called");
            // onIceCandidate(caller, evt);
        };

        //onaddstream handler to receive remote feed and show in remoteview video element
        this.caller.onaddstream = function (evt: any) {
            console.log("onaddstream called");
            if (window.URL) {
                //   document.getElementById("remoteview").src = window.URL.createObjectURL(
                // evt.stream
                //   );
            } else {
                //   document.getElementById("remoteview").src = evt.stream;
            }
        };
    }

    onIceCandidate(peer: any, evt: any) {
        // if (evt.candidate) {
        //     channel.trigger("client-candidate", {
        //         "candidate": evt.candidate,
        //         "room": room
        //     });
        // }
    }

    getCam() {
        //Get local audio/video feed and show it in selfview video element
        return navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        });
    }

    async callUser(user: any) {
        try {
            const stream = await this.getCam();

            // if (window.URL) {
            //   document.getElementById("selfview").src = window.URL.createObjectURL(
            //     stream
            //   );
            // } else {
            //   document.getElementById("selfview").src = stream;
            // }

            this.caller.addStream(stream);

            this.localUserMedia = stream;

            const desc = await this.caller.createOffer();

            const sessionDescription = new RTCSessionDescription(desc);

            this.caller.setLocalDescription(sessionDescription);

            // channel.trigger("client-sdp", {
            //     sdp: desc,
            //     room: user,
            //     from: id
            // });

            this.room = user;
        }

        catch (err) {
            console.log("an error occured", err);
        }
    }

    onReject(answer: any) {
        if (answer.room == this.room) {
            console.log("Call declined");
            alert("call to " + answer.rejected + "was politely declined");
            this.endCall();
        }
    }

    onAnswer(answer: any) {
        if (answer.room == this.room) {
            console.log("answer received");
            this.caller.setRemoteDescription(new RTCSessionDescription(answer.sdp));
        }
    }
    endCall() {
        this.room = undefined;

        this.caller.close();

        for (let track of this.localUserMedia.getTracks()) {
            track.stop();
        }

        this.initCaller();
    }

    async onSDPconnect(msg: any) {
        if (msg.room == this.userId) {

            var answer = window.confirm("You have a call from: " + msg.from + "Would you like to answer?");

            if (!answer) {
                return this.channel.trigger("client-reject", { "room": msg.room, "rejected": this.userId });
            }

            this.room = msg.room;


            try {
                const stream = await this.getCam();

                this.localUserMedia = stream;

                // if (window.URL) {
                //     document.getElementById("selfview").src = window.URL.createObjectURL(stream);
                // } else {
                //     document.getElementById("selfview").src = stream;
                // }

                this.caller.addStream(stream);

                var sessionDesc = new RTCSessionDescription(msg.sdp);

                this.caller.setRemoteDescription(sessionDesc);

                const sdp = await this.caller.createAnswer()

                const RTCSessionDesc = new RTCSessionDescription(sdp);

                this.caller.setLocalDescription(RTCSessionDesc);

                // this.channel.trigger("client-answer", {
                //     "sdp": sdp,
                //     "room": room
                // });


            } catch (error) {
                console.log('an error occured', error);
            }
        }
    }

    init() {
        RTCutils.getRTCPeerConnection();
        RTCutils.getRTCSessionDescription();
        RTCutils.getRTCIceCandidate();

        this.initCaller();
    }
}

export default new Connection();

const data = {
    usersOnline: '', // the count of users online
    id: '', // the ID of the current user
    users: '',//  an array that holds the details of all users
    sessionDesc: '',//  the SDP offer being sent. SDP refers to the session description of the peer connection provided by WebRTC. (You would see more of this as we move on)
    room: '', // the identifier of the current people having a call.
    caller: '', // the peer connection object of the person calling/receiving a call.
    localUserMedia: '',// a reference to the local audio and video stream being transmitted from the caller.
}