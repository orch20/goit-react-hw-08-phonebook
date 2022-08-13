import React, { useState, useEffect } from 'react';
import { FormContacts } from './FormContacts/FormContacts';
import { RenderContactsList } from './RenderContactsList/RenderContactsList';
import { Filter } from './Filter/Filter';
import { Container } from './Container.styled';
import { nanoid } from 'nanoid';

const initialValues = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState([...initialValues]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    // const contactsExist = localStorage.getItem('contacts');
    // if (contactsExist) {
    //   setContacts(JSON.parse(contactsExist));
    // }
  }, [contacts]);

  const filterChange = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const deleteContact = id => {
    setContacts(prevContact =>
      prevContact.filter(contact => contact.id !== id)
    );
  };

  const formSubmitHandler = ({ name, number }) => {
    const newContact = { id: nanoid(5), name, number };
    const findSimilarContact = contacts.find(contact => contact.name === name);

    if (findSimilarContact) {
      alert('Contact already exists');
    } else {
      setContacts([...contacts, newContact]);
    }
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

// export class App extends Component {
//   state = {
//     contacts: [...initialValues],
//     filter: '',
//   };

// ------------------------------------------------

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   if (contacts) {
//     this.setState({ contacts: JSON.parse(contacts) });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (prevState.contacts !== this.state.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     console.log('didUpdate :>> ', 'didUpdate');
//   }
// }
// ------------------------------------------------------

// filterChange = event => {
//   this.setState({ filter: event.target.value });
// };

// getFilteredContacts = () => {
//   const { contacts, filter } = this.state;
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

// deleteContact = id => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== id),
//   }));
// };
// ------------------------------------------------
//   formSubmitHandler = data => {
//     const { contacts } = this.state;
//     data.id = nanoid(5);

//     const findingSimilarContact = contacts.find(
//       contact => contact.name === data.name
//     );

//     if (findingSimilarContact) {
//       alert('Contact already exists');
//     } else {
//       this.setState(preState => {
//         return {
//           contacts: [...preState.contacts, data],
//         };
//       });
//     }
//   };

//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.getFilteredContacts();
//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <FormContacts onSubmitProp={this.formSubmitHandler} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onFilterChange={this.filterChange} />
//         <>
//           <RenderContactsList
//             contactsList={filteredContacts}
//             onDeleteContact={this.deleteContact}
//           />
//         </>
//       </Container>
//     );
//   }
// }
