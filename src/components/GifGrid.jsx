import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    
    const{images, isLoading} = useFetchGifs(category);

    // const [images, setImages] = useState([])

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(()=> {
        //se puede dejar como abajo o o hacer una fnción asincrona como arriba
        // getGifs(category)
        //     .then(newImages => setImages(newImages));
    //     getImages();
    // },[])

    //getGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {/* {
                isLoading
                ? (<h2>Cargando...</h2>)
                : null
            } */}
            {/* If corto de una condición, si es verdadera */}
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid"> 
                {
                    images.map((image) => (
                        <GifItem 
                            // key={image.id}
                            // title={image.title}
                            // url={image.url}

                            key={image.id}
                            {...image}
                        />
                    ))
                }  
            </div>
        </>
    )
}
