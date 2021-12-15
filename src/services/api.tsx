import axios from "axios";

const api = axios.create({
    baseURL: "https://vortex-hmg.unifor.br/cartaodevisitas/api/",
});
    
export default api;