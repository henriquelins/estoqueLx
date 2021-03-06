import Footer from "components/Footer";
import Header from "components/Header";
import Login from "components/Login";
import { Component } from "react";
import { withRouter } from "react-router-dom";

class SignIn extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default withRouter(SignIn);
