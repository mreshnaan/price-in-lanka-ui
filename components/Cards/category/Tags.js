const Tags = ({ items }) => {
    // const products = props.products;
    return (
        <div  >
            {items.tags.map((item) => (
                
                <span className="inline-block  bg-gray-200 rounded-full px-3 py-1 mx-1 my-2 text-sm font-semibold text-gray-700 mr-2"key={item.id} >{item.name}</span>
           
           ))}
        </div >

    );
}

export default Tags;
