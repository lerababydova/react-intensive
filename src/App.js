import Input from "./components/Input/Input";
import Textarea from "./components/Textarea/Textarea";
import DatePicker from "./components/DatePicker/DatePicker";
import Button from "./components/Button/Button";
import styles from "./App.module.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className={styles.formContainer}>
        <h1>Создание анкеты</h1>
        <div className={styles.formItemsWrapper}>
          <Input placeholder={"Имя"} />
          <Input placeholder={"Фамилия"} />
        </div>
        <div className={styles.formItemsWrapper}>
          <Input placeholder={"Телефон"} />
          <Input placeholder={"Сайт"} />
        </div>

        <DatePicker placeholder={"Дата рождения"} />
        <Textarea placeholder={"О себе"} />
        <div className={styles.formItemsWrapper}>
          <Textarea placeholder={"Стек технологий"} />
          <Textarea placeholder={"Описание последнего проекта"} />
        </div>
        <div className={styles.buttonContainer}>
          <Button name={"Отмена"} />
          <Button name={"Сохранить"} />
        </div>
      </div>
    );
  }
}

export default App;
