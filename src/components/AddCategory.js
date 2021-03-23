import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({categorias, setCategoria}) => {

    const [inputValue, setInputValue] = useState('')

    const hangleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategoria ([ inputValue, ...categorias]);
        }
    }

    return ( 
        <form onSubmit = {handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange= {hangleInputChange}
            />
        </form>
     );
}

export default AddCategory;

AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired
}

