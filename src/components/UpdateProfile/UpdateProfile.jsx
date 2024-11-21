import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!user) {
            alert('User is not authenticated!');
            return;
        }

        try {
            await updateProfile(user, { displayName: name, photoURL });
            navigate('/myProfile'); // Navigate back to MyProfile
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Try again.');
        }
    };

    return (
        <div className="update-profile">
            {/* Form Section */}
            <div className="mt-10 flex justify-center">
                <form
                    onSubmit={handleUpdate}
                    className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold mb-4">Update Your Profile</h2>

                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border rounded px-3 py-2 mb-4"
                        placeholder="Enter your name"
                    />

                    <label className="block text-sm font-medium mb-2" htmlFor="photoURL">
                        Photo URL
                    </label>
                    <input
                        id="photoURL"
                        type="text"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="w-full border rounded px-3 py-2 mb-4"
                        placeholder="Enter your photo URL"
                    />

                    <button
                        type="submit"
                        className="mt-6 w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Update Information
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
