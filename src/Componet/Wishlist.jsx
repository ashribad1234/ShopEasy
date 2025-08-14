import React from 'react'

const Wishlist = ({ wishlistdata,setwishlistdata,setwishlistvalue }) => {

  const handleremovewishlist = (id) => {
   const wishlistsdata= wishlistdata.filter((value) => value.productId != id)
   setwishlistdata(wishlistsdata)
   setwishlistvalue(wishlistsdata.length)
  }

  return (
    <div>
      {wishlistdata.map((item, index) => (

        <div className='container-fluid' key={item.productId}>

          <div className="card" id='cartdetails' key={index}>


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
                <span className="h5 mb-0">{item.productPrice}</span>
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
              <div className="wishlist" onClick={() => handleremovewishlist(item.productId)}><i className="fa-solid fa-heart"></i></div>
            </div>
            
          </div>
        </div>

      )
      )}
    </div>
  )
}

export default Wishlist
