import React, { useState } from 'react';
import { ContactForm, ContactInput, Button } from './FormContacts.styled';

const RegisterForm = ({ formSubmitHandler }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = { email, password };

  const OnSubmit = e => {
    e.preventDefault();
    formSubmitHandler(data);
    reset();
  };

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
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
    setEmail('');
    setPassword('');
  };

  return (
    <ContactForm onSubmit={OnSubmit}>
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
      <Button type="submit">Sign in</Button>
    </ContactForm>
  );
};

export default RegisterForm;
