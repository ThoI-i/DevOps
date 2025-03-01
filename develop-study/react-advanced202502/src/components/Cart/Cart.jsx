import React, { useContext } from 'react';
import styles from './Cart.module.scss';
import CartModal from './CartModal';
import CartContext from '../../context/cart-context';
import CartItem from './CartItem';

// const DUMMY_CART = [
//   {
//     id: 'c1',
//     name: '스시',
//     amount: 2,
//     price: 46000,
//   },
//   {
//     id: 'c2',
//     name: '띠드버거',
//     amount: 1,
//     price: 12000,
//   },
// ];
const Cart = () => {
  const {
    'cart-items': cartItemStyle,
    total,
    actions,
    'button--alt': btnAlt,
    button,
  } = styles;

  const { closeModal, cartItems, totalPrice } = useContext(CartContext);

  return (
    <CartModal onClose={closeModal}>
      {/* 주문 내역 */}
      <ul className={cartItemStyle}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cart={cartItem} />
        ))}
      </ul>
      <div className={total}>
        <span>주문 총액</span>
        <span>{ new Intl.NumberFormat('ko-KR').format(totalPrice) }원</span>
      </div>
      <div className={actions}>
        <button
          className={btnAlt}
          onClick={closeModal}
        >
          닫기
        </button>
        <button className={button}>주문</button>
      </div>
    </CartModal>
  );
};

export default Cart;