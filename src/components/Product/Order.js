import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../Modal';

import './Order.scss';
const Order = ({
  show = false,
  onClose = () => false,
  onSubmit = () => false,
  pedding = false,
}) => {
  const {
    handleSubmit,
    register,
    errors,
  } = useForm();

  // not show
  if (!show) return false;

  // return
  return (
    <>
      <Modal
        show={show}
        closeModal={onClose}
        closeBtn={onClose}
        AutoWidth={true}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='form product__order'>
          <h2 className='form__title'>
            سفارش دادن
          </h2>
          <div className='form__form-group'>
            <input
              ref={register({
                required: {
                  value: true,
                  message: 'نوشتن نام الزامی است',
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
                    'نوشتن شماره  تماس الزامی است',
                },
              })}
              type='number'
              name='number'
              className='form__input-text'
              autoComplete='off'
              placeholder='شماره تماس *'
            />
            {errors.number?.message && (
              <div className='form__error'>
                {errors.number.message}
              </div>
            )}
          </div>
          <div className='form__form-group'>
            <input
              ref={register({
                required: {
                  value: true,
                  message:
                    'نوشتن ایمیل الزامی است',
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                  message: 'ایمیل صحیح وارد کنید',
                },
              })}
              type='email'
              name='email'
              className='form__input-text'
              autoComplete='off'
              placeholder='ایمیل شما *'
            />
            {errors.email?.message && (
              <div className='form__error'>
                {errors.email.message}
              </div>
            )}
          </div>
          <div className='form__form-group'>
            <textarea
              ref={register}
              name='description'
              autoComplete='off'
              placeholder='توضیحات اضافی'
              className='form__input-area'></textarea>

            {errors.description?.message && (
              <div className='form__error'>
                {errors.description.message}
              </div>
            )}
          </div>
          {!pedding ? (
            <button
              type='submit'
              className='form__submit '>
              ثبت سفارش
            </button>
          ) : (
            <button
              type='submit'
              className='form__submit form__submit--pending'>
              درحال ارسال سفارش
            </button>
          )}
        </form>
      </Modal>
    </>
  );
};

export default Order;
