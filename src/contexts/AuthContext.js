import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const token = localStorage.getItem("token");
    
    useEffect(() => {
        if (token) {
            setUser({ token });
        }
    }, [])


    const login = (token) => {
        setUser({ token });
        localStorage.setItem("token", token);
    };


    const logout = () => {
        setUser(null);
        localStorage.removeItem("token", token);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;