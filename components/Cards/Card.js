import React from 'react';
import Link from 'next/link';

const Card = ({ items,showvisbility }) => {
    return (
        <>

            {items.map((item) => (
                <div className="w-40 h-auto" key={item.id}>
                    <div className=" max-w-sm bg-white border border-t-0 border-l-0">
                        <img className=" object-cover bg-cover bg-center w-full p-5 h-full" src={item.image} alt={item.name} />
                        <div className="px-4 py-4 justify-center">
                            <Link className="" href={item.url}>
                                <a className="font-bold w-full flex justify-center text-center items-center text-base mb-2 hover:text-red-600">
                                    {item.name}
                                </a>

                            </Link>
                            <div className="text-center text-sm mb-2 " style={{'display' : showvisbility}} ><span className=" font-bold font-gray-300 ">{item.price}</span> <span className=" text-xs">at {item.stores} Stores</span> </div>

                        </div>

                    </div>
                </div>
            ))}



        </>
    );
}

export default Card;
