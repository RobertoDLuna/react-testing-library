import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWitrhRouter/renderWithRouter';
import About from '../pages/About';

describe('Testa o componente About', () => {
  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const verifyHeading = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });
    expect(verifyHeading).toBeInTheDocument();
  });
  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
    renderWithRouter(<About />);
    const firstP = screen
      .getByText(
        /this application simulates a Pokédex, a digital encyclopedia containing all Pokémons/i,
      );

    expect(firstP).toBeInTheDocument();

    const secondP = screen.getByText(
      /one can filter Pokémons by type, and see more details for each one of them/i,
    );
    expect(secondP).toBeInTheDocument();
  });
  it(`Teste se a página contém a seguinte imagem de uma Pokédex 
  "https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png"`, () => {
    renderWithRouter(<About />);
    const img = screen.getByAltText(/Pokédex/i);
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    );
  });
});
