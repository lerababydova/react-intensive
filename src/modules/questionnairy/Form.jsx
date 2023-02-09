import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import DatePicker from "../../components/DatePicker/DatePicker";
import Button from "../../components/Button/Button";
import Phone from "../../components/Input/Phone";
import Website from "../../components/Input/Website";
import {
  NAME_VALIDATORS,
  SURNAME_VALIDATORS,
  PHONE_VALIDATORS,
  WEBSITE_VALIDATORS,
  ABOUT_ME_VALIDATORS,
  STACK_VALIDATORS,
  PROJECT_INFO_VALIDATORS,
  DATE_OF_BIRTH_VALIDATORS,
} from "./utils";
import styles from "./form.module.css";
import {
  TEXTAREA_MAX_LENGTH,
  DEFAULT_FIELD_STATE,
  NAME_FIELD,
  SURNAME_FIELD,
  PHONE_FIELD,
  WEBSITE_FIELD,
  ABOUT_ME_FIELD,
  STACK_FIELD,
  PROJECT_INFO_FIELD,
  DATE_OF_BIRTH_FIELD,
} from "./constants";

const Form = ({ onFormSubmit }) => {
  const [errors, setErrors] = useState(DEFAULT_FIELD_STATE);
  const [fieldValues, setFieldValues] = useState(DEFAULT_FIELD_STATE);

  const handleSave = (event) => {
    event.preventDefault();
    let hasAnyErrors = false;

    const formFields = [
      NAME_FIELD,
      SURNAME_FIELD,
      DATE_OF_BIRTH_FIELD,
      PHONE_FIELD,
      WEBSITE_FIELD,
      ABOUT_ME_FIELD,
      STACK_FIELD,
      PROJECT_INFO_FIELD,
    ];

    for (const name of formFields) {
      const value = fieldValues[name];
      const error = validateField(name, value);

      if (error) {
        hasAnyErrors = true;
      }
    }

    if (!hasAnyErrors) {
      onFormSubmit(fieldValues);
    }
  };

  const handleCancelClick = () => {
    setErrors(DEFAULT_FIELD_STATE);
    setFieldValues(DEFAULT_FIELD_STATE);
  };

  const validate = (validators, value) => {
    for (let i = 0; i < validators.length; i++) {
      const isValid = validators[i].validator(value);

      if (!isValid) {
        return validators[i].errorText;
      }
    }

    return "";
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case NAME_FIELD:
        error = validate(NAME_VALIDATORS, value);
        break;
      case SURNAME_FIELD:
        error = validate(SURNAME_VALIDATORS, value);
        break;
      case PHONE_FIELD:
        error = validate(PHONE_VALIDATORS, value);
        break;
      case WEBSITE_FIELD:
        error = validate(WEBSITE_VALIDATORS, value);
        break;
      case ABOUT_ME_FIELD:
        error = validate(ABOUT_ME_VALIDATORS, value);
        break;
      case STACK_FIELD:
        error = validate(STACK_VALIDATORS, value);
        break;
      case PROJECT_INFO_FIELD:
        error = validate(PROJECT_INFO_VALIDATORS, value);
        break;
      case DATE_OF_BIRTH_FIELD:
        error = validate(DATE_OF_BIRTH_VALIDATORS, value);
        break;
      default:
    }

    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        [name]: error,
      };
    });

    return error;
  };

  const onChangeField = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    validateField(name, value);

    setFieldValues((prevFieldValues) => {
      return {
        ...prevFieldValues,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSave} className={styles.formContainer}>
      <h1>Создание анкеты</h1>
      <div className={styles.formItemsWrapper}>
        <Input
          value={fieldValues.name}
          error={errors.name}
          name="name"
          placeholder="Имя"
          onChange={onChangeField}
        />
        <Input
          value={fieldValues.surname}
          error={errors.surname}
          name="surname"
          placeholder="Фамилия"
          onChange={onChangeField}
        />
      </div>
      <div className={styles.formItemsWrapper}>
        <Phone
          value={fieldValues.phone}
          name="phone"
          error={errors.phone}
          placeholder="Телефон"
          onChange={onChangeField}
        />
        <Website
          value={fieldValues.website}
          name="website"
          error={errors.website}
          placeholder="Сайт"
          onChange={onChangeField}
        />
      </div>
      <div className={styles.formItemsWrapper}>
        <DatePicker
          value={fieldValues.dateOfBirth}
          name="dateOfBirth"
          placeholder="Дата рождения"
          error={errors.dateOfBirth}
          onChange={onChangeField}
        />
      </div>
      <Textarea
        value={fieldValues.aboutMe}
        name="aboutMe"
        error={errors.aboutMe}
        placeholder="О себе"
        maxCharCount={TEXTAREA_MAX_LENGTH}
        onChange={onChangeField}
      />
      <div className={styles.formItemsWrapper}>
        <Textarea
          value={fieldValues.stack}
          name="stack"
          error={errors.stack}
          placeholder="Стек технологий"
          maxCharCount={TEXTAREA_MAX_LENGTH}
          onChange={onChangeField}
        />
        <Textarea
          value={fieldValues.projectInfo}
          name="projectInfo"
          error={errors.projectInfo}
          placeholder="Описание последнего проекта"
          maxCharCount={TEXTAREA_MAX_LENGTH}
          onChange={onChangeField}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={handleCancelClick} name="Отмена" />
        <Button type="submit" name="Сохранить" />
      </div>
    </form>
  );
};

export default Form;
