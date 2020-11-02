import React, {
  useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import backToTop from '../../backToTop';
// import style
import './Products.scss';

// import components
import Header from '../Header';
import Footer from '../Footer';

import ProductsItem from './ProductsItem';
import Order from '../Product/Order';

import takeOrder from '../../api/takeOrder';
import Notification from '../Notification';

const Products = ({ products }) => {
  // useState
  const [state, setState] = useState({
    showModal: false,
    data: null,
    orderPedding: false,
    showOrderModal: false,
    orderData: null,
  });

  // useEffect
  useEffect(() => {
    backToTop();
  }, []);

  // onSubmitOrder
  const onSubmitOrder = async (data) => {
    console.log(
      'this is data',
      data,
      state.orderData
    );
    setState({
      ...state,
      orderPedding: true,
    });
    const response = await takeOrder({
      ...data,
      products: state.orderData.title,
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
      orderPedding: false,
      showOrderModal: false,
    });
  };

  return (
    <div className='products'>
      <Header />
      <div className='page__header'>
        <h1 className='page__header__title'>
          محصولات ما
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
            to='/products'
            className='page__header__breadcrumb__link page__header__breadcrumb__current'>
            محصولات ما
          </Link>
        </div>
      </div>

      <div className='page__container'>
        <h2 className='products__title'>
          محصولات ما
        </h2>
        <div className='products__subtitle'>
          شما می توانید هر محصولاتی را مد منظرات
          هست همین الان سفارش دهید
        </div>
        <div className='container'>
          <div className='row'>
            <ProductsItem
              items={
                !!products?.length ? products : []
              }
              orderShow={false}
            />
          </div>
        </div>
        <Order
          show={state.showOrderModal}
          onClose={() =>
            setState({
              ...state,
              showOrderModal: false,
            })
          }
          pedding={state.orderPedding}
          onSubmit={onSubmitOrder}
        />
      </div>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(
  mapStateToProps,
  null
)(Products);
