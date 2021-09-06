import s from "./Filter.module.css";
import PropTypes from "prop-types";

function Filter({ value, onInputChange }) {
  return (
    <>
      <label className={s.label}>
        Filter:
        <input
          name="filter"
          value={value}
          onChange={onInputChange}
          className={s.input}
        ></input>
      </label>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
}

export default Filter;
