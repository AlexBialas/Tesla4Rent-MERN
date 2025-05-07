import React from "react";
import "../styles/Register.scss";
import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilImage: null,
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value, files } = <e className="target"></e>;
  };

  return (
    <div className="register">
      <div className="register_content">
        <form>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={formData.email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            required
          />
          <input
            id="Image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            required
          />
          <label htmlFor="Image">
            <img src="/assets/addImage.png" alt="add profile photo" />
            <p>Upload Profile Photo</p>
          </label>
          <button type="submit">REGISTER</button>
        </form>
        <a href="/login">Already have an account? Log In Here</a>
      </div>
    </div>
  );
};

export default RegisterPage;
