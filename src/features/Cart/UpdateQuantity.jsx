import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { increaseItemQuantity, decreaseItemQuantity } from './cartSlice'

function updateQuantity({pizzaId, currentQuantity}) {
    // console.log(currentQuantity)
    const dispatch = useDispatch()

  return (
    <div className='flex items-center gap-2 md:gap-3'>
        <Button type="round" onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
        <span className='text-sm font-medium'>{currentQuantity}</span>
        <Button type="round" onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  )
}

export default updateQuantity