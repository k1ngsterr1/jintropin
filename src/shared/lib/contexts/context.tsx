import React, { Context, createContext, useRef } from "react";

interface IRefContext {
  children: React.ReactNode;
}

interface RefContextType {
  sideMenuRef: React.RefObject<HTMLElement>;
  loaderRef: React.RefObject<HTMLDivElement>;
}
export const RefContext: Context<RefContextType> =
  createContext<RefContextType>({
    sideMenuRef: { current: null },
    loaderRef: { current: null },
  });

const ReferenceContext: React.FC<IRefContext> = ({ children }) => {
  const sideMenuRef = useRef<HTMLElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  return (
    <RefContext.Provider value={{ sideMenuRef, loaderRef }}>
      {children}
    </RefContext.Provider>
  );
};

export default ReferenceContext;
