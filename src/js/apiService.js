import '../styles.css';

const myKey = '3533171-8055817a9c2a16331b7f6fbf1';

export default {
  searchQuerry: '',
  page: 1,

  fetchPics() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${myKey}`;
    const options = { headers: { Authorization: myKey } };

    return fetch(url, options)
      .then(res => res.json())
      .then(({ pics }) => {
        this.page++;
        return pics;
      })
      .catch(error => console.log(error));
  },

  get query() {
    return this.searchQuerry;
  },

  set query(newQuery) {
    this.searchQuerry = newQuery;
  },

  resetPage() {
    this.page = 1;
  },
};
