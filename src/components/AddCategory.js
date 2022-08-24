import React, { useState } from 'react';
import { PropTypes } from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            // setCategories(callbackCategory => [...callbackCategory, inputValue]);
            setInputValue('');
            onNewCategory(inputValue.trim())
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={onInputChange}>

            </input>
        </form>
    )
}
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
