import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RESTAURANTS } from "../data/dummy-data"
import { setSelectedCategory } from '../store/Order/actions'

const useSelectedCategory = () => {
  const dispatch = useDispatch()
  const [restaurants, setRestaurants] = useState(RESTAURANTS)
  const selectedCategory = useSelector(state => state.order.selectedCategory)

  const setCategoryHandler = (categoryData) => {
    
    dispatch(setSelectedCategory(categoryData))
  }

  useEffect(() => {
    let restaurantList = RESTAURANTS.filter(a => a.categories.includes(selectedCategory.id))
    setRestaurants(restaurantList)
  }, [selectedCategory.id])

  return { selectedCategory, restaurants, setCategoryHandler}
}

export default useSelectedCategory
