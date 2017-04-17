import search from './SearchReducer'

describe('Search reducer', () => {
  it('can update search term state', () => {
    const before = {}

    const after = search(before, {type: 'SEARCH', searchTerm:'ZachAbby'})

    expect(after.searchTerm).toEqual("ZachAbby")
  })
})
