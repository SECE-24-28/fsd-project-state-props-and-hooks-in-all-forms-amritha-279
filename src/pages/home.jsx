import "../css/home.css";
import { Link } from "react-router-dom";
import React from "react";

function Home() {
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
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/guru">Guru</Link></li>
    <li><Link to="/gallery">Gallery</Link></li>
    <li><Link to="/classes">Class Schedules</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/register">Register</Link></li>
    <li><Link to="/login" className="logout-btn">Logout</Link></li>
  </ul>
</nav>
      <section className="hero">
        <div className="hero-text">
          <h3>BHARATANATYAM ACADEMY</h3>

          <h1>
            Grace.
            <br />
            Rhythm.
            <br />
            Tradition.
          </h1>

          <p>
            Natyalaya is a Bharatanatyam academy management platform designed
            to preserve classical tradition through modern technology. Manage
            students, dance batches, events, performances, and learning
            journeys with elegance.
          </p>

          <div className="hero-buttons">
            <Link to="/classes" className="btn primary-btn">
              Explore Academy
            </Link>

            <Link to="/gallery" className="btn secondary-btn">
              View Performances
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="circle-bg"></div>

          <img
            src={require('../images/homepage.jpg')}
            alt="bharatanatyam dancer"
          />
        </div>
      </section>

      <section className="features">
        <div className="section-title">
          <h2>Our Features</h2>
          <p>
            Blending classical heritage with smart digital management
          </p>
        </div>

        <div className="feature-container">
          <div className="feature-card">
            <div className="icon">🏅</div>
            <h3>Expert Gurus</h3>
            <p>
              Learn from renowned masters with decades of experience in
              classical Bharatanatyam tradition.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">🪔</div>
            <h3>Traditional Training</h3>
            <p>
              Authentic Guru-Shishya parampara methodology preserving ancient
              dance wisdom.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">🎭</div>
            <h3>Cultural Excellence</h3>
            <p>
              Immerse yourself in the rich heritage and spiritual essence of
              South Indian culture.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-image">
          <img
            src={require('../images/homepage2.jpg')}
            alt="dance academy"
          />
        </div>

        <div className="about-text">
          <h2>About Natyalaya</h2>

          <p>
            Rooted in Indian culture and artistic excellence, Natyalaya
            celebrates the beauty of Bharatanatyam while simplifying academy
            management through technology.
          </p>

          <p>
            From student enrollment to performance tracking, our system
            supports every aspect of classical dance education with a refined
            and elegant experience.
          </p>

          <a href="/about" className="btn primary-btn">
            Learn More
          </a>
        </div>
      </section>

      <section className="cta-section">
        <h2>Begin Your Journey Today</h2>

        <p>
          Step into the world of Bharatanatyam and discover the dancer within
          you. Join our academy and become part of a tradition that spans
          centuries.
        </p>

        <Link to="/register" className="cta-btn">
          Join the Academy
        </Link>
      </section>

      <section className="footer-section">
        <div className="footer-container">
          <div className="footer-box">
            <h3>About Natyalaya</h3>
            <p>
              Preserving the sacred art of Bharatanatyam through traditional
              Guru-Shishya parampara. We nurture dancers to express devotion,
              discipline, and cultural excellence.
            </p>
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
      </section>
    </>
  );
}

export default Home;