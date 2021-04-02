import React from 'react';
import Cards from '../../components/Cards/Card'
import Breadcrumbs from '../../components/Cards/Breadcrumbs'
import { useRouter } from 'next/router'



const brand = [
    {
        id: '1',
        name: 'Electronics',
        image: "https://www.ideabeam.com/images/brand/apple.jpg",
        url: 'category/electronics',
    },
    {
        id: '2',
        name: 'AutoMobile',
        image: "https://www.ideabeam.com/images/brand/asus.jpg",
        url: 'category/automobile',
    },
    {
        id: '3',
        name: 'Home Appliance',
        image: "https://www.ideabeam.com/images/brand/blackberry.jpg",
        url: 'category/home-appliance',
    },
    {
        id: '4',
        name: 'Pharmaceutical',
        image: "https://www.ideabeam.com/images/brand/cat.jpg",
        url: 'category/pharmaceutical',
    },
    {
        id: '5',
        name: 'Service Packages',
        image: "https://www.ideabeam.com/images/brand/apple.jpg",
        url: 'category/service-packages',
    },
    {
        id: '6',
        name: 'Gold and Currency',
        image: "https://www.ideabeam.com/images/brand/asus.jpg",
        url: 'category/automobile',
    },
]
const style ={

}

const Categories = () => {
    const router = useRouter();
    console.log(router)
    return (
        <div>
            <div className=" bg-opacity-50 w-auto flex justify-center items-center flex-col h-96 object-cover bg-contain bg-no-repeat bg-center shadow-md" style={{
                'background-image': 'linear-gradient(rgba(0, 0, 0, -0.1), rgba(0, 0, 0, 0.9)),url(https://image.freepik.com/free-vector/mobile-template-wireframe-app-development-realistic-3d-illustration_174191-241.jpg)',

            }}>
                <span className="text-4xl text-white uppercase font-semibold p-2">category</span>
                <span className="text-base text-gray-200"> <Breadcrumbs /></span>
            </div>

            <div className="w-full flex p-2 flex-wrap justify-center items-center focus:none">
                <Cards items={brand} showvisbility={'none'} />
            </div>

        </div>
    );
}

export default Categories;
