import axios from "axios";

class LoginService{

    login(params){
        return axios.post(`http://localhost:8080/login`, params);
    }
}

export default new LoginService();