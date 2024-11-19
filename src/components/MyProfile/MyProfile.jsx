import React from 'react';

const MyProfile = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
  {/* <img src={user.photoURL} alt={user.name} className="w-24 h-24 mx-auto rounded-full" /> */}

  <div className="card-body text-center">
    {/* <h3 className="font-bold">{user.name}</h3> */}
    {/* <p>{user.email}</p> */}
    <button className="btn btn-secondary">Update Info</button>
  </div>
</div>

    );
};

export default MyProfile;