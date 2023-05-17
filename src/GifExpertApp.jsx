import { useState } from 'react';
import { AddCategory, GifGrid} from './components';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        //console.log(newCategory);        
        
        if(categories.includes(newCategory)) return;
        
        setCategories([...categories, newCategory]);
        //forma 1: setCategories(categories.concat('Demon Slayer'));
        //forma 3: setCategories(cat => [...cat,'Nuevo']);
    }
    //console.log(categories);
    return (
        <>
            {/* Título */}
            <h1>GitExpertApp</h1>

            {/* Input */}
            {/* se le pueden enviar numeros, booleanos y funciones */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* Listado */}

            {/* <button onClick={onAddCategory}>Agregar</button> */}
            
           
            {
                // categories.map((category) => { 
                //     return (
                //         <div key={category}>
                //             <h3>{category}</h3>
                //             <li>{category}</li>
                //         </div>
                //     )  
                // })
                //También es permitido
                categories.map((category) => 
                    (
                        <GifGrid key={category} category={category}/>
                    )  
                )
            }
            

                {/* Gif item */}
        </>
    )
}