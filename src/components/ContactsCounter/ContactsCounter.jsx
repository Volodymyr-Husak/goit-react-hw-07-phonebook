import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import css from './ContactsCounter.module.css';
export const ContactsCounter = () => {
  const contacts = useSelector(getContacts);
  const contactsQuantity = contacts.length;

  return (
    <div className={css.contacts_counter}>
      <p>
        You have <b>{contactsQuantity}</b> contacts.
      </p>
    </div>
  );
};
