import React, { Component } from 'react';
import { hashHistory } from 'react-router';

// Components
import AuthForm from './AuthForm';

// GraphQL
import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    }
  }

  componentDidUpdate(nextProps) {
    if (this.props.data.user && !nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    })
  }

  render() {
    return (
      <div>
        <h3>Signup</h3>
        <AuthForm 
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />  
      </div>
    )
  }
}

export default graphql(query)(
  graphql(mutation)(SignupForm)
);