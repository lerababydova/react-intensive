import React from "react";
import styles from "./formResult.module.css";

const FormResult = ({
  name,
  surname,
  dateOfBirth,
  phone,
  website,
  aboutMe,
  stack,
  projectInfo,
}) => {
  return (
    <div className={styles.container}>
      <h1>
        {name} {surname}
      </h1>
      <p>
        Date Of Birth: <p>{dateOfBirth}</p>
      </p>
      <p>
        Phone: <p>{phone}</p>
      </p>
      <p>
        Website: <p>{website}</p>
      </p>
      <p>
        About Me: <p>{aboutMe}</p>
        <p></p>
      </p>
      <p>
        Stack: <p>{stack}</p>
      </p>
      <p>
        Project Info: <p>{projectInfo}</p>
      </p>
    </div>
  );
};

export default FormResult;
