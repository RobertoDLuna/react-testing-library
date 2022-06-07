import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWitrhRouter/renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  it('Teste se existe um heading h2 com o texto Page requested not found 😭', () => {
    renderWithRouter(<NotFound />);
    const verifyHeading = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2,
    });
    expect(verifyHeading).toBeInTheDocument();
  });
  it('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getByAltText(
      /Pikachu crying because the page requested was not found/i,
    );
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    );
  });
});
