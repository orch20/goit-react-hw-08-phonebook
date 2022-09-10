import { ContactsContainer, ContactEl } from './ContactsContainer.styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operation';
// import { removeContacts } from 'redux/contacts/contacts-slice';
import { getFilter } from 'redux/filter/filter-selectors';

export const RenderContactsList = () => {
  const { items } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  console.log('contacts', items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = items.filter(contact =>
    contact.name.toLowerCase()?.includes(filter.toLowerCase())
  );

  const onDeleteContact = payload => {
    // const action = removeContacts(payload);
    // dispatch(action);
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
