import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Brands = () => {
  const brands = useLoaderData(); // Get the brands data
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Filter brands based on the search query
  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-11/12 mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-center text-blue-800 my-6">
        All Brands
      </h1>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search brands..."
          className="w-1/2 p-3 border-2 border-blue-300 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Brands Cards */}
      <div className="space-y-6">
        {filteredBrands.map((brand) => (
          <div
            key={brand._id}
            className="flex items-center p-6 bg-white shadow-lg rounded-lg border border-gray-200"
          >
            {/* Brand Logo */}
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-24 h-24 rounded-lg mr-6"
            />

            {/* Brand Details */}
            <div className="flex-grow">
              <div className="flex items-center text-xl font-semibold text-gray-700">
                <span className="text-yellow-500 mr-2">★</span>
                {brand.rating.toFixed(1)}
              </div>
              <h2 className="text-2xl font-bold text-blue-800">
                {brand.brand_name}
              </h2>
              <p className="text-gray-600">{brand.description}</p>
            </div>

            {/* Sale and View Coupons */}
            <div className="flex flex-col items-center">
              {brand.isSaleOn && (
                <p className="text-red-500 text-lg animate-bounce font-bold">
                  Sale is On!
                </p>
              )}
              <button
                className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                onClick={() => {
                  const isLoggedIn = localStorage.getItem("user");
                  if (isLoggedIn) {
                    navigate(`/services/${brand._id}`);
                  } else {
                    navigate("/login");
                  }
                }}
              >
                View Coupons
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
