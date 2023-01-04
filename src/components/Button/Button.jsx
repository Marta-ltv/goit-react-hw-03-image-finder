import React from 'react';
import PropTypes from 'prop-types';
import { Button, Wrapper } from "./Button.styled";

const ButtonLoadMore = ({ onClick }) => {
  return (
    <Wrapper>
      <Button type="button" onClick={onClick}>
        Load more
    </Button>
    </Wrapper>
  );
};

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;