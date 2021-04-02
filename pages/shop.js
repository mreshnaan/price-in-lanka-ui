import Cards from '../components/Cards/Card'
import Breadcrumbs from '../components/Cards/Breadcrumbs'
const shop = () => {
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

        }, {
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

        }, {
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
    return (
        <div>
            <div className="h-48 w-full flex flex-col justify-center items-center">
                <span className="text-4xl font-semibold p-2"> Shop Now</span>
                <span className="text-base text-gray-400"> <Breadcrumbs /></span>
            </div>

            <div className="w-full flex p-2 flex-wrap justify-center items-center focus:none">
                <Cards items={mobile} />

            </div>

        </div>
    );
}

export default shop;
