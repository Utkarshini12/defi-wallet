
import React, { createContext, useState } from 'react';

export const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [drawerContent, setDrawerContent] = useState({ title: '', content: null });
  const [amount, setTotalAmount] = useState(1000)

  const toggleDrawer = (visible, content = { title: '', content: null }) => {
    setIsDrawerVisible(visible);
    setDrawerContent(content);
  };

  return (
    <DrawerContext.Provider value={{ isDrawerVisible, toggleDrawer,drawerContent, setIsDrawerVisible, amount, setTotalAmount }}>
      {children}
    </DrawerContext.Provider>
  );
};
