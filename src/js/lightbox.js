import * as basicLightbox from 'basiclightbox';
import refs from './refs';

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

const modalPicShow = () => {
  refs.modalContainer.addEventListener('click', instance.show());
};
