import React, { useState } from 'react';
import { ContactForm, ContactInput, Button } from './FormContacts.styled';

const RegisterForm = ({ formSubmitHandler }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = { name, email, password };

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
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('Something wrong');
        break;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
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
        Email
        <ContactInput
          type="email"
          name="email"
          value={email}
          required
          onChange={onChange}
        />
      </label>
      <label>
        Password
        <ContactInput
          type="password"
          name="password"
          value={password}
          required
          onChange={onChange}
        />
      </label>
      <Button type="submit">Sign up</Button>
    </ContactForm>
  );
};

export default RegisterForm;
