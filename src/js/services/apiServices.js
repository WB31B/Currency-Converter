import axios from "axios";
import config from "../config/apiConfig";

class Api {
    constructor(config) {
        this.url = config.url;
    }

    async currency() {
        try {
            const responce = await axios.get(`${this.url}`);
            return responce.data;
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

const api = new Api(config);

export default api;