import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';


const Checkout = () => {
    const [totalproductprice, setproductprice] = useState(0)
    const [paymentMethod, setPaymentMethod] = useState(""); 
    
    const location = useLocation();
    const { allCartData, itemcount } = location.state || { allCartData: [], itemcount: {} };

    useEffect(() => {
        const totalPrice = allCartData.reduce(
            (acc, item) => acc + (itemcount[item.productId] || 1) * item.productPrice,
            0
        );
        setproductprice(totalPrice);
    }, [allCartData, itemcount]);

    const successfunction = ()=>{
        alert('payment succesfull')
    }

    return (
        <div className="container">
            <div className="py-5 text-center">

            </div>
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                    </h4>

                    {allCartData.map((item, index) => (
                        <ul className="list-group mb-3" key={item.productId || index}>
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">{item.productName}</h6>
                                    <small className="text-muted">{item.productShortName}</small>
                                </div>
                                <span className="text-muted">
                                    {item.productPrice} x {itemcount[item.productId] || 1} = ₹
                                    {item.productPrice * (itemcount[item.productId] || 1)}
                                </span>
                            </li>
                        </ul>

                    ))}

                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total </span>
                        <strong>{totalproductprice}</strong>
                    </li>

                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" novalidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="name" required/>
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder=""  required />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Mobile no">Mobile no</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="Mobileno" placeholder="Mobile no" />
                                <div className="invalid-feedback" style={{ width: "100%" }}>
                                    Mobile no is required.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                        </div>

                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">Country</label>
                                <select className="custom-select d-block w-100" id="country" required>
                                    <option value="">India</option>
                                    <option>United States</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">State</label>
                                <select className="custom-select d-block w-100" id="state" required>
                                    <option value="">Delhi</option>
                                    <option>California</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" />
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>

                        </div>

                        <hr className="mb-4" />
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="same-address" />
                            <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                        </div>

                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" />
                            <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                        </div>

                        <hr className="mb-4" />
                       
                            <h4 className="mb-3">Payment Method</h4>
                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input
                                        id="credit"
                                        name="paymentMethod"
                                        type="radio"
                                        className="custom-control-input"
                                        value="credit"
                                        checked={paymentMethod === "credit"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label className="custom-control-label" htmlhtmlFor="credit">
                                        Credit Card
                                    </label>
                                </div>

                                <div className="custom-control custom-radio">
                                    <input
                                        id="debit"
                                        name="paymentMethod"
                                        type="radio"
                                        className="custom-control-input"
                                        value="debit"
                                        checked={paymentMethod === "debit"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label className="custom-control-label" htmlhtmlFor="debit">
                                        Debit Card
                                    </label>
                                </div>

                                <div className="custom-control custom-radio">
                                    <input
                                        id="upi"
                                        name="paymentMethod"
                                        type="radio"
                                        className="custom-control-input"
                                        value="upi"
                                        checked={paymentMethod === "upi"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label className="custom-control-label" htmlhtmlFor="upi">
                                        UPI
                                    </label>
                                </div>

                                <div className="custom-control custom-radio">
                                    <input
                                        id="cod"
                                        name="paymentMethod"
                                        type="radio"
                                        className="custom-control-input"
                                        value="cod"
                                        checked={paymentMethod === "cod"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label className="custom-control-label" htmlhtmlFor="cod">
                                        Cash on Delivery (COD)
                                    </label>
                                </div>
                            </div>

                         
                            {(paymentMethod === "credit" || paymentMethod === "debit") && (
                                <div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlhtmlFor="cc-name">Name on Card</label>
                                            <input type="text" className="form-control" id="cc-name" placeholder="" />
                                            <small className="text-muted">Full name as displayed on card</small>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlhtmlFor="cc-number">Card Number</label>
                                            <input type="text" className="form-control" id="cc-number" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <label htmlhtmlFor="cc-expiration">Expiration</label>
                                            <input type="text" className="form-control" id="cc-expiration" placeholder="MM/YY" />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlhtmlFor="cc-cvv">CVV</label>
                                            <input type="text" className="form-control" id="cc-cvv" placeholder="123" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* UPI Fields */}
                            {paymentMethod === "upi" && (
                                <div>
                                    <label htmlhtmlFor="upi-id">UPI ID</label>
                                    <input type="text" className="form-control" id="upi-id" placeholder="example@upi" />
                                </div>
                            )}

                            {/* COD Message */}
                            {paymentMethod === "cod" && (
                                <div className="alert alert-info mt-3">
                                    <strong>Note:</strong> Pay cash when you receive the order.
                                </div>
                            )}

                        

                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg" onClick={successfunction}  type="submit">{totalproductprice} pay</button>
                    </form>
                </div>
            </div>



        </div>
    )
}

export default Checkout;


