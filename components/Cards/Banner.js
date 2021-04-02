import React from 'react';
import Seachbar from '../Cards/Seachbar'

const Banner = ({ items }) => {
    return (
        <div className="mb-4">
            {items.map((item) => (

                <div className="bg-white w-auto h-96 object-contain bg-contain bg-no-repeat bg-center shadow-md" style={{
                    'background-image': `url(${item.image})`,
                }}>
                    <div className="flex items-center justify-center flex-col h-full w-auto">
                        <span className=" text-3xl text-center font-medium text-black max-w-lg tracking-wide">{item.content}</span>

                        

                    </div>

                </div>
            ))

            }
        </div>
    );
}

export default Banner;
