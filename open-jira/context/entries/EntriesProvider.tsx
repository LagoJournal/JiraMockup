import { FC, useEffect, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { entriesAPI } from "../../apis";

export interface EntriesState {
  entries: Entry[];
}

export const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

type Props = {
  children?: React.ReactNode;
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const refreshEntries = async () => {
    const { data } = await entriesAPI.get<Entry[]>("/entries");
    dispatch({ type: "[Entry] Refresh", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const addEntry = async (description: string) => {
    const { data } = await entriesAPI.post<Entry>("/entries", { description });
    dispatch({ type: "[Entry] Add", payload: data });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] Update", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        addEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
