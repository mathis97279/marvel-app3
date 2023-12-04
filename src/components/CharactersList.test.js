import { render, screen } from '@testing-library/react';
import { CharactersList } from './CharactersList';
import { BrowserRouter } from 'react-router-dom'


describe('CharactersList', () => {

    it('renders a list of characters', () => {
        // when
        const characters = [
            { id: 1, name: 'Iron Man' },
            { id: 2, name: 'Captain America' },
            { id: 3, name: 'Thor' },
        ];

        // then
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });

        // expect a list with the id "characters" to be in the document
        const characterList = screen.getByRole('list', { id: 'characters' });
        expect(characterList).toBeInTheDocument();

        // expect a listitem for each character
        const characterItems = screen.getAllByRole('listitem');
        expect(characterItems).toHaveLength(characters.length);

        // expect each listitem to have a link to the character detail page
        characterItems.forEach((item, index) => {
            // expect each listitem to have the character name
            expect(item).toHaveTextContent(characters[index].name);

            // expect each listitem to have a link with a unique data-testid
            const link = screen.getByTestId(`character-link-${characters[index].id}`);
            expect(link).toBeInTheDocument();
        });

    });

    it('renders an empty list when no characters are provided', () => {
        // when

        // then
        render(<CharactersList />, { wrapper: BrowserRouter });

        // expect a list with the id "characters" to be in the document
        const characterList = screen.getByRole('list', { id: 'characters' });
        expect(characterList).toBeInTheDocument();

        // expect no listitems
        const characterItems = screen.queryAllByRole('listitem');
        expect(characterItems).toHaveLength(0);
    });

});
