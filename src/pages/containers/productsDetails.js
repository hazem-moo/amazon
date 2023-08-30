import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { Card, Row } from 'react-bootstrap'

const ProductsDetails = ({ key, id, name, dsc, src, rating, price }) => {
    let rout = useRouter()
    
  return (
    <Fragment>
        <div className='col-lg-3 col-md-6' key={key}>
            <Card onClick={() => rout.push(`../productId/${id}`)}>
                <Card.Img src={src} alt='' />
                <div>
                    <h6>{name}</h6>
                </div>
            </Card>
        </div>

    </Fragment>
  )
}

export default ProductsDetails