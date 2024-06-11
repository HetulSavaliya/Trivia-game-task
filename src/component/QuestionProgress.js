import React from 'react'
import { useSelector } from 'react-redux'

export const QuestionProgress = () => {
     const { index} = useSelector(store => store.questions)
  return (
    <>
      <header className='progress'>
        <p>Question <strong>{index+1}</strong> / 10</p>
    </header>
    </>
  )
}
