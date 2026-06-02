import React, { useState } from "react";
import "../css/messages.css";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaReply,
  FaCheckCircle,
  FaClock,
  FaSignOutAlt
} from "react-icons/fa";

const Messages = () => {

  const initialMessages = [
    {
      id: 1,
      name: "Anu",
      email: "anu@gmail.com",
      phone: "1234567890",
      message: "Hi mam, waiting to join Bharatanatyam classes.",
      status: "Responded",
      date: "04/01/2026",
      reply: "Happy to hear that! We look forward to welcoming you."
    },
    {
      id: 2,
      name: "Tanvi",
      email: "tanvi@gmail.com",
      phone: "1234567890",
      message: "My daughter is very interested in learning dance.",
      status: "Unread",
      date: "03/01/2026"
    },
    {
      id: 3,
      name: "Harini",
      email: "harini@gmail.com",
      phone: "9876543210",
      message: "Can I join the Arangetram Preparation batch?",
      status: "Unread",
      date: "02/01/2026"
    }
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleReply = (id) => {
    setReplyingTo(id);
    setReplyText("");
  };

  const handleSendReply = (id) => {
    if (!replyText.trim()) return;
    setMessages(messages.map((msg) =>
      msg.id === id
        ? { ...msg, reply: replyText, status: "Responded" }
        : msg
    ));
    setReplyingTo(null);
    setReplyText("");
  };

  return (
    <div className="messages-page">

      {/* NAVBAR */}
      <nav className="admin-navbar">
        <div className="admin-nav-logo">
          <img src={require("../images/logo.png")} alt="Natyalaya Logo" />
          Natya<span>laya</span>
        </div>
        <ul className="admin-nav-menu">
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/statistics">Statistics</Link></li>
          <li><Link to="/revenue">Revenue</Link></li>
          <li><Link to="/messages" className="active">Messages</Link></li>
          <li><Link to="/gallerymanager">Gallery Manager</Link></li>
          <li className="logout-item">
            <button><FaSignOutAlt /> Logout</button>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="messages-hero">
        <h1>Student Messages</h1>
        <p>
          Manage enquiries, registrations and communication
          with students and parents.
        </p>
      </section>

      {/* Stats */}
      <section className="message-stats">

        <div className="message-stat-card">
          <FaEnvelope />
          <h2>26</h2>
          <p>Total Messages</p>
        </div>

        <div className="message-stat-card">
          <FaClock />
          <h2>8</h2>
          <p>Unread</p>
        </div>

        <div className="message-stat-card">
          <FaCheckCircle />
          <h2>18</h2>
          <p>Responded</p>
        </div>

      </section>

      {/* Messages List */}
      <section className="messages-container">

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-card ${
              msg.status === "Responded"
                ? "responded-card"
                : "unread-card"
            }`}
          >
            <div className="message-header">

              <div>
                <h3>{msg.name}</h3>
                <p>
                  {msg.email} • {msg.phone}
                </p>
              </div>

              <div className="message-status">
                <span
                  className={
                    msg.status === "Responded"
                      ? "status-responded"
                      : "status-unread"
                  }
                >
                  {msg.status}
                </span>

                <small>{msg.date}</small>
              </div>

            </div>

            <div className="message-content">
              {msg.message}
            </div>

            {msg.reply ? (
              <div className="admin-reply">
                <h4>Admin Reply</h4>
                <p>{msg.reply}</p>
                <small>Replied on: {msg.date}</small>
              </div>
            ) : replyingTo === msg.id ? (
              <div className="reply-box">
                <textarea
                  className="reply-textarea"
                  placeholder="Type your reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows={3}
                />
                <div className="reply-box-actions">
                  <button className="reply-btn" onClick={() => handleSendReply(msg.id)}>
                    <FaReply /> Send Reply
                  </button>
                  <button className="cancel-btn" onClick={() => setReplyingTo(null)}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button className="reply-btn" onClick={() => handleReply(msg.id)}>
                <FaReply />
                Reply
              </button>
            )}

          </div>
        ))}

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

export default Messages;