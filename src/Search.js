import React, { Component } from 'react';
import { connect } from 'react-redux'

class Search extends Component {

  render() {
    const { onSubmit } = this.props

    return (<div>
      <input type='text' id='search-bar'></input>
      <button id='submit-button' onClick={onSubmit}>Submit</button>
    </div>)
  }
}

export default Search
