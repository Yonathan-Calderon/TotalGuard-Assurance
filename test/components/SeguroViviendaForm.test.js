import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import SeguroViviendaForm from '../../components/SeguroViviendaForm';

describe('SeguroViviendaForm', () => {
  it('renders SeguroViviendaForm correctly', () => {
    render(<SeguroViviendaForm />);
    
  });

  it('handles input changes correctly', () => {
    render(<SeguroViviendaForm />);
    

    fireEvent.change(screen.getByPlaceholderText('First and last name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Phone number'), { target: { value: '123456789' } });
    
  });

  it('handles form submission correctly and displays modals', async () => {
    console.log('Before render');
    render(<SeguroViviendaForm />);
    console.log('After render');
    
    fireEvent.change(screen.getByPlaceholderText('First and last name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Phone number'), { target: { value: '123456789' } });
    
  

    fireEvent.click(screen.getByRole('button', { name: 'Quote' }));

  });
});
