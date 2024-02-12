import React from 'react'
import './Items.css';

function Items() {



  const listItems = [
    'Home', 'Projects', 'About', 'Contact'
  ]
  return (
    <div className='items'>{listItems.map(item => (
      <a href={`${item}`}  key={item}>{item}</a>
    ))}</div>
  )
}

export default Items