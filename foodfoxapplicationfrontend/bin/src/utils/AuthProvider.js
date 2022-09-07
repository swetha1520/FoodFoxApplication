import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({children}) {
      const [email, setEmail] = useState(null);

      const login = email =>{
            setEmail(email);
      }

      const logout = email =>{
            setEmail(email);
      }

      return (
            <AuthContext.Provider value={{email, login, logout}}>
                  {children}
            </AuthContext.Provider>
      )
}