import React from 'react';
import './BannerIteam.css';
const BannerItem = ({ slide }) => {
    const { image, prev, next, id } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='carousel-img'>
                <img alt="" src={image} className="w-full rounded" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-3xl lg:text-6xl  text-white font-extrabold'>
                    Affordable <br />
                    Price for car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 mt-6 w-2/5 top-2/4 ">
                <p className='text-white lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor modi natus explicabo. Similique quidem odit quisquam maiores, temporibus soluta sit aliquid nulla ullam ratione!</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 mt-6 w-2/5 top-3/4 ">
                <button className="btn btn-warning mr-5">Appoinment</button>
                <button className="btn btn-outline btn-warning">Get started</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;