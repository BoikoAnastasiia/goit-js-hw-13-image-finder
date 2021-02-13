import './styles.css';
import newsService from './js/apiService';
import renderMurkup from './js/updateMarkup';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  newsService.query = form.elements.query.value;

  refs.articlesContainer.innerHTML = '';

  newsService.resetPage();
  fetchPics();
  form.reset();
});

refs.loadMoreBtn.addEventListener('click', fetchPics);

function fetchPics() {
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spin.classList.remove('sr-only');
  newsService
    .fetchPics()
    .then(articles => {
      renderMurkup(articles);
      refs.loadMoreBtn.classList.remove('is-hidden');

      window.scrollTo({
        top: 1000000000,

        behavior: 'smooth',
      });
    })
    .finally(() => refs.spin.classList.add('sr-only'));
}
