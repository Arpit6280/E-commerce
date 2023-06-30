import React,{useContext} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import '../CSS/Details.css'

function Detail(props) {
  const { addToCart } = useContext(CartContext);
const {product}=useLocation().state;
  return (
    <div className='detailsContainer'>
      <div>
      <img src={product.image} className='detailsImage'/>
      </div>
       <div className='description'>
        <h4>{product.name}</h4>
           <p>
            Description: <br /> {product.description}
           </p>
           <h5>Price: ${product.price}</h5>
           <Link to='/'> <button className='backButton'>Back</button> </Link> 
           <button onClick={() => addToCart(product)} className='addtoCart'>Add to Cart</button>
       </div>
    </div>
  )
}

export default Detail