import React, { Component, lazy, Fragment, Suspense } from "react";

//import Login from "../Components/Login";

const LoginComp = lazy(() => import("../Components/Login"));

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: 0
    };
  }

  renderContainer = () => {
    return (
      <div>
        <Suspense fallback={<p>Loading...</p>}>{this.renderContent()}</Suspense>
      </div>
    );
  };

  renderContent = () => {
    const { stage } = this.state;
    let contentReturn;
    if (stage === 0) {
      contentReturn = <LoginComp />;
    }

    return contentReturn;
  };

  render() {
    return (
      <Fragment>
        <p>Hello World</p>
        {this.renderContainer()}
      </Fragment>
    );
  }
}
