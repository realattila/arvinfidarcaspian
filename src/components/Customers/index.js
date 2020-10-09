import React from 'react';
import assets from '../../assets/index';
import './Customers.scss';

const Customers = ({ className, TitleClassName }) => {
  const renderItem = () => {
    return assets.customers.map((item, index) => (
      <div className='customers__item' key={index}>
        <img
          className='customers__item__img'
          src={item}
          alt={`customer-${index + 1}`}
        />
      </div>
    ));
  };
  return (
    <div className={` customers ${className}`}>
      <h2 className={`customers__title ${TitleClassName}`}>
        برخی از مشتریان ما
      </h2>
      <div className='row'>{renderItem()}</div>
    </div>
  );
};

export default Customers;
