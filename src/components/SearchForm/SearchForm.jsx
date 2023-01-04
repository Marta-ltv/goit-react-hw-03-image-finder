import React, { Component } from 'react';
import {FormSearch, Button, Input} from './SearchForm.styled';

import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';

export class SearchForm extends Component {
  state = { value: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ value: value });
  };


  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <FormSearch onSubmit={this.handleSubmit}>
        <Button
          onSubmit={this.handleSubmit}
          type="submit"
        >
          <IconContext.Provider value={{ size: '1.5em' }}>
            <div>
              <FiSearch />
            </div>
          </IconContext.Provider>
        </Button>
        <Input
          type="text"
          name="query"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        ></Input>
      </FormSearch>
    );
  }
}