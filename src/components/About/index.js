import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import backToTop from '../../backToTop';
import CountUp from 'react-countup';
// import styles
import './About.scss';

// import components
import Header from '../Header';
import Footer from '../Footer';

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
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > CountUpBoxTop - 750) {
        setState({ ...state, showCount: true });
      }
    });
    return () => window.removeEventListener('scroll', scrollCallBack);
  }, []);
  const countUpBox = useRef(null);

  return (
    <div className='about'>
      <Header />

      <div className='page__header'>
        <h1 className='page__header__title'>درباره ما</h1>
        <div className='page__header__breadcrumb'>
          <Link to='/' className='page__header__breadcrumb__link'>
            خانه
          </Link>
          <span className='page__header__breadcrumb__span'>/</span>
          <Link to='/contact' className='page__header__breadcrumb__link page__header__breadcrumb__current'>
            درباره ما
          </Link>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='about__item about__about'>
            <h2 className='about__about__title'>درباره ما</h2>
            <p className='about__about__text'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان
              امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
        <div className='row about__item about__fact' ref={countUpBox}>
          <h2 className='about__fact__title'>حقایقی از ما</h2>
          <div className='row'>
            <div className='about__fact__item'>
              <h4 className='about__fact__item__title'>
                {state.showCount && <CountUp start={0} end={200} useEasing={true} className='about__fact__item__count' />}

                <span className='about__fact__item__plus'>+</span>
              </h4>
              <p className='about__fact__item__text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            </div>
            <div className='about__fact__item'>
              <h4 className='about__fact__item__title'>
                {state.showCount && <CountUp start={0} end={200} useEasing={true} className='about__fact__item__count' />}

                <span className='about__fact__item__plus'>+</span>
              </h4>
              <p className='about__fact__item__text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            </div>
            <div className='about__fact__item'>
              <h4 className='about__fact__item__title'>
                {state.showCount && <CountUp start={0} end={200} useEasing={true} className='about__fact__item__count' />}

                <span className='about__fact__item__plus'>+</span>
              </h4>
              <p className='about__fact__item__text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            </div>
          </div>
        </div>
        <div className=' about__item about__logos'>
          <h2 className='about__fact__title'>برخی از مشتریان ما</h2>
          <div className='row'>
            <div className='about__logos__item'>
              <img className='about__logos__item__img' src='logo1' src='/images/sample-logo.png' />
            </div>
            <div className='about__logos__item'>
              <img className='about__logos__item__img' src='logo2' src='/images/sample-logo.png' />
            </div>
            <div className='about__logos__item'>
              <img className='about__logos__item__img' src='logo3' src='/images/sample-logo.png' />
            </div>
            <div className='about__logos__item'>
              <img className='about__logos__item__img' src='logo4' src='/images/sample-logo.png' />
            </div>
            <div className='about__logos__item'>
              <img className='about__logos__item__img' src='logo5' src='/images/sample-logo.png' />
            </div>
            <div className='about__logos__item'>
              <img className='about__logos__item__img' src='logo6' src='/images/sample-logo.png' />
            </div>
            <div className='about__logos__item'>
              <img className='about__logos__item__img' src='logo7' src='/images/sample-logo.png' />
            </div>
            <div className='about__logos__item'>
              <img className='about__logos__item__img' src='logo8' src='/images/sample-logo.png' />
            </div>
            <div className='about__logos__item'>
              <img className='about__logos__item__img' src='logo9' src='/images/sample-logo.png' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
