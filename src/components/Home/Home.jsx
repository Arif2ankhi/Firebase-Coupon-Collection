import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {

const services = useLoaderData()

console.log(services);


    return (
        <div className='w-11/12'>
          <Banner></Banner>
          <section>
          <div className="text-3xl font-extrabold justify-center text-center text-red-800">
            Top Brands
          </div>
          <div className='flex gap-10 w-[200px] h-[160px]'>
            <img src="../../../public/Images/daraz.png" alt="" />
            <img src="../../../public/Images/evally.jpg" alt="" />
            <img src="../../../public/Images/foodpanda.jpg" alt="" />
            <img src="../../../public/Images/chaldal.jpeg" alt="" />
            <img src="../../../public/Images/rokomari.jpeg" alt="" />
          </div>
          </section>
          <div>
            {
                services.map(service =><ServiceCard  service={service}></ServiceCard>)
            }
          </div>
        </div>
    );
};

export default Home;