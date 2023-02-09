import styles from "./textarea.module.css";
import React, { useMemo } from "react";

const Textarea = ({
  placeholder,
  name,
  error,
  maxCharCount,
  value,
  onChange,
}) => {
  // const [charsLeft, setCharsLeft] = useState(maxCharCount);

  const charsLeft = useMemo(() => {
    const left = maxCharCount - value.length;

    return left < 0 ? 0 : left;
  }, [maxCharCount, value]);

  return (
    <div className={styles.textareaContainer}>
      <label className={styles.label}>{placeholder}:</label>
      <textarea
        value={value}
        rows="7"
        className={styles.textarea}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      ></textarea>
      {!!error ? (
        <p className={styles.errorMessage}>{error}</p>
      ) : (
        <p className={styles.charsLeftPlaceholder}>
          Осталось {charsLeft}/{maxCharCount} символов
        </p>
      )}
    </div>
  );
};

export default Textarea;
