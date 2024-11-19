import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {
console.log(service);




const { _id, brand_name, brand_logo, coupons, category } = service




    return (
      <Link to={`/services/${_id}`} >
        <div className="card bg-base-100 shadow-xl">
  <figure>
    <img className=' h-64 rounded-2xl'
      src={brand_logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-bold text-blue-900 ">
     {brand_name}
    </h2>
    <p>{category}</p>

    <div className="flex items-center text-xl font-semibold text-gray-700">
                <span className="text-yellow-500 mr-2">★</span>
                {service.rating.toFixed(1)}
              </div>
   
    


   {/* Coupon collect  */}

   <p className='text-xl font-bold text-green-700'>{`Coupons Available: ${coupons.length}`}</p>


  </div>
</div>
      </Link>
    );
};

export default ServiceCard;