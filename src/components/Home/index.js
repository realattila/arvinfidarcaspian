import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import { connect } from 'react-redux';

import assets from '../../assets';
import backToTop from '../../backToTop';

// import components
import Header from '../Header';
import Footer from '../Footer';
import Modal from '../Modal';
import ProductsItem from '../Products/ProductsItem';
import Customers from '../Customers';

// import styles
import './Home.scss';
import { Link } from 'react-router-dom';
import WhyUs from '../WhyUs';

const Home = ({ products }) => {
  const [state, setState] = useState({
    showModal: false,
    data: null,
  });

  // useRef
  const video = useRef(null);

  // useEffect
  useEffect(() => {
    if (!!video.current) video.current.play();
    backToTop();
  }, [state, state.loading]);

  // on Close modal
  const closeModal = () => {
    setState({ ...state, showModal: false });
  };

  const moldalDataRender = () => {
    if (state.data != null) {
      return (
        <div className='products__modal'>
          <div className='products__modal__header'>
            <h3 className='products__modal__header__title'>
              ثبت سفارش
            </h3>
            <button
              className='products__modal__header__close'
              onClick={closeModal}>
              <i className='fal fa-times products__modal__header__close__icon'></i>
            </button>
          </div>
          <div className='products__modal__body'></div>
        </div>
      );
    }
  };
  return (
    <>
      <Header />
      <div className='home'>
        <div className='home__intro'>
          <div className='home__intro__video__container'>
            <div className='home__intro__video__box'>
              <video
                className='home__intro__video'
                autoPlay
                ref={video}
                src={assets.HomeVideo}
                type='video/mp4'
                controls
                loop></video>
            </div>
          </div>
          {/* <h1 className='home__intro__title text-shadow--lg'>
            <div>شماره یک</div>
            <div>در تولید سنسور لنت ترمز</div>
          </h1> */}
        </div>

        <div className='products home__products'>
          <h2 className='products__title'>
            محصولات ما
          </h2>
          <div className='products__subtitle'>
            شما می توانید هر محصولاتی را مد منظرات
            هست همین الان سفارش دهید
          </div>
          <div className='container'>
            <div className='row'>
              {!!products && (
                <ProductsItem
                  items={products.slice(0, 3)}
                  orderShow={false}
                />
              )}

              <div className='home__products__all'>
                <Link
                  className='home__products__all__link'
                  to='/products'>
                  <span>
                    مشاهده تمامی محصولات
                  </span>
                </Link>
              </div>
              <Modal
                show={state.showModal}
                closeModal={closeModal}>
                {moldalDataRender()}
              </Modal>
            </div>
          </div>
        </div>
        <WhyUs
          className='home__logos'
          TitleClassName='home__item__title'
        />
        <Customers
          className='home__logos'
          TitleClassName='home__item__title'
        />
      </div>
      <Footer />
    </>
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
)(Home);
