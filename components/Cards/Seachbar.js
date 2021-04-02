import React from 'react';

const Seachbar = ({ items }) => {
    return (
        <>
            <div className="flex items-center justify-center" >
                <div className="flex mt-8">

                    <input
                        placeholder="Find Mobile"
                        type="text"
                        className="bg-white p-4 min-w-[400px] border border-gray-200 focus:outline-none  focus:border-gray-400 rounded "
                    />
                    <button className="flex items-center bg-[#2E2E2E] border-gray-300 text-white text-sm px-4 rounded">
                        Get Started
                       <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>

            </div>

        </>
    );
}

export default Seachbar;
