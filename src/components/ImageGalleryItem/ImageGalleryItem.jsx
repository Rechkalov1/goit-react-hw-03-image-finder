export const ImageGalleryItem = ({ images }) => {
  return images.map(({ id, webformatURL, tags }) => (
    <li key={id} className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  ));
};
