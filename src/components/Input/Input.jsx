import styles from "./input.module.css";
import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div className={styles.inputContainer}>
        <label className={styles.label}>{this.props.placeholder}:</label>
        <input
          className={styles.input}
          placeholder={this.props.placeholder}
          type="text"
        />
      </div>
    );
  }
}

export default Input;
