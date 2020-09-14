import React from 'react';

import './Loading.scss';

// const Loading = () => {
//   return (
//     <div className='loader__box'>
//       <div className='loader'>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <img src='/images/loading.png' className='loader__img' alt='loading' />
//     </div>
//   );
// };

const Loading = () => {
  return (
    <div className='loader2__box'>
      <div className='loader2__container'>
        <img className='loader2__img' src='/images/icon.png' alt='icon' />
        <h2 className='loader2__title'>آوند فیدار کاسپین</h2>
      </div>
    </div>
  );
};

export default Loading;
