import Select from 'react-select';
import makeAnimated from 'react-select/animated';



const Selectoption = ({ items,styles }) => {

    const option = items;
 

    const animatedComponents = makeAnimated();


    return (
        <div>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                className="w-56 p-1"
                // defaultValue={[colourOptions[4], colourOpntions[5]]}
                isMulti
                options={option}
            />
        </div>
    );
}

export default Selectoption;
