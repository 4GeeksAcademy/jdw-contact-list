const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            getContacts: async () => {
                try {
                    const response = await fetch('https://playground.4geeks.com/apis/fake/contact/');
                    if (!response.ok) {
                        throw new Error('Failed to fetch contacts');
                    }
                    const data = await response.json();
                    setStore({ contacts: data });
                } catch (error) {
                    console.error('Error fetching contacts:', error);
                }
            },
            addContact: async (newContact) => {
                try {
                    const response = await fetch('https://playground.4geeks.com/apis/fake/contact/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newContact)
                    });
                    if (!response.ok) {
                        throw new Error('Failed to add contact');
                    }
                    // Assuming the response contains the newly added contact data
                    const addedContact = await response.json();
                    // Update the store with the new contact
                    setStore(prevStore => ({
                        contacts: [...prevStore.contacts, addedContact]
                    }));
                } catch (error) {
                    console.error('Error adding contact:', error);
                }
            },
            updateContact: async (updatedContact) => {
                try {
                    const response = await fetch('https://playground.4geeks.com/apis/fake/contact/{contact_id}', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (!response.ok) {
                        throw new Error('Failed to update contact');
                    }
                    // Assuming the response contains the updated contact data
                    const updatedData = await response.json();
                    // Update the store with the updated contact
                    setStore(prevStore => ({
                        contacts: prevStore.contacts.map(contact =>
                            contact.id === updatedData.id ? updatedData : contact
                        )
                    }));
                } catch (error) {
                    console.error('Error updating contact:', error);
                }
            },
            deleteContact: async (contactId) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/{contact_id}`, {
                        method: 'DELETE'
                    });
                    if (!response.ok) {
                        throw new Error('Failed to delete contact');
                    }
                    // Update the store by removing the deleted contact
                    setStore(prevStore => ({
                        contacts: prevStore.contacts.filter(contact =>
                            contact.id !== contactId
                        )
                    }));
                } catch (error) {
                    console.error('Error deleting contact:', error);
                }
            }
        }
    };
};

export default getState;
