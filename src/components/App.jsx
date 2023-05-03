import React, { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm ';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  addContact = (new_name, new_number) => {
    if (this.state.contacts.some(el => el.name === new_name)) {
      alert(`${new_name} is already in contacts`);
      return;
    }

    const new_contact = {
      id: nanoid(),
      name: new_name,
      number: new_number,
    };

    const new_contacts_array = [...this.state.contacts, new_contact];
    this.setState({ contacts: new_contacts_array });
    localStorage.setItem('contacts', JSON.stringify(new_contacts_array));
  };

  handleSubmitNewContact = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    this.addContact(name, number);
  };

  removeContact = name_to_remove => {
    const { contacts } = this.state;
    const new_array = contacts.filter(({ name }) => name !== name_to_remove);
    this.setState({ contacts: new_array });

    //Added for HW-3
    localStorage.setItem('contacts', JSON.stringify(new_array));
    //END
  };

  setFilter = text => {
    this.setState({ filter: text });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  // Added for HW-3
  async componentDidMount() {
    const contacts_storage = localStorage.getItem('contacts');

    if (contacts_storage != null) {
      const contacts_array = JSON.parse(contacts_storage);
      this.setState({ contacts: contacts_array });
    } else {
      const { contacts } = this.state;
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  //END

  render() {
    const filteredContacts = this.filterContacts();

    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmitNewContact} />
        <h2>Contacts</h2>
        <Filter handleInput={this.setFilter} />
        <ContactList
          contacts={filteredContacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}
