import gallery_list from '../templates/gallery_list.hbs';

const refs = {
  articlesContainer: document.querySelector('.js-articles'),
};

function renderMurkup(pics) {
  const markup = gallery_list(pics);
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

export default renderMurkup;
