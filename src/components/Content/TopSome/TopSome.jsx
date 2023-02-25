import React from 'react'
import '../TopSome/TopSome.scss'

export default function TopSome({title,pTitle}) {
  return (
    <div className='topSome'>
    <h1>{title}</h1>
        <p>{pTitle}</p>
  </div>
  )
}
