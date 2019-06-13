import io from 'socket.io-client';
import configs from '../config';

const socket = io(configs.socketServer);

export default socket;