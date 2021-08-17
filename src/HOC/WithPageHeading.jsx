import React from "react";

const WithPageHeading = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      document.title = `${this.props.pageHeading}`;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithPageHeading;
