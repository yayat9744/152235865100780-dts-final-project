import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title='Cart'>
      <CommonSection title='Keranjang Kamu' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {cartItems.length === 0 ? (
                <h5 className='text-center'>Keranjang kamu kosong</h5>
              ) : (
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th>Gambar</th>
                      <th>Nama Makanan</th>
                      <th>Harga</th>
                      <th>Jumlah</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className='mt-4'>
                <h6>
                  Subtotal: Rp.
                  <span className='cart__subtotal'>{totalAmount}</span>
                </h6>
                <p>Pajak dan pengiriman akan dihitung saat checkout</p>
                <div className='cart__page-btn'>
                  <button className='addTOCart__btn__sm me-4'>
                    <Link to='/foods'>Lanjut Belanja</Link>
                  </button>
                  <button className='addTOCart__btn__sm'>
                    <Link to='/checkout'>Proses Chekout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className='text-center cart__img-box'>
        <img src={image01} alt='' />
      </td>
      <td className='text-center'>{title}</td>
      <td className='text-center'>Rp.{price}</td>
      <td className='text-center'>{quantity}px</td>
      <td className='text-center cart__item-del'>
        <i className='ri-delete-bin-line' onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
