import { Contacts } from './Contacts';
import css from './Contacts.module.css';

import { setFilter } from '../../redux/filterSlice'; //redux
import { useDispatch } from 'react-redux'; //redux

export const ContactList = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

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
        <Contacts />
      </ul>
    </div>
  );
};
