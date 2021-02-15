import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';
import refs from './refs';

const lightBox = () => {
  basicLightbox.create(
    `
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`,
  );
};

refs.galleryContainer.addEventListener('click', event => {
  const target = event.target;
  target.addEventListener('click', lightBox.show());
});

export default lightBox;
