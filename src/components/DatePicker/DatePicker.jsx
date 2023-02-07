import styles from "./datepicker.module.css";
import React, { forwardRef } from "react";

class DatePicker extends React.Component {
  render() {
    const { placeholder, forwardRef, name, error } = this.props;
    return (
      <div className={styles.datePickerContainer}>
        <label className={styles.label}>{placeholder}:</label>
        <input
          ref={forwardRef}
          className={styles.input}
          placeholder={placeholder}
          type="date"
          name={name}
        />
        {!!error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  }
}

export default forwardRef((props, ref) => (
  <DatePicker {...props} forwardRef={ref} />
));
