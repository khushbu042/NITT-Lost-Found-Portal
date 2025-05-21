import axios from "axios"

export const register = async(user) => {
    const res = await axios.post("http://localhost:8000/api/user/register",user);
    return res.data;
}

export const login = async({email,password}) => {
    const res = await axios.post("http://localhost:8000/api/user/login",
        {email,password},
        {withCredentials : true}
    );
    console.log("Login Data after Bachend API",res);
    return res.data;
}