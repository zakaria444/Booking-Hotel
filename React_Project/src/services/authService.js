import jwtDecode from "jwt-decode";



export function getCurrentUser() {
    try {
        const token = localStorage.getItem("token");
        console.log(token);
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
}

export function logout() {
    localStorage.removeItem("token");
}