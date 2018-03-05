import React, { Component } from 'react'

class SearchBar extends Component{
  handleUpdate = (event) => {
    // console.log(event.target.value);
    this.props.search(event.target.value)
  }
  render(){
    return(
      <div className="search">
        <span className="fa fa-search"></span>
        <input type="text" className="form-search" onChange={this.handleUpdate} />
      </div>
      );
  }
}

export default SearchBar;

