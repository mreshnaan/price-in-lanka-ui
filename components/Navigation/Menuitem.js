import React from 'react';
import Link from 'next/link';

const menuitem = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto' key={item.id}>

                    <Link href={item.url}>
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            {item.name}
                        </a>
                    </Link>
                </div>

            ))}
        </>
    );
}

export default menuitem;
