import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';
import refs from './refs';

const lightBox = () => {
  refs.galleryContainer.addEventListener('click', () => {
    if (refs.pic.nodeName !== 'IMG') {
      return;
    }

    basicLightbox.create(`${refs.pic.dataset.source}`);
    lightBox.show();
  });
};

export default lightBox;
