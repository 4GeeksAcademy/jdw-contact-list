import React, { useEffect } from 'react';
import { useContactContext } from './ContactContext';

const ContactList = () => {
  const { state, actions } = useContactContext();
  const { contacts } = state;

  useEffect(() => {
    actions.getContacts();
  }, [actions]);

  const handleDeleteContact = (contactId) => {
    actions.deleteContact(contactId); // 
  };

  const handleUpdateContact = (contactId) => {
    actions.updateContact();
  };
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.image}
            {contact.name} - {contact.email}-{contact.address}-{contact.phone}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
            <button onClick={() => handleUpdateContact(contact.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  ;
};

export default ContactList;
