import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../CSS/Cart.css'

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, adjustQuantity } = useContext(CartContext);

  const calculateTotalPrice = (items) => {
    return (items.reduce((total, item) => total + item.product.price * item.quantity, 0)).toFixed(2);
  };
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Quantitiy</th>
              <th>+ / -</th>
              <th>Remove</th>
              <th>Price</th>
             
            </tr>
          </thead>
          {cartItems.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td><img src={item.product.image} alt={item.product.name}className='image_C' /></td>
              <td>{item.quantity}</td>
             <td><button onClick={() => adjustQuantity(item.product, item.quantity - 1)}>-</button>
              <button onClick={() => adjustQuantity(item.product, item.quantity + 1)}>+</button> </td> 
             
             <td><button onClick={() => removeFromCart(item.product)}>Remove</button>  </td> 
             <td>${item.product.price} </td> 
            </tr>
          ))}
          
          </table>
          <p className='totalPrice'>Total Amount to be paid: ${calculateTotalPrice(cartItems)}</p>
        
        </>
      )}
    </div>
  );
};

export default Cart;
