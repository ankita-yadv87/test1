import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
    <ul className='ul'>
    <Link to="/"><li className='nvb'>Test1</li></Link>
    <Link to="/test2"><li className='nvb'>Test2</li></Link>
    <Link to="/test3"><li className='nvb'>Test3</li></Link>
      </ul>
    </nav>
    </>
  )
}

export default Navbar