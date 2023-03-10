import { UIState } from "./";


type UIActionType = 
| { type: '[UI] Open Sidebar'}
| { type: '[UI] Close Sidebar'}
| { type: '[UI] Toggle isAddingEntry'}
| { type: '[UI] Toggle isDragging'}

export const uiReducer = ( state:UIState, action:UIActionType): UIState => {
    
    switch(action.type){
        case "[UI] Open Sidebar":
            return {
                ...state,
                sidemenuOpen: true,
            }
        case "[UI] Close Sidebar":
            return {
                ...state,
                sidemenuOpen: false,
            }
        case '[UI] Toggle isAddingEntry':
            return{
                ...state,
                isAddingEntry: !state.isAddingEntry
            }
        case '[UI] Toggle isDragging':
            return{
                ...state,
                isDragging: !state.isDragging
            }
        default:
            return state
    }
}