import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import style
import './Products.scss';

// import components
import Header from '../Header';
import Footer from '../Footer';
import Modal from '../Modal';

const Products = (props) => {
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
    {
      id: 4,
      title: 'سنسور لنت ترمز',
      src: '/images/fakeitemjpg.jpg',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    },
    {
      id: 5,
      title: 'سنسور لنت ترمز',
      src: '/images/fakeitemjpg.jpg',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    },
    {
      id: 6,
      title: 'سنسور لنت ترمز',
      src: '/images/fakeitemjpg.jpg',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    },
    {
      id: 7,
      title: 'سنسور لنت ترمز',
      src: '/images/fakeitemjpg.jpg',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    },
    {
      id: 8,
      title: 'سنسور لنت ترمز',
      src: '/images/fakeitemjpg.jpg',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    },
    {
      id: 9,
      title: 'سنسور لنت ترمز',
      src: '/images/fakeitemjpg.jpg',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    },
    {
      id: 10,
      title: 'سنسور لنت ترمز',
      src: '/images/fakeitemjpg.jpg',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    },
  ];

  const [state, setState] = useState({ showModal: false, data: null });

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
    <div>
      <Header />
      <div className='page__header'>
        <h1 className='page__header__title'>محصولات ما</h1>
        <div className='page__header__breadcrumb'>
          <Link to='/' className='page__header__breadcrumb__link'>
            خانه
          </Link>
          <span className='page__header__breadcrumb__span'>/</span>
          <Link to='/products' className='page__header__breadcrumb__link page__header__breadcrumb__current'>
            محصولات ما
          </Link>
        </div>
      </div>

      <div className='products'>
        <h2 className='products__title'>محصولات ما</h2>
        <div className='products__subtitle'>شما می توانید هر محصولاتی را مد منظرات هست همین الان سفارش دهید</div>
        <div className='container'>
          <div className='row'>
            {itemProductRender()}
            <Modal show={state.showModal} closeModal={closeModal}>
              {moldalDataRender()}
            </Modal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
