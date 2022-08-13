import React, { useState } from 'react';
import { ContactForm, ContactInput, Button } from './FormContacts.styled';

export const FormContacts = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const data = { name, number };

  const OnSubmit = e => {
    e.preventDefault();
    props.onSubmitProp(data);
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

// export class FormContacts extends Component {

//     state = {
//         name: '',
//         number: '',
//     }

//     OnSubmit = (e) => {
//         e.preventDefault()
//         this.props.onSubmitProp(this.state);
//         this.reset();

//     }

//     onChange = (e) => {

//         const { name, value } = e.target
//         this.setState({
//             [name]: value});

//     }

//     reset = () => {
//         this.setState({ name: '', number: '' });
//     }

//     render() {
//         return (
//             <ContactForm onSubmit={this.OnSubmit} >
//                 <label>Name
//                     <ContactInput
//                         type="text"
//                         id={this.state.name}
//                         name="name"
//                         value={this.state.name}
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         onChange={this.onChange}
//                     />
//                 </label>
//                 <label>Number
//                     <ContactInput
//                         type="tel"
//                         name="number"
//                         value={this.state.number}
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         onChange={this.onChange}
//                     />
//                 </label>
//                 <Button type="submit">Add contact</Button>
//             </ContactForm>
//         )
//     }
// }
