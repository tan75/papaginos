import React from 'react';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // TODO set useState(false) to require auth
  const [authed, setAuthed] = useState(true);
  const signIn = () => {
    setAuthed(true);
  };
  const signOut = () => {
    setAuthed(false);
  };
  return (
    <AuthContext.Provider value={{ authed, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
