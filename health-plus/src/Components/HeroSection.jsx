import React from 'react'
import { Typography } from '@mui/material'
import LoginButton from './LoginButton'
// import Button from './Button'


const HeroSection = () => {
  return (
    <div className='heroSectionTexts'>
        <Typography fontWeight='bold' className='heroSectionTitle' variant='h3'>FUEL YOUR FITNESS GOALS WITH US</Typography>
        <Typography fontWeight='bold' className='subTitle' variant='h6'>Join Our Fitness Community and Start Your Transformation Today!</Typography>
        <LoginButton />
    </div>
  )
}

export default HeroSection