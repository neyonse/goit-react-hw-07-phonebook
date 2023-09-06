import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Section } from './Section';
import { AddContactForm } from './AddContactForm';
import { Filter } from './Filter';
import { ContactsList } from './ContactsList';

export function App() {
  useEffect(() => {
    fetchContacts();
  }, []);

  const contactsFromState = useSelector(selectContacts);

  return (
    <div className="main-wrapper">
      <Section className="addContactSection" title="Phonebook">
        <AddContactForm />
      </Section>
      {contactsFromState.length !== 0 && (
        <Section className="contactListSection" title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      )}
    </div>
  );
}
