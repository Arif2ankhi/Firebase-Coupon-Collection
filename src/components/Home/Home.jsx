import React from "react";
import Banner from "../Banner/Banner";
import { useLoaderData, useNavigate } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import Marquee from "react-fast-marquee";

const Home = () => {
  const services = useLoaderData();
  const navigate = useNavigate();

  const topRatedBrands = [...services].sort((a, b) => b.rating - a.rating);

  return (
    <div className="w-11/12">
      <Banner></Banner>
      <section>
        <div className="text-3xl font-extrabold justify-center text-center text-red-800 m-12 animate__animated animate__bounce">
          Top Brands
        </div>

        <Marquee pauseOnHover={true} speed={300}>
          <div className="flex gap-12">
            {services.map((service) => (
              <img
                className="w-[240px] h-[160px] gap-10 mt-2"
                key={service._id}
                src={service.brand_logo}
                alt={service.brand_name}
                onClick={() => navigate(`/services/${service._id}`)}
              />
            ))}
          </div>
        </Marquee>
      </section>

      <section>
        <div className="text-3xl font-extrabold justify-center text-center  text-red-800 mt-6 p-8 animate__animated animate__bounce animate__delay-2s">
          <button className="text-3xl font-extrabold text-center text-red-800 mt-8 mb-8">
            {/* {" "} */}
            Brands On Sell
          </button>
        </div>
      </section>
      <div className="grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* {
                services.map(service =><ServiceCard  service={service}></ServiceCard>)
            } */}
        {/* changed here original data in comment  */}
        {services
          .filter((service) => service.isSaleOn)
          .map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
      </div>

      {/* 2 extra features  */}

      <section>
        <h2 className="text-3xl font-extrabold text-center text-red-800 mt-8 mb-8">
          Featured Brands
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-extrabold text-center text-red-800 mt-8 mb-8">
          Top Rated Brands
        </h2>
        <p className="text-xl font-extrabold text-white text-center mt-4 mb-6 animate__animated animate__flip animate__fast animate__animate__infinite">
          According to Rating{" "}
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {topRatedBrands.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
