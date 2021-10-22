import { createContext, ReactNode } from "react";

const AuthContext = createContext(null);

type AuthProvier = {
  children: ReactNode;
}

export function AuthProvider(props: AuthProvier) {
  return (
    <AuthContext.Provider value={null}>
      {props.children}
    </AuthContext.Provider>
  )
}