import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  padding: 5rem 3rem;
  background: url("./bg1.jpg");

  &::before {
    content: "";
  }
`;

export default class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false, error: null, errorStack: null };
  }

  static getDerivedStateFromError(error) {
    if (error) {
      return { hasError: true, error: error.toString() };
    }
  }

  componentDidCatch(error, errorInfo) {
    if (error) {
      this.setState({ errorStack: errorInfo.componentStack });
    }
  }

  render() {
    // console.log(this.state.hasError, this.state.error);
    if (this.state.hasError) {
      return (
        <Container>
          <h3>{this.state.error}</h3>
          <p>{this.state.errorStack}</p>
        </Container>
      );
    }
    return <>{this.props.children}</>;
  }
}
