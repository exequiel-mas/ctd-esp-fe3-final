import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ContactForm from './Form.jsx';
import '@testing-library/jest-dom';

describe('ContactForm', () => {
  it('should submit the form when all fields are valid', () => {
    render(<ContactForm />);

    const fullnameInput = screen.getByLabelText('Nombre');
    fireEvent.change(fullnameInput, { target: { value: 'John Doe' } });

    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });

    const submitButton = screen.getByText('Enviar');
    fireEvent.click(submitButton);

    expect(screen.getByText('Gracias John Doe por contactarnos. Te contactaremos cuanto antes via email.')).toBeInTheDocument();
  });

  it('should show error messages when fields are invalid', () => {
    render(<ContactForm />);

    const fullnameInput = screen.getByLabelText('Nombre');
    fireEvent.change(fullnameInput, { target: { value: 'John' } });

    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });

    const submitButton = screen.getByText('Enviar');
    fireEvent.click(submitButton);

    expect(screen.getByText('Error: Por favor verifique su información nuevamente')).toBeInTheDocument();
    expect(screen.getByText('El nombre debe tener al menos 5 caracteres')).toBeInTheDocument();
    expect(screen.getByText('El email debe tener un formato válido')).toBeInTheDocument();
  });
});
