import jwtDecode from "jwt-decode";




export const getToken = () => {
    const token  = localStorage.getItem("ssid");
    return token;
}

export const setToken = (token) => {
    localStorage.setItem("ssid", token);
}



//signout user
export const removeToken = () => {
    localStorage.removeItem("ssid");
    return true;
}

//get user details
export const getUser = () => {
 const token = localStorage.getItem("token");
 if(token){
    return jwtDecode(token);
 }
 return null;
}
