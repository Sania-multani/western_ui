import React from 'react'
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
   <>
     <footer className="custom-footer-section border-top">
      <div className="custom-footer-container">
        {/* Brand Column */}
        <div className="custom-footer-brand-col">
          {/* <h1 className="custom-footer-logo">Runway Luxe</h1> */}
          <img src="assets/images/west10.png " className="img-fluid mb-5"></img>
          <p className="custom-footer-tagline">
            Capturing elegance in every drop of fragrance.
          </p>
          <div className="custom-footer-socials">
            <a href="#" className="custom-footer-social-link">
              <FiInstagram className="custom-social-icons" />
            </a>
            <a href="#" className="custom-footer-social-link">
              <FiTwitter className="custom-social-icons" />
            </a>
            <a href="#" className="custom-footer-social-link">
              <FiFacebook className="custom-social-icons" />
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="custom-footer-links-col">
          <h4 className="custom-footer-heading">Quick Links</h4>
          <ul className="custom-footer-links">
            <li><a href="#" className="custom-footer-link"> Collection</a></li>
            <li><a href="#" className="custom-footer-link">About </a></li>
            <li><a href="#" className="custom-footer-link">Western Journal</a></li>
            <li><a href="#" className="custom-footer-link">FAQ</a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="custom-footer-links-col">
          <h4 className="custom-footer-heading">Support</h4>
          <ul className="custom-footer-links">
            <li><a href="#" className="custom-footer-link">Contact Us</a></li>
            <li><a href="#" className="custom-footer-link">Delivery</a></li>
            <li><a href="#" className="custom-footer-link">Returns & Exchanges</a></li>
            <li><a href="#" className="custom-footer-link">Fragrance Care</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="custom-footer-contact-col">
          <h4 className="custom-footer-heading">Contact</h4>
          <ul className="custom-footer-contact-info">
            <li className="custom-footer-contact-item">
              <IoLocationOutline className="custom-footer-contact-icon" />
              <span>456 Essence Street, Aroma City</span>
            </li>
            <li className="custom-footer-contact-item">
              <IoMailOutline className="custom-footer-contact-icon" />
              <span>support@aromaluxe.com</span>
            </li>
            <li className="custom-footer-contact-item">
              <IoCallOutline className="custom-footer-contact-icon" />
              <span>+1 (555) 987-6543</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="custom-footer-copyright">
        <p>© {new Date().getFullYear()} @design by Axepert Exhibits Pvt. Ltd.</p>
        <div className="custom-footer-legal">
          <a href="#" className="custom-footer-legal-link">Privacy Policy</a>
          <a href="#" className="custom-footer-legal-link">Terms of Service</a>
        </div>
      </div>
    </footer>
   </>
  )
}

export default Footer