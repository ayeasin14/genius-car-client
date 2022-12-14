import React from 'react';

const ServiceCard = ({ service }) => {
    const { _id, title, img, description, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl text-orange-500 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;