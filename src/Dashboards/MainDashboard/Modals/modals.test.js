import React from 'react';
import ReactDOM from 'react-dom';
import AddModal from './AddModal';
import ViewButtons from './ViewButtons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewButtons />, div);
  ReactDOM.unmountComponentAtNode(div);
});
