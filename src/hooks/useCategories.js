import { CATEGORIES } from '../data/dummy-data'

const useCategories = () => {
  const categories = CATEGORIES

  const getCategoryNameById = (id) => {
    const category = categories.find(item => item.id == id)
    return category.name || ""
  }

  return { categories, getCategoryNameById }
}

export default useCategories
