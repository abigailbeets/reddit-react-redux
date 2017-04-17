import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Search from './Search'

describe('App component', () => {
  it('renders a search component', () => {
    const div = document.createElement('div');
    const app = shallow(<App />, div);

    expect(app.find(Search)).toHaveLength(1)
  });

  it('dispatches search action when requested', () => {
    
  })
})
