import styles from "./datepicker.module.css";
import React from "react";

class DatePicker extends React.Component {
  render() {
    return (
      <div className={styles.datePickerContainer}>
        <label className={styles.label}>{this.props.placeholder}:</label>
        <input
          className={styles.input}
          placeholder={this.props.placeholder}
          type="date"
        />
      </div>
    );
  }
}

export default DatePicker;
