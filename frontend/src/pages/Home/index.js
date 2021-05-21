import Products from "components/Products";
import { Component } from "react";
import { withRouter } from "react-router-dom";


class Home extends Component {

  render() {
    return (
      <div>
          <Products />
      </div>
    );
  }
};

export default withRouter(Home);