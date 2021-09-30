import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [toggle, isToggled] = useState();
  const [progress, setProgress] = useState();

  return (
    <AppContext.Provider
      value={{
        progress,
        setProgress,
        toggle,
        isToggled,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useToggle = () => {
  const context = useContext(AppContext);
  const { toggle, isToggled } = context;
  return { toggle, isToggled };
};

export const useProgress = () => {
  const context = useContext(AppContext);
  const { progress, setProgress } = context;
  return { progress, setProgress };
};
