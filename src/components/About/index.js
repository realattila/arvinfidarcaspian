import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import backToTop from '../../backToTop';
import CountUp from 'react-countup';
// import styles
import './About.scss';

// import components
import Header from '../Header';
import Footer from '../Footer';
import Customers from '../Customers';

const About = (props) => {
  // useState

  const [state, setState] = useState({
    showCount: false,
  });
  // useEffect
  useEffect(() => {
    backToTop();
    const CountUpBoxTop = countUpBox.current.offsetTop;

    if (window.pageYOffset > CountUpBoxTop - 750) {
      setState({ ...state, showCount: true });
    }
    const scrollCallBack = window.addEventListener(
      'scroll',
      () => {
        if (window.pageYOffset > CountUpBoxTop - 750) {
          setState({ ...state, showCount: true });
        }
      }
    );
    return () =>
      window.removeEventListener('scroll', scrollCallBack);
  }, []);
  const countUpBox = useRef(null);

  return (
    <div className='about'>
      <Header />

      <div className='page__header'>
        <h1 className='page__header__title'>درباره ما</h1>
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
            to='/contact'
            className='page__header__breadcrumb__link page__header__breadcrumb__current'>
            درباره ما
          </Link>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='about__item about__about'>
            <h2 className='about__about__title'>
              درباره ما
            </h2>
            <p className='about__about__text'>
              مجموعه آوند فیدار کاسپین در اسفند ماه سال ۹۷
              در استان مازندران ، شهرستان نکا تاسیس شد . این
              مجموعه با هدف توسعه و خدمات به کارخانه جات
              صنعتی برای تولید قطعات خاص فلزی در ابعاد و
              اندازه های مختلف با بهره بردن از ماشین آلات
              روز دنیا و تیم های متخصص در زمینه قالب سازی و
              تولید قدم برداشته است و از سال ۹۷ تا کنون بیش
              از ۵۰ شرکت مختلف به این مجموعه اعتماد کرده و
              گروه آوند فیدار کاسپین تلاش نموده که با بهترین
              کیفیت ممکن و تعهد کاری منظم کمکی هرچند کوچک به
              صنعت کشور داشته باشد .
            </p>
          </div>
        </div>
        <div
          className='row about__item about__fact'
          ref={countUpBox}>
          <h2 className='about__fact__title'>
            حقایقی از ما
          </h2>
          <div className='row'>
            <div className='about__fact__item'>
              <h4 className='about__fact__item__title'>
                {state.showCount && (
                  <CountUp
                    start={0}
                    end={3000000}
                    useEasing={true}
                    className='about__fact__item__count'
                  />
                )}

                <span className='about__fact__item__plus'>
                  +
                </span>
              </h4>
              <p className='about__fact__item__text'>
                قطعه در ماه
              </p>
            </div>
            <div className='about__fact__item'>
              <h4 className='about__fact__item__title'>
                {state.showCount && (
                  <CountUp
                    start={0}
                    end={50}
                    useEasing={true}
                    className='about__fact__item__count'
                  />
                )}

                <span className='about__fact__item__plus'>
                  +
                </span>
              </h4>
              <p className='about__fact__item__text'>
                مشتری در ماه
              </p>
            </div>
            <div className='about__fact__item'>
              <h4 className='about__fact__item__title'>
                {state.showCount && (
                  <CountUp
                    start={0}
                    end={100000}
                    useEasing={true}
                    className='about__fact__item__count'
                  />
                )}

                <span className='about__fact__item__plus'>
                  +
                </span>
              </h4>
              <p className='about__fact__item__text'>
                قطعه در روز
              </p>
            </div>
          </div>
        </div>
        <Customers className='about__item ' />
      </div>
      <Footer />
    </div>
  );
};

export default About;
