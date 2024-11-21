import React, { useState, useEffect } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

const CouponPage = () => {
  const { id } = useParams();  // Get brand ID from the URL
  const brand = useLoaderData();  // Get the brand data passed by the loader

  const [copied, setCopied] = useState(false);

  // Toastify success function
  const notify = () => toast.success("Coupon code copied successfully!");

  // Show a toast on coupon code copy
  useEffect(() => {
    if (copied) {
      notify();
    }
  }, [copied]);

  // If brand data isn't loaded or isn't found, show a message
  if (!brand) {
    return <div>Brand not found!</div>;
  }

  return (
    <div className="w-11/12 mx-auto">
      {/* Brand Details */}
      <div className="bg-blue-800 text-white p-6 rounded-lg my-6">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-32 h-32 rounded-lg mx-auto"
        />
        <h1 className="text-3xl font-bold text-center my-4">{brand.brand_name}</h1>
        <p className="text-xl text-center text-yellow-400">{brand.rating} ⭐</p>
      </div>

      {/* Coupons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {brand.coupons && brand.coupons.map((coupon) => (
          <div key={coupon._id} className="card bg-white shadow-lg p-4 rounded-lg">
            <h3 className="font-bold text-lg">{coupon.coupon_name}</h3>
            <p className="text-gray-600">{coupon.description}</p>
            <div className="flex justify-between items-center mt-4">
              {/* Copy Code Button */}
              <CopyToClipboard text={coupon.coupon_code} onCopy={() => setCopied(true)}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Copy Code
                </button>
              </CopyToClipboard>
              {/* Use Now Button */}
              <button
                onClick={() => window.open(brand.brand_link, "_blank")}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Use Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponPage;
