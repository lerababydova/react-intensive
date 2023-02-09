import React, { useState } from "react";
import FormResult from "./modules/questionnairy/FormResult";
import Form from "./modules/questionnairy/Form";

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  const onFormSubmit = (userInfo) => {
    setUserInfo(userInfo);
  };

  return userInfo ? (
    <FormResult {...userInfo} />
  ) : (
    <Form onFormSubmit={onFormSubmit} />
  );
};

export default App;
