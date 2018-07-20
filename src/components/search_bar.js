import React, { Component } from 'react'; // removed React.Component and added { Component }

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
      return (
        <div className="search-bar">
          <input
            value = {this.state.term}
            onChange={(event) => this.onInputChange(event.target.value)} />
        </div>

      );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
    
  }
}

export default SearchBar;
