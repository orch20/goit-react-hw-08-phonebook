// import React, { useEffect } from 'react';
import { FormContacts } from './FormContacts/FormContacts';
import { RenderContactsList } from './RenderContactsList/RenderContactsList';
import { Filter } from './Filter/Filter';
import { Container } from './Container.styled';

import { useSelector, useDispatch } from 'react-redux';
import { addContacts, removeContacts } from '../redux/contacts/contacts-slice';

import { setFilter } from 'redux/filter/filter-slice';

import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  //   const contactsExist = localStorage.getItem('contacts');
  //   if (contactsExist) {
  //     dispatch(addContacts(contactsExist));
  //   }
  // }, [contacts]);

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

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
  const deleteContact = payload => {
    const action = removeContacts(payload);
    dispatch(action);
  };

  const filterChange = event => {
    const action = setFilter(event.target.value);
    dispatch(action);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContacts onSubmitProp={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onFilterChange={filterChange} />
      <>
        <RenderContactsList
          contactsList={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      </>
    </Container>
  );
};
