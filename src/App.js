import React from "react";
import FormResult from "./modules/questionnairy/FormResult";
import Form from "./modules/questionnairy/Form";

class App extends React.Component {
  state = {
    userInfo: null,
  };

  onFormSubmit = (userInfo) => {
    this.setState({
      userInfo,
    });
  };

  render() {
    return this.state.userInfo ? (
      <FormResult {...this.state.userInfo} />
    ) : (
      <Form onFormSubmit={this.onFormSubmit} />
    );
  }
}

export default App;
