import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import css from './ContactsCounter.module.css';
export const ContactsCounter = () => {
  const contacts = useSelector(getContacts);
  const contactsQuantity = contacts.arr.length;

  return (
    <div className={css.contacts_counter}>
      <p>Number of contacts: {contactsQuantity}</p>
    </div>
  );
};
