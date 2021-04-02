import Select from 'react-select';
import makeAnimated from 'react-select/animated';



const Selectoption = ({ items }) => {

    const option = items;
    const styles = {}

    const animatedComponents = makeAnimated();


    return (
        <div>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                styles={styles}
                // defaultValue={[colourOptions[4], colourOptions[5]]}
                isMulti
                options={option}
            />
        </div>
    );
}

export default Selectoption;
