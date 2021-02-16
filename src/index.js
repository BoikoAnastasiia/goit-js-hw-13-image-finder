import './styles.css';
import apiService from './js/apiService';
import renderMarkup from './js/updateMarkup';
import refs from './js/refs';
import infinityScroll from './js/scroll';
import lightBox from './js/lightbox';

refs.searchForm().addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;

  apiService.searchQuery = form.elements.query.value;

  refs.galleryContainer().innerHTML = '';
  apiService.resetPage();
  fetchPics();
  lightBox();
  form.reset();
});

infinityScroll();

function fetchPics() {
  refs.spin().classList.remove('is-hidden');
  apiService
    .fetchPics()
    .then(pics => {
      renderMarkup(pics);
    })
    .finally(() => refs.spin().classList.add('is-hidden'));
}

export default fetchPics;
