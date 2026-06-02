import React from "react";
import { Link } from "react-router-dom";
import "../css/gallery.css";

function Gallery() {
  return (
    <>
      <nav>
        <div className="logo">
          <img
            src={require("../images/logo.png")}
            alt="Natyalaya Logo"
          />
          Natya<span>laya</span>
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/guru">Guru</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/classes">Class Schedules</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login" className="logout-btn">Logout</Link></li>
        </ul>
      </nav>

      <section className="gallery-hero">
        <h4>NATYALAYA GALLERY</h4>

        <h1>Moments of Grace & Tradition</h1>

        <p>
          Explore performances, arangetrams, workshops,
          cultural celebrations and unforgettable moments
          from our Bharatanatyam journey.
        </p>
      </section>

      <section className="gallery-section">
        <div className="gallery-grid">

          <div className="gallery-card">
            <img src={require("../images/gallery1.jpg")} alt="" />
            <div className="gallery-content">
              <h3>Classical Performance</h3>
              <p>
                Students showcasing the elegance and discipline
                of Bharatanatyam on stage.
              </p>
            </div>
          </div>

          <div className="gallery-card">
            <img src={require("../images/gallery2.jpg")} alt="" />
            <div className="gallery-content">
              <h3>Arangetram Ceremony</h3>
              <p>
                A proud milestone celebrating years of dedication
                and learning.
              </p>
            </div>
          </div>

          <div className="gallery-card">
            <img src={require("../images/gallery3.jpg")} alt="" />
            <div className="gallery-content">
              <h3>Cultural Festival</h3>
              <p>
                Celebrating Indian heritage through music,
                rhythm and dance.
              </p>
            </div>
          </div>

          <div className="gallery-card">
            <img src={require("../images/gallery4.jpg")} alt="" />
            <div className="gallery-content">
              <h3>Temple Recital</h3>
              <p>
                Traditional performances inspired by devotion
                and spirituality.
              </p>
            </div>
          </div>

          <div className="gallery-card">
            <img src={require("../images/gallery5.jpg")} alt="" />
            <div className="gallery-content">
              <h3>Dance Workshop</h3>
              <p>
                Learning advanced techniques under experienced
                Bharatanatyam gurus.
              </p>
            </div>
          </div>

          <div className="gallery-card">
            <img src={require("../images/gallery6.jpg")} alt="" />
            <div className="gallery-content">
              <h3>Annual Celebration</h3>
              <p>
                Students and mentors coming together to celebrate
                artistic excellence.
              </p>
            </div>
          </div>

          <div className="gallery-card">
            <img src={require("../images/gallery7.jpg")} alt="" />
            <div className="gallery-content">
              <h3>Group Performance</h3>
              <p>
                Synchronised expressions and movements creating
                visual storytelling.
              </p>
            </div>
          </div>

          <div className="gallery-card">
            <img src={require("../images/gallery8.png")} alt="" />
            <div className="gallery-content">
              <h3>Traditional Costume</h3>
              <p>
                Capturing the beauty of Bharatanatyam attire
                and ornaments.
              </p>
            </div>
          </div>

          <div className="gallery-card">
            <img src={require("../images/gallery9.jpg")} alt="" />
            <div className="gallery-content">
              <h3>Student Showcase</h3>
              <p>
                Young dancers expressing confidence, grace and
                cultural pride.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="quote-section">
        <h2>Every Pose Tells A Story</h2>

        <p>
          Through rhythm, expression and devotion,
          Bharatanatyam transforms movement into art and
          keeps our cultural heritage alive for future
          generations.
        </p>
      </section>

      <section className="footer-section">
        <div className="footer-container">

          <div className="footer-box">
            <h3>About Natyalaya</h3>
            <p>
              Preserving the sacred art of Bharatanatyam
              through tradition, discipline and excellence.
            </p>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/classes">Class Schedules</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/register">Register</Link>
          </div>

          <div className="footer-box">
            <h3>Contact</h3>

            <p>📍 Chennai, Tamil Nadu</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ info@natyalaya.com</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Natyalaya | Bharatanatyam Academy Management System
        </div>
      </section>
    </>
  );
}

export default Gallery;