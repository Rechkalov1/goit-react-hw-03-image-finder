import { Img } from './ImageGalleryItem.styled';

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
      <Img src={imageURL} alt={imageTitle} />
    </li>
  );
};
