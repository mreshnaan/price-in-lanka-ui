import React from 'react';

const Aboutsection = ({ items }) => {
    return (
        <>

            {items.map((item) => (
                <div className="flex justify-evenly ">
                    <div>
                        <img src={item.url} />
                    </div>
                    <div>
                        <span>{item.description}</span>
                    </div>
                </div>

            ))}

        </>
    );
}

export default Aboutsection;
