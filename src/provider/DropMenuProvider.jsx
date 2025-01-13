import React, { createContext, useContext, useState } from "react";

const DropMenuContext = createContext();

export const useDropMenu = () => useContext(DropMenuContext);

export default function DropMenuProvider({ children }) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <DropMenuContext.Provider value={{ isSearchActive, setIsSearchActive }}>
      {children}
    </DropMenuContext.Provider>
  );
}
