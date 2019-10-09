import React from 'react';

const ImageDetail = ({ image }) => (
  <li className="media list-group-item">
    <div className="media-left">
      <img src={image.link} />
    </div>

    <div className="media-body">
      <h4 className="media-heading">{image.title}</h4>
    </div>
  </li>
);

export default ImageDetail;
