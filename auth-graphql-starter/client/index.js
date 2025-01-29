import React from 'react';
import ReactDOM from 'react-dom';
import HomeComponent from './components/home';

const Root = () => {
  return (
    <div>
      <HomeComponent />
    </div>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
