import axios from 'axios';

class SignupService
{
    addUser(userDetails)
    {
        return axios.post("http://localhost:8080/signup",userDetails);
    }
}
export default new SignupService();