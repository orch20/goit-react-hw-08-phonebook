// import React, { useEffect } from 'react';
import { FormContacts } from './FormContacts/FormContacts';
import { RenderContactsList } from './RenderContactsList/RenderContactsList';
import { Filter } from './Filter/Filter';
import { Container } from './Container.styled';
import Navbar from './Navbar/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Phonebook</h1>
        <FormContacts />
        <h2>Contacts</h2>
        <Filter />
        <RenderContactsList />
      </Container>
    </>
  );
};
