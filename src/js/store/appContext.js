// ContactContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import getState from './flux'; 

const ContactContext = createContext();

export const useContactContext = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const [state, setState] = useState({});

  useEffect(() => {
    const stateObject = getState({
      getStore: () => state,
      setStore: (newState) => setState(newState)
    });
    setState(stateObject.store);
  }, []);

  return (
    <ContactContext.Provider value={{ state, setState }}>
      {children}
    </ContactContext.Provider>
  );
};
