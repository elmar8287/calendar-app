import React from 'react';
import './Header.css';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Header() {
  return (
    <div className='header'>
      <h1 className='month-name'>October 2022</h1>
      <BsArrowLeft className='arrows' />
      <BsArrowRight className='arrows' />
      <button className='header-buttons'>Today</button>
      <button className='header-buttons'>Roma GMT +02:00</button>
    </div>
  );
}

export default Header;
