import React from 'react';
import { Link } from 'react-router-dom';

// import styles
import './Footer.scss';

const Footer = ({ action = false }) => {
  return (
    <>
      <footer className='footer'>
        {action && (
          <section className='footer__action'>
            <div className='footer__action__container'>
              <span className='footer__action__span'>آماده اید؟</span>
              <h2 className='footer__action__title'>بیاید کار کنیم</h2>
              <Link to='/' className='footer__action__btn'>
                تماس بگیرید
              </Link>
            </div>
          </section>
        )}

        <section className='footer__down'>
          <div className='footer__logo__container'>
            <img className='footer__logo' src='/images/logo.png' alt='logo' />
          </div>
          <div className='footer__social'>
            <a className='footer__social__item' href='/'>
              <i className='fab fa-telegram-plane footer__social__ico'></i>
            </a>
            <a className='footer__social__item' href='/'>
              <i className='fab fa-instagram footer__social__ico'></i>
            </a>
          </div>

          <div className='footer__copyright'>
            <p className='footer__copyright__p'>تمامی حقوق برای آوند فیدار کاسپین محفوظ است © 2020</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
