import styles from "./input.module.css";
import React, { useMemo } from "react";

const Phone = ({ placeholder, name, error, value, onChange }) => {
  const _value = useMemo(() => {
    const v = value.replace(/\D+/g, "");
    const maskValue = v.replace(/(\d{1})(\d{4})(\d{2})(\d{2})/, "$1-$2-$3-$4");

    return maskValue;
  }, [value]);

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{placeholder}:</label>
      <input
        value={_value}
        className={styles.input}
        placeholder={placeholder}
        type="tel"
        name={name}
        onChange={onChange}
        maxLength={12}
      />
      {!!error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default Phone;
