import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../../redux/store';
import { RemoveFromCart as RemoveFromCartAction } from '../../redux/actions';

// import Styles
import './Header.scss';

// import Components
import Notification from '../Notification';

const CartIcon = ({ items = [] }) => {
  // removeFromcart

  const removeFromcart = (item) => {
    store.dispatch(RemoveFromCartAction(item.id));
    Notification({
      type: 'success',
      title: 'سبد خرید',
      message:
        'محصول با موفقیت از سبد خرید شما حذف گردید',
    });
  };
  // render items
  const rednerItems = () => {
    if (items.length === 0) {
      return (
        <div className='header__menu__cart__empty'>
          <div className='header__menu__cart__empty__text'>
            سبد خرید شما خالی است
          </div>
          <Link
            className=' btn--1 header__menu__cart__empty__link'
            to='/products'>
            مشاهده محصولات
          </Link>
        </div>
      );
    } else if (items.length > 0) {
      return (
        <>
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className='header__menu__cart__item'>
                <span
                  className='header__menu__cart__item__text'
                  title={item.title}>
                  <span>{item.title}</span>

                  <span className='header__menu__cart__item__amount'>
                    {item.amount}
                  </span>
                  <span className='header__menu__cart__item__amount--no-margin'>
                    بسته
                  </span>
                </span>

                <i
                  className='fal fa-times header__menu__cart__item__remove'
                  title='حذف از سبد خرید'
                  onClick={() =>
                    removeFromcart(item)
                  }></i>
              </div>
            );
          })}
          <Link
            to='/cart'
            className='btn--1 header__menu__cart__link '>
            ثبت سفارشات
          </Link>
        </>
      );
    } else return <span>درحال بارگزاری</span>;
  };
  return (
    <>
      <li className='header__menu__item header__menu__cart'>
        <i className='fal fa-shopping-cart header__menu__cart__icon'></i>
        <span className='header__menu__cart__span'>
          {items.length}
        </span>
        <div className='header__menu__cart__box'>
          <div className='box-shadow--md header__menu__cart__content'>
            {rednerItems()}
          </div>
        </div>
      </li>
      <li className='header__menu__item header__menu__cart--mobile'>
        <Link
          to='/cart'
          className='header__menu__link'>
          سبد خرید
        </Link>
      </li>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cart,
  };
};

export default connect(
  mapStateToProps,
  null
)(CartIcon);
