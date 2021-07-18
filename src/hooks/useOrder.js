import React from 'react'
import { useDispatch, useSelector } from "react-redux"

const useOrder = () => {
  const dispatch = useDispatch()
  const orderItems = useSelector(state => state.order.orderItems)

  const editOrder = (action, menuId, price) => {
    if(action === '+')
    {

    }
    else
    {

    }
  }
  
  return {}
}

export default useOrder
