import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';
import refs from './refs';

const lightBox = () => {
  
  refs.galleryContainer.addEventListener('click', event => {
    const target = event.target;
    // console.log(target);
    // console.log(refs.pic);
      if (target === refs.pic)
      {
      lightBox.show();
    }
  });
    
    basicLightbox.create(
    	"<img width="1400" height="900" src=`${refs.lightBox.getAttribute}`">
	  );
};

export default lightBox;
