import React from "react";
import { Link } from "react-router-dom";
import "../css/admin.css";
import {
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaRupeeSign,
  FaSignOutAlt
} from "react-icons/fa";

const Admin = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="admin-navbar">
        <div className="admin-nav-logo">
          <img src={require("../images/logo.png")} alt="Natyalaya Logo" />
          Natya<span>laya</span>
        </div>

        <ul className="admin-nav-menu">
          <li><Link to="/admin" className="active">Dashboard</Link></li>
          <li><Link to="/statistics">Statistics</Link></li>
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

      {/* HERO */}
      <section className="admin-hero">
        <div className="admin-hero-text">
          <h1>
            Admin <span>Dashboard</span>
          </h1>

          <p>
            Manage student registrations and academy operations
          </p>

          <div className="admin-hero-meta">
            <div className="hero-badge">
              120 Students
            </div>

            <div className="hero-badge">
              6 Active Batches
            </div>
          </div>
        </div>
      </section>

      <main className="admin-main">

        {/* STATS */}
        <section className="admin-section">
          <div className="section-header">
            <h2 className="section-title">
              Dashboard Overview
            </h2>
          </div>

          <div className="stat-grid">

            <div className="stat-card">
              <div className="stat-icon">
                <FaUsers />
              </div>

              <div className="stat-info">
                <div className="stat-num">150</div>
                <div className="stat-label">
                  Total Registrations
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaClock />
              </div>

              <div className="stat-info">
                <div className="stat-num">12</div>
                <div className="stat-label">
                  Pending Approvals
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaCheckCircle />
              </div>

              <div className="stat-info">
                <div className="stat-num">138</div>
                <div className="stat-label">
                  Approved Students
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaRupeeSign />
              </div>

              <div className="stat-info">
                <div className="stat-num">₹2.5L</div>
                <div className="stat-label">
                  Monthly Revenue
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* STUDENTS TABLE */}
        <section className="admin-section">

          <div className="section-header">
            <h2 className="section-title">
              Student Registrations
            </h2>
          </div>

          <div className="table-wrap">

            <table className="data-table">

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Batch</th>
                  <th>Experience</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Amritha</td>
                  <td>amritha@gmail.com</td>
                  <td>Intermediate</td>
                  <td>2 Years</td>

                  <td>
                    <span className="badge badge-approved">
                      Approved
                    </span>
                  </td>

                  <td className="actions-cell">
                    <button className="btn btn-view btn-sm">
                      View
                    </button>

                    <button className="btn btn-delete btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>Priya</td>
                  <td>priya@gmail.com</td>
                  <td>Junior Batch</td>
                  <td>Beginner</td>

                  <td>
                    <span className="badge badge-pending">
                      Pending
                    </span>
                  </td>

                  <td className="actions-cell">
                    <button className="btn btn-approve btn-sm">
                      Approve
                    </button>

                    <button className="btn btn-reject btn-sm">
                      Reject
                    </button>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>



      </main>

      {/* FOOTER */}
      <footer className="admin-footer">
        <div className="footer-container">
          <div className="footer-box">
            <h3>About Natyalaya</h3>
            <p>Preserving the sacred art of Bharatanatyam through traditional Guru-Shishya parampara. We nurture dancers to express devotion, discipline, and cultural excellence.</p>
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
            <h3>Customer Policy</h3>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/home#faq">FAQ</Link>
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
    </>
  );
};

export default Admin;