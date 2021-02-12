const myKey = '3533171-8055817a9c2a16331b7f6fbf1';

export default {
  fetchPics(searchQuery, page = 1) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${myKey}`;

    const options = { headers: { Authorization: myKey } };
    return fetch(url, options)
      .then(res => res.json())
      .then(data => data.articles)
      .catch(error => console.log(error));
  },
};
console.log(fetchPics(lion));
