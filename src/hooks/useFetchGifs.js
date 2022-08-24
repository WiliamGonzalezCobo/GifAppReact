import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

//Custom Hooks
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setisLoading] = useState(true)

    //hooks
    useEffect(() => {
        getImages(category);
    }, [category])

    //functions
    const getImages = async (category) => {
        const gifs = await getGifs(category);
        setImages(gifs);
        setisLoading(false);
    }

    return {
        images: images,
        isLoading: isLoading
    }
}
