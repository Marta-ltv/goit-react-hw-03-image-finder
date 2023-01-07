import React from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';


const Searchbar = ({ onSubmit }) => {
  return (
    <header className={s.searchbar}>
      <SearchForm onSubmit={onSubmit} />
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;