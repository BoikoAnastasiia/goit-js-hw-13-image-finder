import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';
import refs from './refs';

const lightBox = () => {
  refs.galleryContainer.addEventListener('click', event => {
    const target = event.target;
    // console.log(target);
    // console.log(refs.pic);
    if (img.nodeName !== 'IMG') {
        return
        {
      basicLightbox.create(`
    <img src="assets/images/image.png" width="1280" height="854">
`);
      lightBox.show();
    }
  });
};

export default lightBox;
