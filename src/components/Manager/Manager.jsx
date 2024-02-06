import React from 'react';
import './Manager.css';
import manager from '../../img/manager.png'

function Manager() {
  return ( 
    <section className='manager'>
      <img className="manager__photo" src={manager} alt="manager" />
        <span>
          <p className="manager__name">Evano</p>
          <p className="manager__position">Project Manager</p>
        </span>

    </section>
  );
}

export default Manager;