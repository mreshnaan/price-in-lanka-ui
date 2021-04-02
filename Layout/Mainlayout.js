import React from 'react';
import Nav from '../components/Navigation/Navigation'

const Mainlayout = ({ children }) => {
    const menu = [
        {
            id: 1,
            name: "Home",
            icon: "",
            url: '/',
        },
        {
            id: 2,
            name: "Brands",
            icon: "",
            url: '/brands',
        },
        {
            id: 3,
            name: "Shop",
            icon: "",
            url: '/shop',
        }
    ]
    return (
        <div>
            <Nav items={menu} />
            <main className="">
                <div className="" />
                {children}
            </main>
        </div>
    );
}

export default Mainlayout;
