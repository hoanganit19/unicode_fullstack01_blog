import React from "react";
import { StateContext } from "./StateProvider";
const withContext = (ParentComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <StateContext.Consumer>
          {(context) => <ParentComponent {...this.props} store={context} />}
        </StateContext.Consumer>
      );
    }
  };
};

export default withContext;