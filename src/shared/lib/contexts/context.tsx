import React, { Context, createContext, useRef } from "react";

interface IRefContext {
  children: React.ReactNode;
}

interface RefContextType {
  sideMenuRef: React.RefObject<HTMLElement>;
}
export const RefContext: Context<RefContextType> =
  createContext<RefContextType>({
    sideMenuRef: { current: null },
  });

const ReferenceContext: React.FC<IRefContext> = ({ children }) => {
  const sideMenuRef = useRef<HTMLElement>(null);

  return (
    <RefContext.Provider value={{ sideMenuRef }}>
      {children}
    </RefContext.Provider>
  );
};

export default ReferenceContext;
