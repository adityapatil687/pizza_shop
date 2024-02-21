import React, { createContext, useState } from "react";

export const UserStateContext = createContext();

const UserStateContextProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <UserStateContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </UserStateContext.Provider>
  );
};

export default UserStateContextProvider;
