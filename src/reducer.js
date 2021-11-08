import { CHANGE_SEARCH_FIELD } from "./constants"

const initialState = { // initial object that will be initialized in the redux store
    searchField:'' // this state is not being modified
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD: // this case creates a new object
          return Object.assign({}, state, {searchField: action.payload});  
        default:
          return state;
    }
}








