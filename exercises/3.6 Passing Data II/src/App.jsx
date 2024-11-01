import "./App.css";
import logo from "./assets/react.svg";
import MovieCardsList from "./components/MovieCardList";

// Use React and the data below to display a list of users alongside their favorite movies.
// For detailed instructions, refer to Instructions.md.

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1",
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1",
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5",
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2",
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5",
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4",
  },
  {
    id: 7,
    userID: "7",
    favoriteMovieID: "3",
  },
  {
    id: 8,
    userID: "8",
    favoriteMovieID: "2",
  },
  {
    id: 9,
    userID: "9",
    favoriteMovieID: "4",
  },
];

const users = {
  1: {
    id: 1,
    name: "Ash Williams",
    userName: "boomstick",
  },
  2: {
    id: 2,
    name: "Dwight Schrute",
    userName: "assttotheregmgr",
  },
  3: {
    id: 3,
    name: "Laurie Strode",
    userName: "michaelmyers",
  },
  4: {
    id: 4,
    name: "Ellen Ripley",
    userName: "alienhunter",
  },
  5: {
    id: 5,
    name: "Stanley Hudson",
    userName: "pretzelday",
  },
  6: {
    id: 6,
    name: "Creed Bratton",
    userName: "mysteryman",
  },
  7: {
    id: 7,
    name: "Rick Deckard",
    userName: "blade_runner",
  },
  8: {
    id: 8,
    name: "Patrick Bateman",
    userName: "businesscardfan",
  },
  9: {
    id: 9,
    name: "Shaun",
    userName: "zombiekiller",
  },
};

const movies = {
  1: {
    id: 1,
    name: "Scream",
  },
  2: {
    id: 2,
    name: "Aliens",
  },
  3: {
    id: 3,
    name: "Hell Fest",
  },
  4: {
    id: 4,
    name: "Dawn of the Dead",
  },
  5: {
    id: 5,
    name: "Shaun of the Dead",
  },
};

const App = () => {
  const usersByMovie = {};

  // Map the users by the movie they liked
  profiles.forEach((profile) => {
    const movieID = profile.favoriteMovieID;

    if (usersByMovie[movieID]) {
      usersByMovie[movieID].push(profile.userID);
    } else {
      usersByMovie[movieID] = [profile.userID];
    }
  });

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Passing Data - Part II</h1>
      </header>
      <ul>
        <h2>How Popular is Your Favorite Movie?</h2>

        <MovieCardsList movies={movies} users={users} usersByMovie={usersByMovie} />
      </ul>
    </div>
  );
};

export default App;
