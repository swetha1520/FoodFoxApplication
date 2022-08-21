import axios from 'axios'


class LoginService 
{
    checkUser(userDetails)
    {
        return axios.post("http://localhost:8080/login",userDetails);
    }
    getUserId(email)
    {
        return axios.get("http://localhost:8080/userId"+'/'+email);
    }
    getUserByEmailAndPassword(email,password)
    {
        return axios.get("http://localhost:8080/user",email,password);
    }
}   
export default new LoginService();