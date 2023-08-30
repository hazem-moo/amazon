import { deleteItems, removeItemFromBasket } from '@/reduc/basketSlice'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const BasketDetails = ({ key, id, name, dsc, src, rating, price }) => {
    let dispatch = useDispatch()
    
    const deletItem = _ => {
        dispatch(removeItemFromBasket({ id }))
    }
  return (
    <div className='basket-data' key={key}>
        <FaTimes onClick={deletItem} />
        <img alt='' src={ src } className='img' />
        <div className='info'>
            <h5>{name}</h5>
            <p>price: {price}$</p>
        </div>
    </div>
  )
}

export default BasketDetails