import React from 'react'
import sty from './LoginButton.module.css'
import { useNavigate } from 'react-router-dom'


const LoginButton = () => {

  const redirect = useNavigate()

  return (
    <button onClick={() => {
      redirect("/login")
    }} className={sty.button}>SIGN UP</button>
  )
}

export default LoginButton