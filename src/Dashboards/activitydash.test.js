import React from 'react';
import ReactDOM from 'react-dom';
import BooksDashboard from './BooksDashboard'
import MoviesDashboard from './MoviesDashboard';
import TvDashboard from './TvDashboard';
import RestaurantsDashboard from './RestaurantsDashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BooksDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoviesDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RestaurantsDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TvDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});