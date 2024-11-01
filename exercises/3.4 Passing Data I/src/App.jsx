import "./App.css";
import logo from "./assets/react.svg";

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
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Passing Data - Part I</h1>
      </header>
      <ul>
        <h2>Favorite Movies</h2>

        {profiles.map((profile) => {
          const userName = users[profile.userID].name;
          const favMovieName = movies[profile.favoriteMovieID].name;

          return (
            <li key={profile.id}>
              <p>{`${userName}'s favorite movie is "${favMovieName}."`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
