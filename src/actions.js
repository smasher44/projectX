import { CHANGE_SEARCH_FIELD } from "./constants"

// setSearchFied is an action
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD, //constant name
    payload: text // value that was recieved thru input
})  








