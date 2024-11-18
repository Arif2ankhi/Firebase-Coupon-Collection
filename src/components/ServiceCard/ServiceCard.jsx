import React from 'react';
import { P } from '../../../node_modules/@firebase/auth/dist/esm2017/index-2cab5241';

const ServiceCard = ({service}) => {
console.log(service);


// brand Logo, brand Name, Total Coupons, category

const {brand_name, brand_logo, coupons, category, isSaleOn } = service

    return (
        <div className="card bg-base-100 shadow-xl">
  <figure>
    <img className=' w-96 h-64 rounded-2xl '
      src={brand_logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {brand_name}
      {/* <div className="badge badge-primary p-8">{isSaleOn}</div> */}
    </h2>
    <p>{category}</p>
    {/* <p>{isSaleOn}</p> */}

    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;