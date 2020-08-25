import React from 'react';

import './Loading.scss';

const Loading = () => {
  return (
    <div className='loader__box'>
      <div class='loader'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img src='/images/loading.png' className='loader__img' />
    </div>
  );
};

export default Loading;
