import React from 'react' 
import { useSelector } from 'react-redux'

function Header() {
    const {text} = useSelector((state) => state.count)
  return (
    <div>
      Header
      <h3>{text}</h3>
    </div>
  )
}

export default Header
