import React from "react";
import styles from "./formResult.module.css";

class FormResult extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>
          {this.props.name} {this.props.surname}
        </h1>
        <p>
          Date Of Birth: <p>{this.props.dateOfBirth}</p>{" "}
        </p>
        <p>
          Phone: <p>{this.props.phone}</p>{" "}
        </p>
        <p>
          Website: <p>{this.props.website}</p>{" "}
        </p>
        <p>
          About Me: <p>{this.props.aboutMe}</p>
          <p></p>
        </p>
        <p>
          Stack: <p>{this.props.stack}</p>
        </p>
        <p>
          Project Info: <p>{this.props.projectInfo}</p>
        </p>
      </div>
    );
  }
}

export default FormResult;
