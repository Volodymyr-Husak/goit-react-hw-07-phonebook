import css from './ContactForm.module.css';

import { getContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/operations';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleOnSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    let presenceContact = false;

    contacts.map(({ name }) => {
      if (name === form.name.value) {
        form.reset();
        presenceContact = true;
        return alert(`${name} is already in contacts`);
      } else {
        return null;
      }
    });

    if (!presenceContact) {
      dispatch(addContact({ name: form.name.value, phone: form.number.value }));
      form.reset();
    }
  };
  return (
    <div className={css.form}>
      <form onSubmit={handleOnSubmit}>
        <label>
          {/* Name */}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
          />
        </label>
        <label>
          {/* Number */}
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Number"
          />
        </label>

        <button className={css.btn} type="submit">
          Add contacts
        </button>
      </form>
    </div>
  );
};
