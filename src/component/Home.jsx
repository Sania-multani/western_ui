import React from "react";
import { FaUser, FaSearch, FaShoppingBag, FaHeart, FaShoppingCart, FaShareAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";




  const collections = [
    {
      img: "assets/images/west33.jpg",
      title: "GIOIA NEW PICKS",
      desc: "Sed non mauris vitae erat consequat auctor eu in elit. Classaptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos ...",
      link: "#",
    },
    {
      img: "assets/images/west34.jpg",
      title: "SUMMER LOOK",
      desc: "Sed non mauris vitae erat consequat auctor eu in elit. Classaptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos ...",
      link: "#",
    },
    {
      img: "assets/images/west35.jpg",
      title: "MONDAY – FRIDAY",
      desc: "Sed non mauris vitae erat consequat auctor eu in elit. Classaptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos ...",
      link: "#",
    },
  ];



const Home = () => {
    return (

        <>
          

            <div>
                <img src="assets/images/west1.jpg" className="cstm-hero-img"></img>
            </div>

            <div className="container mt-5                                                                             ">
                <div className="row">
                    <div className="col-lg-8 col-sm-12 col-md-12">
                        <img src="assets/images/west3.jpg" className="img-fluid"></img>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-12">
                        <img src="assets/images/west4.jpg"  className="img-fluid"></img>
                    </div>
                </div>
            </div>

            <div className="container-fluid  mt-5  mb-5">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    // pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                >

                    <div className="row">
                        <div className="col-lg-3">

                            <SwiperSlide>
                                <img src="assets/images/west9.jpg" className="img-fluid"></img>
                                <div className=" cstm-prdt-sec-two mt-3 text-center">
                                    <p>Cocktail Dress</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/west8.jpg" className="img-fluid"></img>
                                <div className=" cstm-prdt-sec-two mt-3 text-center">
                                    <p>Peplum tops</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="assets/images/west9.jpg" className="img-fluid"></img>
                                <div className=" cstm-prdt-sec-two mt-3 text-center">
                                    <p>DressBerry</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/west5.jpg" className="img-fluid"></img>
                                <div className=" cstm-prdt-sec-two mt-3 text-center">
                                    <p>DressBerry</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/west9.jpg" className="img-fluid"></img>
                                <div className=" cstm-prdt-sec-two mt-3 text-center">
                                    <p>DressBerry</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/west8.jpg" className="img-fluid"></img>
                                <div className=" cstm-prdt-sec-two mt-3 text-center">
                                    <p>DressBerry</p>
                                </div>
                            </SwiperSlide>
                        </div>
                    </div>

                </Swiper>
            </div>


            <div className="img-parlx-sec">
                <div className="cstm-parlx-img-text">
                    <p>New Collection</p>
                    <p>For New Season</p>
                </div>
            </div>


            <div className="container mt-5 mb-3">
                <div className="row">
                    <div className="col-lg-4">
                        <img src="assets/images/west20.png" className="img-fluid"></img>
                        <p className="cstm-body-text">BodyCorn Dress</p>
                    </div>
                    <div className="col-lg-4">
                        <img src="assets/images/west18.png" className="img-fluid"></img>
                        <p className="cstm-body-text">Maxi Dress</p>
                    </div>

                    <div className="col-lg-4">
                        <img src="assets/images/west22.png" className="img-fluid"></img>
                        <p className="cstm-body-text">Cocktail Dress</p>
                    </div>
                </div>
            </div>


            <div className="cstm-secnd-parlx-sec">

            </div>


            <div className="container-fluid mt-5">
                <div className="row">

                    <div className="col-lg-3 ">
                        <div className="product-card-home">
                            <div className="product-img">
                                <img src="assets/images/west24.jpg" className="img-fluid" alt="product" />
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
                            <p>Rs.4000</p>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-3 ">
                        <div className="product-card-home">
                            <div className="product-img">
                                <img src="assets/images/west25.jpg" className="img-fluid" alt="product" />
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
                            <p>Rs.4000</p>
                        </div>
                        </div>
                    </div>


                    <div className="col-lg-3 ">
                        <div className="product-card-home">
                            <div className="product-img">
                                <img src="assets/images/west27.jpg" className="img-fluid" alt="product" />
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
                            <p>Rs.4000</p>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-3 ">
                        <div className="product-card-home">
                            <div className="product-img">
                                <img src="assets/images/west28.jpg" className="img-fluid" alt="product" />
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
                            <p>Rs.4000</p>
                        </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-3 ">
                        <div className="product-card-home">
                            <div className="product-img">
                                <img src="assets/images/west29.jpg" className="img-fluid" alt="product" />
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
                            <p>Rs.4000</p>
                        </div>
                        </div>
                    </div>

                      <div className="col-lg-3 ">
                        <div className="product-card-home">
                            <div className="product-img">
                                <img src="assets/images/west30.jpg" className="img-fluid" alt="product" />
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
                            <p>Rs.4000</p>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-3 ">
                        <div className="product-card-home">
                            <div className="product-img">
                                <img src="assets/images/west31.jpg" className="img-fluid" alt="product" />
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
                            <p>Rs.4000</p>
                        </div>
                        </div>
                    </div>
                  
                    <div className="col-lg-3 ">
                        <div className="product-card-home">
                            <div className="product-img">
                                <img src="assets/images/west32.jpg" className="img-fluid" alt="product" />
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
                            <p>Rs.4000</p>
                        </div>
                        </div>
                    </div>

                </div>

            </div>

         <section className="custom-testimonials-section py-5 mt-5">
        <div className="container">
          <h2 className="custom-section-title text-center mb-4">
            What Our Customers Say
          </h2>
          <div className="row g-4">
            {/* Testimonial 1 */}
            <div className="col-md-4">
              <div className="custom-testimonial-card p-4 shadow rounded bg-white h-100">
                <p className="custom-testimonial-text">
                  "The vegetables were super fresh and delivered right on time.
                  Loved the packaging and quality!  The vegetables were super fresh and delivered right on time.
                  Loved the packaging and quality!"
                </p>
                <div className="custom-testimonial-rating text-warning mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <h6 className="mb-0"> Priya Sharma</h6>
                <small className="text-muted">Delhi</small>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="col-md-4">
              <div className="custom-testimonial-card p-4 shadow rounded bg-white h-100">
                <p className="custom-testimonial-text">
                  "Amazing service! I always get my groceries faster than
                  expected. Highly recommend this website. The vegetables were super fresh and delivered right on time.
                  Loved the packaging and quality!"
                </p>
                <div className="custom-testimonial-rating text-warning mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h6 className="mb-0"> Rohit Verma</h6>
                <small className="text-muted">Mumbai</small>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="col-md-4">
              <div className="custom-testimonial-card p-4 shadow rounded bg-white h-100">
                <p className="custom-testimonial-text">
                  "Great offers during festivals! Saved money and got everything
                  I needed for my family in one place. The vegetables were super fresh and delivered right on time.
                  Loved the packaging and quality!"
                </p>
                <div className="custom-testimonial-rating text-warning mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
                <h6 className="mb-0"> Anjali Gupta</h6>
                <small className="text-muted">Bangalore</small>
              </div>
            </div>
          </div>
        </div>
      </section>

       <div className="collection-section container">
      <div className="row">
        {collections.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="collection-card">
              <img src={item.img} alt={item.title} className="img-fluid" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href={item.link} className="look-link">
                GET THE LOOK
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>



  
          
        </>
    );
};

export default Home;
