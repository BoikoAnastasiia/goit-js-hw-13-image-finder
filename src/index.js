import './styles.css';
import apiService from './js/apiService';
import renderMurkup from './js/updateMarkup';
import refs from './js/refs';
import infinityScroll from './js/scroll';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;

  apiService.searchQuerry = form.elements.query.value;

  refs.galleryContainer.innerHTML = '';
  apiService.resetPage();
  fetchPics();
  form.reset();
});

infinityScroll();

function fetchPics() {
  refs.spin.classList.remove('is-hidden');
  apiService
    .fetchPics()
    .then(pics => {
      renderMurkup(pics);
    })
    .finally(() => refs.spin.classList.add('is-hidden'));
}

export default fetchPics;
