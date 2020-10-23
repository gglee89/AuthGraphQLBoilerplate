import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { Router, IndexRoute, Route, HashHistory } from 'react-router';

// Apollo
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

// Components
import App from './components/App'

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id  
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={HashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
