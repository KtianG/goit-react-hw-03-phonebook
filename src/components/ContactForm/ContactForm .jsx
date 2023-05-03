import React, { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      number: '',
    };
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className={css.contactForm} onSubmit={e => handleSubmit(e)}>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <h3>Number</h3>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={css.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
