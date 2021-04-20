import { SET_CURRENT_LOCATION, SET_SELECTED_CATEGORY } from "./actions"

const INITIAL_STATE = {
  selectedCategory: {},
  currentLocation: {}
}

const orderReducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) 
  {
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.selectedCategory
      }
    case SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.currentLocation
      }
    default:
      return state
  }
}

export default orderReducer