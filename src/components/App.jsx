import { Component } from 'react';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Searchbar from '../components/Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchImages: '',
  };
  handleSubmitForm = searchImages => {
    this.setState({ searchImages });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageGallery searchImages={this.state.searchImages} />
      </div>
    );
  }
}
