import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data,setData] = useState([])
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("hr-token");
  function login(user) {
    setUser(user);
  }
  // logout ftn
  const logout = () => {
    setUser(null);
    localStorage.removeItem("hr-token");
  };

  const getCounts = async ()=>{
    try {
      const req = await axios.get("https://mern-hr-app-cln.onrender.com/api/count",{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      })
      // const res = await req.json();
      console.log(req.data.eventLenght);
  
      setData(req.data.eventLenght)
      
    } catch (error) {
      
    }
  }

 

  useEffect(() => {
    const verifyUser = async () => {
      try {
        if (token) {
          const request = await axios.get(
            "https://mern-hr-app-cln.onrender.com/api/auth/verify",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(request);
          
          if (request.data.success) {
            setUser(request.data.user);
          }
        } else {
          setUser(null);
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error);
        if (error.request && !error.request.error) {
          setUser(null);
        }
      } finally {
        setIsLoading(false);
      }
    };
    verifyUser();
    getCounts()

  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        isLoading,
        data,
        getCounts
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
export default AuthContext;
