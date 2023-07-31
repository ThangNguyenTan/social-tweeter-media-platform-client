import { useState, useEffect } from "react";
import { api } from "../config";

const useAuthToken = () => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("authToken") || ""
  );

  useEffect(() => {
    // Function to check for a valid token in localStorage on page reload
    const checkAuthTokenOnReload = () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        setAuthToken(token);
        api.defaults.headers.common["authorization"] = `Bearer ${token}`;
      }
    };

    checkAuthTokenOnReload();

    // Clean up the effect to avoid memory leaks
    return () => {
      delete api.defaults.headers.common["authorization"];
    };
  }, []);

  const saveAuthToken = (token) => {
    localStorage.setItem("authToken", token);
    setAuthToken(token);
    api.defaults.headers.common["authorization"] = `Bearer ${token}`;
  };

  const clearAuthToken = () => {
    localStorage.removeItem("authToken");
    setAuthToken("");
    delete api.defaults.headers.common["authorization"];
  };

  return { authToken, saveAuthToken, clearAuthToken };
};

export default useAuthToken;
