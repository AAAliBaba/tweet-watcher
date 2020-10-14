import socketIOClient from 'socket.io-client';

const ENDPOINT = 'localhost:9000'

class SocketService {
    constructor() {
        this.SOCKET = socketIOClient(ENDPOINT)
    }
}

export default SocketService