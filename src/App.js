import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import { connect } from 'react-redux'

const store = configureStore({})

const mapStateToProps = (state) => {
  return {
    store: store,
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (event) => { dispatch ({type: 'SEARCH'})}
  }
}

class App extends Component {
  render() {
    const { onSubmit } = this.props
    return (
      <Provider store={store}>
        <Search onSubmit={onSubmit}/>
      </Provider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
