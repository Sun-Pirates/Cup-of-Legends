import React from 'react'
import { Link } from 'react-router-dom'

const Teste = () => {
  return (
    <div className='container'>
        <div className='flex-center'>
          <p>Teste <Link to="/">Home</Link></p>
        </div>
    </div>
  )
}

export default Teste