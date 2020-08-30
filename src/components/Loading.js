import React from 'react';

import './Loading.scss';

const Loading = () => {
  return (
    <div className='loader__box'>
      <div className='loader'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img src='/images/loading.png' className='loader__img' alt='loading' />
    </div>
  );
};

export default Loading;
