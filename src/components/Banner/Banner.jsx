// import React from 'react';

// const Banner = () => {
//     return (
//         <div>
//             <div className="carousel w-full">
//   <div id="slide1" className="carousel-item relative w-full">
//     <img 
//     //   src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
//       src="https://thumbs.dreamstime.com/z/vector-gift-voucher-restaurant-discount-coupon-design-promo-code-certificate-template-online-shopping-marketing-flyer-137273441.jpg?ct=jpeg"
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide4" className="btn btn-circle">❮</a>
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide2" className="carousel-item relative w-full">
//     <img
//     //   src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
//       src="https://i.ibb.co/6g52Db4/ban2.webp"
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide1" className="btn btn-circle">❮</a>
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide3" className="carousel-item relative w-full">
//     <img
//     //   src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
//       src="https://i.ibb.co/x6Vr86T/ban3.webp"
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide2" className="btn btn-circle">❮</a>
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide4" className="carousel-item relative w-full">
//     <img
//     //   src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
//       src="https://thumbs.dreamstime.com/z/vector-sale-labels-illustration-color-background-42444340.jpg?ct=jpeg"
//       className="w-full" />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide3" className="btn btn-circle">❮</a>
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default Banner;


import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='mx-auto'>
            <div className="carousel w-full h-[580px]">
            {/* <div className="carousel  h-[800px]"> */}
                <div id="slide1" className="carousel-item relative w-full h-full">
                    <img 
                        src="https://thumbs.dreamstime.com/z/vector-gift-voucher-restaurant-discount-coupon-design-promo-code-certificate-template-online-shopping-marketing-flyer-137273441.jpg?ct=jpeg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-full">
                    <img
                        // src="https://i.ibb.co/6g52Db4/ban2.webp"
                        src="https://www.shutterstock.com/shutterstock/photos/2370371723/display_1500/stock-vector-halloween-special-sale-coupon-voucher-giveaway-frame-of-dark-forest-silhouette-with-tombstones-2370371723.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-full">
                    <img
                        // src="https://i.ibb.co/x6Vr86T/ban3.webp"
                        src="https://thumbs.dreamstime.com/z/blue-p-309604545.jpg?ct=jpeg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-full">
                    <img
                        // src="https://thumbs.dreamstime.com/z/vector-sale-labels-illustration-color-background-42444340.jpg?ct=jpeg"
                        src="https://www.shutterstock.com/shutterstock/photos/2222438945/display_1500/stock-photo-black-friday-d-illustration-for-sale-and-golden-black-friday-text-with-a-classic-look-with-sale-2222438945.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
