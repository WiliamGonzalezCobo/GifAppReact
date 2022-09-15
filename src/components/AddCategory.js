import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories(callbackCategory => [...callbackCategory, inputValue]);
        setInputValue('');
        onNewCategory(inputValue.trim())

    }

    return (
        <form onSubmit={onSubmit} data-testid="FormAddCategoryTest">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
                data-testid="inputCategoryTest"
            >

            </input>
        </form>
    )
}
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
