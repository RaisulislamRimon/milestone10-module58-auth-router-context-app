import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ displayName: "Rimon" });
  // const user = { displayName: "Rimon" };
  const authInfo = { user: user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
