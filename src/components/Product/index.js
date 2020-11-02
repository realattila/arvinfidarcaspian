import React, {
  useEffect,
  useState,
} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import history from '../../history';

// redux
import { AdToCart as AdToCartAction } from '../../redux/actions/index';
import { store } from '../../redux/store';

// import styles
import './Product.scss';

// import components
import Header from '../Header';
import Footer from '../Footer';
import Order from './Order';
import takeOrder from '../../api/takeOrder';
import ProductImages from './ProductImages';
import Notification from '../Notification';

const Product = ({ match, products, cart }) => {
  const [state, setState] = useState({
    data: null,
    currentImg: null,
    search: false,
    showOrder: false,
    pedding: false,
  });
  useEffect(() => {
    if (products.length !== 0) {
      products.filter((item) => {
        if (
          item.id === parseInt(match.params.id)
        ) {
          setState({
            ...state,
            data: item,
            currentImg: !!item.images.length
              ? item.images[0]
              : null,
            search: false,
          });
          return true;
        }
        return false;
      });
    }
  }, []);

  const { register, watch } = useForm();
  if (state.data === null) return false;
  if (state.search) history.push('/404');

  // changeCurrentImg
  const changeCurrentImg = (item) => {
    setState({ ...state, currentImg: item });
  };

  // on Submit Order
  const onSubmitOrder = async (data) => {
    setState({
      ...state,
      pedding: true,
    });
    const response = await takeOrder({
      ...data,

      products: [
        {
          ...state.data,
          amount: parseInt(watch('amount')),
        },
      ],
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

  // ad to cart
  const adToCart = () => {
    if (!!_.find(cart, { id: state.data.id })) {
      Notification({
        type: 'warning',
        title: 'سبد خرید',
        message:
          'محصول به سبد خرید شما از قبل اضافه شده است',
      });
    } else {
      store.dispatch(
        AdToCartAction({
          ...state.data,
          amount: parseInt(watch('amount')),
        })
      );
      Notification({
        type: 'success',
        title: 'سبد خرید',
        message:
          'محصول به سبد خرید شما اضافه گردید',
      });
    }
  };

  // total
  const totalNumber = (data = '') => {
    if (!!data) {
      return (
        <h5 className='product__description__total'>
          {`تعداد کل = ${data}`}
        </h5>
      );
    } else return false;
  };

  // return
  return (
    <div className='page  product'>
      <Header />

      <div className='page__header'>
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
            to='/products'
            className='page__header__breadcrumb__link'>
            محصولات
          </Link>
          <span className='page__header__breadcrumb__span'>
            /
          </span>
          <Link
            to={`/product/${match.params.id}`}
            className='page__header__breadcrumb__link page__header__breadcrumb__current'>
            {state.data.title}
          </Link>
        </div>
      </div>
      <div className='container page__container product__container'>
        <h1 className='product__title'>
          {state.data.title}
        </h1>
        <div className='row product__row'>
          <div className='product__description'>
            <div className='product__description__right'>
              {!!state.data.size.length && (
                <div className='product__description__item product__description__size'>
                  <h4 className='product__description__title'>
                    ابعاد
                  </h4>
                  {state.data.size.map((item) => (
                    <div
                      key={item.id}
                      className='product__description__size__item'>
                      <span className='product__description__span'>
                        {item.title}
                      </span>
                      <span className='product__description__span'>
                        :
                      </span>
                      <span className='product__description__span product__description__span--value'>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <div className='product__description__item'>
                <h4 className='product__description__title'>
                  بسته
                </h4>
                <span className='product__description__span'>
                  تعداد
                </span>
                <span className='product__description__span'>
                  :
                </span>
                <span className='product__description__span product__description__span--value'>
                  {`${state.data.number} عددی`}
                </span>
              </div>
              {!!state.data.other.length && (
                <div className='product__description__item product__description__size'>
                  <h4 className='product__description__title'>
                    سایر ویژگی ها
                  </h4>
                  {state.data.other.map(
                    (item) => (
                      <div
                        key={item.id}
                        className='product__description__size__item'>
                        <span className='product__description__span'>
                          {item.title}
                        </span>
                        <span className='product__description__span'>
                          :
                        </span>
                        <span className='product__description__span product__description__span--value'>
                          {item.value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
            <div className='product__description__left'>
              <div className='product__description__amount'>
                <h5 className='product__description__amount__title'>
                  تعداد بسته
                </h5>
                <input
                  name='amount'
                  type='number'
                  defaultValue={1}
                  ref={register}
                  className='product__description__amount__input'
                />
              </div>
              {totalNumber(
                parseInt(watch('amount')) *
                  state.data.number
              )}

              <button
                className='product__description__btn product__description__btn--cart'
                onClick={() => adToCart()}>
                افزودن به سبد خرید
              </button>
              <button
                className='product__description__btn product__description__btn--order'
                onClick={() =>
                  setState({
                    ...state,
                    showOrder: true,
                  })
                }>
                سفارش دادن
              </button>
            </div>
          </div>

          <ProductImages
            imgs={state.data.images}
            changeCurrentImg={changeCurrentImg}
            currentImg={state.currentImg}
          />
        </div>
      </div>
      <Order
        show={state.showOrder}
        data={state.data}
        onClose={() => {
          setState({
            ...state,
            showOrder: false,
          });
        }}
        onSubmit={onSubmitOrder}
        pedding={state.pedding}
      />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
  };
};
export default connect(
  mapStateToProps,
  null
)(Product);
