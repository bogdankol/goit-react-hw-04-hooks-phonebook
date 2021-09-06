import s from "./ContactForm.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

function ContactFrom ({getDataFunc}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')

    const inputHandler = (e) => {
    const { name, value } = e.currentTarget;
    switch(name) {
      case 'name' :
        setName(value)
        break;
      case 'number' :
        setNumber(value)
        break;
      default:
        return;
    }
  };

  const state = {name, number};

  const submitHandler = (e) => {
    e.preventDefault();
    getDataFunc(state);
    reset();
  };

  const  reset = () => {
    setName('');
    setNumber('');
  };

      return (
      <form className={s.form} onSubmit={submitHandler}>
        <label className={s.label}>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={inputHandler}
            className={s.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.label}>
          Number:
          <input
            type="tel"
            name="number"
            onChange={inputHandler}
            value={number}
            className={s.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
}

ContactFrom.propTypes = {
  getDataFunc: PropTypes.func.isRequired,
}

export default ContactFrom;
