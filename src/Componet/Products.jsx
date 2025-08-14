import React, { useEffect, useState } from 'react'
import ProdData from '../Data/products.json'
import { Link } from 'react-router-dom'
import "../CSS/product.css"


const Products = ({setCartValue,setproductval,setwishlistvalue,setwishlistid,serachvalue}) => {
const Data= ProdData.data

const [cartid,setcartid]=useState([]);
const [wishlistid,setwitshlistid]=useState([]);





const handleaddtocart =(id)=>{ 
    
    if(cartid.includes(id))
    {
       alert("item exist in your cart")
    }
    else
    {
        setCartValue((prev) => prev + 1);
        setproductval(id)
    }
    setcartid( [...cartid, id]);
    }
    
    const handlewishlistclick = (id) => {

        if (wishlistid === id) {
            alert("item exist in your wish list box ")
        }
        else {
            setwishlistvalue((prev) => prev + 1);
            setwishlistid(id)
        }

        setwitshlistid(id)


    };
  
  const filtervalue = Data.filter((item) => {
    return item.categoryName.toLowerCase().includes(serachvalue.toLowerCase())
   })
    return (
        <div className='container-fluid'>
            <div className="row">
           { filtervalue.map ( (List,index)=>(
                <div className="col-md-3" key={List?.productId} id='products' >
                    <div className="card">
                       <div id="carouselExampleIndicators" className="carousel slide">
                        
                           <div className="carousel-indicators">
                               {List.img?.map((item, index) => (
                                   <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to= {`${index}`} className={` ${index === 0 ? 'active' : ''}  btns`} aria-current="true" aria-label="Slide 1"></button>
                               ))}
                           </div>
                        
                           <div className="carousel-inner">
                               {List.img?.map((item, index) => (
                                  
                                       <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} `}>
                                           <img src={item.image === "" || null ? item.image = 'https://m.media-amazon.com/images/I/31aPzW9atKL._SX300_SY300_QL70_FMwebp_.jpg' : item.image} className="card-img-top" alt="Product Image" />
                                       </div>
                               ))}
                           </div>

                       </div>

                        <div className="card-body">
                            <h5 className="card-title">{List?.productName}</h5>
                            <p className="card-text">{List.productDescription?.length >=20 ? List.productDescription.substring(0,20):List.productDescription}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="h5 mb-0"> <i className="fa-solid fa-indian-rupee-sign"></i>{List.productPrice}</span>
                                <div>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                    <small className="text-muted">(4.5)</small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card-footer d-flex justify-content-between bg-light">
                            <button className="btn btn-primary btn-sm" onClick={()=> handleaddtocart(List.productId)}>Add to Cart</button>
                            <Link href="/" title='wishlist' onClick={()=> handlewishlistclick(List.productId)}><i className="fa-regular fa-heart"></i></Link>
                        </div>
                    </div>
                </div>
            ))}
               
        
            </div>

        </div>
        );
    


}

export default Products;




 // const fetchData = async () => {
    //     let url = "https://dummyjson.com/products";

    //     try {
    //         const response = await fetch(url);
    //         const jsonData = await response.json();
    //         Setdata(jsonData);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };
   
    // useEffect(() => {
    //     fetchData();
    // }, [])