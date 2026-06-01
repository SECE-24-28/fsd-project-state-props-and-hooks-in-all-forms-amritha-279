import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const ADMIN_EMAIL = "admin@natyalaya.com";
  const ADMIN_PASS = "Admin123";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = () => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passReg = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

    const { email, password } = formData;

    if (!emailReg.test(email))
      return alert("Enter a valid email address.");

    if (!password)
      return alert("Please enter your password.");

    if (role === "admin") {
      if (
        email !== ADMIN_EMAIL ||
        password !== ADMIN_PASS
      ) {
        return alert(
          "Invalid admin credentials."
        );
      }

      sessionStorage.setItem(
        "natyalaya_session",
        JSON.stringify({
          email,
          loggedIn: true,
          role: "admin",
        })
      );

      alert("Welcome, Admin!");

      navigate("/home");
    } else {
      if (!passReg.test(password)) {
        return alert(
          "Password must contain letters and numbers and be at least 6 characters."
        );
      }

      const stored = JSON.parse(
        localStorage.getItem("natyalaya_user")
      );

      if (
        !stored ||
        stored.email !== email
      ) {
        return alert(
          "No account found. Please register first."
        );
      }

      sessionStorage.setItem(
        "natyalaya_session",
        JSON.stringify({
          email,
          loggedIn: true,
          role: "user",
        })
      );

      alert(
        `Welcome back, ${stored.firstName}!`
      );

      navigate("/home");
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="login-card">

          <h1>Welcome Back</h1>

          <p className="sub">
            {role === "admin"
              ? "Login as Administrator"
              : "Login to your Natyalaya account"}
          </p>

          <div className="role-toggle">

            <button
              className={
                role === "user"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setRole("user")
              }
            >
              User Login
            </button>

            <button
              className={
                role === "admin"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setRole("admin")
              }
            >
              Admin Login
            </button>

          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="forgot">
            <button className="forgot-btn" onClick={() => alert("Please contact admin to reset your password.")}>
              Forgot Password?
            </button>
          </div>

          <button
            className="submit-btn"
            onClick={loginUser}
          >
            Login
          </button>

          {role === "user" && (
            <p className="signup-link">
              Don't have an account?{" "}
              <Link to="/signup">
                Sign Up
              </Link>
            </p>
          )}

        </div>
      </section>
    </>
  );
}

export default Login;