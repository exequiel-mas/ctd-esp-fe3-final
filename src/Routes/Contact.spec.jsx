import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact.jsx';
import '@testing-library/jest-dom';


test('renders Contact component', () => {
  const { getByText } = render(<Contact />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText(/Contacto/i)).toBeInTheDocument();
});
