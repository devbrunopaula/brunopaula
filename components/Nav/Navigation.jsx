import React from 'react'
import {BsJustify} from 'react-icons/bs'

function Navigation() {
  return (
    <div>
      <div className='navigation'>
        <div className='logo'>
          <span className='bruno'>BRUNO</span>
          <span className='paula'>PAULA</span>
        </div>
        <div className='menu'>
          <span className='menu-title'>MENU</span>
          <BsJustify className='' size='25px' />
        </div>
      </div>
    </div>
  )
}

export default Navigation
