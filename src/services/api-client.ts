import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d50d9c4ec90f4309a858b8386df9811a"
    }
})

export {CanceledError}