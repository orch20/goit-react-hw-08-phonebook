import React, { Component } from 'react'
import { FormContacts } from './FormContacts/FormContacts'
import { RenderContactsList } from './RenderContactsList/RenderContactsList'
import { Filter } from './Filter/Filter'
import { Container } from './Container.styled'
import { nanoid } from 'nanoid'

export class App extends Component {
state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: ''
}
    
    filterChange = (event) => {
        this.setState({ filter: event.target.value })
    }

    getFilteredContacts = () => {
        const { contacts, filter } = this.state
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
     
    deleteContact = (id) => { 
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter(contact => contact.id !== id)
        }));
    }
    
        
    formSubmitHandler = (data) => {
        const { contacts } = this.state
        data.id = nanoid(5)

        const findingSimilarContact = contacts.find(contact => contact.name === data.name)

        if (findingSimilarContact) {
            alert('Contact already exists')
        } else {
            this.setState((preState) => {
                return {
                    contacts: [...preState.contacts, data]
                }
            
            })
        }
    }

    
    render() {
        const { filter } = this.state
        const filteredContacts = this.getFilteredContacts()
            return (
            <Container>
            <h1>Phonebook</h1>        
            <FormContacts onSubmitProp={this.formSubmitHandler } />
            <h2>Contacts</h2>
            <Filter value={filter} onFilterChange={this.filterChange} />
            <>
            <RenderContactsList contactsList={filteredContacts} onDeleteContact={this.deleteContact} />
            </>
            </Container>    
        )
        }
    }




