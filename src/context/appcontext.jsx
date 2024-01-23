import React, { createContext, useState } from "react";

export const Appcontext = createContext();

function AppProvider({children}) {
  const [opensidebar, setOpenSidebar] = useState(false);

  function openside() {
    setOpenSidebar(true);
  }
  function closeside() {
    setOpenSidebar(false);
  }





  return (
    <Appcontext.Provider
      value={{ closeside, openside, opensidebar }}
    >{children}</Appcontext.Provider>
  );
}

export default AppProvider;
