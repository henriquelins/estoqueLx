import FormAddUser from "components/FormAddUser";
import Header from "components/Header";
import { Component } from "react";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormAddUser />
      </div>
    );
  }
}

export default withRouter(SignUp);
