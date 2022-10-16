import React, { createContext, useState } from "react";
import app from "../firebaseConfig/firebaseConfig";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ displayName: "Rimon" });
  // const user = { displayName: "Rimon" };
  const authInfo = { user: user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
