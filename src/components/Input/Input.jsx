import styles from "./input.module.css";
import React, { forwardRef } from "react";

class Input extends React.Component {
  render() {
    const { placeholder, forwardRef, name, error } = this.props;
    console.log(this.props);
    return (
      <div className={styles.inputContainer}>
        <label className={styles.label}>{placeholder}:</label>
        <input
          ref={forwardRef}
          className={styles.input}
          placeholder={placeholder}
          type="text"
          name={name}
        />
        {!!error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  }
}

export default forwardRef((props, ref) => (
  <Input {...props} forwardRef={ref} />
));
