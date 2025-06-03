import React ,{useContext,useState,createContext,useEffect} from "react";

const AuthContext = createContext();

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const login=(username)=>{
        setUser({name:username});
    }
    const logout=()=>{
        setUser(null);
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);