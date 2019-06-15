import io from 'socket.io-client';
import configs from '../../config';

let socket = io(configs.socketServer, {
    query: { token: sessionStorage.getItem('token') }
});

export {
    socket
};