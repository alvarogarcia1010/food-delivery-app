export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY'
export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION'

export const setSelectedCategory = (selectedCategory) => ({
  type: SET_SELECTED_CATEGORY,
  selectedCategory
})

export const setCurrentLocation = (currentLocation) => ({
  type: SET_CURRENT_LOCATION,
  currentLocation
})