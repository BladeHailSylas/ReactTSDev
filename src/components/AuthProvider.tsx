// src/context/AuthContext.tsx
import { useState, type ReactNode, useEffect } from "react";
import { AuthContext } from "../context/AuthContext.ts";
import { api } from "../api/axiosInstance";


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("username");
    if (token && savedUser) {
      setIsLoggedIn(true);
      setUsername(savedUser);
    }
  }, []);

  const login = (token: string, username: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    setIsLoggedIn(true);
    setUsername(username);
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout", {

      });
    } catch(e : any) {
      console.error(e);
      alert("로그아웃 실패");
    }
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername(null);
    // TODO: SPA 흐름을 위해 navigate로 변경 가능
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};