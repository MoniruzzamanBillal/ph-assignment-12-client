import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Utilities/Firebase.config";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [darkmode, setDarkmode] = useState(false);

  //   register function
  const registerFunction = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   email login function
  const loginFunction = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout function
  const logoutFunction = () => {
    signOut(auth);
  };

  //   toggle dark mode function $
  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  };

  // for changing user effect
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authValue = {
    user,
    loading,
    darkmode,
    registerFunction,
    loginFunction,
    logoutFunction,
    toggleDarkMode,
  };

  return (
    <AppContext.Provider value={authValue}> {children} </AppContext.Provider>
  );
};

export default AppProvider;
