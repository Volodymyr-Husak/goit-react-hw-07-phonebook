import css from './Contacts.module.css';
// import { useSelector } from 'react-redux'; //redux
// import { getContacts } from '../../redux/selectors';
// import { getFilter } from '../../redux/selectors';

import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

import { deleteContact, fetchContacts } from '../../redux/operations';
// import { fetchContacts } from 'redux/operations';

const getVisibleContacts = ({ contacts, filter }) => {
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

export const Contacts = (
  contacts,
  filter
  // { visibleContacts }
) => {
  const dispatch = useDispatch();

  let visibleContacts = getVisibleContacts(contacts, filter);

  const handleDelete = e => {
    const currentId = e.currentTarget.id;
    dispatch(deleteContact(currentId));
    visibleContacts = getVisibleContacts(contacts, filter);
    console.log('visibleContacts', visibleContacts);
  };

  // const visibleContacts = getVisibleContacts(contacts, filter);
  // console.log('visibleContacts', visibleContacts);

  return visibleContacts.map(({ name, phone, id }) => (
    <li className={css.contact_item} key={id}>
      <span>
        &#10032; {name}: {phone}
      </span>
      <button className={css.btn} onClick={handleDelete} id={id}>
        Видалити
      </button>
    </li>
  ));
};
