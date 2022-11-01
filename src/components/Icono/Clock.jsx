import React from 'react';
import './Clock.css'

const Clock = () => {
    return (
    <div className='caja'>
        <h1>hello, world</h1>
        <h2>I'ts time
            {
                new Date().toLocaleTimeString()
            }
        </h2>
       
    </div>
  );
}

export default Clock                                                                                                                                                 ;
