import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import fetchRequest from 'components/GalleryAPI/GalleyApi';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    page: 1,
  };

  componentDidMount() {
    this.fetchImages();
  }
  componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchImages();
    }
  }
  async fetchImages() {
    this.setState({ loading: true });
    try {
      const result = await fetchRequest(this.props.searchName, this.state.page);
      const items = result.hits;
      this.setState(({ images }) => {
        return {
          images: [...images, ...items],
        };
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }
  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };
  render() {
    const { images, loading, error } = this.state;
    const isImages = Boolean(images.length);
    const { loadMore } = this;
    return (
      <div>
        {loading && <Loader />}

        {isImages && <ImageGalleryItem images={images} />}
        {error && <div>оШИБКА</div>}
        {isImages && <button onClick={loadMore}>Load More</button>}
      </div>
    );
  }
}
