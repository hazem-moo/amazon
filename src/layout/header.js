import Image from 'next/image'
import React from 'react'
import logo from '../logo.png'
import { FaSearch, FaHeart } from 'react-icons/fa'
import { BsCart4 } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '@/reduc/basketSlice'
import { singInName } from '@/reduc/singInSlice'

const Header = () => {
    let rout = useRouter()
    let item = useSelector( selectItems )
    let sing = useSelector( singInName )

  return (
    <header>
        <Image 
            alt='logo' 
            src={logo} 
            width={70} 
            height={70} 
            placeholder='blur' 
            onClick={() => rout.push('/')}
        />
        <div  className='sing ' onClick={() => rout.push('/sing-in')}>
            <p>
                {
                    sing.length === 0 ? 'sing in' : sing[0].name.length >= 9 ?
                    sing[0].name.slice(0, 8) + '...' : sing[0].name
                }
            </p>
        </div>
        <form>
            <input type='search' placeholder='search...' />
            <FaSearch />
        </form>
        {/* <div className='favorite'>
            <p>0</p>
            <FaHeart />
        </div> */}
        <div className='card' onClick={() => rout.push('/basket')}>
            <p>{ item.length }</p>
            <BsCart4 />
        </div>
    </header>
  )
}

export default Header