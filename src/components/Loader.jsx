import React from 'react'
import spinner from '../../src/spinner.gif'

function Loader() {
  return (
    <div className='img'>
      <img src={spinner} alt='Check your internet connection' />
    </div>
  )
}

export default Loader