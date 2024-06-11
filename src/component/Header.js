import React from 'react'
import { Outlet } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className='header'>
          <h1>Quiz Game Task</h1>
      </header>
      <Outlet/>
    </>
  )
}
