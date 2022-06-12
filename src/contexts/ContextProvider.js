import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const saniArray = ["sani1", "sani2", "sani3", "sani4", "sani5"];
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("blue");
  const [currentMode, setCurrentMode] = useState("#fff");

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        saniArray,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
