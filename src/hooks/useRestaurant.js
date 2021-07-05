import { useState } from 'react'

const useRestaurant = ({restaurantData}) => {
  const [restaurant, setRestaurant] = useState(restaurantData)
  const [currentLocation, setCurrentLocation] = useState(null)
  
  return { restaurant, currentLocation}
}

export default useRestaurant
