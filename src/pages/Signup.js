import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "aws-amplify/auth";
import Toast from "react-bootstrap/Toast";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let element = document.getElementById("root");
    element.classList.add("my-auto");

    let pageTitle = document.getElementById("pageTitle");
    pageTitle.innerHTML = "Signup";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    const namePattern = /^[a-zA-Z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!namePattern.test(firstName.trim())) {
      errors.firstName = "First Name should contain only alphabets";
    }
    if (!namePattern.test(lastName.trim())) {
      errors.lastName = "Last Name should contain only alphabets";
    }
    if (!address.trim()) {
      errors.address = "Address is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (!passwordPattern.test(password)) {
      errors.password =
        "Password should contain at least 8 characters with at least one uppercase letter, one lowercase letter, one digit, and one special symbol (!@#$%^&*)";
    }

    if (Object.keys(errors).length === 0) {
      try {
        const { userId } = await signUp({
          username: email,
          password: password,
          options: {
            userAttributes: {
              email: email,
              address: address,
              name: firstName + " " + lastName,
            },
          },
          //autoSignIn: true
        });
        console.log("Sign up successful ", userId);
        setToastMessage("Signup successful");
        setIsSuccess(true);
        setShowToast(true);
        // Redirect user to login screen after successful signup
        navigate("/login");
      } catch (error) {
        console.error("Error signing up:", error);
        setToastMessage(error.message);
        setIsSuccess(false);
        setShowToast(true);
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          color: "white",
        }}
        bg={isSuccess ? "success" : "danger"}
        text={isSuccess ? "White" : "White"}
        autohide
        delay={3000}
      >
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
      <form
        className="col-12 col-sm-10 col-md-6 mx-auto bg-light-subtle p-4 rounded border"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control p-2"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && (
            <div className="text-danger">{errors.firstName}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control p-2"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && (
            <div className="text-danger">{errors.lastName}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control p-2"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && (
            <div className="text-danger">{errors.address}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control p-2"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
