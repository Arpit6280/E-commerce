import React, { useContext} from 'react';
import '../CSS/Product.css'
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className='products'>
      <h3>{product.name}</h3>
    <Link to='/detail' state={{product:product}}> <img src={product.image} alt={product.name}  className='image' /> </Link>
     <section className='section'>
      <h5>Price: ${product.price}</h5>
      <button onClick={() => addToCart(product)} className='addtoCart'>Add to Cart</button>
      </section>
    </div>
    
  );
};

export default Product;

