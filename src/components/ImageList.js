import React from 'react';

const ImageList = (props) => {

    const images = props.images.map((image) => {
        return (
            <a key={image.id} href={image.urls.full} target="_blank" rel="noopener noreferrer">
                <img alt={image.description} src={image.urls.thumb} />
            </a>
        )
    })

    return(
        <div>{images}</div>
    );
}

export default ImageList;