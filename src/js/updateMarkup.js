import gallery_list from '../templates/gallery_list.hbs';
import refs from './refs';

function renderMurkup(pics) {
  const markup = gallery_list(pics);
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

export default renderMurkup;
