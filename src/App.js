import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Jsondaata from '../src/Data/products.json';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Componet/Navbar';
import Products from './Componet/Products';
import Cart from './Componet/Cart';
import Wishlist from './Componet/Wishlist';
import Catagorey from './Componet/Catagorey';
import Filterdata from './Componet/Filterdata';
import Checkout from './Componet/Checkout';
import Signup from './Componet/Signup';
import Login from './Componet/Login';
import Searchdata from './Componet/Searchdata';



function App() {
  const [productID, setproductID] = useState('');
  const [cartvalue, setCartValue] = useState(0);
  const [allCartData, setallCartData] = useState([]);
  const [wishlistvalue, setwishlistvalue] = useState(0);
  const [wishlistid, setwishlistid] = useState(0);
  const [wishlistdata, setwishlistdata] = useState([]);
  const [serachvalue, setSerachValue] = useState("");
  const [catagorey, setcatagorey] = useState([]);
  const [catagoretype, setcataogoreytype] = useState()
  const [filtertdata, setfilterdata] = useState([]);
  const [searchdata,setSearchdata]= useState([]);




  let productlist = Jsondaata.data;
  useEffect(() => {

    const filteredobject = productlist.filter((value) =>
      value.productId == wishlistid
    )
    setwishlistdata([...wishlistdata, ...filteredobject])
  }, [wishlistid])
  useEffect(() => {
    const filteredobject = productlist.filter((value) =>
      value.productId == productID
    )
    setallCartData([...allCartData, ...filteredobject])
  }, [productID])


  return (
    <>
      <Router>
        <Navbar setSearchdata={setSearchdata} setfilterdata={setfilterdata} setcataogoreytype={setcataogoreytype} setcatagorey={setcatagorey} serachvalue={serachvalue} setSerachValue={setSerachValue} cartvalue={cartvalue} wishlistvalue={wishlistvalue} />
        <Routes>
          <Route path='/Cart' element={<Cart wishlistvalue={wishlistvalue} setwishlistvalue={setwishlistvalue} allCartData={allCartData} setallCartData={setallCartData} setCartValue={setCartValue} />} />
          <Route path='/Home' element={<Products serachvalue={serachvalue} setwishlistid={setwishlistid} setwishlistvalue={setwishlistvalue} setproductval={setproductID} setCartValue={setCartValue} />} />
          <Route path='/' element={<Products  serachvalue={serachvalue} setwishlistid={setwishlistid} setwishlistvalue={setwishlistvalue} setproductval={setproductID} setCartValue={setCartValue} />} />
          <Route path='/Wishlist' element={<Wishlist setwishlistdata={setwishlistdata} wishlistdata={wishlistdata} setwishlistvalue={setwishlistvalue} />} />
          <Route path={`/${catagoretype}`} element={<Catagorey catagorey={catagorey} />} />
          <Route path='/date' element={<Filterdata filtertobj={filtertdata}/>} />
          <Route path='/Checkout' element={<Checkout  />} />
          <Route path='/Signup' element={<Signup  />} />
          <Route path='/Login' element={<Login  />} />
          <Route path={'/Catagorey'} element={<Searchdata searchitem={searchdata}  />} />
        </Routes>
      </Router>

    </>


  );
}

export default App;
