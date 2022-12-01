import { Contacts } from './Contacts';
import css from './Contacts.module.css';

import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { getFilter } from '../../redux/selectors';

import { setFilter } from '../../redux/filtersSlice'; //redux
import { useDispatch } from 'react-redux'; //redux
// import { getContacts } from 'redux1/selectors';

export const ContactList = () => {
  // const getVisibleContacts = (contacts, filter) => {
  //   if (filter.length === 0) {
  //     return contacts;
  //   }
  //   const contactsArr = contacts;

  //   const contactsFindArr = contactsArr.filter(({ name }) => {
  //     const nameContact = name.toLowerCase();
  //     const nameFilter = filter.toLowerCase();
  //     return nameContact.includes(nameFilter);
  //   });

  //   return contactsFindArr;
  // };
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  const contacts = useSelector(getContacts); //redux
  // const contacts = fetchContacts();
  // console.log('contacts1', contacts);
  const filter = useSelector(getFilter); //redux
  // const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeFilter}
        />
      </label>
      <ul className={css.contacts_list}>
        <Contacts
          contacts={contacts}
          filter={filter}
          // visibleContacts={visibleContacts}
        />
      </ul>
    </div>
  );
};
