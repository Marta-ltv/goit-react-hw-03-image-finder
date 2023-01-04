import React from 'react';
import PropTypes from 'prop-types';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Header } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm onSubmit={onSubmit} />
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};



  
