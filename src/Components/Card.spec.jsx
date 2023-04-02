import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DataContext } from '../Components/utils/data.context';
import CustomCard from './Card';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('CustomCard component', () => {
  const mockDentist = {
    id: 1,
    name: 'Exequiel',
    username: 'exequiel27',
  };

  const mockDataContext = {
    handleFavourite: jest.fn(),
    getIsFavourite: jest.fn(),
  };

  const mockNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
  }));

  beforeEach(() => {
    mockDataContext.getIsFavourite.mockReturnValue(false);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the dentist name', () => {
    render(
      <DataContext.Provider value={mockDataContext}>
        <BrowserRouter>
          <CustomCard dentist={mockDentist} />
        </BrowserRouter>
      </DataContext.Provider>
    );

    expect(screen.getByText(mockDentist.name)).toBeInTheDocument();
  });

  it('should render the dentist username', () => {
    render(
      <DataContext.Provider value={mockDataContext}>
        <BrowserRouter>
          <CustomCard dentist={mockDentist} />
        </BrowserRouter>
      </DataContext.Provider>
    );

    expect(screen.getByText(mockDentist.username)).toBeInTheDocument();
  });

  it('should render the dentist ID', () => {
    render(
      <DataContext.Provider value={mockDataContext}>
        <BrowserRouter>
          <CustomCard dentist={mockDentist} />
        </BrowserRouter>
      </DataContext.Provider>
    );

    expect(screen.getByText(`ID ${mockDentist.id}`)).toBeInTheDocument();
  });

  it('should call handleFavourite when favourite button is clicked', () => {
    mockDataContext.getIsFavourite.mockReturnValue(false);

    render(
      <DataContext.Provider value={mockDataContext}>
        <BrowserRouter>
          <CustomCard dentist={mockDentist} />
        </BrowserRouter>
      </DataContext.Provider>
    );

    const favouriteButton = screen.getByLabelText('favourite-button');

    fireEvent.click(favouriteButton);

    expect(mockDataContext.handleFavourite).toHaveBeenCalledTimes(1);
    expect(mockDataContext.handleFavourite).toHaveBeenCalledWith(
      expect.any(Object),
      mockDentist
    );
  });

});
