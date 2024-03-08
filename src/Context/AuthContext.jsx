import { createContext, useEffect, useState } from "react";

// Opretter en ny kontekst ved hjælp af createContext-funktionen
export const AuthContext = createContext();

// Opretter en komponent kaldet AuthContextProvider, som bruges til at håndtere brugeroplysninger og -godkendelse
export const AuthContextProvider = ({ children }) => {

    // State-variabel, der indeholder brugeroplysninger
    const [userData, setUserData] = useState();

    // useEffect-hooket kaldes, når komponenten er blevet indlæst
    useEffect(() => {
        
        if (localStorage.getItem("user")) {
            setUserData(JSON.parse(localStorage.getItem("user")));
        } else if (userData) {
            localStorage.setItem("user", JSON.stringify(userData));
        }
    }, [])

     // Funktion til at gemme brugeroplysninger i localStorage og opdatere userData-tilstanden
    const saveUserData = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUserData(data)
    }

     // Funktion til at fjerne brugeroplysninger fra localStorage og nulstille userData-tilstanden
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
