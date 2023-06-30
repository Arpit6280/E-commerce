import React,{useState,useContext} from 'react'
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../contexts/CartContext';
import '../CSS/Navbar.css'

function Navbar() {
    const { totalItems } = useContext(CartContext);
    const [search,setSearch]=useState('');
  return (
    <div>
     <nav className='nav'>
        <ul>
         <Link to='/'><li>Home</li> </Link> 
        </ul>
        <ul className='rightUl'>
        
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Sign Up</li>
          <li>Sign In</li>
          <Link to='/cart'>  <li className='cart'>  <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> 
          <div className='quantity'>{totalItems}</div>
          </li> </Link>
          {/* <input className='search' type="text" placeholder='Search...' name="" id="" onChange={(e)=>{
       setSearch(e.target.value)
     }} /> */}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar