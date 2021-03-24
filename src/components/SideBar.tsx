import { Button } from './Button';

import { useMovie } from '../hooks/useMoviesContext';

import '../styles/sidebar.scss';

export function SideBar() {
  // Complete aqui
  const { genres, handleClickButton, selectedGenreId } = useMovie();
  
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}