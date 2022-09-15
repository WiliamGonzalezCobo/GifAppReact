import PropTypes from 'prop-types';
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);
    return (
        <>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <h3>{category}</h3>
            <div className='card-grid'>
                {
                    images.map(img => {
                        return (
                            <GifItem
                                key={img.id}
                                //</div>esto envia cada propiedad de img como una propiedad independiente
                                {...img}>
                            </GifItem>)
                    })
                }
            </div>
        </>

    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
