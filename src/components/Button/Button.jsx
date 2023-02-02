import styles from "./button.module.css";
import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className={styles.button}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;
