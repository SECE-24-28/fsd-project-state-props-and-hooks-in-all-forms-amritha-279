import React from "react";
import { Link } from "react-router-dom";
import "../css/revenue.css";
import {
  FaRupeeSign,
  FaMoneyBillWave,
  FaWallet,
  FaChartLine,
  FaSignOutAlt
} from "react-icons/fa";

const Revenue = () => {
  return (
    <div className="revenue-page">

      {/* NAVBAR */}
      <nav className="admin-navbar">
        <div className="admin-nav-logo">
          <img src={require("../images/logo.png")} alt="Natyalaya Logo" />
          Natya<span>laya</span>
        </div>
        <ul className="admin-nav-menu">
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/statistics">Statistics</Link></li>
          <li><Link to="/revenue" className="active">Revenue</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/gallerymanager">Gallery Manager</Link></li>
          <li className="logout-item">
            <button><FaSignOutAlt /> Logout</button>
          </li>
        </ul>
      </nav>

      <section className="revenue-hero">
        <h1>Revenue Analytics</h1>
        <p>
          Monitor academy earnings, fee collections,
          pending payments and overall financial growth.
        </p>
      </section>

      <section className="revenue-container">

        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">
              <FaRupeeSign />
            </div>
            <h2>₹2.5L</h2>
            <p>Monthly Revenue</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FaMoneyBillWave />
            </div>
            <h2>₹18L</h2>
            <p>Yearly Revenue</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FaWallet />
            </div>
            <h2>₹45K</h2>
            <p>Pending Payments</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FaChartLine />
            </div>
            <h2>92%</h2>
            <p>Collection Rate</p>
          </div>

        </div>

      </section>

      <section className="batch-section">

        <h2>Revenue by Batch</h2>

        <div className="batch-grid">

          <div className="batch-card">
            <h3>Morning Batch</h3>
            <span>₹45,000</span>
          </div>

          <div className="batch-card">
            <h3>Evening Batch</h3>
            <span>₹58,000</span>
          </div>

          <div className="batch-card">
            <h3>Junior Batch</h3>
            <span>₹32,000</span>
          </div>

          <div className="batch-card">
            <h3>Arangetram</h3>
            <span>₹75,000</span>
          </div>

        </div>

      </section>

      <section className="growth-section">

        <h2>Monthly Revenue Trend</h2>

        <div className="growth-card">

          <div className="bar">
            <span style={{width:"60%"}}></span>
          </div>
          <p>January - ₹1.5L</p>

          <div className="bar">
            <span style={{width:"75%"}}></span>
          </div>
          <p>February - ₹1.9L</p>

          <div className="bar">
            <span style={{width:"90%"}}></span>
          </div>
          <p>March - ₹2.3L</p>

          <div className="bar">
            <span style={{width:"100%"}}></span>
          </div>
          <p>April - ₹2.5L</p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="admin-footer">
        <div className="footer-container">
          <div className="footer-box">
            <h3>About Natyalaya</h3>
            <p>Preserving the sacred art of Bharatanatyam through tradition, discipline and excellence.</p>
          </div>
          <div className="footer-box">
            <h3>Quick Links</h3>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/classes">Class Schedules</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/register">Register</Link>
          </div>
          <div className="footer-box">
            <h3>Contact Info</h3>
            <p>📍 Chennai, Tamil Nadu</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ info@natyalaya.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Natyalaya. All Rights Reserved.</p>
          <span>"Dance is the hidden language of the soul"</span>
        </div>
      </footer>

    </div>
  );
};

export default Revenue;