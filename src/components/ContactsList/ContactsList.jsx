import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactCard } from 'components/ContactCard';

export function ContactsList() {
  const contactsFromState = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  let filteredContacts = [...contactsFromState];

  const getFilteredContacts = filterValue => {
    const normalizedValue = filterValue.trim().toLowerCase();

    return (filteredContacts = contactsFromState
      .filter(contact => contact.name.toLowerCase().includes(normalizedValue))
      .sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      ));
  };

  getFilteredContacts(filterValue);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactCard key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
}
