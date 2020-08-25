import React from 'react';
import { Link } from 'react-router-dom';

// import Styles
import './NotFound.scss';

// import components
import Header from '../Header';
import Footer from '../Footer';

const NotFound = () => {
  return (
    <div className='not_found'>
      <Header />
      <div className='not_found__container'>
        <div className='not_found__box'>
          <h1 className='not_found__title'>404!</h1>
          <h3 className='not_found__subtitle'>صفحه مورد نظر یافت نشد</h3>
          <span className='not_found__text'>صفحه ای که دنبالش می گردید وجود ندارد</span>
          <Link to='/' className='not_found__link'>
            بازگشت به خانه
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
