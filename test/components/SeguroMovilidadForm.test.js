import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import SeguroMovilidadForm from '../../components/SeguroMovilidadForm';

describe('SeguroMovilidadForm', () => {
  it('renders SeguroMovilidadForm correctly', () => {
    render(<SeguroMovilidadForm />);
  });

  it('handles input changes correctly', () => {
    render(<SeguroMovilidadForm />);
    fireEvent.change(screen.getByPlaceholderText('First and last name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Phone number'), { target: { value: '123456789' } });
  });

  it('handles form submission correctly and displays modals', async () => {
    render(<SeguroMovilidadForm />);
    fireEvent.change(screen.getByPlaceholderText('First and last name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Phone number'), { target: { value: '123456789' } });
    fireEvent.click(screen.getByRole('button', { name: 'Quote' }));

  });
});
