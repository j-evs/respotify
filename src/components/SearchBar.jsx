import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchItem: event.target.value,
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.getAlbums(this.state.searchItem);
    }
  }

  render() {
    return <input onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />;
  }
}

SearchBar.propTypes = {
  getAlbums: React.PropTypes.func.isRequired,
};

export default SearchBar;
