import styles from "./textarea.module.css";
import React from "react";

class Textarea extends React.Component {
  render() {
    return (
      <div className={styles.textareaContainer}>
        <label className={styles.label}>{this.props.placeholder}:</label>
        <textarea
          rows="7"
          className={styles.textarea}
          placeholder={this.props.placeholder}
        ></textarea>
      </div>
    );
  }
}

export default Textarea;
