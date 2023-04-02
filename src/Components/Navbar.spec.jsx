import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { ThemeContextProvider } from '../Components/utils/theme.context';
import '@testing-library/jest-dom';

test('renders Navbar with correct links and toggle button', () => {
  render(
    <BrowserRouter>
      <ThemeContextProvider>
        <Navbar />
      </ThemeContextProvider>
    </BrowserRouter>
  );

  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeInTheDocument();
  expect(homeLink.getAttribute('href')).toBe('/home');

  const favsLink = screen.getByRole('link', { name: /favoritos/i });
  expect(favsLink).toBeInTheDocument();
  expect(favsLink.getAttribute('href')).toBe('/favs');

  const contactLink = screen.getByRole('link', { name: /contacto/i });
  expect(contactLink).toBeInTheDocument();
  expect(contactLink.getAttribute('href')).toBe('/contact');

  const toggleButton = screen.getByRole('button', { name: /toggle/i });
  expect(toggleButton).toBeInTheDocument();
});
