const search = (state = {}, action) => {
  if (!action || !action.type) {
    return state
  }
    switch (action.type) {
    case 'SEARCH':
      let newState = state
      newState.searchTerm = action.searchTerm
      return newState
  }
  return state
}

export default search
