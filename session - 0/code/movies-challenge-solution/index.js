const http = require("http");
const express = require("express");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

const guid = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2);

const movies = [
  {
    id: "kt3ytv9kmsnc6wpz4q",
    title: "Avengers: Endgame",
    description:
      'The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios\' grand conclusion to twenty-two films, "Avengers: Endgame."',
    imageURL:
      "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/avengers-endgame.jpg",
    duration: 182,
    likes: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "kt3ytv9kmsnc6wpz4r",
    title: "Black Widow",
    description:
      "In Marvel Studios' action-packed spy thriller “Black Widow”, Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
    imageURL:
      "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/black-widow.jpg",
    duration: 135,
    likes: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "kt3yty1qos5cpklbi1s",
    title: "Shang-Chi and The Legend of The Ten Rings",
    description:
      "Marvel Studios' \"Shang-Chi and The Legend of The Ten Rings\" stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng.",
    imageURL:
      "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/shang-chi-and-the-legend-of-the-ten-rings.jpg",
    duration: 132,
    likes: 250,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "kt3yu1329gbbwsrnmbt",
    title: "Eternals",
    description:
      "Marvel Studios' Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been living on Earth in secret for thousands of years. Following the events of Avengers: Endgame, an unexpected tragedy forces them out of the shadows to reunite against mankind's most ancient enemy, The Deviants.",
    imageURL:
      "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/the-eternals.jpg",
    duration: 157,
    likes: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "kt3yu1329gbbwsrnmbu",
    title: "Spider-Man: No Way Home",
    description:
      "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    imageURL:
      "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/spider-man-no-way-home.jpg",
    duration: 157,
    likes: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "kt3yu1329gbbwsrnmbv",
    title: "Doctor Strange in the Multiverse of Madness",
    description:
      "After the events of Avengers: Endgame, Dr. Stephen Strange continues his research on the Time Stone. But an old friend turned enemy seeks to destroy every sorcerer on Earth, messing with Strange's plan and also causing him to unleash an unspeakable evil.",
    imageURL:
      "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/doctor-strange-in-the-multiverse-of-madness.jpg",
    duration: 157,
    likes: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const index = movies.findIndex((x) => x.id == id);
  if (index < 0) {
    return res.status(404).json({
      message: "Movie not found",
    });
  }

  res.json(movies[index]);
});

app.post("/api/movies", (req, res) => {
  const { title, imageURL, description, duration } = req.body;
  if (!title || !imageURL || !description || !duration) {
    return res.status(400).json({
      message: "All inputs Required",
    });
  }

  const item = {
    id: guid(),
    title,
    imageURL,
    description,
    duration,
    likes: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  movies.push(item);
  res.json(item);
});

app.put("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const { title, imageURL, description, duration } = req.body;

  if (!title && !imageURL && !description && !duration) {
    return res.status(400).json({
      message: "At least one parameter required to update movie",
    });
  }

  const index = movies.findIndex((x) => x.id == id);
  if (index < 0) {
    return res.status(404).json({
      message: "Movie not found",
    });
  }

  movies[index].title = title ?? movies[index].title;
  movies[index].imageURL = imageURL ?? movies[index].imageURL;
  movies[index].description = description ?? movies[index].description;
  movies[index].duration = duration ?? movies[index].duration;
  movies[index].updatedAt = new Date();

  res.json(movies[index]);
});

app.put("/api/movies/:id/increment-like", (req, res) => {
  const id = req.params.id;

  const index = movies.findIndex((x) => x.id == id);
  if (index < 0) {
    return res.status(404).json({
      message: "Movie not found",
    });
  }

  movies[index].likes = movies[index].likes + 1;
  movies[index].updatedAt = new Date();
  res.json(movies[index]);
});

app.delete("/api/movies/:id", (req, res) => {
  const id = req.params.id;

  const index = movies.findIndex((x) => x.id == id);
  if (index < 0) {
    return res.status(404).json({
      message: "Movie not found",
    });
  }

  movies.splice(index, 1);
  res.json(movies);
});

http
  .createServer(app)
  .listen(3000, () => console.log("Server started at 3000"));
