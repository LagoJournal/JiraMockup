import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

export const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

type Props = {
  children?: React.ReactNode;
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "[UI] Open Sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "[UI] Close Sidebar" });
  };

  const setIsAddingEntry = () => {
    dispatch({ type: "[UI] Toggle isAddingEntry" });
  };

  const setIsDragging = () => {
    dispatch({ type: "[UI] Toggle isDragging" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        setIsDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
