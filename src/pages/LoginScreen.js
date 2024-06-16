import { NavLink } from "react-router-dom";
import { signIn } from "aws-amplify/auth";
import { fetchAuthSession } from "aws-amplify/auth";
import Toast from "react-bootstrap/Toast";
import "./LoginScreen.css";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserStateContext } from "../context/UserStateContextProvider";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { isSignedIn, setIsSignedIn } = useContext(UserStateContext);
  const navigate = useNavigate();
  useEffect(() => {
    let element = document.getElementById("root");
    element.classList.add("my-auto");

    let pageTitle = document.getElementById("pageTitle");
    pageTitle.innerHTML = "Login";
  }, []);

  // useEffect(() => {
  //   if (isSignedIn === true) {
  //     currentSession();
  //   }
  // }, [isSignedIn]);
  const handleSignIn = async (e) => {
    // e.preventDefault();
    try {
      await signIn({
        username: email,
        password: password,
      });
      setToastMessage("Signed in successfully");
      await currentSession();
      // Redirect or navigate to the desired page upon successful sign-in
      setIsSuccess(true);
      setShowToast(true);
      setIsSignedIn(true);

      setTimeout(async () => {
        await currentSession();
        navigate("/menu");
      }, 1000); // Adjust the delay as needed
    } catch (error) {
      console.error("Error signing in:", error);
      setToastMessage(error.message);
      setIsSuccess(true);
      setShowToast(true);
      // Handle sign-in error, display error message to user
    }
  };
  async function currentSession() {
    try {
      const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
      console.log(
        "accessToken => " + accessToken + " " + "idToken => " + idToken
      );
    } catch (err) {
      console.log(err);
    }
  }
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
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
          onClick={handleSignIn}
        >
          Sign in
        </button>
        <div className=" mb-3 ms-1">
          <label>
            Don't have account ? <NavLink to="/signup">Signup</NavLink>
          </label>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
