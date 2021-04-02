import Single_card from './Single_card';

const Cards = ({ items }) => {
    // const products = props.products;

    return (
        <div className="flex  justify-center flex-wrap" >
            {items.map((item) => (
                <div className=" w-full justify-center" key={item.id}>
                    <h2 className="pb-2 pt-4 text-2xl uppercase border-b-4 border-[#ee3523] mx-8 text-black font-medium">{item.ctitle}</h2>


                    <Single_card items={item} />

                </div>

            ))
            }
        </div >

    );
}

export default Cards;
