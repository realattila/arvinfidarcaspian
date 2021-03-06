import React, { useEffect, useRef } from 'react';
import assets from '../../assets';
import { Link } from 'react-router-dom';

import './Header.scss';
import CartIcon from './CartIcon';

const Header = () => {
  useEffect(() => {
    const header = document.getElementById(
      'header'
    );
    const logo = document.getElementById('logo');
    const sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add('header--sticky');
      header.classList.add('box-shadow--sm');
      logo.src = assets.logos[4];
    } else {
      header.classList.remove('header--sticky');
      header.classList.remove('box-shadow--sm');
      logo.src = assets.logos[1];
    }
    const scrollCallBack = window.addEventListener(
      'scroll',
      () => {
        if (window.pageYOffset > sticky) {
          header.classList.add('header--sticky');
          header.classList.add('box-shadow--sm');
          logo.src = assets.logos[4];
        } else {
          header.classList.remove(
            'header--sticky'
          );
          header.classList.remove(
            'box-shadow--sm'
          );
          logo.src = assets.logos[1];
        }
      }
    );

    const clickOnPage = window.addEventListener(
      'click',
      (event) => {}
    );
    return () => {
      window.removeEventListener(
        'scroll',
        scrollCallBack
      );
      window.removeEventListener(
        'click',
        clickOnPage
      );
    };
  }, []);
  const menuListRef = useRef(null);
  const ToggleSpanRef = useRef(null);
  const onToggleHeaderMenu = () => {
    ToggleSpanRef.current.classList.toggle(
      'header__menu__toggle__span--toggle'
    );
    menuListRef.current.classList.toggle(
      'header__menu__list--show'
    );
    menuListRef.current.classList.toggle(
      'box-shadow--md'
    );
  };
  return (
    <div className='header' id='header'>
      <div className='header__wrapper'>
        <div className='header__logo'>
          <Link
            to='/'
            className='header__logo__link'>
            <img
              className='header__logo__img'
              id='logo'
              src={assets.logos[1]}
              alt='logo'
            />
          </Link>
        </div>
        <div className='header__menu'>
          <ul
            className='header__menu__list'
            ref={menuListRef}>
            <CartIcon />
            <li className='header__menu__item'>
              <Link
                to='/products'
                className='header__menu__link header__menu__link--action'>
                سفارش دهید
              </Link>
            </li>
            <li className='header__menu__item'>
              <Link
                to='/contact'
                className='header__menu__link'>
                تماس با ما
              </Link>
            </li>
            <li className='header__menu__item'>
              <Link
                to='/about'
                className='header__menu__link'>
                درباره ما
              </Link>
            </li>
            <li className='header__menu__item'>
              <Link
                to='/'
                className='header__menu__link'>
                خانه
              </Link>
            </li>
          </ul>
        </div>
        <button
          className='header__menu__toggle'
          onClick={onToggleHeaderMenu}>
          <span
            className='header__menu__toggle__span'
            ref={ToggleSpanRef}></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
