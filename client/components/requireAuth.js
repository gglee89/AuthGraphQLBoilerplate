import React, { Component } from 'react';
import { hashHistory } from 'react-router';

// GraphQL
import { graphql } from 'react-apollo';
import currentUserQuery from '../queries/CurrentUser'

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentDidUpdate(nextProps) {
      const { data } = nextProps;

      console.log('REQUIREAUTH');
      console.log(this.props.data, nextProps.data);

      if (!data.loading && !data.user) {
        hashHistory.push('/login')
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  return graphql(currentUserQuery)(RequireAuth);
}
