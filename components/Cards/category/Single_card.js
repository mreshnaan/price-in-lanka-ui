import React from 'react';
import Tags from "./Tags";

const Single_card = ({ items }) => {
    // console.log(items);
    return (
        <>
            <div className="w-full flex justify-center flex-wrap mt-6">
                {items.subcats.map((item) => (
                    <div className="p-2" key={item.id}>

                        <div className=" w-72 bg-white rounded-lg border-gray-200 border overflow-hidden">

                            <img className=" object-cover bg-cover bg-center w-full h-56" src={item.image} alt={item.name} />
                            <div className="px-6 py-4">
                                <a href={item.url}>
                                    <div className="font-bold text-xl mb-2">{item.name}</div>
                                </a>
                                <p className="text-grey-darker text-base">
                                    {item.description}
                                </p>
                            </div>

                            <div className="px-6 py-1 pb-4">
                                <Tags items={item} />
                            </div>
                        </div>

                    </div>
                ))}

            </div>


        </>
    );
}

export default Single_card;
