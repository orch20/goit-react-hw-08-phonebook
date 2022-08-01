import React, { Component } from 'react'
import { ContactForm, ContactInput, Button } from './FormContacts.styled'

export class FormContacts extends Component {

    state = {
        name: '',
        number: '',
    }
    


    OnSubmit = (e) => { 
        e.preventDefault()
        this.props.onSubmitProp(this.state);
        this.reset();
        
    }
    
    onChange = (e) => {
        
        const { name, value } = e.target
        this.setState({
            [name]: value});
       
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }
 
    render() {
        return (
            <ContactForm onSubmit={this.OnSubmit} >
                <label>Name
                    <ContactInput
                        type="text"
                        id={this.state.name}
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.onChange}
                    />
                </label>
                <label>Number
                    <ContactInput
                        type="tel"
                        name="number"
                        value={this.state.number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.onChange}
                    />
                </label>    
                <Button type="submit">Add contact</Button>
            </ContactForm>
        )
    }
}