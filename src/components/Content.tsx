import { MovieCard } from './MovieCard';

import { useMovie } from '../hooks/useMoviesContext';

import '../styles/content.scss';

export function Content() {
  // Complete aqui
  const { movies, selectedGenre } = useMovie();

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}