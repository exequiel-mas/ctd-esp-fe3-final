/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Detail from './Detail.jsx';
import { DataContext } from '../Components/utils/data.context.jsx';
import '@testing-library/jest-dom';

const dentistData = {
  data: {
    name: 'Exequiel',
    username: 'exequiel25',
    email: 'exe.gmail.com',
    phone: '123-456-7890',
    website: 'www.exe.com'
  }
};

const mockGetDentist = jest.fn();

describe('Detail component', () => {
  it('renders the component correctly', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <DataContext.Provider value={{ getDentist: mockGetDentist, dentist: dentistData }}>
          <Detail />
        </DataContext.Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(mockGetDentist).toHaveBeenCalledTimes(1);
      expect(getByText('Exequiel')).toBeInTheDocument();
      expect(getByText('exequiel25')).toBeInTheDocument();
      expect(getByText('exe.gmail.com')).toBeInTheDocument();
      expect(getByText('123-456-7890')).toBeInTheDocument();
      expect(getByText('www.exe.com')).toBeInTheDocument();
    });
  });
});
