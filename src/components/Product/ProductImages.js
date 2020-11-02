import React, { useState } from 'react';

// import styles
import './ProductImages.scss';

// import components
import Modal from '../Modal';

const ProductImages = ({
  imgs = [],
  changeCurrentImg,
  currentImg,
}) => {
  const [state, setState] = useState({
    modalShow: false,
  });

  if (imgs.length === 0) return false;
  // return
  return (
    <div className='product__imgs'>
      <div className='product__imgs__current__container '>
        <img
          className='product__imgs__current'
          src={currentImg.url}
          alt={`عکس ${currentImg.id + 1}`}
          title={`عکس ${currentImg.id + 1}`}
          onClick={() =>
            setState({
              ...state,
              modalShow: true,
            })
          }
        />
        <Modal
          show={state.modalShow}
          closeModal={() =>
            setState({
              ...state,
              modalShow: false,
            })
          }
          closeBtn={true}
          fullWidth={true}>
          <img
            className='product__imgs__modal__img'
            src={currentImg.url}
            alt={`عکس ${currentImg.id + 1}`}
            title={`عکس ${currentImg.id + 1}`}
            onClick={() =>
              setState({
                ...state,
                modalShow: true,
              })
            }
          />
        </Modal>
      </div>
      <div className='product__imgs__list'>
        {imgs.map((item) => (
          <div
            key={item.id}
            className='product__imgs__list__item__container'>
            <img
              onClick={() =>
                changeCurrentImg(item)
              }
              className={`product__imgs__list__item ${
                item.id === currentImg.id
                  ? 'product__imgs__list__item--active'
                  : ''
              } `}
              key={item.id}
              src={item.url}
              alt={`عکس ${item.id + 1}`}
              title={`عکس ${item.id + 1}`}
            />
            <div
              className={`product__imgs__list__item__cover ${
                item.id === currentImg.id
                  ? 'product__imgs__list__item__cover--active'
                  : ''
              }`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
