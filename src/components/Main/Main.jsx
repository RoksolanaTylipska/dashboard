import React from 'react';
import './Main.css';
import Customers from '../Customers/Customers';

function Main() {
  return ( 
    <main className='main'>
      <h2 className='main__title'>Hello Evano 👋🏼</h2>
      <Customers />
    </main>
  );
}

export default Main;