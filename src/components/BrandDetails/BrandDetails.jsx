import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { P } from "../../../node_modules/@firebase/auth/dist/esm2017/index-2cab5241";

const BrandDetails = () => {
  const { _id } = useParams();

  const data = useLoaderData();

  const service = data.find((service) => service._id === _id);

  const {
    _id: currentId,
    brand_logo,
    brand_name,
    category,
    description
  } = service;

  return (
    <div className="card-base-100 shadow-xl">
      <figure>
        <div>
          <img
            className=" mx-auto w-96 h-72 rounded-2xl justify-items-start"
            src={brand_logo}
            alt=""
          />
        </div>
      </figure>
      <div className="card-body ">
        <div></div>
        <h2 className="card-title text-3xl font-bold text-blue-900 mx-auto ">
          {brand_name}
        </h2>

        <div className="mx-auto">
          <p className="text-3xl font-bold text-green-900">{description}</p>

          <p className="text-3xl font-bold text-blue-600">{category}</p>
          <p className="text-3xl font-bold text-yellow-400">Rating: {service.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
