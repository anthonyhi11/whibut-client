import React from 'react';
import ReactDOM from 'react-dom';
import MainDashboard from './MainDashboard'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});