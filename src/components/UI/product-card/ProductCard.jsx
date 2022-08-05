import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { _id, title, img, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        _id,
        title,
        img,
        price,
      })
    );
  };

  return (
    <div className='product__item' id={_id}>
      <div className='product__img'>
        <Link to={`/foods/${_id}`}>
          <img
            src={img}
            alt='product-img'
            className='w-50'
            height='80px'
            width='auto'
          />
        </Link>
      </div>

      <div className='product__content'>
        <h5>
          <Link to={`/foods/${_id}`}>{title}</Link>
        </h5>
        <div>
          <div className='product__price'>Rp. {price}</div>
          <div>
            <button className='addTOCart__btn' onClick={addToCart}>
              Tambah ke keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
