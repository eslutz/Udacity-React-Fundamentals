import MovieCard from "./MovieCard";

const MovieCardsList = ({ users, movies, usersByMovie }) => {
  const movieCards = Object.keys(movies).map((id) => (
    <MovieCard key={id} users={users} usersWhoLikedMovie={usersByMovie[id]} movieInfo={movies[id]} />
  ));
  return <ul>{movieCards}</ul>;
};

export default MovieCardsList;
