import React, { createRef } from "react";
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
import { TEXTAREA_MAX_LENGTH, DEFAULT_ERROR_STATE } from "./constants";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: DEFAULT_ERROR_STATE,
    };
    this.nameRef = createRef();
    this.surnameRef = createRef();
    this.phoneRef = createRef();
    this.websiteRef = createRef();
    this.aboutMeRef = createRef();
    this.stackRef = createRef();
    this.projectInfoRef = createRef();
    this.dateOfBirthRef = createRef();
  }

  get formValidators() {
    return [
      {
        ref: this.nameRef,
        validators: NAME_VALIDATORS,
      },
      {
        ref: this.surnameRef,
        validators: SURNAME_VALIDATORS,
      },
      {
        ref: this.phoneRef,
        validators: PHONE_VALIDATORS,
      },
      {
        ref: this.websiteRef,
        validators: WEBSITE_VALIDATORS,
      },
      {
        ref: this.aboutMeRef,
        validators: ABOUT_ME_VALIDATORS,
      },
      {
        ref: this.stackRef,
        validators: STACK_VALIDATORS,
      },
      {
        ref: this.projectInfoRef,
        validators: PROJECT_INFO_VALIDATORS,
      },
      {
        ref: this.dateOfBirthRef,
        validators: DATE_OF_BIRTH_VALIDATORS,
      },
    ];
  }

  handleSave = (event) => {
    event.preventDefault();
    let hasAnyErrors = false;

    this.formValidators.forEach((fieldValidation) => {
      const fieldValue = fieldValidation.ref.current.value;
      const fieldValidators = fieldValidation.validators;
      const fieldName = fieldValidation.ref.current.name;
      let error = null;

      for (let i = 0; i < fieldValidators.length; i++) {
        const isValid = fieldValidators[i].validator(fieldValue);

        if (!isValid) {
          error = fieldValidators[i].errorText;
          hasAnyErrors = true;

          break;
        }
      }

      this.setState((prevState) => {
        return {
          errors: {
            ...prevState.errors,
            [fieldName]: error,
          },
        };
      });
    });

    if (!hasAnyErrors) {
      this.props.onFormSubmit({
        name: this.nameRef.current.value,
        surname: this.surnameRef.current.value,
        phone: this.phoneRef.current.value,
        website: this.websiteRef.current.value,
        aboutMe: this.aboutMeRef.current.value,
        stack: this.stackRef.current.value,
        projectInfo: this.projectInfoRef.current.value,
        dateOfBirth: this.dateOfBirthRef.current.value,
      });
    }
  };

  handleCancelClick = () => {
    [
      this.nameRef,
      this.surnameRef,
      this.aboutMeRef,
      this.phoneRef,
      this.websiteRef,
      this.dateOfBirthRef,
      this.projectInfoRef,
      this.stackRef,
    ].forEach((ref) => {
      ref.current.value = "";
    });

    this.setState({ errors: DEFAULT_ERROR_STATE });
  };

  render() {
    console.log(this.state.errors);
    return (
      <form onSubmit={this.handleSave} className={styles.formContainer}>
        <h1>Создание анкеты</h1>
        <div className={styles.formItemsWrapper}>
          <Input
            error={this.state.errors.name}
            ref={this.nameRef}
            name="name"
            placeholder="Имя"
          />
          <Input
            error={this.state.errors.surname}
            ref={this.surnameRef}
            name="surname"
            placeholder="Фамилия"
          />
        </div>
        <div className={styles.formItemsWrapper}>
          <Phone
            ref={this.phoneRef}
            name="phone"
            error={this.state.errors.phone}
            placeholder="Телефон"
          />
          <Website
            ref={this.websiteRef}
            name="website"
            error={this.state.errors.website}
            placeholder="Сайт"
          />
        </div>
        <div className={styles.formItemsWrapper}>
          <DatePicker
            ref={this.dateOfBirthRef}
            name="dateOfBirth"
            placeholder="Дата рождения"
            error={this.state.errors.dateOfBirth}
          />
        </div>
        <Textarea
          ref={this.aboutMeRef}
          name="aboutMe"
          error={this.state.errors.aboutMe}
          placeholder="О себе"
          maxCharCount={TEXTAREA_MAX_LENGTH}
        />
        <div className={styles.formItemsWrapper}>
          <Textarea
            ref={this.stackRef}
            name="stack"
            error={this.state.errors.stack}
            placeholder="Стек технологий"
            maxCharCount={TEXTAREA_MAX_LENGTH}
          />
          <Textarea
            ref={this.projectInfoRef}
            name="projectInfo"
            error={this.state.errors.projectInfo}
            placeholder="Описание последнего проекта"
            maxCharCount={TEXTAREA_MAX_LENGTH}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={this.handleCancelClick} name="Отмена" />
          <Button type="submit" name="Сохранить" />
        </div>
      </form>
    );
  }
}

export default Form;
