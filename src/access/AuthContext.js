import React from 'react';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authed, setAuthed] = useState(false);
  const signIn = () => {
    console.log('Signing in...');
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
