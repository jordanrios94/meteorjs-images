// Create our image list component
// Import React
import React from 'react';
import ImageDetail from './image_detail';

// Create or component
const ImageList = ({ images }) => {
  const validImages = images.filter(image => !image.is_album);

  const RenderedImages = validImages.map(image => (
    <ImageDetail key={image.title} image={image} />
  ));

  return <ul className="media-list list-group">{RenderedImages}</ul>;
};

// Export our component
export default ImageList;
