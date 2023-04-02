import React, { useState } from 'react';
import { TextField, Button, Typography, Stack } from '@mui/material';
import styled from '@emotion/styled'

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  gap: 1em;
  max-width: 500px;
  margin: 0 auto;
`


const ContactForm = () => {
  const [formData, setFormData] = useState({ fullname: '', email: '' });
  const [formErrors, setFormErrors] = useState({ fullname: '', email: '' });
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitMessage(`Gracias ${formData.fullname} por contactarnos. Te contactaremos cuanto antes via email.`);
      setFormData({ fullname: '', email: '' });
    } else {
      setSubmitMessage('Error: Por favor verifique su información nuevamente');
    }
  };

  const validateForm = () => {
    let errors = {};

    if (formData.fullname.length < 5) {
      errors.fullname = 'El nombre debe tener al menos 5 caracteres';
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'El email debe tener un formato válido';
    }

    return errors;
  };


  return (
      <StyledForm noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Nombre"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            error={formErrors.fullname ? true : false}
            helperText={formErrors.fullname}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={formErrors.email ? true : false}
            helperText={formErrors.email}
          />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Enviar
        </Button>
        <Typography variant="body1" color={submitMessage.includes('Gracias') ? 'primary' : 'error'}>
          {submitMessage}
        </Typography>
        </Stack>
      </StyledForm>
  );
};

export default ContactForm;
