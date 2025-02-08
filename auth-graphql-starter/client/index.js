import React from 'react';
import ReactDOM from 'react-dom';
import HomeComponent from './components/home';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Login from './components/login';
import Signup from './components/signup';
import App from './components/app';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import Dashboard from './components/dashboard';

const client =  new ApolloClient({dataIdFromObject: o=>o.id});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeComponent} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Route>
      </Router>
    </ApolloProvider>

  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
