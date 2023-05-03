import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  static propTypes = {
    handleInput: PropTypes.func.isRequired,
  };

  render() {
    const { handleInput } = this.props;
    return (
      <div>
        <p>Find Contacts by name</p>
        <input
          type="text"
          name="filter"
          onChange={e => handleInput(e.target.value)}
        />
      </div>
    );
  }
}
