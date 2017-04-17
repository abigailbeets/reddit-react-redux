import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import sinon from 'sinon';
import { shallow } from 'enzyme';

describe('search component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const search = shallow(<Search />, div);
  });

  it('renders a search bar', () => {
    const div = document.createElement('div');
    const search = shallow(<Search />, div);
    const result = search.find('#search-bar')

    expect(result.length).toEqual(1);
    expect(result).toHaveLength(1);
  });

  it('renders a search bar of input type text', () => {
    const div = document.createElement('div');
    const search = shallow(<Search />, div);
    const result = search.find('#search-bar')

    // result.simulate('change', {target: {name: 'search-bar', value: 'Zach and Abby'}})
    //
    // expect(result.text()).toEqual('Zach and Abby');

    expect(result.props().type).toEqual('text')
  });

  it('renders a submit button', () => {
    const div = document.createElement('div');
    const search = shallow(<Search />, div);
    const button = search.find('#submit-button')

    expect(button).toHaveLength(1);
    expect(button.text()).toEqual('Submit')
  });

  it('calls the action when the button is clicked', () => {
    const props = {
      onSubmit: jest.fn()
    }

    const div = document.createElement('div');
    const search = shallow(<Search {...props}/>, div);

    const button = search.find('#submit-button');
    button.simulate('click');

    expect(props.onSubmit).toHaveBeenCalled()
  });

  
});
