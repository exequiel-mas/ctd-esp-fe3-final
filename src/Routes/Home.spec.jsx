/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import { DataContext } from '../Components/utils/data.context.jsx';
import Home from './Home.jsx';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';


describe('Home component', () => {
  const mockDentists = {
    data: [
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
    ]
  }

  const mockDataContext = {
    dentists: mockDentists,
    handleFavourite: jest.fn(),
    getIsFavourite: jest.fn()
  };

  it('should render the heading', () => {
    const { getByText } = render(
      <BrowserRouter>
        <DataContext.Provider value={mockDataContext}>
          <Home />
        </DataContext.Provider>
      </BrowserRouter>
    );

    expect(getByText('Dentistas')).toBeInTheDocument();
  });

  it('should render CustomCard components for each favourite dentist', () => {
    mockDataContext.getIsFavourite.mockReturnValue(true);

    const { getAllByLabelText } = render(
        <BrowserRouter>
      <DataContext.Provider value={mockDataContext}>
          <Home />
      </DataContext.Provider>
        </BrowserRouter>
    );

    const customCards = getAllByLabelText('action-area');

    expect(customCards).toHaveLength(mockDentists.data.length);
  });
});
