import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageList = ({ items, onClick }) => {
  return (
    <>
      {' '}
      <ul className="gallery">
        {items.map(item => (
          <ImageGalleryItem
            key={item.id}
            imageURL={item.webformatURL}
            imageTitle={item.tags}
            onClick={onClick}
          />
        ))}
      </ul>
      ;
    </>
  );
};
