import { React, createContext, useState } from "react";

export const Cart = createContext({});

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [table, setTable] = useState([]);

  return (<Cart.Provider value={{ cart, setCart,table,setTable }}>{children}</Cart.Provider>);
};

export default ContextProvider;



