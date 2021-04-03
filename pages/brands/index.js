import React from 'react';
import Cards from '../../components/Cards/Card'
import Slider from '../../components/Cards/Slider'
import Selectoption from '../../components/Cards/Selectoption'
import Breadcrumbs from '../../components/Cards/Breadcrumbs'
import Singleproduct from '../../components/Cards/product/Single_product'
import Comparestores from '../../components/Cards/product/CompareMultistores'


const brand = [
    {
        id: '1',
        name: 'Apple',
        image: "https://www.ideabeam.com/images/brand/apple.jpg",
        url: 'brands/apple',
    },
    {
        id: '2',
        name: 'Asus',
        image: "https://www.ideabeam.com/images/brand/asus.jpg",
        url: 'brands/asus',
    },
    {
        id: '3',
        name: 'Blackberry',
        image: "https://www.ideabeam.com/images/brand/blackberry.jpg",
        url: 'brands/blackberry',
    },
    {
        id: '4',
        name: 'Cat',
        image: "https://www.ideabeam.com/images/brand/cat.jpg",
        url: 'brands/cat',
    },
]

const mobile = [
    {
        id: '1',
        name: 'Samsung Galaxy M02s 64GB',
        image: 'https://www.ideabeam.com/images/product/samsung-galaxy-m02s.jpg',
        price: '20,000',
        lower: '20,000',
        higher: '30,000',
        storename: 'Present Solution',
        ratingCount: '26',
        tags: [{ id: '1', name: "#Dual Sim" }, { id: '2', name: "#LTE" }, { id: '3', name: "#4G" }, { id: '4', name: "#64 GB" }, { id: '5', name: "#4 GB RAM" }],
        stores: '10',
        url: ''

    },
    {
        id: '2',
        name: 'Samsung Galaxy M31 128GB',
        image: 'https://www.ideabeam.com/images/product/samsung-galaxy-m31-128gb.jpg',
        price: '23,400',
        lower: '23,400',
        higher: '34,000',
        storename: 'Selfie Mobile',
        tags: [{ id: '1', name: "#Dual Sim" }, { id: '2', name: "#LTE" }, { id: '3', name: "#4G" }, { id: '4', name: "#128 GB" }, { id: '5', name: "#8 GB RAM" }],
        ratingCount: '23',
        stores: '6',
        url: ''

    },
    {
        id: '3',
        name: 'Samsung Galaxy M21',
        image: 'https://www.ideabeam.com/images/product/samsung-galaxy-m21.jpg',
        price: '40,000',
        lower: '40,000',
        higher: '56,000',
        storename: 'Greenware',
        tags: [{ id: '1', name: "#Dual Sim" }, { id: '2', name: "#LTE" }, { id: '3', name: "#4G" }, { id: '4', name: "#64 GB" }, { id: '5', name: "#4 GB RAM" }],
        ratingCount: '10',
        stores: '8',
        url: ''

    },
    {
        id: '4',
        name: 'Samsung Galaxy A21s 64GB',
        image: 'https://www.ideabeam.com/images/product/samsung-galaxy-a21s.jpg',
        price: '50,000',
        lower: '50,000',
        higher: '76,000',
        storename: 'Xmobile ',
        tags: [{ id: '1', name: "#Dual Sim" }, { id: '2', name: "#LTE" }, { id: '3', name: "#4G" }, { id: '4', name: "#64 GB" }, { id: '5', name: "#8 GB RAM" }],
        ratingCount: '21',
        stores: '15',
        url: ''

    }
]
const selectoption = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const mutistores = [
    {
        id: '1',
        image: 'https://www.ideabeam.com/images/store/x-mobile.jpg',
        name: 'Xmobile',
        url: '',
        pname: 'Samsung Galaxy M02s 64GB (Black)',
        warrenty: '1 Year Company Warranty',
        number: ' Call 0778 823 222',
        price: '26,400',

    }
]


const brands = () => {
    return (
        <div>
            <div className=" bg-opacity-50 w-auto flex justify-center items-center flex-col h-96 object-cover bg-contain bg-no-repeat bg-center shadow-md" style={{
                'background-image': 'linear-gradient(rgba(0, 0, 0, -0.1), rgba(0, 0, 0, 0.9)),url(https://image.freepik.com/free-vector/mobile-template-wireframe-app-development-realistic-3d-illustration_174191-241.jpg)',

            }}>
                <span className="text-4xl text-white font-semibold p-2"> Brands</span>
                <span className="text-base text-gray-200"> <Breadcrumbs /></span>
            </div>
            {/* <div className=" w h-full flex justify-center items-center flex-grow border-gray-600 flex-1  ">
                    <div className="w-auto ">
                        <label>Select Category:</label>
                        <Selectoption items={selectoption} />
                    </div>
                    <div className="w-auto py-1 px-5">
                        <label>Select Brand:</label>
                        <Selectoption items={selectoption} />
                    </div>
                    <div className="w-auto">
                        <label>Select Price Range:</label>
                        <Selectoption items={selectoption} />
                    </div>
                    <div className="w-60 flex pt-6 px-4 ">
                        <button className="px-10 py-2 rounded-md text-white outline-none focus:outline-none bg-red-600">Go</button>
                    </div>

                </div> */}

            <div className="w-full flex p-2 flex-wrap justify-center items-center focus:none">
                 <Cards items={brand} showvisbility={'none'} />
            </div>

        </div>
    );
}

export default brands;
