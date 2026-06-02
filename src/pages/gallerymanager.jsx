import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/gallerymanager.css";
import {
  FaImages,
  FaVideo,
  FaLandmark,
  FaPlus,
  FaEdit,
  FaTrash,
  FaSignOutAlt,
} from "react-icons/fa";

const GalleryManager = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editData, setEditData] = useState({ title: "", category: "" });

  const [galleryItems, setGalleryItems] = useState([
    {
      id: 1,
      title: "Classical Performance",
      category: "Stage Performances",
      image: require("../images/gallery1.jpg"),
    },
    {
      id: 2,
      title: "Arangetram Ceremony",
      category: "Arangetram",
      image: require("../images/gallery2.jpg"),
    },
    {
      id: 3,
      title: "Cultural Festival",
      category: "Temple Programs",
      image: require("../images/gallery3.jpg"),
    },
    {
      id: 4,
      title: "Temple Recital",
      category: "Temple Programs",
      image: require("../images/gallery4.jpg"),
    },
    {
      id: 5,
      title: "Dance Workshop",
      category: "Classroom Practice",
      image: require("../images/gallery5.jpg"),
    },
    {
      id: 6,
      title: "Annual Celebration",
      category: "Stage Performances",
      image: require("../images/gallery6.jpg"),
    },
    {
      id: 7,
      title: "Group Performance",
      category: "Stage Performances",
      image: require("../images/gallery7.jpg"),
    },
    {
      id: 8,
      title: "Traditional Costume",
      category: "Classroom Practice",
      image: require("../images/gallery8.png"),
    },
    {
      id: 9,
      title: "Student Showcase",
      category: "Classroom Practice",
      image: require("../images/gallery9.jpg"),
    },
  ]);

  const handleDelete = (id) => {
    setGalleryItems(galleryItems.filter((item) => item.id !== id));
  };

  const handleEditClick = (item) => {
    setEditingItem(item.id);
    setEditData({ title: item.title, category: item.category });
  };

  const handleEditSave = (id) => {
    if (!editData.title.trim()) return;
    setGalleryItems(galleryItems.map((item) =>
      item.id === id ? { ...item, ...editData } : item
    ));
    setEditingItem(null);
  };

  return (
    <div className="gallery-page">
      {/* Navbar */}
      <nav className="admin-navbar">
        <div className="admin-nav-logo">
          <img src={require("../images/logo.png")} alt="Natyalaya Logo" />
          Natya<span>laya</span>
        </div>
        <ul className="admin-nav-menu">
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/statistics">Statistics</Link></li>
          <li><Link to="/revenue">Revenue</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/gallerymanager" className="active">Gallery Manager</Link></li>
          <li className="logout-item">
            <button><FaSignOutAlt /> Logout</button>
          </li>
        </ul>
      </nav>

      {/* Hero */}

      <section className="gallery-hero">
        <h1>Gallery Manager</h1>
        <p>
          Manage academy photos, videos, arangetrams,
          temple performances and cultural events.
        </p>
      </section>

      {/* Stats */}

      <section className="gallery-stats">
        <div className="gallery-stat-card">
          <FaImages />
          <h2>12</h2>
          <p>Total Photos</p>
        </div>

        <div className="gallery-stat-card">
          <FaVideo />
          <h2>5</h2>
          <p>Videos</p>
        </div>

        <div className="gallery-stat-card">
          <FaLandmark />
          <h2>3</h2>
          <p>Temple Events</p>
        </div>
      </section>

      {/* Add Button */}

      <div className="gallery-btn-section">
        <button
          className="add-gallery-btn"
          onClick={() => setShowForm(!showForm)}
        >
          <FaPlus />
          Add New Item
        </button>
      </div>

      {/* FORM */}

      {showForm && (
        <section className="gallery-form-wrapper">

          <div className="gallery-form-header">
            <h2>Add New Gallery Item</h2>
          </div>

          <form className="gallery-form">

            <div className="form-row">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="e.g. Navarathri Celebration 2026"
                />
              </div>

              <div className="form-group">
                <label>Category</label>

                <select>
                  <option>Classroom Practice</option>
                  <option>Stage Performances</option>
                  <option>Arangetram</option>
                  <option>Temple Programs</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>

              <textarea
                rows="4"
                placeholder="Brief details about the event..."
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Media Type</label>

                <select>
                  <option>Image</option>
                  <option>Video</option>
                </select>
              </div>

              <div className="form-group">
                <label>Upload File</label>
                <input type="file" />
              </div>
            </div>

            <button className="publish-btn">
              Publish Item
            </button>

          </form>
        </section>
      )}

      {/* Gallery Items */}

      <section className="gallery-grid">

        {galleryItems.map((item) => (
          <div className="gallery-card" key={item.id}>

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">

              <span className="gallery-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>

              {editingItem === item.id ? (
                <div className="gallery-edit-form">
                  <input
                    className="gallery-edit-input"
                    value={editData.title}
                    onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                    placeholder="Title"
                  />
                  <select
                    className="gallery-edit-input"
                    value={editData.category}
                    onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                  >
                    <option>Classroom Practice</option>
                    <option>Stage Performances</option>
                    <option>Arangetram</option>
                    <option>Temple Programs</option>
                  </select>
                  <div className="gallery-actions">
                    <button className="gallery-save-btn" onClick={() => handleEditSave(item.id)}>Save</button>
                    <button onClick={() => setEditingItem(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="gallery-actions">
                  <button onClick={() => handleEditClick(item)}>
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              )}

            </div>

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

export default GalleryManager;