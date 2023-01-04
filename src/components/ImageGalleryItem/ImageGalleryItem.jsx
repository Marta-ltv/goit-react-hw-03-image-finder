import React from "react";
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImg} from "./ImageGalleryItem.styled";


export const ImageGalleryItem = props => {
  const { hit, onClick } = props;
  return (
    <GalleryItem id={hit.id} onClick={onClick}>
      <GalleryImg
        src={hit.webformatURL}
        alt={hit.tags}
        data-src={hit.largeImageURL}
        loading="lazy" />
    </GalleryItem>
  )
};

ImageGalleryItem.propTypes = {
  hit: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
};
  

  

