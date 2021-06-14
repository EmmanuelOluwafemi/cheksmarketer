import Axios from './Axios';

const AxiosAuth = () => {
    let token = localStorage.getItem("makToken");
    if(token) {
        Axios.defaults.headers.common = {
            'Authorization': 'Bearer ' +   token
          };
    }

    return Axios
} 

export default AxiosAuth;