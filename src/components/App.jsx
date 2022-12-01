import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getIsLoading, getError } from 'redux/selectors';

import { fetchContacts } from 'redux/operations';

import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { ContactList } from './Contacts/ContactList';
// import { ContactsCounter } from './ContactsCounter/ContactsCounter';
// import { Example } from './Example/Example';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
        display: 'block',
      }}
    >
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {/* <ContactsCounter /> */}
      {isLoading && !error && <b>Request in progress...</b>}
      <Section title="Contacts">
        <ContactList />
      </Section>
      {/* <Example /> */}
    </div>
  );
};
