import React from 'react'
import '../CSS/Cart.css'
import { Link } from 'react-router-dom'


const Filterdata = ({ filtertobj }) => {

  return (
    <div className='container-fluid'>
      <div className="row">
        {filtertobj.map((List, index) => (
          <div className="col-md-3" key={List?.productId} id='products' >
            <div className="card">
              <img src={List.productImageUrl === "" || null ? List.productImageUrl = 'https://m.media-amazon.com/images/I/31aPzW9atKL._SX300_SY300_QL70_FMwebp_.jpg' : List.productImageUrl} className="card-img-top" alt="Product Image" />
              <div className="card-body">
                <h5 className="card-title">{List?.productName}</h5>
                <p className="card-text">{List.productDescription?.length >= 20 ? List.productDescription.substring(0, 20) : List.productDescription}</p>
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
                <button className="btn btn-primary btn-sm">Add to Cart</button>
                <Link href="/" title='wishlist'><i className="fa-solid fa-heart"></i></Link>
              </div>
            </div>
          </div>
        ))}

     
      </div>
    </div>
  )

}

export default Filterdata;
