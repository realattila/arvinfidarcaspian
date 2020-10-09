import React from 'react';



// import styles
import './ProductImages.scss';

// import components
import ReactModal from 'react-modal';

const ProductImages = ({ imgs = [], changeCurrentImg, currentImg }) => {


  if (imgs.length === 0) return false;
  // return
  return (
    <div className="product__imgs">
      <div className="product__imgs__current__container">
        <img
        className="product__imgs__current"
          src={currentImg.url}
          alt={`عکس ${currentImg.id + 1}`}
          title={`عکس ${currentImg.id + 1}`}
        />
      </div>
      <div className="product__imgs__list"> 
        {imgs.map(item => (
          <img onClick={() => changeCurrentImg(item)}
          className="product__imgs__list__item" key={item.id} src={item.url} alt={`عکس ${item.id + 1}`} title={`عکس ${item.id + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
