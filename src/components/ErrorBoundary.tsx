import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  padding: 17rem 3rem;

  &::before {
    content: '';
    background: url(./bg1.jpg) no-repeat center center/cover;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.65;
    z-index: -1;
  }
`

type PropType = {
  children: React.ReactNode
}

type StateType = {
  hasError: boolean
  error: string
  errorStack: string
}

export default class ErrorBoundary extends React.Component<
  PropType,
  StateType
> {
  constructor(props: PropType) {
    super(props)
    this.state = { hasError: false, error: '', errorStack: '' }
  }

  static getDerivedStateFromError(error: unknown) {
    if (error) {
      return { hasError: true, error: error.toString() }
    }
  }

  componentDidCatch(error: unknown, errorInfo: React.ErrorInfo) {
    if (error) {
      this.setState({ errorStack: errorInfo.componentStack as string })
    }
  }

  render() {
    // console.log(this.state.hasError, this.state.error);
    if (this.state.hasError) {
      return (
        <Container>
          <div style={{ zIndex: 1 }}>
            <h3>{this.state.error}</h3>
            <p>{this.state.errorStack}</p>
          </div>
        </Container>
      )
    }
    return <>{this.props.children}</>
  }
}
