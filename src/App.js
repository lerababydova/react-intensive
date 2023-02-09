import React, { Fragment, useState } from "react";
import FormResult from "./modules/questionnairy/FormResult";
import Form from "./modules/questionnairy/Form";
import ModalContainer from "./components/Modal/ModalContainer";
import DataHasBeenWritten from "./components/Modal/DataHasBeenWritten";

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isModalOpened, setModalOpened] = useState(false);

  const onFormSubmit = (userInfo) => {
    setUserInfo(userInfo);
    setModalOpened(true);
  };

  const onCloseModal = () => {
    setModalOpened(false);
  };

  return (
    <Fragment>
      {userInfo ? (
        <FormResult {...userInfo} />
      ) : (
        <Form onFormSubmit={onFormSubmit} />
      )}
      {isModalOpened && (
        <ModalContainer onCloseModal={onCloseModal}>
          <DataHasBeenWritten />
        </ModalContainer>
      )}
    </Fragment>
  );
};

export default App;
