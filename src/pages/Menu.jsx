import React from 'react'
import veri from '../helpers/data'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'

const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Burgerlerimiz</h1>
      <div className='menuList'>
        {
          veri.map((menuItem, key) => {
            return(<MenuItem
              key={key}
              image = {menuItem.image}
              name = {menuItem.name}
              content = {menuItem.content}
              price = {menuItem.price}
            />);
          })
        }
      </div>
    </div>
  )
}

export default Menu