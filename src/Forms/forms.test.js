import React from 'react';
import ReactDOM from 'react-dom';
import MovieForm from './MovieForm';
import BooksForm from './BookForm';
import TvForm from './TvForm';
import RestaurantForm from './RestaurantForm';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BooksForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TvForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RestaurantForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});