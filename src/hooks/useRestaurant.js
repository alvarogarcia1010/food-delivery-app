import { useState } from 'react'

const useRestaurant = ({restaurantData}) => {
  const [restaurant] = useState(restaurantData)
  
  return { restaurant }
}

export default useRestaurant
