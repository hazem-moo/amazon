import { home } from '@/daata/home'
import React from 'react'
import { Row } from 'react-bootstrap'
import IdDetails from './idDetails'

const Id = ({ data }) => {

  return (
    <section className='id my-5'>
        <Row className='mx-3'>
          {data.map(el => (
            <IdDetails 
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

export default Id

export async function getServerSideProps({ query }) {
    let id = +query.id
    const data = home.filter(ele => ele.id === id )
    return {
        props: {
            id,
            data
        }
    }
}