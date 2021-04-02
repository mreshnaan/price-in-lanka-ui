import React from 'react';
import { useRouter } from 'next/router'
import Cards from '../../../components/Cards/Card'
import Breadcrumbs from '../../../components/Cards/Breadcrumbs'




const brand = [
    {
        id: '1',
        name: 'Laptops',
        image: "https://www.ideabeam.com/images/brand/apple.jpg",
        url: 'electronics/laptops',
    },
    {
        id: '2',
        name: 'Television',
        image: "https://www.ideabeam.com/images/brand/asus.jpg",
        url: 'electronics/television',
    },
    {
        id: '3',
        name: 'Tablets',
        image: "https://www.ideabeam.com/images/brand/blackberry.jpg",
        url: 'electronics/tablets',
    },
    {
        id: '4',
        name: 'Mobile',
        image: "https://www.ideabeam.com/images/brand/cat.jpg",
        url: 'electronics/mobile',
    },
]
const style = {

}

const MainCategories = () => {
    const router = useRouter();
    return (
        <div>
            <div className=" bg-opacity-50 w-auto flex justify-center items-center flex-col h-96 object-cover bg-contain bg-no-repeat bg-center shadow-md" style={{
                'background-image': 'linear-gradient(rgba(0, 0, 0, -0.1), rgba(0, 0, 0, 0.9)),url(https://image.freepik.com/free-vector/mobile-template-wireframe-app-development-realistic-3d-illustration_174191-241.jpg)',

            }}>
                <span className="text-4xl uppercase text-white font-semibold p-2"> {router.query.main_cat}</span>
                <span className="text-base text-gray-200"> <Breadcrumbs /></span>
            </div>

            <div className="w-full flex p-2 flex-wrap justify-center items-center focus:none">
                <Cards items={brand} showvisbility={'none'} />
            </div>

        </div>
    );
}

export default MainCategories;
