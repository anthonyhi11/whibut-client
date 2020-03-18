import React from 'react';
import ReactDOM from 'react-dom';
import BookActivity from './BookActivity';
import MovieActivity from './MovieActivity';
import RestaurantActivity from './RestaurantActivity';
import TvActivity from './TvActivity';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookActivity />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieActivity />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TvActivity />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RestaurantActivity />, div);
  ReactDOM.unmountComponentAtNode(div);
});
