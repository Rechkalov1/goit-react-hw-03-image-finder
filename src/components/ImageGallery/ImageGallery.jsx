import { Component } from 'react';
import { toast } from 'react-toastify';
import { ImageList } from 'components/shared/ImageList/ImageList';
import { Loader } from 'components/shared/Loader/Loader';
import fetchRequest from 'components/services/FetchApi';

export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchImages: '',
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchImages } = this.props;
    if (page > prevState.page) {
      this.fetchImages(searchImages, page);
      return;
    }
    if (prevProps.searchImages !== searchImages && page === prevState.page) {
      this.fetchImages(searchImages, 1);
      this.setState({ page: 1 });
      return;
    }
  }
  async fetchImages(currentName, currentPage) {
    this.setState({ loading: true });
    try {
      const result = await fetchRequest(currentName, currentPage);
      const items = result.hits;
      if (items.length === 0) {
        return toast.warn(
          "We didn't find your request, please try again later"
        );
      }
      if (currentPage === 1) {
        this.setState(() => {
          return {
            images: [...items],
          };
        });
      } else {
        this.setState(({ images }) => {
          return {
            images: [...images, ...items],
          };
        });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }
  onSearch = ({ searchImages }) => {
    this.setState({ searchImages });
  };
  render() {
    const { loading, error, images } = this.state;
    const isImages = Boolean(images.length);

    return (
      <>
        {loading && <Loader />}
        {error && <div>оШИБКА</div>}
        {isImages && <ImageList items={images} />}
      </>
    );
  }
}
