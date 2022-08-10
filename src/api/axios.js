import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key:'809a18a5345521c28b66c044e390c2da',
        language:"ko-KR",
    },
});

export default instance;