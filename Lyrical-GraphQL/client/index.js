import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList  from './components/songList';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/app'
const client = new ApolloClient({dataIdFromObject: o=> o.id});
import CreateSong from './components/createSong';
import SongDetail from './components/songDetail';

const Root = () => {
  return <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="/songs/create" component={CreateSong} />
          <Route path="/songs/:id" component={SongDetail} />
        </Route>
      </Router>
  </ApolloProvider>
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
