import axios from "axios";

//initialize an axios instance
const instance = axios.create(
    {baseURL: "https://api.themoviedb.org/3",}
);

export default instance;