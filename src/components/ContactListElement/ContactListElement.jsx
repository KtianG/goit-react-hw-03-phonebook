import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactListElement.module.css';

export class ContactListElement extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removeContact: PropTypes.func.isRequired,
  };

  render() {
    const { name, number, removeContact } = this.props;

    return (
      <li>
        <div className={css.listElement}>
          <span>{name}: </span>&nbsp; <span> {number}</span>
        </div>
        <button onClick={() => removeContact(name)}>X</button>
      </li>
    );
  }
}
