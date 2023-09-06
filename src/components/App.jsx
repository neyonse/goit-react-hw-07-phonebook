import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Section } from './Section';
import { AddContactForm } from './AddContactForm';
import { Filter } from './Filter';
import { ContactsList } from './ContactsList';

export function App() {
  const contactsFromState = useSelector(getContacts);

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
