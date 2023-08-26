import { addName } from '@/reduc/singInSlice'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

const SingIn = () => {
  let nameRsf = useRef('')
  let emailRsf = useRef('')
  let passRsf = useRef('')
  let dispatch = useDispatch()
  let rout = useRouter()

  const regustaration = e => {
    e.preventDefault()
    dispatch(addName({
      name: nameRsf.current.value
    }))
    nameRsf.current.value = ''
    emailRsf.current.value = ''
    passRsf.current.value = ''
    rout.push('/')
  }

  return (
    <section className='sing-in'>
        <form onSubmit={  regustaration }>
            <input type='text' placeholder='type your name...' ref={nameRsf} required autoFocus />
            <input type='email' placeholder='type your email...' ref={emailRsf} required />
            <input type='password' placeholder='type your password...' ref={passRsf} required />
            <button>sing in</button>
        </form>
    </section>
  )
}

export default SingIn