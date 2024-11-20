import React, { useContext, useRef, useState } from "react";
import auth from "../../firebase/firebase.config";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {

   const {signInUser} =useContext(AuthContext) 

  const [success, setSuccess] = useState(false);
  const [logInError, setLogInError] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // signIn User 
    signInUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log('Error', error.message);

      })
    


    setSuccess(false);
    setLogInError("");

    // login in user with email and password

    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      console.log("User logged in:", user);
      toast.success("Logged in successfully!");
      navigate("/"); // Navigate to Home page
    })
    .catch((error) => {
      console.error("Login error:", error.message);
      setLogInError(error.message);
      toast.error("Login failed. Please check your credentials.");
    });
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //     if(!result.user.emailVerified) {
    //         setLogInError(" Please verify your email address.");
    //     }
    //     else{
    //         setSuccess(true);
    //     }
        
    //   })
    

    //   .catch((error) => {
    //     console.log("Error", error.message);
    //     setLogInError(error.message);
    //   });
  };


 const  handleForgetPassword = () => {
    console.log("get me email address.", emailRef.current.value);
    const email = emailRef.current.value;
    if(!email){
        console.log('Please provide a valid email address');
    }
    else{
        sendPasswordResetEmail(auth, email)
        .then(() => {
            // alert('Password reset email sent successfully. Please check your inbox.');
            toast.error('Password reset email sent successfully. Please check your inbox.');

        })
    }
  };


//  };

  return (
  
    <div className="card bg-cyan-200 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1  className="text-5xl ml-4 font-bold text-cyan-800 text-center">Login now!</h1>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label onClick={handleForgetPassword} className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <div className="btn-secondary space-x-8">
              <button className="btn btn-primary text-2xl font-bold">Login</button>
              <button className="btn btn-secondary text-2xl font-bold">Google</button>
              </div>
            </div>

          </form>
          
          {success && <p className="text-green-600">Logged in successfully!</p>}
          {logInError && <p className="text-red-600">{logInError}</p>}

          <p className="ml-4 mb-4 font-bold">
            New to this website ? please<Link className="m-2 text-red-500 font-bold" to="/register">Register</Link>
          </p>

        </div>
      </div>

    

    </div>
  );
};

export default Login;