import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Section } from './Section';
import { AddContactForm } from './AddContactForm';
import { Filter } from './Filter';
import { ContactsList } from './ContactsList';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactsFromState = useSelector(selectContacts);

  return (
    <div className="main-wrapper">
      <Section className="addContactSection" title="Phonebook">
        <AddContactForm />
      </Section>
      {isLoading && !error && (
        <p style={{ textAlign: 'center', color: 'orange' }}>
          Request in progress...
        </p>
      )}
      {error && (
        <p style={{ textAlign: 'center', color: 'red' }}>
          Ooops! Something went wrong, please try again...
        </p>
      )}
      {contactsFromState.length !== 0 && (
        <Section className="contactListSection" title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      )}
    </div>
  );
}
