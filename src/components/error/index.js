import React from 'react';
import './style.css';
import { ERROR_MESSAGE } from '../constants';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <p className='errorMessage'>{ERROR_MESSAGE}</p>
      )
    }
    return this.props.children;
  }
}
