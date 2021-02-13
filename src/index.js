import './styles.css';
import apiService from './js/apiService';
import renderMurkup from './js/updateMarkup';
import spiner from './js/spinner';
import refs from './js/refs';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;

  apiService.query = form.elements.query.value;

  refs.galleryContainer.innerHTML = '';

  apiService.resetPage();
  fetchPics();
  form.reset();
});

refs.loadMoreBtn.addEventListener('click', fetchPics);

function fetchPics() {
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spin.classList.remove('is-hidden');
  apiService
    .fetchPics()
    .then(pics => {
      renderMurkup(pics);
      refs.loadMoreBtn.classList.remove('is-hidden');

      window.scrollTo({
        top: 1000000000,

        behavior: 'smooth',
      });
    })
    .finally(() => refs.spin.classList.add('is-hidden'));
}
