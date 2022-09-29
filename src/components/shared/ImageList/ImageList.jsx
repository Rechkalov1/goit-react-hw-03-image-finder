import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageList.styled';
export const ImageList = ({ items, onClick }) => {
  return (
    <>
      <Ul>
        {items.map(item => (
          <ImageGalleryItem
            key={item.id}
            imageURL={item.webformatURL}
            imageTitle={item.tags}
            largeImageURL={item.largeImageURL}
            onClick={onClick}
          />
        ))}
      </Ul>
      ;
    </>
  );
};
