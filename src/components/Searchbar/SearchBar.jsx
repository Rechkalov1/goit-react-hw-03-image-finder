import { Component } from 'react';
import { toast } from 'react-toastify';
export default class SearchBar extends Component {
  state = {
    searchImages: '',
  };
  handleNameChange = e => {
    this.setState({ searchImages: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchImages.trim() === '') {
      return toast('введите название фото');
    }
    this.props.onSubmit(this.state.searchImages);
    this.setState({ searchImages: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchImages}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
