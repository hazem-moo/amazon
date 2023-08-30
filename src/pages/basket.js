import React from 'react'
import logo from '../img/basket.jpg'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, totalPrice } from '@/reduc/basketSlice'
import BasketDetails from './basketDetails'

const Basket = () => {
  let item = useSelector(selectItems)
  const prices = useSelector(totalPrice)
  console.log(prices)

  const basketDetails = item.map(el => (
      <BasketDetails 
      id={el.id}
      key={el.id}
      name={el.name}
      dsc={el.dsc}
      price={el.price}
      rating={el.rating}
      src={el.src}
      />
  ))

  return (
    <section className='basket'>
      <Image src={ logo } alt='basket' className='img' style={{ width: '100%', height: 500 }} />
      <h1>total price: { prices }$</h1>
      {
        item.length === 0 ? <h1>the basket it`s enpty..</h1> : basketDetails
      }
    </section>
  )
}

export default Basket