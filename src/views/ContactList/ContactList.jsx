import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import Contact from "components/Contact";
import Filter from "components/Filter";
import Modal from "components/Modal";
import Button from "react-bootstrap/Button";

import { getFilteredContacts } from "redux/contacts/selectors";
import { getContacts } from "redux/contacts/contactsOperations";
import { isLoggedIn } from "redux/auth/authSelectors";

import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const userLogged = useSelector(isLoggedIn);

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal((state) => !state);

  useEffect(() => {
    if (!userLogged) {
      return;
    }
    dispatch(getContacts());
  }, [dispatch, userLogged]);

  return (
    <>
      <Button variant="primary" onClick={toggleModal}>
        Add Contact
      </Button>
      {modal && <Modal onClose={toggleModal}></Modal>}
      <Filter />
      {contacts.length > 0 ? (
        <ul className={s.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.contactList__item}>
              <Contact
                name={name}
                number={number}
                onDelete={() => {
                  console.log("Clicked delete");
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h1>You don't have any contacts yet</h1>
      )}
    </>
  );
};

export default ContactList;
