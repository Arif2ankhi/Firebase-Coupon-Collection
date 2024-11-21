import React, { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase/firebase.config";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Pre-fill email if passed from login page
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please provide a valid email address.");
      return;
    }

    try {
      // Send password reset email
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");

      // Log out the user
      await auth.signOut();

      // Redirect to Gmail
      setTimeout(() => {
        window.location.href = "https://mail.google.com/";
      }, 1000); 
    } catch (error) {
      console.error("Password reset error:", error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cyan-100">
      <div className="card bg-base-100 w-full max-w-sm p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Reset Password</h1>
        <form onSubmit={handlePasswordReset}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full font-bold">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

