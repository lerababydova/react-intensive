import styles from "./input.module.css";
import React, { forwardRef } from "react";

class Phone extends React.Component {
  createMask = (event) => {
    const value = event.target.value.replace(/\D+/g, "");
    const maskValue = value.replace(
      /(\d{1})(\d{4})(\d{2})(\d{2})/,
      "$1-$2-$3-$4"
    );
    this.props.forwardRef.current.value = maskValue;
  };

  render() {
    const { placeholder, forwardRef, name, error } = this.props;
    return (
      <div className={styles.inputContainer}>
        <label className={styles.label}>{placeholder}:</label>
        <input
          ref={forwardRef}
          className={styles.input}
          placeholder={placeholder}
          type="tel"
          name={name}
          onChange={this.createMask}
          maxLength={12}
        />
        {!!error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  }
}

export default forwardRef((props, ref) => (
  <Phone {...props} forwardRef={ref} />
));
