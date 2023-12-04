import { format, parseISO } from 'date-fns';

function CharacterDetail({ character = {} }) {
  const formattedDate = character.modified
    ? format(parseISO(character.modified), 'MMMM d, yyyy')
    : '';

  return (
    <div>
      <h2>{character.name}</h2>
      {character.thumbnail && (
        <img
          src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`}
          alt={character.name}
        />
      )}
      <p>{character.description}</p>
      <p>{formattedDate}</p>
    </div>
  );
}

export default CharacterDetail;
