import React, { Component } from "react";
import PropTypes from "prop-types";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    this.setState({ hasError: true });
    console.error(JSON.stringify(error));
  }
  render() {
    if (this.state.hasError) {
      return <h2> Something went wrong.</h2>;
    }
    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node
};

export default ErrorBoundary;
