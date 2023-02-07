import styles from "./textarea.module.css";
import React, { forwardRef } from "react";

class Textarea extends React.Component {
  state = {
    chars_left: this.props.maxCharCount,
  };

  static getDerivedStateFromProps(props, state) {
    if (!props.forwardRef.current) {
      return state;
    }

    const charsLeft =
      props.maxCharCount - props.forwardRef.current.value.length;

    return {
      chars_left: charsLeft >= 0 ? charsLeft : 0,
    };
  }

  handleWordCount = (event) => {
    const charsLeft = this.props.maxCharCount - event.target.value.length;

    this.setState({
      chars_left: charsLeft >= 0 ? charsLeft : 0,
    });
  };

  render() {
    const { placeholder, forwardRef, name, error, maxCharCount } = this.props;
    return (
      <div className={styles.textareaContainer}>
        <label className={styles.label}>{placeholder}:</label>
        <textarea
          ref={forwardRef}
          rows="7"
          className={styles.textarea}
          placeholder={placeholder}
          onChange={this.handleWordCount}
          name={name}
        ></textarea>
        {!!error ? (
          <p className={styles.errorMessage}>{error}</p>
        ) : (
          <p className={styles.charsLeftPlaceholder}>
            Осталось {this.state.chars_left}/{maxCharCount} символов
          </p>
        )}
      </div>
    );
  }
}

export default forwardRef((props, ref) => (
  <Textarea {...props} forwardRef={ref} />
));
