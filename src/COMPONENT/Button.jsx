import React from 'react'
import {Link} from 'react-router-dom'


const Button = () => {
  return (
    <div>
        <button style={{padding: 20,
              backgroundColor: 'blue',
              border: "none",
              color: 'white',
              fontSize: 18,
              textDecorationLine: 'none',
              borderRadius: 20}}><Link to='/Assignment'>CLICK FOR ASSIGNMENT</Link></button>
    </div>
  )
}

export default Button