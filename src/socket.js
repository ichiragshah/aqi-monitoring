import { APP_CONFIG } from "./config/app.config"

let socket;

export const initSocket = () => {
    socket = new WebSocket(APP_CONFIG.SOCKET_URL) 
    // setTimeout(() => {
    //    socket.close()
    // }, 30000)
}

export const getAQIData = (callback) => {
    if (!socket) {
        initSocket()
    }
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data) || null
        return callback(data)
    }
}
