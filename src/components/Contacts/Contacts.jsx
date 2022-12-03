import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { getFilter } from '../../redux/selectors';

import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/operations';

const getVisibleContacts = (contacts, filter) => {
  if (filter.length === 0) {
    return contacts;
  }
  const contactsArr = contacts;

  const contactsFindArr = contactsArr.filter(({ name }) => {
    const nameContact = name.toLowerCase();
    const nameFilter = filter.toLowerCase();
    return nameContact.includes(nameFilter);
  });

  return contactsFindArr;
};

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = e => {
    const currentId = e.currentTarget.id;
    dispatch(deleteContact(currentId));
  };

  const visibleContacts = getVisibleContacts(contacts, filter);

  return visibleContacts.map(({ name, phone, id }) => (
    <li className={css.contact_item} key={id}>
      <span>
        &#10032; {name}: {phone}
      </span>
      <button className={css.btn} onClick={handleDelete} id={id}>
        Delete
      </button>
    </li>
  ));
};
