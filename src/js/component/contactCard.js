import React from 'react';
import { ContactProvider } from './ContactContext';
import ContactList from './ContactList';

const ContactCard = () => {
  return (
    <ContactProvider>
      <div>
        <h1>Contact List App </h1>
        <ContactList />
      </div>
    </ContactProvider>
  );
};

export default ContactCard;
