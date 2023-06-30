import React, { useEffect, useState,useContext } from 'react';
import Product from './Product';
// import MockData from '../data/products.json'
import axios from 'axios';
import '../CSS/ProductList.css'
import { Link,useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping} from '@fortawesome/free-solid-svg-icons'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search,setSearch]=useState('');
  useEffect(()=>{
    axios.get('http://localhost:3000/products').then(res=>{
     setProducts(res.data)
     console.log(res);
  }).catch(err=> console.log(err))
     },[])

  return (
    <div>
      <div className='productList'>
      <h2 className='h2'>Ecommerce Products</h2>
      <input className='search' type="text" placeholder='Search...' name="" id="" onChange={(e)=>{
       setSearch(e.target.value)
     }} />
     </div>
      <div className='conatiner'>
      {
        products.filter((product)=>{
            if(search==='')
            return product
            else if(product.name.toLowerCase().includes(search.toLowerCase()))
            return product;
        }).map((product) => (
        <Product key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
};

export default ProductList;

