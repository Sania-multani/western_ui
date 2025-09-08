import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const RegisterPage = () => {
  return (
    <div className="register-wrapper">
      <div className="register-container">
        {/* Left Side - Fashion Image with Overlay */}
        <div className="register-left">
          <div className="overlay">
            <h1>Western Wear</h1>
            <p>Where elegance meets modern fashion.</p>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="register-right">
          <div className="form-box">
            <h2>Create Account</h2>
            <p className="subtitle">Join us and explore fashion trends.</p>

            <form>
              <div className="input-box">
                <FaUser className="icon" />
                <input type="text" placeholder="Full Name" required />
              </div>

              <div className="input-box">
                <FaEnvelope className="icon" />
                <input type="email" placeholder="Email Address" required />
              </div>

              <div className="input-box">
                <FaLock className="icon" />
                <input type="password" placeholder="Password" required />
              </div>

              <div className="input-box">
                <FaLock className="icon" />
                <input type="password" placeholder="Confirm Password" required />
              </div>

              <button type="submit" className="btn-register">
                Register
              </button>
            </form>

            <p className="login-link">
              Already have an account? <NavLink to="/login">Login</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
