import { fetchUser } from "../../api";
import { createContext, useState, useEffect } from "react";

export const AuthUserContext = createContext();

export const AuthUserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const loginUser = (username) => {
    return fetchUser(username).then((response) => {
      localStorage.setItem("userInfo", JSON.stringify(response));
      setUserInfo(response);
    });
  };

  const logoutUser = () => {
    localStorage.removeItem("userInfo");
    setUserInfo(null);
  };

  useEffect(() => {
    const isLoggedInUser = localStorage.getItem("userInfo");
    if (isLoggedInUser) setUserInfo(JSON.parse(isLoggedInUser));
  }, []);

  return (
    <AuthUserContext.Provider value={{ userInfo, loginUser, logoutUser }}>
      {children}
    </AuthUserContext.Provider>
  );
};
