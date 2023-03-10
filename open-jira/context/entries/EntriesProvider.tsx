import { FC, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

export const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Elit duis consectetur enim occaecat voluptate officia.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Proident veniam dolore enim incididunt fugiat adipisicing in cillum ad ullamco labore sunt aliquip anim.",
      status: "in-progress",
      createdAt: Date.now() - 100000,
    },
    {
      _id: uuidv4(),
      description:
        "Voluptate consectetur dolore Lorem adipisicing qui proident veniam occaecat id commodo in veniam fugiat sit.",
      status: "finished",
      createdAt: Date.now() - 1000000,
    },
  ],
};

type Props = {
  children?: React.ReactNode;
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
