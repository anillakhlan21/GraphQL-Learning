import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList  from './components/songList';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/app'
const client = new ApolloClient({});


const Root = () => {
  return <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
        </Route>
      </Router>
  </ApolloProvider>
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
