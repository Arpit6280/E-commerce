import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import { DetailsContext } from '.';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      
        <Route path='/E-commerce' element={<ProductList/> }> </Route>
        <Route path='/cart' element={<Cart/>}> </Route>
        <Route path='/detail' element={<Detail  />}></Route>
        
  </Routes>
  </BrowserRouter>
  <Footer/>
    </div>
  );
}

export default App;
