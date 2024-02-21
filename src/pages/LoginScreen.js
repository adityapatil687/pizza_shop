import { NavLink } from "react-router-dom";
import "./LoginScreen.css";
import { useEffect } from "react";
const LoginScreen = () => {
  useEffect(() => {
    let element = document.getElementById("root");
    element.classList.add("my-auto");

    let pageTitle = document.getElementById("pageTitle");
    pageTitle.innerHTML = "Login";
  }, []);
  return (
    <>
      <div
        className="form-signin bg-light-subtle border text-center rounded"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          className="mb-4"
          src={require("../assets/logo/user.png")}
          alt="logo"
          width="110"
          height="120"
        />

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        {/* <!-- <div className="checkbox mb-3 text-start ms-2">
            <label>
              <input type="checkbox" value="show-password"> Show Password
            </label>
          </div> --> */}

        <div className=" mb-3 text-start ms-1">
          <label>
            <NavLink className="link-success" to="/forgotpassword">
              Forgot Password ?
            </NavLink>
          </label>
        </div>
        <button
          className="w-100 btn btn-lg btn-success mb-3"
          id="signInBtn"
          type="submit"
        >
          Sign in
        </button>
        <div className=" mb-3 ms-1">
          <label>
            Don't have account ? <NavLink to="/Signup">Signup</NavLink>
          </label>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
