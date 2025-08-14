import React, { useState } from 'react'
import "../CSS/Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import product from '../Data/products.json'

const Navbar = ({ cartvalue,setSearchdata, wishlistvalue, serachvalue, setSerachValue, setcatagorey, setcataogoreytype, setfilterdata }) => {
    const [mode, Setmode] = useState('yellow')
    // const changebackground = () => {
    //     if (mode === 'yellow') {
    //         Setmode('green')

    //     }
    //     else {
    //         Setmode('yellow')
    //     }
    // }

    const searchange = (e) => {
        setSerachValue(e.target.value)
    }

    const handleclick = (catagorey) => {

        setcataogoreytype(catagorey)

        const catogoreyresult = product.data.filter((item, index) => {
            return item.categoryName.toLowerCase().includes(catagorey.toLowerCase())
        })
        setcatagorey(catogoreyresult)

    }

    const pricefetchdata = (min, max) => {
        const pricedata = product.data.filter((item) => {
            return item.productPrice <= parseInt(max) && item.productPrice >= parseInt(min);
        })

        setfilterdata(pricedata)
    }

    const searcheddata = (serachvalues) => {
       
        const seracheddata = product.data.filter((item, index) => {
            return item.categoryName.toLowerCase().includes(serachvalues.toLowerCase());
        })
        setSearchdata(seracheddata)
        // const pathname = seracheddata.map((item,index)=>{return item.categoryName.toLowerCase()})
        navigate('/Catagorey')
    }

    const navigate = useNavigate();
    const signuppage = () => {
        navigate('/Signup');
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: mode }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="col-md-4">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">About</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link style={{ padding: '8px' }} className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                        Catagories
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/camera" onClick={() => handleclick('camera')} >Camera</Link></li>
                                        <li><Link className="dropdown-item" to="/Laptop" onClick={() => handleclick('Laptop')}>Laptop</Link></li>
                                        <li><Link className="dropdown-item" to="/Mobile" onClick={() => handleclick('Mobile')}>Mobiles</Link></li>
                                        <li><Link className="dropdown-item" to="/men" onClick={() => handleclick('men')}>Mens</Link></li>
                                        <li><Link className="dropdown-item" to="/women" onClick={() => handleclick('women')}>Womens</Link></li>
                                    </ul>
                                </li>

                                <div className="dropdown">
                                    <button className="dropdown-toggle btn btn-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort by
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item dropdown">
                                            <a className="dropdown-toggle" href="#" id="submenuToggle">Price</a>
                                            <ul className="dropdown-menu submenu">
                                                <li><Link className="dropdown-item" onClick={() => pricefetchdata('0', '500')} to="/date">0-500</Link></li>
                                                <li><Link className="dropdown-item" onClick={() => pricefetchdata('501', '2000')} to="/date">500-2000</Link></li>
                                                <li><Link className="dropdown-item" onClick={() => pricefetchdata('2001', '50000')} to="/date">5000-50000</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                            </ul>
                        </div>

                        <div className="col-md-4">
                            <form className="d-flex" role="search" onSubmit={(e) => { e.preventDefault(); searcheddata(serachvalue); }}>
                                <input className="form-control me-2" type="search" value={serachvalue} onChange={searchange} placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit" >Search</button>
                            </form>
                        </div>

                        <div className="col-md-4 d-flex justify-content-evenly">
                            <div className="H6-NpN _3N4_BX" onClick={signuppage}>
                                <a className="_1TOQfO" title="Login" aria-haspopup="true" href="">
                                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" className="-dOa_b L_FVxe" width="24" height="24" />
                                    <span>Login</span>
                                </a>
                            </div>
                            <Link rel="stylesheet" to="/Cart"> <i className="fa-solid fa-cart-shopping"></i> {cartvalue} </Link>
                            <Link rel='stylesheet' to='/Wishlist'><i className="fa-solid fa-heart"></i>{wishlistvalue} </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
