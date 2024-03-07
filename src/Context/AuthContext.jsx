import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [userData, setUserData] = useState();

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setUserData(JSON.parse(localStorage.getItem("user")));
        } else if (userData) {
            localStorage.setItem("user", JSON.stringify(userData));
        }
    }, [])

    const saveUserData = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUserData(data)
    }

    const clearUserData = () => {
        localStorage.removeItem("user");
        setUserData(null)
    }

    return (
        <AuthContext.Provider value={{ userData, setUserData, saveUserData, clearUserData }}>
            {children}
        </AuthContext.Provider>
    )

}
