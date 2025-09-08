import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* Left Side - Image */}
        <div className="login-side">
          <h2>Western Wear</h2>
          <p>Style that speaks for you.</p>
        </div>

        {/* Right Side - Form */}
        <div className="login-content">
          <h3 className="mb-4 text-center">Welcome Back</h3>
          <form>
            <div className="form-group mb-3">
              <label>Username</label>
              <div className="input-box">
                <FaUser className="icon" />
                <input type="text" placeholder="Enter your username" />
              </div>
            </div>

            <div className="form-group mb-3">
              <label>Password</label>
              <div className="input-box">
                <FaLock className="icon" />
                <input type="password" placeholder="Enter your password" />
              </div>
            </div>

          <Link to="/profile">
            <button type="submit" className="btn-submit">
              Login
            </button>
            </Link>
            <p className="signup-text">
              Don’t have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;






