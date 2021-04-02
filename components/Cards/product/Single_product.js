import React from 'react';
import Rating from '../RatingStar'
import Tags from '../category/Tags'

const Singleproduct = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div className="w-full h-auto" key={item.id}>
                    <div className=" flex w-full flex-wrap  bg-white ">
                        <img className=" object-cover bg-cover bg-center w-40 p-5 h-full" src={item.image} alt={item.name} />
                        <div className="px-4 py-4 ">
                            <div className=" font-semibold text-xl mb-1">{item.name}</div>
                            <div className="flex items-center"><Rating className="outline-none" /> <span className="px-1 text-[#555]">( <span className="font-bold">{item.ratingCount} </span>ratings )</span></div>
                            <div className=" text-lg mb-2" ><span className=" font-bold text-[#555] ">Price Range : <span className="text-lg text-[#41BB19]">{item.lower}<span className=" text-[#555] font-normal text-base"> to </span> <span className="text-[#0F82F5]">{item.higher}</span></span></span>  <span className=" text-base text-[#555]">at {item.stores} Stores</span> </div>
                            <div className="text-[#555]">The <span className="font-bold">best price of {item.name} in Sri Lanka</span> is <span className="font-bold">{item.lower} Sold at {item.storename}</span> with 1 Year Company Warranty.</div>
                            <div className="px-1 py-2">
                                <Tags items={item} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Singleproduct;
