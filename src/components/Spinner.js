import React from 'react'
import loading from './loading.gif'

export default function Spinner(props) {
  return (
     <div className='text-center small'>
           <img src={loading}  alt="" /> 
    </div>
  )
}
