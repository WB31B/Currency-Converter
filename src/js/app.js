import api from "./services/apiServices";

api.currency().then(res => {
    console.log(res);
});