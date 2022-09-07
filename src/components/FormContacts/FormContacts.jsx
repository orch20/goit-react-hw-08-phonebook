import React, { useState } from 'react';
import { ContactForm, ContactInput, Button } from './FormContacts.styled';
import { addContacts } from 'redux/contacts/contacts-slice';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';

export const FormContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const data = { name, number };

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const formSubmitHandler = payload => {
    const findSimilarContact = contacts.find(
      contact => contact.name === payload.name
    );

    if (findSimilarContact) {
      alert('Contact already exists');
    } else {
      const action = addContacts(payload);
      dispatch(action);
    }
  };

  const OnSubmit = e => {
    e.preventDefault();
    formSubmitHandler(data);
    reset();
  };

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('Something wrong');
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactForm onSubmit={OnSubmit}>
      <label>
        Name
        <ContactInput
          type="text"
          id={name}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
        />
      </label>
      <label>
        Number
        <ContactInput
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </ContactForm>
  );
};
