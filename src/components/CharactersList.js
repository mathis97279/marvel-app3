import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const formatDate = (date) => format(new Date(date), 'MMMM d, yyyy');

export function CharactersList({ characters = [] }) {
  return (
    <ul id="characters">
      {characters.map((character) => (
        <li key={character.id}>
          <Link to={`/characters/${character.id}`} data-testid={`character-link-${character.id}`}>
            <div>
              <strong>{character.name}</strong> - {formatDate(character.modified)}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
