import React from 'react'
import Rating from '@mui/material/Rating'

interface StarsProps {
  rating: number
}

export default function Stars({rating}: StarsProps) {
  return (
    <div className='flex gap-3 items-center'>
      <Rating 
        name='half-rating-read'
        size='small'
        defaultValue={rating}
        precision={0.5}
        readOnly
      />
      <p className='text-[14px] font-header'>{rating.toFixed(1)}/5</p>
    </div>
  )
}
