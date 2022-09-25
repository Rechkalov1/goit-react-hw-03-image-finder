import { Component } from 'react';
import axios from 'axios';
export default class SearchBar extends Component {
  state = {
    items: [],
    loading: false,
    erros: null,
    page: 1,
  };
  componentDidMount() {
    this.fetchPosts();
  }
  fetchPosts() {
    const { page } = this.state;
    this.setState({ loading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=cat&page=${page}&key=29222910-b478f7ced416d0dc238ac2c9c&image_type=photo&orientation=horizontal&per_page=12&`
      )
      .then(({ data }) => {
        this.setState(({ items }) => {
          return {
            items: [...items, ...data],
          };
        });
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    // const { items, loading, error } = this.state;
    return (
      <header class="searchbar">
        <form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
