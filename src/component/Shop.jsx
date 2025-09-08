import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FaHeart, FaSearch, FaShareAlt, FaShoppingCart } from 'react-icons/fa';



const Shop = () => {

    const products = [
        {
            id: 1,
            name: 'Gansta Wayframe Full Frame',
            color: 'Black',
            price: 40,
            image: 'assets/images/west11.jpg',

        },

        {
            id: 2,
            name: 'Aviator Transparent Sunglasses',
            color: 'For Men',
            price: 100,
            image: 'assets/images/west12.jpg',

        },


        {
            id: 3,
            name: 'Black Sunglasses For Men',
            color: 'For Men',
            price: 200,
            image: 'assets/images/west13.jpg',

        },

        {
            id: 4,
            name: 'Gansta Wayframe Full Frame',
            color: 'Black',
            price: 40,
            image: 'assets/images/west14.jpg',

        },
        {
            id: 5,
            name: 'Gansta Wayframe Full Frame',
            color: 'Black',
            price: 40,
            image: 'assets/images/west15.jpg',

        },
        {
            id: 6,
            name: 'Gansta Wayframe Full Frame',
            color: 'Black',
            price: 40,
            image: 'assets/images/west11.jpg',

        },

        {
            id: 7,
            name: 'Gansta Wayframe Full Frame',
            color: 'Black',
            price: 40,
            image: 'assets/images/west11.jpg',

        },

        {
            id: 8,
            name: 'Gansta Wayframe Full Frame',
            color: 'Black',
            price: 40,
            image: 'assets/images/west11.jpg',

        },

        {
            id: 9,
            name: 'Gansta Wayframe Full Frame',
            color: 'Black',
            price: 40,
            image: 'assets/images/west11.jpg',

        },

        {
            id: 10,
            name: 'Gansta Wayframe Full Frame',
            color: 'Black',
            price: 40,
            image: 'assets/images/west11.jpg',

        },

        {
            id: 11,
            name: 'Gansta Wayframe Full Frame',
            color: 'Black',
            price: 40,
            image: 'assets/images/west11.jpg',

        },

        {
            id: 12,
            name: 'Gansta Wayframe Full Frame',
            color: 'Black',
            price: 40,
            image: 'assets/images/west11.jpg',

        },


        {
            id: 13,
            name: 'Gansta Wayframe Full Frame',
            color: 'Black',
            price: 40,
            image: 'assets/images/west11.jpg',

        },

        {
            id: 14,
            name: 'Gansta Wayframe Full Frame',
            color: 'Black',
            price: 40,
            image: 'assets/images/west11.jpg',

        },

        {
            id: 15,
            name: 'Gansta Wayframe Full Frame',
            color: 'Black',
            price: 40,
            image: 'assets/images/west11.jpg',

        },

    ]

    const colors = ['#000000', '#0057D9', '#A52A2A', '#FFD2A6', '#808080', '#7AC47F'];
    const num = ['3XL', '4XL', '5XL', 'L', 'M', 'S', 'XL', 'XXL']
    const fabrc = ['Cotton', 'Denim', 'Muslin', 'Stretch ', 'Velvet']

    const [hovered, setHovered] = useState(null);


    return (
        <>
            <div className="cstm-shop-bg">
                  <div  className='cstm-text-shop'>
                    <p  className='cstm-hom-text'>Shop</p>
                  </div>
            </div>

            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-lg-3 '>
                        <div className='custom-shop-sidebar'>
                            <div>
                                <div className='custom-shop-catge'>
                                    <p>Shop By Categories</p>
                                </div>
                                <span></span>
                            </div>
                            <div className='custom-bord'></div>
                            <div className='custom-chec-inpu'>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Our Store&nbsp;(20)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'> Accessories&nbsp;(12)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Fashion & Style&nbsp;(13)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Infants&nbsp;(10)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Sports Wear&nbsp;(10)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Travelling&nbsp;(20)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Watches&nbsp;(20)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Western Wear&nbsp;(20)</label>
                                </div>
                            </div>
                        </div>

                        <div className='custom-shop-sidebar mt-4'>
                            <div>
                                <div className='custom-shop-catge'>
                                    <p>Brands</p>
                                </div>
                                <span></span>
                            </div>
                            <div className='custom-bord'></div>
                            <div className='custom-chec-inpu'>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Creative&nbsp;(20)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'> Design&nbsp;(12)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Gallery&nbsp;(13)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Golden&nbsp;(10)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Highlight&nbsp;(10)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Modern&nbsp;(20)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Nature&nbsp;(20)</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Sparker&nbsp;(20)</label>
                                </div>
                            </div>
                        </div>

                        <div className='custom-shop-sidebar mt-4'>
                            <div>
                                <div className='custom-shop-catge'>
                                    <p>Highlight</p>
                                </div>
                                <span></span>
                            </div>
                            <div className='custom-bord'></div>
                            <div className='custom-chec-inpu'>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>All Products</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'> Best Seller</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>New Arrivals</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Sale</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>Hot Items</label>
                                </div>
                            </div>
                        </div>


                        <div className='custom-shop-sidebar mt-4'>
                            <div>
                                <div className='custom-shop-catge'>
                                    <p>Filter By Color</p>
                                </div>
                                <span></span>
                            </div>
                            <div className='custom-bord'></div>
                            <div className='custom-check-inpu'>
                                <div className="circle-container">
                                    {colors.map((color, index) => (
                                        <div
                                            key={index}
                                            className="color-circle"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className='custom-shop-sidebar mt-4'>
                            <div>
                                <div className='custom-shop-catge'>
                                    <p>Filter By Size</p>
                                </div>
                                <span></span>
                            </div>
                            <div className='custom-bord'></div>
                            <div className='custom-check-inpu'>
                                <div className="circle-container">
                                    {num.map((nu, indx) => (
                                        <div>
                                            <div
                                                key={indx}
                                                className="custom-filter-size">
                                                <p className='custom-size'>{nu}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>




                        <div className='custom-shop-sidebar mt-4'>
                            <div>
                                <div className='custom-shop-catge'>
                                    <p>Filter By Fabric</p>
                                </div>
                                <span></span>
                            </div>
                            <div className='custom-bord'></div>
                            <div className='custom-check-inpu'>
                                <div className="circle-container">
                                    {fabrc.map((nu, indx) => (
                                        <div>
                                            <div
                                                key={indx}
                                                className="custom-filter-fabrc">
                                                <p className='custom-size'>{nu}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className='custom-shop-sidebar mt-5'>
                            <div>
                                <div className='custom-shop-catge'>
                                    <p>Price Filter</p>
                                </div>
                                <span></span>
                            </div>
                            <div className='custom-bord'></div>
                            <div className='custom-chec-inpu'>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>All</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'> 0-100</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>100-200</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>200-300</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>300-400</label>
                                </div>
                                <div className='checkbox-item'>
                                    <input type="checkbox"></input>
                                    <label className='ms-2  custom-text-inpt'>400-500</label>
                                </div>
                            </div>
                        </div>

                    </div>















                    <div className='col-lg-9 mb-5'>

                        <div className=''>

                            <div className='row'>
                                {products.map((item, indx) => {
                                    return (



                                        <div className="col-lg-3" key={item.id}>
                                            <div className="product-card-home">
                                                <div className="product-img">
                                                    <img src={item.image} className="img-fluid" alt={item.name} />
                                                    <span className="badge discount">20% OFF</span>
                                                    <div className="product-icons">
                                                        <FaSearch />
                                                        <FaShoppingCart />
                                                        <FaHeart />
                                                        <FaShareAlt />
                                                    </div>
                                                </div>
                                                <div className=" cstm-prdt-sec">
                                                    <p>DressBerry</p>
                                                    <p>Sheath Dress with Jacket</p>
                                                    <p>Rs.4100</p>
                                                </div>
                                            </div>

                                        </div>
                                        //   <div
                                        //      className="col-lg-4 col-sm-6 mb-5"
                                        //      key={item.id}
                                        //      onMouseEnter={() => setHovered(indx)}
                                        //      onMouseLeave={() => setHovered(null)}
                                        //   >
                                        //      <div  className='custom-img-prod'>
                                        //      <img
                                        //         src={hovered === indx ? item.hoverImage : item.image}
                                        //         className="img-fluid"
                                        //         alt={item.name}
                                        //      />

                                        //      <div  className='custom-cart-icon-prod'> 
                                        //      {hovered === indx && (
                                        //         <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '30px', color: 'black', }} />
                                        //      )}
                                        //      </div>
                                        //      </div>

                                        //      <p className="custom-prodt-sec mt-3">{item.name}</p>
                                        //      <p className="custom-black-colr">{item.color}</p>

                                        //      <div style={{ color: 'orange', textAlign: 'center' }}>
                                        //         <FontAwesomeIcon icon={fullStar} />
                                        //         <FontAwesomeIcon icon={fullStar} />
                                        //         <FontAwesomeIcon icon={fullStar} />
                                        //         <FontAwesomeIcon icon={fullStar} />
                                        //         <FontAwesomeIcon icon={faStarHalfAlt} />
                                        //      </div>

                                        //      <p className="custom-rus">Rs.{item.price}</p>
                                        //   </div>
                                    );
                                })}
                            </div>



                        </div>

                    </div>


                </div>
            </div>







        </>
    )
}

export default Shop