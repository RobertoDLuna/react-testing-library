import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWitrhRouter/renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const verifyHeading = screen.getByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2,
    });
    expect(verifyHeading).toBeInTheDocument();
  });
  it('Teste se é exibido o próximo pokémon quando clica no botao proximo', () => {
    renderWithRouter(<App />);
    const btnNext = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(btnNext);
    expect(btnNext).toBeInTheDocument();
    userEvent.click(btnNext);
    expect(btnNext).toBeInTheDocument();
  });
  it('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);
    const allPokemons = screen.getAllByRole('link', { name: /more details/i });
    expect(allPokemons.length).toBe(1);
  });
  it('Testa se botão All está sempre visível', () => {
    renderWithRouter(<App />);
    const btnAllIsVisible = screen.getByRole('button', { name: /all/i });
    userEvent.click(btnAllIsVisible);
    expect(btnAllIsVisible).toBeInTheDocument();
  });
  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: /all/i });
    const EletricButton = screen.getByRole('button', { name: /electric/i });
    const fireButton = screen.getByRole('button', { name: /fire/i });
    const bugButton = screen.getByRole('button', { name: /bug/i });
    const poisonButton = screen.getByRole('button', { name: /poison/i });
    const psychicButton = screen.getByRole('button', { name: /psychic/i });
    const normalButton = screen.getByRole('button', { name: /normal/i });
    const dragonButton = screen.getByRole('button', { name: /dragon/i });

    expect(allButton).toBeInTheDocument();
    expect(EletricButton).toBeInTheDocument();
    expect(fireButton).toBeInTheDocument();
    expect(bugButton).toBeInTheDocument();
    expect(poisonButton).toBeInTheDocument();
    expect(psychicButton).toBeInTheDocument();
    expect(normalButton).toBeInTheDocument();
    expect(dragonButton).toBeInTheDocument();
  });
  it('Testa se existe apenas 1 botão para cada filtro', () => {
    renderWithRouter(<App />);
    const allButton = screen.getAllByRole('button', { name: /all/i });
    const electricButton = screen.getAllByRole('button', { name: /electric/i });
    const fireButton = screen.getAllByRole('button', { name: /fire/i });
    const bugButton = screen.getAllByRole('button', { name: /bug/i });
    const poisonButton = screen.getAllByRole('button', { name: /poison/i });
    const psychicButton = screen.getAllByRole('button', { name: /psychic/i });
    const normalButton = screen.getAllByRole('button', { name: /normal/i });
    const dragonButton = screen.getAllByRole('button', { name: /dragon/i });

    expect(allButton).toHaveLength(1);
    expect(electricButton).toHaveLength(1);
    expect(fireButton).toHaveLength(1);
    expect(bugButton).toHaveLength(1);
    expect(poisonButton).toHaveLength(1);
    expect(psychicButton).toHaveLength(1);
    expect(normalButton).toHaveLength(1);
    expect(dragonButton).toHaveLength(1);
  });
  it('Testa se mostra o pokemon do tipo selecionado', () => {
    renderWithRouter(<App />);
    const electricButton = screen.getByRole('button', { name: /electric/i });
    const fireButton = screen.getByRole('button', { name: /fire/i });
    const bugButton = screen.getByRole('button', { name: /bug/i });
    const poisonButton = screen.getByRole('button', { name: /poison/i });
    const psychicButton = screen.getByRole('button', { name: /psychic/i });
    const normalButton = screen.getByRole('button', { name: /normal/i });
    const dragonButton = screen.getByRole('button', { name: /dragon/i });

    userEvent.click(electricButton);
    const pikachu = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(pikachu).toBeInTheDocument();

    userEvent.click(fireButton);
    const charmander = screen.getByRole('img', { name: /charmander sprite/i });
    expect(charmander).toBeInTheDocument();

    userEvent.click(bugButton);
    const caterpie = screen.getByRole('img', { name: /caterpie sprite/i });
    expect(caterpie).toBeInTheDocument();

    userEvent.click(poisonButton);
    const ekans = screen.getByRole('img', { name: /ekans sprite/i });
    expect(ekans).toBeInTheDocument();

    userEvent.click(psychicButton);
    const alakazam = screen.getByRole('img', { name: /alakazam sprite/i });
    expect(alakazam).toBeInTheDocument();

    userEvent.click(normalButton);
    const snorlax = screen.getByRole('img', { name: /snorlax sprite/i });
    expect(snorlax).toBeInTheDocument();

    userEvent.click(dragonButton);
    const dragonair = screen.getByRole('img', { name: /dragonair sprite/i });
    expect(dragonair).toBeInTheDocument();
  });

  it('Testa se ao clicar em all, volta para o inicio com o pikachu ', () => {
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: /all/i });
    userEvent.click(allButton);
    const pikachu = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(pikachu).toBeInTheDocument();
  });
  it('Testa a propriedade dataTestId dos botões', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByTestId('pokemon-type-button');
    const lengthButtons = 7;

    expect(buttons).toHaveLength(lengthButtons);
  });
});
