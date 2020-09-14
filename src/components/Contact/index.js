import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import backToTop from '../../backToTop';
import sendMessage from '../../api/sendMessage';

//import styles
import './Contact.scss';

import Header from '../Header';
import Footer from '../Footer';

const Contact = () => {
  // useState
  const [state, setState] = useState({
    pending: false,
    message: null,
  });

  // useEffect
  useEffect(() => {
    backToTop();
  }, []);
  // use Form
  const { register, handleSubmit, errors, setValue } = useForm();

  // handle submit
  const submitForm = async (data) => {
    setState({ ...state, pending: true });
    let formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', data.subject);
    formData.append('message', data.message);

    const response = await sendMessage(formData);
    console.log('this is response ', response);

    if (response.status === 200) {
      setState({ ...state, pending: false, message: '✓ پیام شما با موفقیت ارسال گردید' });
    } else {
      setState({ ...state, pending: false, message: '✕ ارسال پیام شما با خطا مواجه شد' });
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
        <h1 className='page__header__title'>تماس با ما</h1>
        <div className='page__header__breadcrumb'>
          <Link to='/' className='page__header__breadcrumb__link'>
            خانه
          </Link>
          <span className='page__header__breadcrumb__span'>/</span>
          <Link to='/contact' className='page__header__breadcrumb__link page__header__breadcrumb__current'>
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
                <h4 className='contact__item__head'>آدرس</h4>
                <p className='contact__item__text'>تهران، میدان آزادی، خیابان امام، خیابان امام خیمینی، کوچه سبزواری 3، پلاک 14</p>
              </div>
            </div>
            <div className='contact__item '>
              <div className='contact__item__box'>
                <div className='contact__item__icon'>
                  <i className='fal fa-envelope contact__item__icon__i'></i>
                </div>
                <h4 className='contact__item__head'>آدرس ایمیل</h4>
                <a className='contact__item__link' href='email:98atila@gmail.com'>
                  98atila@gmail.com
                </a>
                <a className='contact__item__link' href='tel:09038276860'>
                  98atila@gmail.com
                </a>
              </div>
            </div>
            <div className='contact__item '>
              <div className='contact__item__box'>
                <div className='contact__item__icon'>
                  <i className='fal fa-map-marker-alt contact__item__icon__i'></i>
                </div>
                <h4 className='contact__item__head'>شماره های تماس</h4>
                <a className='contact__item__link' href='tel:09038276860'>
                  +98 903 827 6860
                </a>
                <a className='contact__item__link' href='tel:09038276860'>
                  +98 903 827 6860
                </a>
              </div>
            </div>
            <div className='contact__item '>
              <div className='contact__item__box'>
                <div className='contact__item__icon'>
                  <i className='fal fa-share-alt-square contact__item__icon__i'></i>
                </div>
                <h4 className='contact__item__head'>شبکه های مجازی</h4>

                <p className='contact__item__social'>
                  <p className='ltr'>+98 903 827 6860</p>
                  <br />
                  <span className='rtl'>تلگرام: </span>
                </p>
                <p className='contact__item__social'>
                  <p className='ltr'>+98 903 827 6860</p>
                  <span className='rtl'>تلگرام: </span>
                </p>
              </div>
            </div>
          </div>
          <p className='contact__item__footer'>ساعات پاسخگویی همه روز از ساعت 8 تا 20</p>
        </div>
      </div>
      <div className='container contact__container contact__container--form'>
        <div className='row contact__form__row'>
          <div className='contact__form__image'>
            <img className='contact__form__image__img' src='/images/contact-form.jpg' />
          </div>
          <form onSubmit={handleSubmit(submitForm)} className='contact__form__form'>
            <h2 className='contact__form__title'>پیام بگذارید</h2>
            <p className='contact__form__text'>شما می توانید از طریق فرم زیر با ما ارتباط برقرار کنید، ما مشتاقانه منتظر پیام شما هستیم و در اصرع وقت پاسخ شما را خواهیم داد.</p>
            <div className='contact__form__inputs'>
              <div className='contact__form__form-group'>
                <input
                  ref={register({
                    required: {
                      value: true,
                      message: 'نوشتن نام الزامی است',
                    },
                  })}
                  type='text'
                  name='name'
                  className='contact__form__input-text'
                  autoComplete='off'
                  placeholder='نام شما *'
                />
                {/* <label className='contact__form__label'>نام شما</label> */}
                {errors.name?.message && <div className='contact__form__error'>{errors.name.message}</div>}
              </div>

              <div className='contact__form__form-group'>
                <input
                  ref={register({
                    required: {
                      value: true,
                      message: 'نوشتن ایمیل الزامی است',
                    },
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                      message: 'ایمیل صحیح وارد کنید',
                    },
                  })}
                  type='text'
                  name='email'
                  className='contact__form__input-text'
                  autoComplete='off'
                  placeholder='ایمیل شما *'
                />
                {/* <label className='contact__form__label'>ایمیل شما</label> */}
                {errors.email?.message && <div className='contact__form__error'>{errors.email.message}</div>}
              </div>

              <div className='contact__form__form-group'>
                <input
                  ref={register({
                    required: {
                      value: true,
                      message: 'نوشتن موضوع الزامی است',
                    },
                  })}
                  type='text'
                  name='subject'
                  className='contact__form__input-text'
                  autoComplete='off'
                  placeholder='موضوع پیام *'
                />
                {/* <label className='contact__form__label'>ایمیل شما</label> */}
                {errors.subject?.message && <div className='contact__form__error'>{errors.subject.message}</div>}
              </div>

              <div className='contact__form__form-group'>
                <textarea
                  ref={register({
                    required: {
                      value: true,
                      message: 'نوشتن موضوع الزامی است',
                    },
                  })}
                  name='message'
                  autoComplete='off'
                  placeholder='پیام شما *'
                  className='contact__form__input-area'></textarea>
                {/* <label className='contact__form__label'>پیام شما</label> */}
                {errors.message?.message && <div className='contact__form__error'>{errors.message.message}</div>}
              </div>
              {!state.pending ? (
                <button type='submit' className='contact__form__submit '>
                  ارسال پیام
                </button>
              ) : (
                <button type='submit' className='contact__form__submit contact__form__submit--pending'>
                  درحال ارسال پیام
                </button>
              )}
              {state.message != null && <div className='contact__form__message'>{state.message}</div>}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
