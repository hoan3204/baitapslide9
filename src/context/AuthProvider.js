import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password, navigation) => {
    if (email === "admin@gmail.com" && password === "123456") {
      setUser({ email });
      setIsLoggedIn(true);
      navigation.replace("Explorer"); // Chuyển đến màn hình chính sau khi đăng nhập
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
