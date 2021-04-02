import React from 'react';
import Breadcrumbs from '../../../../../components/Cards/Breadcrumbs'
import Singleproduct from '../../../../../components/Cards/product/Single_product'
import Comparestores from '../../../../../components/Cards/product/CompareMultistores'
import { useRouter } from 'next/router'

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


    }
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

    },
    {
        id: '1',
        image: 'https://www.ideabeam.com/images/store/x-mobile.jpg',
        name: 'green',
        url: '',
        pname: 'Samsung Galaxy M02s 64GB (Black)',
        warrenty: '1 Year Company Warranty',
        number: ' Call 0778 823 222',
        price: '26,400',

    }
]


const Product = () => {
    const router = useRouter();
    return (
        <div>
            <div className=" bg-opacity-50 w-auto flex justify-center items-center flex-col h-96 object-cover bg-contain bg-no-repeat bg-center shadow-md" style={{
                'background-image': 'linear-gradient(rgba(0, 0, 0, -0.1), rgba(0, 0, 0, 0.9)),url(https://image.freepik.com/free-vector/mobile-template-wireframe-app-development-realistic-3d-illustration_174191-241.jpg)',

            }}>
                <span className="text-4xl text-white font-semibold p-2"> {router.query.product}</span>
                <span className="text-base text-gray-200"> <Breadcrumbs /></span>
            </div>
            <div className="w-full flex flex-col justify-center items-center py-4 ">
                <div className=" w-11/12">
                    <Singleproduct items={mobile} />

                </div>
                <div>
                    <h2 className="pb-2 pt-4 text-2xl uppercase border-b-4 border-[#ee3523] mx-8 text-black font-medium">Compare {router.query.product} Prices in Sri Lanka</h2>
                    <div className="flex items-center justify-center pt-4">
                        <Comparestores items={mutistores} />
                    </div>

                </div>

            </div>


        </div>
    );
}

export default Product;
