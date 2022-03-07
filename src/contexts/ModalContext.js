import React, { useState, createContext } from "react";

export const AddListModalContext = createContext();

export const AddListModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <AddListModalContext.Provider value={[showModal, setShowModal]}>
      {children}
    </AddListModalContext.Provider>
  );
};

export const ShowListModalContext = createContext();

export const ShowListModalProvider = ({ children }) => {
  const [showListModal, setShowListModal] = useState(false);

  return (
    <ShowListModalContext.Provider value={[showListModal, setShowListModal]}>
      {children}
    </ShowListModalContext.Provider>
  );
};
