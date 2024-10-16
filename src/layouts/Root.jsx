import React from 'react'
import { Outlet } from 'react-router-dom'

export default function () {
  return (
    <div className='font-Amita text-4xl'>
        <Outlet/>
    </div>
  )
}
