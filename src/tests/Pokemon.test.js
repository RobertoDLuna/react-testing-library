import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWitrhRouter/renderWithRouter';
import App from '../App';

describe('Testando Componente Pokemon', () => {
  it('Testa se é renderizado as informações corretas', () => {
    renderWithRouter(<App />);

    const fireButton = screen.getByRole('button', { name: /fire/i });
    userEvent.click(fireButton);

    const charmander = screen.getByRole('img', { name: /charmander sprite/i });
    const weight = screen.getByText(/average weight: 8.5 kg/i);
    const more = screen.getByRole('link', { name: /more details/i });
    const type = screen.getAllByText(/fire/i);

    expect(charmander).toBeInTheDocument();
    expect(type).toHaveLength(2);
    expect(weight).toBeInTheDocument();
    expect(charmander).toHaveProperty('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png');
    expect(charmander).toHaveProperty('alt', 'Charmander sprite');
    expect(more).toBeInTheDocument();
    expect(more).toHaveProperty('href', 'http://localhost/pokemons/4');

    userEvent.click(more);

    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado/i });

    userEvent.click(checkbox);

    const fav = screen.getByRole('img', { name: /charmander is marked as favorite/i });

    expect(fav).toBeInTheDocument();
    expect(fav).toHaveProperty('src', 'http://localhost/star-icon.svg');
  });
});
