import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWitrhRouter/renderWithRouter';
import pokemons from '../data';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it(`Teste se é exibida na tela a mensagem No favorite pokemon found,
   caso a pessoa não tenha pokémons favoritos;`, () => {
    renderWithRouter(<FavoritePokemons />);
    const notFavorite = screen.getByText(/no favorite pokemon found/i);
    expect(notFavorite).toBeInTheDocument();
  });
  it('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<FavoritePokemons pokemons={ pokemons } />);
    pokemons.forEach((pokemon) => {
      const favorite = screen.getByText(pokemon.name);
      expect(favorite).toBeInTheDocument();
    });
  });
});
