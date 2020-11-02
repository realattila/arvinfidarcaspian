import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { RemoveFromCart as RemoveFromCartAction } from '../../redux/actions';
import { store } from '../../redux/store';

// import styles
import './Cart.scss';

// import components
import Footer from '../Footer';
import Header from '../Header';
import Notification from '../Notification';
import takeOrder from '../../api/takeOrder';

const Card = ({ cart = [] }) => {
  const {
    register,
    watch,
    errors,
    handleSubmit,
  } = useForm();

  const [state, setState] = useState({
    pedding: false,
  });

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

  // onsubmit
  const onSubmit = async (data) => {
    setState({ ...state, pedding: true });
    const response = await takeOrder({
      ...data,
      products: cart,
    });

    if (
      response.status >= 200 &&
      response.status < 300
    ) {
      Notification({
        type: 'success',
        title: 'ثبت سفارش',
        message:
          'سفارش شما با موفقیت ثبت شد به زودی با شما تماس خواهیم گرفت',
      });
    } else {
      Notification({
        type: 'danger',
        title: 'خطا',
        message:
          'متاسفانه ثبت سفارش شما با خطا مواجه شده است، لطفا بعدا تلاش کنید',
      });
    }
    setState({
      ...state,
      pedding: false,
      showOrder: false,
    });
  };

  const renderCart = () => {
    const renderItem = (item) => {
      return (
        <div
          key={item.id}
          className='cart__full__item'>
          <Link
            to={`/product/${item.id}`}
            target='_blank'>
            <img
              src={item.images[0].url}
              alt={item.title}
              title={item.title}
              className='cart__full__item__img'
            />
          </Link>
          <h5 className='cart__full__item__title'>
            {item.title}
          </h5>
          <div className='cart__full__item__amount'>
            <h6 className='cart__full__item__amount__title'>
              تعداد بسته
            </h6>
            <input
              name={`item-${item.id}`}
              type='number'
              defaultValue={item.amount}
              ref={register}
              className='cart__full__item__amount__input'
            />
          </div>
          <span className='cart__full__item__total'>
            {`${
              (!!watch(`item-${item.id}`)
                ? parseInt(
                    watch(`item-${item.id}`)
                  )
                : item.amount) * item.number
            } عدد`}
          </span>
          <i
            className='fal fa-times cart__full__item__remove'
            title='حذف از سبد خرید'
            onClick={() =>
              removeFromcart(item)
            }></i>
        </div>
      );
    };
    if (!cart.length) {
      return (
        <div className='cart__empty'>
          <h4 className='cart__empty__title'>
            متاسفانه سبد خرید شما خالی است
          </h4>
          <Link
            to='/products'
            className='btn--1 cart__empty__link'>
            مشاهده محصولات
          </Link>
          <div className='cart__empty__background'>
            <svg
              className='cart__empty__background__svg'
              version='1.1'
              id='Capa_1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 231.523 231.523'>
              <g>
                <path
                  d='M107.415,145.798c0.399,3.858,3.656,6.73,7.451,6.73c0.258,0,0.518-0.013,0.78-0.04c4.12-0.426,7.115-4.111,6.689-8.231
		l-3.459-33.468c-0.426-4.12-4.113-7.111-8.231-6.689c-4.12,0.426-7.115,4.111-6.689,8.231L107.415,145.798z'
                />
                <path
                  d='M154.351,152.488c0.262,0.027,0.522,0.04,0.78,0.04c3.796,0,7.052-2.872,7.451-6.73l3.458-33.468
		c0.426-4.121-2.569-7.806-6.689-8.231c-4.123-0.421-7.806,2.57-8.232,6.689l-3.458,33.468
		C147.235,148.377,150.23,152.062,154.351,152.488z'
                />
                <path
                  d='M96.278,185.088c-12.801,0-23.215,10.414-23.215,23.215c0,12.804,10.414,23.221,23.215,23.221
		c12.801,0,23.216-10.417,23.216-23.221C119.494,195.502,109.079,185.088,96.278,185.088z M96.278,216.523
		c-4.53,0-8.215-3.688-8.215-8.221c0-4.53,3.685-8.215,8.215-8.215c4.53,0,8.216,3.685,8.216,8.215
		C104.494,212.835,100.808,216.523,96.278,216.523z'
                />
                <path
                  d='M173.719,185.088c-12.801,0-23.216,10.414-23.216,23.215c0,12.804,10.414,23.221,23.216,23.221
		c12.802,0,23.218-10.417,23.218-23.221C196.937,195.502,186.521,185.088,173.719,185.088z M173.719,216.523
		c-4.53,0-8.216-3.688-8.216-8.221c0-4.53,3.686-8.215,8.216-8.215c4.531,0,8.218,3.685,8.218,8.215
		C181.937,212.835,178.251,216.523,173.719,216.523z'
                />
                <path
                  d='M218.58,79.08c-1.42-1.837-3.611-2.913-5.933-2.913H63.152l-6.278-24.141c-0.86-3.305-3.844-5.612-7.259-5.612H18.876
		c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24.94l6.227,23.946c0.031,0.134,0.066,0.267,0.104,0.398l23.157,89.046
		c0.86,3.305,3.844,5.612,7.259,5.612h108.874c3.415,0,6.399-2.307,7.259-5.612l23.21-89.25C220.49,83.309,220,80.918,218.58,79.08z
		 M183.638,165.418H86.362l-19.309-74.25h135.895L183.638,165.418z'
                />
                <path
                  d='M105.556,52.851c1.464,1.463,3.383,2.195,5.302,2.195c1.92,0,3.84-0.733,5.305-2.198c2.928-2.93,2.927-7.679-0.003-10.607
		L92.573,18.665c-2.93-2.928-7.678-2.927-10.607,0.002c-2.928,2.93-2.927,7.679,0.002,10.607L105.556,52.851z'
                />
                <path
                  d='M159.174,55.045c1.92,0,3.841-0.733,5.306-2.199l23.552-23.573c2.928-2.93,2.925-7.679-0.005-10.606
		c-2.93-2.928-7.679-2.925-10.606,0.005l-23.552,23.573c-2.928,2.93-2.925,7.679,0.005,10.607
		C155.338,54.314,157.256,55.045,159.174,55.045z'
                />
                <path
                  d='M135.006,48.311c0.001,0,0.001,0,0.002,0c4.141,0,7.499-3.357,7.5-7.498l0.008-33.311c0.001-4.142-3.356-7.501-7.498-7.502
		c-0.001,0-0.001,0-0.001,0c-4.142,0-7.5,3.357-7.501,7.498l-0.008,33.311C127.507,44.951,130.864,48.31,135.006,48.311z'
                />
              </g>
            </svg>
          </div>
        </div>
      );
    } else if (!!cart.length) {
      return (
        <div className='row cart__full'>
          <div className='cart__full__section'>
            <h2 className='cart__full__title'>
              محصولات انتخاب شده
            </h2>
            <div className='cart__full__items'>
              {cart.map((item) =>
                renderItem(item)
              )}
            </div>
          </div>
          <div className='cart__full__section'>
            <h2 className='cart__full__title'>
              فرم ثبت نهایی سفارشات
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className='form cart__full__form'>
              <div className='form__form-group cart__full__form__input'>
                <input
                  ref={register({
                    required: {
                      value: true,
                      message:
                        'نوشتن نام الزامی است',
                    },
                  })}
                  type='text'
                  name='name'
                  className='form__input-text'
                  autoComplete='off'
                  placeholder='نام و نام خانوادگی *'
                />
                {errors.name?.message && (
                  <div className='form__error'>
                    {errors.name.message}
                  </div>
                )}
              </div>
              <div className='form__form-group cart__full__form__input'>
                <input
                  ref={register({
                    required: {
                      value: true,
                      message:
                        'نوشتن شماره  تماس الزامی است',
                    },
                  })}
                  type='number'
                  name='number'
                  className='form__input-text'
                  autoComplete='off'
                  placeholder='شماره تماس *'
                />
                {errors.number?.message && (
                  <div className='form__error'>
                    {errors.number.message}
                  </div>
                )}
              </div>
              <div className='form__form-group cart__full__form__input'>
                <input
                  ref={register({
                    required: {
                      value: true,
                      message:
                        'نوشتن ایمیل الزامی است',
                    },
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                      message:
                        'ایمیل صحیح وارد کنید',
                    },
                  })}
                  type='email'
                  name='email'
                  className='form__input-text'
                  autoComplete='off'
                  placeholder='ایمیل شما *'
                />
                {errors.email?.message && (
                  <div className='form__error'>
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div className='form__form-group cart__full__form__input'>
                <textarea
                  ref={register}
                  name='description'
                  autoComplete='off'
                  placeholder='توضیحات اضافی'
                  className='form__input-area'></textarea>

                {errors.description?.message && (
                  <div className='form__error'>
                    {errors.description.message}
                  </div>
                )}
              </div>
              {!state.pedding ? (
                <button
                  type='submit'
                  className='form__submit cart__full__form__submit'>
                  ثبت سفارش
                </button>
              ) : (
                <button
                  type='submit'
                  className='form__submit form__submit--pending cart__full__form__submit'>
                  درحال ارسال سفارش
                </button>
              )}
            </form>
          </div>
        </div>
      );
    }
  };
  return (
    <div className='page cart'>
      <Header />
      <div className='page__header'>
        <h1 className='page__header__title'>
          سبد خرید
        </h1>
        <div className='page__header__breadcrumb'>
          <Link
            to='/'
            className='page__header__breadcrumb__link'>
            خانه
          </Link>
          <span className='page__header__breadcrumb__span'>
            /
          </span>
          <Link
            to='/cart'
            className='page__header__breadcrumb__link page__header__breadcrumb__current'>
            سبد خرید
          </Link>
        </div>
      </div>
      <div className='container page__container cart__container  '>
        {renderCart()}
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(
  mapStateToProps,
  null
)(Card);
