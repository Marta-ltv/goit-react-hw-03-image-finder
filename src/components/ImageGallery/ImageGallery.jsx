import React from "react";
import PropTypes from 'prop-types';

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { GalleryImage } from "./ImageGallery.styled";

export const ImageGallery = props => {
  const { hits, onClick } = props;

  return (
    <GalleryImage>
      {hits.map(hit => {
        return <ImageGalleryItem key={hit.id} hit={hit} onClick={onClick} />;
      })}
    </GalleryImage>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};
