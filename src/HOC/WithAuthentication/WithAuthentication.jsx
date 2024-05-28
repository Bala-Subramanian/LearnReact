import React from 'react';

// Higher-Order Component
const WithAuthentication = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const { isAuthenticated, ...otherProps } = this.props;

      if (isAuthenticated) {
        // If authenticated, render the wrapped component
        return (
        <div>
          <WrappedComponent {...otherProps} />
        </div>);

      } else {
        // If not authenticated, render an authentication required message
        return <div>Authentication is required to view this content.</div>;
      }
    }
  };
};

export default WithAuthentication;
