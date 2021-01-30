import { useSelector, useDispatch } from "react-redux";

import Contact from "components/Contact";
import Filter from "components/Filter";

import { deleteContact } from "redux/contacts/itemsSlice";
import { getFilteredContacts } from "redux/contacts/selectors";

import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <Filter />
      <ul className={s.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.contactList__item}>
            <Contact
              name={name}
              number={number}
              onDelete={() => {
                dispatch(deleteContact(id));
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
