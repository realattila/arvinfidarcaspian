import React from 'react';
import { Link } from 'react-router-dom';

// import styles
import './ProductsItem.scss';

// import components

const ProductsItem = ({
  items,
  orderShow = true,
  onClickOrder = () => false,
}) => {
  if (items.length > 0) {
    return items.map((item) => (
      <Link
        to={`/product/${item.id}`}
        className='products__item'
        key={item.id}>
        <div className='products__item__container'>
          <div className='products__item__img__box'>
            <img
              className='products__item__img'
              src={item.images[0].url}
              alt={`item-${item.id}`}
            />
          </div>
          <div className='products__item__content'>
            <span className='products__item__content__span'>
              {item.title}
            </span>
            {!!orderShow && (
              <button
                className='products__item__content__btn'
                onClick={(e) => {
                  e.preventDefault();
                  onClickOrder(item);
                }}>
                سفارش دهید
              </button>
            )}
          </div>
        </div>
      </Link>
    ));
  } else {
    return false;
  }
};

export default ProductsItem;
