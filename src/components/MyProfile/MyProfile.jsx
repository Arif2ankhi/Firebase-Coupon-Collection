import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="my-profile">
      {/* Cover Section */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-emerald-900 py-10 text-center">
        <h1 className="text-4xl font-bold animate__animated animate__flip animate__fast animate__animate__infinite">Welcome to Your Profile</h1>
      </div>

      {/* Profile Card */}
      <div className="mt-10 flex justify-center">
        <div className="card bg-white shadow-md rounded-lg p-6 text-center">
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-24 h-24 rounded-full mx-auto"
            />
          )}
          <h2 className="text-xl font-semibold mt-4">
            {user?.displayName || "No Name"}
          </h2>
          <p className="text-gray-600">{user?.email || "No Email Available"}</p>
          <button
            onClick={() => navigate("/updateProfile")}
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
