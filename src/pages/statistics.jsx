import React from "react";
import { Link } from "react-router-dom";
import "../css/statistics.css";
import {
  FaUsers,
  FaUserCheck,
  FaClock,
  FaRupeeSign,
  FaChild,
  FaAward,
  FaSignOutAlt
} from "react-icons/fa";

const Statistics = () => {

  const stats = [
    { title: "Total Students", value: "150", icon: <FaUsers /> },
    { title: "Approved Students", value: "138", icon: <FaUserCheck /> },
    { title: "Pending Approvals", value: "12", icon: <FaClock /> },
    { title: "Monthly Revenue", value: "₹2.5L", icon: <FaRupeeSign /> }
  ];

  return (
    <div className="statistics-page">

      {/* NAVBAR */}
      <nav className="admin-navbar">
        <div className="admin-nav-logo">
          <img src={require("../images/logo.png")} alt="Natyalaya Logo" />
          Natya<span>laya</span>
        </div>

        <ul className="admin-nav-menu">
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/statistics" className="active">Statistics</Link></li>
          <li><Link to="/revenue">Revenue</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/gallerymanager">Gallery Manager</Link></li>
          <li className="logout-item">
            <button>
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <section className="statistics-hero">

        <h1>Academy Statistics</h1>

        <p>
          Monitor registrations, revenue, student growth,
          and batch performance.
        </p>

      </section>

      <section className="statistics-container">

        <div className="stats-grid">

          {stats.map((item, index) => (

            <div className="stat-card" key={index}>

              <div className="stat-icon">
                {item.icon}
              </div>

              <h2>{item.value}</h2>

              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </section>

      <section className="batch-section">

        <h2>Batch Statistics</h2>

        <div className="batch-grid">

          <div className="batch-card">
            <FaUsers />
            <h3>Morning Batch</h3>
            <span>35 Students</span>
          </div>

          <div className="batch-card">
            <FaUsers />
            <h3>Evening Batch</h3>
            <span>42 Students</span>
          </div>

          <div className="batch-card">
            <FaChild />
            <h3>Junior Batch</h3>
            <span>28 Students</span>
          </div>

          <div className="batch-card">
            <FaAward />
            <h3>Arangetram</h3>
            <span>15 Students</span>
          </div>

        </div>

      </section>

      <section className="growth-section">

        <h2>Registration Overview</h2>

        <div className="growth-card">

          <div className="bar">
            <span style={{width:"80%"}}></span>
          </div>

          <p>January - 80 Registrations</p>

          <div className="bar">
            <span style={{width:"90%"}}></span>
          </div>

          <p>February - 90 Registrations</p>

          <div className="bar">
            <span style={{width:"100%"}}></span>
          </div>

          <p>March - 100 Registrations</p>

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

export default Statistics;