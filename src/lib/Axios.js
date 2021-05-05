import axios from "axios";

const Axios = axios.create({
  baseURL: "https://cheks.telneting.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
});

export default Axios;
