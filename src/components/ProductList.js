import React, { useEffect, useState,useContext } from 'react';
import Product from './Product';
import MockData from '../products.json'
import axios from 'axios';
import '../CSS/ProductList.css'


const ProductList = () => {
  const [products, setProducts] = useState(MockData);
  const [search,setSearch]=useState('');
  console.log(products);
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

