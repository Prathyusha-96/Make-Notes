import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: localStorage.getItem("AUTH_TOKEN") ? true : false,
    token: localStorage.getItem("AUTH_TOKEN"),
    user: JSON.parse(localStorage.getItem("username")),
  });

  useEffect(() => {
    setAuth({
      isAuth: localStorage.getItem("AUTH_TOKEN") ? true : false,
      token: localStorage.getItem("AUTH_TOKEN"),
      user: JSON.parse(localStorage.getItem("username")),
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };