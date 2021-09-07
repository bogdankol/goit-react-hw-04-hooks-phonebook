import s from "./Phonebook.module.css";
import {  useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

function Phonebook({ contactsArr, filterInput }) {
  const [contacts, setContacts] = useState(contactsArr);
  const [filter, setFilter] = useState(filterInput);
  const firstRender = useRef(true);

  const mount = () => {
    const storageTodos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(storageTodos);
    if (parsedTodos && parsedTodos.length > 0) {
      return setContacts(parsedTodos);
    }
  };

  useEffect(() => {
    if (firstRender.current) {
      mount();
      firstRender.current = false;
      return;
    }

    localStorage.setItem("todos", JSON.stringify(contacts));
  }, [contacts]);

  const getDataFromContactForm = (data) => {
    const names = contacts.map((el) => el.name);
    if (names.filter((name) => name === data.name).length > 0) {
      return alert(`You've already added this contact to your list!`);
    }
    setContacts((prevState) => [
      ...prevState,
      { ...data, id: shortid.generate() },
    ]);
  };

  const getDataFromFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const deleteHandler = (idToDelete) => {
    setContacts(contacts.filter((el) => el.id !== idToDelete));
  };

  const loweredFilter = filter.toLowerCase();
  const listForRender = contacts.filter((el) =>
    el.name.toLowerCase().includes(loweredFilter)
  );

  return (
    <section className={s.section}>
      <h1>Phonebook</h1>
      <ContactForm getDataFunc={getDataFromContactForm} />

      <h2>Contacts</h2>
      <Filter value={filter} onInputChange={getDataFromFilter} />
      <ContactList listToRender={listForRender} onDeleteItem={deleteHandler} />
    </section>
  );
}

Phonebook.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filterInput: PropTypes.string,
};

export default Phonebook;
