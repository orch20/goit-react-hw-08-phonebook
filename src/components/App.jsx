// import React, { useEffect } from 'react';
import { FormContacts } from './FormContacts/FormContacts';
import { RenderContactsList } from './RenderContactsList/RenderContactsList';
import { Filter } from './Filter/Filter';
import { Container } from './Container.styled';

export const App = () => {
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
