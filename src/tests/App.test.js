import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando o componente App.js', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    const linkAbout = screen.getByRole('link', { name: /about/i });
    const linkFavoritePokemon = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavoritePokemon).toBeInTheDocument();
  });
  it(`Teste se a aplicação é redirecionada para a página inicial, 
    na URL / ao clicar no link Home da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    userEvent.click(linkHome);
    expect(history.location.pathname).toBe('/');
  });
  it(`Teste se a aplicação é redirecionada para a página de About,
  na URL /about, ao clicar no link About da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /about/i });
    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');
  });
  it(`Teste se a aplicação é redirecionada para a página de Pokémons Favoritados,
  na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);
    const linkFavoritePokemon = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(linkFavoritePokemon);
    expect(history.location.pathname).toBe('/favorites');
  });
  it(`Teste se a aplicação é redirecionada para a página
  Not Found ao entrar em uma URL desconhecida`, () => {
    const { history } = renderWithRouter(<App />);
    history.push('/xablab');
    const notFound = screen.getByText(/not found/i);
    expect(notFound).toBeInTheDocument();
  });
});
