// import React, { useEffect } from 'react';
import { FormContacts } from '../../components/FormContacts/FormContacts';
import { RenderContactsList } from '../../components/RenderContactsList/RenderContactsList';
import { Filter } from '../../components/Filter/Filter';
import { Container } from './Container.styled';

const Contacts = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContacts />
      <h2>Contacts</h2>
      <Filter />
      <RenderContactsList />
    </Container>
  );
};

export default Contacts;
