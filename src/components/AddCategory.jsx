import React, { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length==0) return;
        //console.log(setCategories.categories + "1");
        // setCategories(categories => [...categories, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    
    return (
        <>
            {/* <form onSubmit={(event) => onSubmit(event)}> */}
            <form onSubmit={onSubmit}>
                <input
                    //properties
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    //onChange={ (event) => onInputChange(event)}
                    onChange={onInputChange}
                />
            </form>
        </>
    )
}
