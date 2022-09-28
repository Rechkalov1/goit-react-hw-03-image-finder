export const ImageGalleryItem = ({
  imageURL,
  imageTitle,
  largeImageURL,
  onClick,
}) => {
  return (
    <li
      className="gallery-item"
      onClick={() => {
        onClick({ largeImageURL, imageTitle });
      }}
    >
      <img src={imageURL} alt={imageTitle} />
    </li>
  );
};
