import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import Marquee from 'react-fast-marquee';

const Home = () => {

const services = useLoaderData()

console.log(services);


    return (
        <div className='w-11/12'>
          <Banner></Banner>
          <section>
          <div className="text-3xl font-extrabold justify-center text-center text-red-800 m-12">
            Top Brands
          </div>

          <Marquee pauseOnHover={true} speed={100} className=''>
          <div className='flex gap-8 md:gap-32 w-[200px] h-[160px]'>
            <img src="../../../public/Images/daraz.png" alt="" />
            <img src="../../../public/Images/evally.jpg" alt="" />
            <img src="../../../public/Images/foodpanda.jpg" alt="" />
            <img src="../../../public/Images/chaldal.jpeg" alt="" />
            <img src="../../../public/Images/rokomari.jpeg" alt="" />
            <img src="../../../public/Images/Bikroy.png" alt="" />
            <img src="../../../public/Images/picaaboo1.jpg" alt="" />
          </div>
          </Marquee>
        </section>
        
          <section>
            <div className="text-3xl font-extrabold justify-center text-center  text-red-800 mt-6 p-4">
                <button className='btn btn-secondary'> Brands On Sell</button>
            </div>
        </section>
          <div className='grid gap-6 grid-cols-4'>
            {
                services.map(service =><ServiceCard  service={service}></ServiceCard>)
            }
          </div>
        </div>
    );
};

export default Home;