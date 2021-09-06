const data = [
  {
    id: "1",
    title: "Test",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    imageURL: "https://via.placeholder.com/150x90",
    duration: "9 mins",
  },
  {
    id: "1",
    title: "Test",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    imageURL: "https://via.placeholder.com/150x90",
    duration: "9 mins",
  },
  {
    id: "1",
    title: "Test",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    imageURL: "https://via.placeholder.com/150x90",
    duration: "9 mins",
  },
  {
    id: "1",
    title: "Test",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    imageURL: "https://via.placeholder.com/150x90",
    duration: "9 mins",
  },
];

export default {
  getAllMovies(callback) {
    // TODO: Fetch from api instead of static data
    callback(data);
  },

  getMovie(id, callback) {
    // TODO: Fetch from api instead of static data
    callback(data[id]);
  },

  addMovie({ title, imageURL, description, duration }, callback) {
    // TODO: Implement following method with fetch API
    // TODO: On successful API call execute callback
  },

  updateMovie(id, { title, imageURL, description, duration }, callback) {
    console.log(id, title, imageURL, description, duration);
    // TODO: Implement following method with fetch API
    // TODO: On successful API call execute callback
  },

  deleteMovie(id, callback) {
    // TODO: Implement following method with fetch API
    // TODO: On successful API call execute callback
  },

  incrementLike(id, callback) {
    
  }
};
