import React, {
  useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import backToTop from '../../backToTop';
import sendMessage from '../../api/sendMessage';

//import styles
import './Contact.scss';

import Header from '../Header';
import Footer from '../Footer';
import assets from '../../assets';
import Notification from '../Notification';

const Contact = () => {
  // useState
  const [state, setState] = useState({
    pending: false,
  });

  // useEffect
  useEffect(() => {
    backToTop();
  }, []);
  // use Form
  const {
    register,
    handleSubmit,
    errors,
    setValue,
  } = useForm();

  // handle submit
  const submitForm = async (data) => {
    setState({ ...state, pending: true });

    const response = await sendMessage(data);
    console.log('this is response ', response);

    if (
      response.status >= 200 &&
      response.status < 300
    ) {
      Notification({
        type: 'success',
        title: 'ارسال پیام',
        message:
          'پیام شما با موفقیت برای ما ارسال گردید',
      });

      setState({
        ...state,
        pending: false,
      });
    } else {
      Notification({
        type: 'danger',
        title: 'خطا',
        message:
          'متاسفانه خطایی رخ داده است لطفا بعدا امتحان کنید',
      });

      setState({
        ...state,
        pending: false,
      });
    }
    setValue('name', '');
    setValue('email', '');
    setValue('subject', '');
    setValue('message', '');
  };

  return (
    <div className='contact'>
      <Header />
      <div className='page__header'>
        <h1 className='page__header__title'>
          تماس با ما
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
            to='/contact'
            className='page__header__breadcrumb__link page__header__breadcrumb__current'>
            تماس با ما
          </Link>
        </div>
      </div>
      <div className='container contact__container contact__container--info'>
        <div className='contact__box'>
          <div className='row '>
            <div className='contact__item '>
              <div className='contact__item__box'>
                <div className='contact__item__icon'>
                  <i className='fal fa-headphones contact__item__icon__i'></i>
                </div>
                <h4 className='contact__item__head'>
                  آدرس
                </h4>
                <p className='contact__item__text'>
                  مازندران ، شهرستان نکا ، خیابان
                  انقلاب ، بعد از نودهک
                </p>
              </div>
            </div>
            <div className='contact__item '>
              <div className='contact__item__box'>
                <div className='contact__item__icon'>
                  <i className='fal fa-envelope contact__item__icon__i'></i>
                </div>
                <h4 className='contact__item__head'>
                  آدرس ایمیل
                </h4>
                <a
                  className='contact__item__link'
                  href='email:avand.fidar.caspian@gmail.com'>
                  avand.fidar.caspian@gmail.com
                </a>
              </div>
            </div>
            <div className='contact__item '>
              <div className='contact__item__box'>
                <div className='contact__item__icon'>
                  <i className='fal fa-map-marker-alt contact__item__icon__i'></i>
                </div>
                <h4 className='contact__item__head'>
                  شماره های تماس
                </h4>
                <a
                  className='contact__item__link'
                  href='tel:0113474001'>
                  011 347 4001
                </a>
                <a
                  className='contact__item__link'
                  href='tel:0113474003'>
                  011 347 4003
                </a>
              </div>
            </div>
            <div className='contact__item '>
              <div className='contact__item__box'>
                <div className='contact__item__icon'>
                  <i className='fal fa-share-alt-square contact__item__icon__i'></i>
                </div>
                <h4 className='contact__item__head'>
                  شبکه های مجازی
                </h4>

                <div className='contact__item__social'>
                  <p className='ltr'>
                    0933 460 3252
                  </p>
                  <br />
                  <span className='rtl'>
                    تلگرام:{' '}
                  </span>
                </div>
                <div className='contact__item__social'>
                  <p className='ltr'>
                    0933 460 3252
                  </p>
                  <span className='rtl'>
                    واتس آپ:{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className='contact__item__footer'>
            ساعات پاسخگویی همه روز از ساعت 8 تا 20
          </p>
        </div>
      </div>
      <div className='container contact__container contact__container--form'>
        <div className='row contact__form__row'>
          <div className='contact__form__image'>
            <img
              className='contact__form__image__img'
              alt='عکس فرم تماس'
              title='عکس فرم تماس'
              src={assets.contactForm}
            />
          </div>
          <form
            onSubmit={handleSubmit(submitForm)}
            className='form contact__form'>
            <h2 className='contact__form__title'>
              پیام بگذارید
            </h2>
            <p className='contact__form__text'>
              شما می توانید از طریق فرم زیر با ما
              ارتباط برقرار کنید، ما مشتاقانه
              منتظر پیام شما هستیم و در اصرع وقت
              پاسخ شما را خواهیم داد.
            </p>
            <div className='contact__form__inputs'>
              <div className='form__form-group'>
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

              <div className='form__form-group'>
                <input
                  ref={register({
                    required: {
                      value: true,
                      message:
                        'نوشتن شماره تماس الزامی است',
                    },
                  })}
                  type='number'
                  name='number'
                  className='form__input-text'
                  autoComplete='off'
                  placeholder='شماره تماس *'
                />

                {errors.email?.message && (
                  <div className='form__error'>
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className='form__form-group'>
                <input
                  ref={register({
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
                  placeholder='ایمیل'
                />

                {errors.email?.message && (
                  <div className='form__error'>
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className='form__form-group'>
                <input
                  ref={register({
                    required: {
                      value: true,
                      message:
                        'نوشتن موضوع الزامی است',
                    },
                  })}
                  type='text'
                  name='subject'
                  className='form__input-text'
                  autoComplete='off'
                  placeholder='موضوع پیام *'
                />

                {errors.subject?.message && (
                  <div className='form__error'>
                    {errors.subject.message}
                  </div>
                )}
              </div>

              <div className='form__form-group'>
                <textarea
                  ref={register({
                    required: {
                      value: true,
                      message:
                        'نوشتن موضوع الزامی است',
                    },
                  })}
                  name='message'
                  autoComplete='off'
                  placeholder='پیام شما *'
                  className='form__input-area'></textarea>

                {errors.message?.message && (
                  <div className='form__error'>
                    {errors.message.message}
                  </div>
                )}
              </div>
              {!state.pending ? (
                <button
                  type='submit'
                  className='form__submit '>
                  ارسال پیام
                </button>
              ) : (
                <button
                  type='submit'
                  className='form__submit form__submit--pending'>
                  درحال ارسال پیام
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
