import styles from "./button.module.css";
import React from "react";

class Button extends React.Component {
  render() {
    const { onClick, name, type = "button" } = this.props;

    return (
      <div>
        <button type={type} onClick={onClick} className={styles.button}>
          {name}
        </button>
      </div>
    );
  }
}

export default Button;
