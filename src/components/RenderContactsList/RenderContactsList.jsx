import { ContactsContainer, ContactEl } from './ContactsContainer.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { removeContacts } from 'redux/contacts/contacts-slice';
import { getFilter } from 'redux/filter/filter-selectors';

export const RenderContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase()?.includes(filter.toLowerCase())
  );

  const onDeleteContact = payload => {
    const action = removeContacts(payload);
    dispatch(action);
  };

  return (
    <ContactsContainer>
      {getFilteredContacts.map(({ name, number, id }) => (
        <ContactEl key={id}>
          <span>{name}:</span> <span>{number}</span>
          <button
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </ContactEl>
      ))}
    </ContactsContainer>
  );
};
