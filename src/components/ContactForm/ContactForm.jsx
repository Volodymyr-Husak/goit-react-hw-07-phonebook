import css from './ContactForm.module.css';

import { getContacts } from '../../redux/selectors'; //redux
import { useSelector } from 'react-redux'; //redux
import { useDispatch } from 'react-redux'; //redux
// import { useEffect } from 'react';
// import { fetchContacts } from '../../redux/operations';

import { addContact } from '../../redux/operations';

export const ContactForm = () => {
  const contacts = useSelector(getContacts); //redux

  const dispatch = useDispatch(); //redux

  const handleOnSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    let presenceContact = false;
    // console.log(contacts);

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
      // console.log('11111', String(form.name.value, form.number.value));
      // console.log('22222', form.name.value, String(form.number.value));
      // console.log(addContact);
      // dispatch(fetchUsers({ status: 'active', sortBy: 'name' }));
      // dispatch(addContact(form.name.value, String(form.number.value)));
      dispatch(addContact({ name: form.name.value, phone: form.number.value }));
      form.reset();
    }
  };
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <div className={css.form}>
      <form onSubmit={handleOnSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // onChange={handleOnInputChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // onChange={handleOnInputChange}
          />
        </label>

        <button className={css.btn} type="submit">
          Add contacts
        </button>
      </form>
    </div>
  );
};
