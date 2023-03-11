import { Entry } from "../../interfaces";
import { EntriesState } from "./";

type EntriesActionType =
  | { type: "[Entry] Refresh"; payload: Entry[] }
  | { type: "[Entry] Add"; payload: Entry }
  | { type: "[Entry] Update"; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "[Entry] Refresh":
      return {
        ...state,
        entries: [...action.payload],
      };
    case "[Entry] Add":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case "[Entry] Update":
      return {
        ...state,
        entries: state.entries.map((e) => {
          if (e._id === action.payload._id) {
            e.status = action.payload.status;
          }
          return e;
        }),
      };
    default:
      return state;
  }
};
