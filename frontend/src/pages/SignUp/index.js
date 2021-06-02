import FormAddUser from "components/FormAddUser";
import Header from "components/Header";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import FooterProduct from "components/FooterProduct";

class SignUp extends Component {
  render() {
    return (
    <>
      <div>
        <Header />
        <FormAddUser />
        <FooterProduct />
      </div>
      </>
    );
  }
}

export default withRouter(SignUp);
