//=============== Before ========================
// import { nanoid } from 'nanoid';

// export const addContact = (name, number) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };

// export const setFilter = value => {
//   return {
//     type: 'filter/setFilter',
//     payload: value,
//   };
// };

// ===============================================================================================================
// ===============================================================================================================
// =============================================== After =========================================================

// import { createAction, nanoid } from '@reduxjs/toolkit';

// export const addContact = createAction(
//   'contacts/addContact',
//   (name, number) => {
//     return {
//       payload: {
//         id: nanoid(),
//         name,
//         number,
//       },
//     };
//   }
// );

// export const deleteContact = createAction('contacts/deleteContact');

// export const setFilter = createAction('filter/setFilter');
