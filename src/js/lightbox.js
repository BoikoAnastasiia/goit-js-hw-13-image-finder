import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';
import refs from './refs';

const lighBox = () => {
  refs.lightBox.addEventListener('click', () => {
    basicLightbox
      .create(
        `
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`,
      )
      .show();
  });
};
export default lighBox;
