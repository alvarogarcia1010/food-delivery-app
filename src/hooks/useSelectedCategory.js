import { useDispatch, useSelector } from "react-redux"
import { setSelectedCategory } from '../store/Order/actions'

const useSelectedCategory = () => {
  const dispatch = useDispatch()
  const selectedCategory = useSelector(state => state.order.selectedCategory)
  const setCategoryHandler = (categoryData) => dispatch(setSelectedCategory(categoryData))

  return { selectedCategory, setCategoryHandler}
}

export default useSelectedCategory
