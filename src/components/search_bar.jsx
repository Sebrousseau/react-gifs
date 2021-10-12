import React, { Component } from 'react'

class SearchBar extends Component {
  update = (event) => {
    this.props.searchFunction(event.target.value)
  }

  render() {
    return(
      <input type="text" onChange={this.update}/>
    )
  }
}

export default SearchBar
