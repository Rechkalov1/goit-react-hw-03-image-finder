import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/SearchBar';
export class App extends Component {
  state = {
    searchImages: '',
  };
  handleImagesSubmit = searchImages => {
    this.setState({ searchImages });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleImagesSubmit} />
        <ImageGallery searchImages={this.state.searchImages} />
        <ToastContainer />
      </div>
    );
  }
}
