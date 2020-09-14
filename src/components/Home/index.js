import React, { useState, useEffect } from 'react';
import backToTop from '../../backToTop';

// import components
import Header from '../Header';
import Footer from '../Footer';
import Modal from '../Modal';
import Loading from '../Loading';

// import styles
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  const fakeData = [
    {
      id: 1,
      title: 'سنسور لنت ترمز',
      src: '/images/fakeitemjpg.jpg',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    },
    {
      id: 2,
      title: 'سنسور لنت ترمز',
      src: '/images/fakeitemjpg.jpg',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    },
    {
      id: 3,
      title: 'سنسور لنت ترمز',
      src: '/images/fakeitemjpg.jpg',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    },
  ];

  const [state, setState] = useState({
    showModal: false,
    data: null,
    loading: true,
  });

  useEffect(() => {
    if (Loading) {
      setTimeout(() => {
        setState({ ...state, loading: false });
      }, 1750);
    }
    backToTop();
  }, []);

  if (state.loading) {
    return <Loading />;
  }

  // on click product Item
  const onClickproductItem = (id) => {
    setState({ ...state, showModal: true, data: fakeData.filter((data) => data.id === id) });
  };

  // on Close modal
  const closeModal = () => {
    setState({ ...state, showModal: false });
  };

  const itemProductRender = () => {
    return fakeData.map((data) => (
      <div className='products__item' key={data.id}>
        <div className='products__item__container'>
          <div className='products__item__img__box'>
            <img className='products__item__img' src={data.src} alt={`item-${data.id}`} />
          </div>
          <div className='products__item__content'>
            <span className='products__item__content__span'>{data.title}</span>
            <button className='products__item__content__btn' onClick={() => onClickproductItem(data.id)}>
              سفارش دهید
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const moldalDataRender = () => {
    if (state.data != null) {
      return (
        <div className='products__modal'>
          <div className='products__modal__header'>
            <h3 className='products__modal__header__title'>ثبت سفارش</h3>
            <button className='products__modal__header__close' onClick={closeModal}>
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
              <video className='home__intro__video' src='/videos/homeIntro.mp4' type='video/mp4' autoPlay loop></video>
            </div>
          </div>
          <h1 className='home__intro__title text-shadow--lg'>
            <div>شماره یک</div>
            <div>در تولید سنسور لنت ترمز</div>
          </h1>
        </div>

        <div className='products home__products'>
          <h2 className='products__title'>محصولات ما</h2>
          <div className='products__subtitle'>شما می توانید هر محصولاتی را مد منظرات هست همین الان سفارش دهید</div>
          <div className='container'>
            <div className='row'>
              {itemProductRender()}
              <div className='home__products__all'>
                <Link className='home__products__all__link' to='/products'>
                  <span>مشاهده تمامی محصولات</span>
                </Link>
              </div>
              <Modal show={state.showModal} closeModal={closeModal}>
                {moldalDataRender()}
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <Footer action />
    </>
  );
};

export default Home;
