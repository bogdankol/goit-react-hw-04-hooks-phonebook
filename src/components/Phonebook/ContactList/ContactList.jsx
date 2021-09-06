import s from "./ContactList.module.css";
import { Component, useState, useMemo } from "react";
import PropTypes from "prop-types";

function ContactList ({listToRender, onDeleteItem}) {
      return (
      <ul className={s.list}>
        {listToRender.map(({ name, number, id }) => {
          return (
            <li key={id} className={s.item}>
              {name}: {number}
              <button type="button" onClick={() => onDeleteItem(id)} className={s.btn}>
                delete contact
              </button>
            </li>
          );
        })}
      </ul>
    );
}

ContactList.propTypes = {
      listToRender: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    }

export default ContactList;
