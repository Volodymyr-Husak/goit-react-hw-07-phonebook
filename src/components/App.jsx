import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { ContactList } from './Contacts/ContactList';

import { ContactsCounter } from './ContactsCounter/ContactsCounter';

export const App = () => {
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
      <ContactsCounter />
      <Section title="Contacts">
        <ContactList />
      </Section>
    </div>
  );
};
