import { addItemToBasket, removeItemFromBasket, selectItemWithId } from '@/reduc/basketSlice'
import React, { Fragment } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const IdDetails = ({ key, id, name, dsc, src, rating, price }) => {
    let dispatch = useDispatch()
    let item = useSelector(state => selectItemWithId(state, id) )

    let addToBasket = () => dispatch(addItemToBasket({ id, name, dsc, src, rating, price }))
    let removeFromBasket = () => dispatch(removeItemFromBasket({ id }))

  return (
    <Fragment key={ key }>
        <div className='col-12 header'>
            <h1>{ name }</h1>
        </div>
        <div className='col-md-6'>
            <div className='id-img'>
                <img alt='' src={ src } />
            </div>
        </div>
        <div className='col-md-6'>
            <div className='info mt-3'>
                <p>{ dsc }</p>
                <h4>price: { price * 10 }$</h4>
                <div className=' star'>
                    {Array(rating).fill().map((_, i) => (
                        <Fragment key={i}>
                            <FaStar />
                        </Fragment>
                    ))}
                </div>
                <div className='btns'>
                    <button onClick={addToBasket}>add to basket</button>
                    <p>{ item.length }</p>
                    <button onClick={removeFromBasket}>remove to basket</button>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default IdDetails