import styles from "./input.module.css";
import React from "react";

const Input = ({ placeholder, name, error, onChange, value }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{placeholder}:</label>
      <input
        value={value}
        className={styles.input}
        placeholder={placeholder}
        type="text"
        name={name}
        onChange={onChange}
      />
      {!!error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default Input;
