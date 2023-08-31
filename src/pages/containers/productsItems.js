import { home } from '@/daata/home'
import React, { Fragment } from 'react'
import ProductsDetails from './productsDetails'
import { Row } from 'react-bootstrap'
import Overlay from './overlay'

const ProductsItems = () => {
    let data1 = home.filter(el => el.category === `men's clothing` )
    let data2 = home.filter(el => el.category === `jewelery` )
    let data3 = home.filter(el => el.category === `electronics` )
    let data4 = home.filter(el => el.category === `women's clothing` )
    
  return (
    <section className='products-items my-5'>
        <div className='m-4 row'>
            <h1 className='cpl-12'>men's clothing</h1>
        </div>
        <Row className='mx-4 my-5'>
            {data1.map(el => (
                <ProductsDetails 
                    id={el.id}
                    key={el.id}
                    name={el.name}
                    dsc={el.dsc}
                    price={el.price}
                    rating={el.rating}
                    src={el.src}
                />
            ))}
        </Row>

        <div className='m-4 row'>
            <h1 className='cpl-12'>jewelery</h1>
        </div>
        <Row className='mx-4 my-5'>
            {data2.map(el => (
                <ProductsDetails 
                    id={el.id}
                    key={el.id}
                    name={el.name}
                    dsc={el.dsc}
                    price={el.price}
                    rating={el.rating}
                    src={el.src}
                />
            ))}
        </Row>
        <Overlay />

        <div className='m-4 row'>
            <h1 className='cpl-12'>electronics</h1>
        </div>
        <Row className='mx-4 my-5'>
            {data3.map(el => (
                <ProductsDetails 
                    id={el.id}
                    key={el.id}
                    name={el.name}
                    dsc={el.dsc}
                    price={el.price}
                    rating={el.rating}
                    src={el.src}
                />
            ))}
        </Row>

        <div className='m-4 row'>
            <h1 className='cpl-12'>women's clothing</h1>
        </div>
        <Row className='mx-4 my-5'>
            {data4.map(el => (
                <ProductsDetails 
                    id={el.id}
                    key={el.id}
                    name={el.name}
                    dsc={el.dsc}
                    price={el.price}
                    rating={el.rating}
                    src={el.src}
                />
            ))}
        </Row>
    </section>
  )
}

export default ProductsItems