
import React from 'react'

const Contact = () => {
  return (
    <>
     
         <div className="cstm-shop-bg">
        <div className='cstm-text-shop'>
          <p className='cstm-hom-text'>Contact</p>
        </div>
      </div>





        <div className='container  mt-5 mb-5'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d85326.576651073!2d77.092979!3d28.6723666!3m2!1i1024!2i768!4f13.1!2m1!1sKD-3%2C%20Third%20Floor%2C%20near%20Kohat%20Enclave%20metro%20station%2C%20Delhi%20-%20110034!5e1!3m2!1sen!2sin!4v1756961717440!5m2!1sen!2sin" width="1300" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>



       <div  className='container'>
     <section className="contact-section mt-0">
      <div className="contact-container">
        {/* Left: Form */}

         <div className="contact-image">
          <img src="assets/images/west40.jpg" alt="Shoes" />
        </div>


        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Comment" rows="5" required></textarea>

            <div className="checkbox-row">
              <input type="checkbox" id="saveInfo" />
              <label htmlFor="saveInfo">
                Save my name, email, and website in this browser.
              </label>
            </div>

            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </div>

       
      </div>
    </section>
    </div>


   

    </>
  )
}

export default Contact