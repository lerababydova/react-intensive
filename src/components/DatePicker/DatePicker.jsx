import styles from "./datepicker.module.css";
import React from "react";

const DatePicker = ({ placeholder, name, error, onChange, value }) => {
  return (
    <div className={styles.datePickerContainer}>
      <label className={styles.label}>{placeholder}:</label>
      <input
        value={value}
        className={styles.input}
        placeholder={placeholder}
        type="date"
        name={name}
        onChange={onChange}
      />
      {!!error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default DatePicker;
