import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([""]);

    // * dos formas de settear un useState
    // const handleAdd = () => {
    //?se pasa la el nuevo valor y con los ... se toma el ultimo estado
    //setCategories([...categories, 'pajaro'])
    //?de esta manera se obtiene el callback y permite llamar la variable desde otro componente
    //setCategories(callbackCategory => [...callbackCategory, 'pajaro'])
    // }

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        //? setCategories(categories => [newCategory, ...categories]); //forma2
        setCategories([newCategory, ...categories]) //forma 1
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(event) => onAddCategory(event)}
            />

            {
                categories.map((category) =>
                    <GifGrid
                        key={category}
                        category={category}>
                    </GifGrid>
                )
            }

        </>
    )
}
