import React from 'react';

// import components
import Header from '../Header';
import Footer from '../Footer';
import Modal from '../Modal';
import Loading from '../Loading';

// import styles
import './Home.scss';

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

  const [state, setState] = React.useState({
    showModal: false,
    data: null,
    loading: true,
  });

  React.useEffect(() => {
    setTimeout(() => {
      setState({ ...state, loading: false });
    }, 1000);
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
      <div className='home__product__item' key={data.id}>
        <div className='home__product__item__container'>
          <div className='home__product__item__img__box'>
            <img className='home__product__item__img' src={data.src} alt={`item-${data.id}`} />
          </div>
          <div className='home__product__item__content'>
            <span className='home__product__item__content__span'>{data.title}</span>
            <button className='home__product__item__content__btn' onClick={() => onClickproductItem(data.id)}>
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
        <div className='home__modal'>
          <div className='home__modal__header'>
            <h3 className='home__modal__header__title'>ثبت سفارش</h3>
            <button className='home__modal__header__close'>
              <i className='fal fa-times home__modal__header__close__icon'></i>
            </button>
          </div>
          <div className='home__modal__body'></div>
        </div>
      );
    } else {
      return false;
    }
  };
  return (
    <>
      <Header />
      <div className='home'>
        <div className='home__intro'>
          <div className='home__intro__video__container'>
            <div className='home__intro__video__box'>
              <video className='home__intro__video' autoPlay loop>
                <source src='/videos/homeIntro.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
          <h1 className='home__intro__title text-shadow--lg'>
            <div>شماره یک</div>
            <div>در تولید سنسور لنت ترمز</div>
          </h1>
        </div>
        <div className='home__service '>
          <h2 className='home__service__title'></h2>
        </div>
        <div className='home__product'>
          <h2 className='home__product__title'>محصولات ما</h2>
          <div className='home__product__subtitle'>شما می توانید هر محصولاتی را مد منظرات هست همین الان سفارش دهید</div>
          <div className='home__product__box'>
            {itemProductRender()}
            <Modal show={state.showModal} closeModal={closeModal}>
              {moldalDataRender()}
            </Modal>
          </div>
        </div>
      </div>
      <Footer action />
    </>
  );
};

export default Home;
