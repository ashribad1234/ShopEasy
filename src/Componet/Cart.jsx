import React, { useState, useEffect } from 'react'
import '../CSS/Cart.css'
import { useNavigate } from 'react-router-dom'



const Cart = ({ allCartData, setallCartData, setCartValue, }) => {
  const [itemcount, setitemcount] = useState({})
  const [prodprice, setproduprice] = useState();

  const navigate = useNavigate();


  const handleadd = (id) => { //1
    setitemcount((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
    // suppose i have empty usestae initially , so when i cliked here in my prev is empty 
    // ... prev, here is empty then suppose it collect id 1 then it will check prev[1] exist 
    //if not then undefined and add 0 with 1 so ...prev update to {1:1}, same if 
    //we clik for other id then suppose id is 2 the ...prev {2,1}

  };

  const handleremove = (id) => {
    setitemcount((prev) => ({ ...prev, [id]: prev[id] > 0 ? prev[id] - 1 : 0, }));
  };
  const handledelte = (id) => {//2
    const cartdata = allCartData.filter((item) => item.productId !== id)
    setallCartData(cartdata);
    setCartValue(cartdata.length)
  }

  const handlecheckout = () => {
    debugger
    navigate("/Checkout", { state: { allCartData, itemcount } });
  }

  return (
    <div>
      {allCartData.length === 0 ? 'no items in your cart' : allCartData.map((item, index) => (
        <div className='container-fluid' key={item.productId}>
          <div className="card" id='cartdetails' >

            {item.img.map((List, index) => (
              index === 0 ?
                <div className="img col-md-5">
                  <img src={List.image === "" || null ? List.image = 'https://m.media-amazon.com/images/I/31aPzW9atKL._SX300_SY300_QL70_FMwebp_.jpg' : List.image} className="card-img-top" alt="Product Image" />
                </div>
                :''
            ))}


            <div className="card-body col-md-5">
              <h5 className="card-title">{item?.productName}</h5>
              <p className="card-text">{item.productDescription?.length >= 80 ? item.productDescription.substring(0, 80) : item.productDescription}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="h5 mb-0"><i className="fa-solid fa-indian-rupee-sign"></i> {item.productPrice * (itemcount[item.productId] || 1)}</span>
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

            <div className="d-flex flex-column justify-content-around align-items-center col-md-2" >
              <div><button className="btn btn-primary btn-sm" onClick={handlecheckout}> Check out</button></div>

              <div className="functionliyt d-flex" style={{ gap: "5px" }}>
                <div className="incremnet" onClick={() => handleremove(item.productId)} style={{ width: "40px" }}><button>-</button></div>
                <div className="val">{itemcount[item.productId] || 1}</div>
                <div className="decrement" onClick={() => handleadd(item.productId)} style={{ width: "40px" }}><button>+</button></div>
              </div>

              <div className="delete" onClick={() => handledelte(item.productId)}><i className="fa-solid fa-trash"></i></div>

            </div>

          </div>
        </div>
      )

      )}
    </div>
  )

}

export default Cart;



