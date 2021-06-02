import Product from "components/Product";
import { Component } from "react";
import { withRouter } from "react-router-dom";

class Home extends Component {

  render() {
    return (
      <div>
        <Product />
      </div>
    );
  }
};

export default withRouter(Home);