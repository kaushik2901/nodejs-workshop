const url = "http://localhost:3000/api/movies";

export default {
  getAllMovies(callback) {
    // TODO: Fetch from api
    fetch(url)
      .then((res) => res.json())
      .then((data) => callback(data));
  },

  getMovie(id, callback) {
    // TODO: Fetch from api
    fetch(`${url}/${id}`)
      .then((res) => res.json())
      .then((data) => callback(data));
  },

  addMovie(data, callback) {
    // TODO: Implement following method with fetch API
    // TODO: On successful API call execute callback
    fetch(`${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => callback(data));
  },

  updateMovie(id, data, callback) {
    // TODO: Implement following method with fetch API
    // TODO: On successful API call execute callback
    fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => callback(data));
  },

  deleteMovie(id, callback = () => {}) {
    // TODO: Implement following method with fetch API
    // TODO: On successful API call execute callback
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then(() => callback());
  },

  incrementLike(id, callback = () => {}) {
    // TODO: Implement following method with fetch API
    // TODO: On successful API call execute callback
    fetch(`${url}/${id}/increment-like`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => callback(data));
  },
};
