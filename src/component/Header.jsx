import React, { useState } from 'react'
import { FaUser, FaSearch, FaShoppingBag, FaHeart, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Header = () => {

       const [isSearchOpen, setIsSearchOpen] = useState(false);

        const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    quantity: 2,
    image: "assets/images/west24.jpg", // Replace with real image
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    quantity: 1,
    image: "assets/images/west25.jpg", // Replace with real image
  },
];


    const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );


    return (
        <>
            <header className="header">
                <div className="top-bar-nav">
                    <div className="marquee">
                        <span>Contact us 24/7: +44 330 022 5700 • </span>  <span> Express delivery and free returns within 28 days </span>• Terms & Conditions
                    </div>
                </div>


                {/* Middle bar */}
                <div className="middle-bar">
                    {/* <div className="left">
                        <span>English</span>
                        <FaUser className="icon" />
                    </div> */}

                    <img src="assets/images/west10.png" className="cstm-logo" />
                    <div className="right">
                        {/* <FaSearch className="icon" /> */}
                         <FaSearch size={25} onClick={() => setIsSearchOpen(true)}  className='mt-1' />
                        <div className="cart">
                            {/* <FaShoppingBag className="icon" /> */}
                             <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">   <FaShoppingBag  size={25}/></button>

                        </div>
                        <div className="wishlist">
                           <NavLink to="/login"  className="cstm-link-user"><FaUser size={25} /></NavLink>

                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="nav-bar">
                    <ul>
                        <NavLink to="/" className="cstm-link-sec"> <li>HOME</li></NavLink>
                        <NavLink to="/shop" className="cstm-link-sec"> <li>SHOP</li></NavLink>
                        <NavLink to="/about" className="cstm-link-sec"><li>ABOUT</li></NavLink>
                        <NavLink to="/blog" className="cstm-link-sec" ><li>BLOG</li></NavLink>
                        <NavLink to="/contact" className="cstm-link-sec"><li>CONTACT US</li></NavLink>
                    </ul>
                </nav>
            </header>

            {isSearchOpen && (
        <div className="search-overlay">
          <input type="text" className="search-input" placeholder="Search..." />
          <FaTimes className="close-icon" onClick={() => setIsSearchOpen(false)} />
        </div>
      )}



        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Cart Page</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   {/* Sample Cart Items */}
            {cartItems.map((item) => (
            <div className="cart-item d-flex mb-3" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-img me-3"
              />
              <div className="flex-grow-1">
                <h6 className="mb-1">{item.name}</h6>
                <p className="mb-0 text-muted">
                  Qty: {item.quantity} × Rs.{item.price.toFixed(2)}
                </p>
                <p className="mb-0 fw-bold">
                  Total: Rs.{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button className="cstm-cros-btn">
                x
              </button>
            </div>
          ))}

          <hr />
          <h5 className="text-end">Grand Total: Rs.{total.toFixed(2)}</h5>
         <NavLink to="/cart">
          <button className="btn cstm-check-cart w-100 p-2 mt-3">Checkout</button>
          </NavLink>
  </div>
</div>
        </>
    )
}

export default Header