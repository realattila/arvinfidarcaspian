import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



// import components
import Header from '../Header';
import Footer from '../Footer';
import assets from '../../assets';
import ProductImages from './ProductImages';
import { Helmet } from 'react-helmet';

// import styles
import './Product.scss';

const Product = ({ match, products }) => {
  const [state, setState] = useState({
    data: null,
    currentImg: null
  });
  useEffect(() => {
    if (products.length !== 0) {
      products.filter((item) => {
        if (item.id === parseInt(match.params.id)) {
          console.log('sss', item);
          setState({ ...state, data: item, currentImg: !!item.images.length ? item.images[0] : null });
        }
      });
    }
  }, []);
  if (state.data === null) return false;


  // changeCurrentImg 

  const changeCurrentImg = (item) => {
    setState({...state, currentImg: item})
  }
  return (
    <div className='product'>
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
          <Link className='page__header__breadcrumb__link'>
            محصولات
          </Link>
          <span className='page__header__breadcrumb__span'>
            /
          </span>
          <Link
            to='/contact'
            className='page__header__breadcrumb__link page__header__breadcrumb__current'>
            {state.data.title}
          </Link>
        </div>
      </div>
      <div className='container'>
      <h1>{state.data.title}</h1>
        <div className='row'>
  
     

        <div className="product__description"></div>
          <ProductImages imgs={state.data.images} changeCurrentImg={changeCurrentImg} currentImg={state.currentImg} />

        </div>
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
export default connect(mapStateToProps, null)(Product);
