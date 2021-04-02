import React from 'react'
import Link from 'next/link'
export default function Store({ items }) {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center">


                {
                    items.map((item) => (
                        <div className=" w-3/4 bg-[#f9f9f9] grid  border border-gray-200 sm:grid-cols-1 md:grid-cols-4 p-1" key={item.id}>
                            <div className=" w-full flex justify-evenly">
                                <div className=" w-full sm:block md:hidden flex justify-center items-center text-center ">
                                    <span>Store</span>
                                </div>
                                <div className="w-full flex flex-col items-center justify-center py-2 px-4">
                                    <img className=" w-3/5 bg-cover bg-center object-contain" src={item.image} />
                                    <h4 className="text-center text-xs text-[#555] hover:underline"><Link href={item.url}>{item.name}</Link></h4>
                                </div>
                            </div>
                            <div className=" w-full flex justify-evenly">
                                <div className=" w-full sm:block md:hidden flex justify-center items-center text-center ">
                                    <span>Product</span>
                                </div>
                                <div className="w-full flex flex-col justify-center py-2 px-4">
                                    <h2 className="text-base ">{item.pname}</h2>
                                    <p className="text-sm text-red-600">Company warranty</p>
                                    <p className=" text-xs text-[#41BB19]">{item.warrenty} .Call {item.number}</p>
                                </div>
                            </div>
                            <div className=" w-full flex justify-evenly">
                                <div className=" w-full sm:block md:hidden flex justify-center items-center text-center ">
                                    Product
                        </div>
                                <div className="w-full flex items-center justify-center py-2 px-4">
                                    Rs. {item.price}
                                </div>
                            </div>
                            <div className=" w-full flex justify-evenly">
                                <div className=" w-full sm:block md:hidden flex justify-center items-center text-center ">
                                    Buy
                        </div>
                                <div className="w-full flex items-center justify-center py-2 px-4">
                                    <button className="bg-[#41bb19] p-3 rounded-md text-sm text-white">Contact Store</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>

    )
}