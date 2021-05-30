import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.cheks.ng/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
});

export default Axios;
