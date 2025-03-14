import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const token = localStorage.getItem("token");
  const storedUserId = localStorage.getItem("userId");

  useEffect(() => {
    if (token && storedUserId) {
      setUser({ token, userId: storedUserId });
      fetchUserInfo(storedUserId);
    }
  }, [token, storedUserId]);

  const fetchUserInfo = async (userId) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${userId}`);
      if (!res.ok) throw new Error("Error receiving user data");

      const data = await res.json();
      setUserInfo(data);
    } catch (error) {
      console.error(error.message);
      setUserInfo(null);
    }
  };

  const updateUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };

  const login = (token, userId) => {
    if (!token || !userId) {
      console.error("Token or userId is missing");
      return;
    }
    setUser({ token, userId });
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);

    fetchUserInfo(userId);
  };

  const logout = () => {
    setUser(null);
    setUserInfo(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, userInfo, updateUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
