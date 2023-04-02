/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import { DataContext } from '../Components/utils/data.context.jsx';
import Favs from './Favs.jsx';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe('Favs component', () => {
  const mockFavourites = [
    {
      id: 1,
      name: 'Dentist 1',
      location: 'Location 1',
      rating: 4.5,
      isFavourite: true
    },
    {
      id: 2,
      name: 'Dentist 2',
      location: 'Location 2',
      rating: 4.8,
      isFavourite: true
    }
  ];

  const mockDataContext = {
    favourites: mockFavourites,
    handleFavourite: jest.fn(),
    getIsFavourite: jest.fn()
  };

  it('should render the heading', () => {
    const { getByText } = render(
      <DataContext.Provider value={mockDataContext}>
        <BrowserRouter>
          <Favs />
        </BrowserRouter>
      </DataContext.Provider>
    );

    expect(getByText('Favoritos')).toBeInTheDocument();
  });

  it('should render CustomCard components for each favourite dentist', () => {
    mockDataContext.getIsFavourite.mockReturnValue(true);

    const { getAllByLabelText } = render(
      <DataContext.Provider value={mockDataContext}>
        <BrowserRouter>
          <Favs />
        </BrowserRouter>
      </DataContext.Provider>
    );

    const customCards = getAllByLabelText('action-area');

    expect(customCards).toHaveLength(mockFavourites.length);
  });
});
