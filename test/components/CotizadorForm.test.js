// CotizadorForm.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CotizadorForm from '../../components/CotizadorForm';

jest.mock('../../components/SeguroViviendaForm', () => () => <div data-testid="mocked-seguro-vivienda-form">Mocked SeguroViviendaForm</div>);
jest.mock('../../components/SeguroMovilidadForm', () => () => <div data-testid="mocked-seguro-movilidad-form">Mocked SeguroMovilidadForm</div>);

describe('CotizadorForm', () => {
  it('renders CotizadorForm with mocked SeguroViviendaForm', () => {
    render(<CotizadorForm />);

    // Verify that QuoteForm renders correctly
    expect(screen.getByText('Home')).toBeInTheDocument();

    // Verify that SeguroViviendaForm has been mocked and rendered correctly
    expect(screen.getByTestId('mocked-seguro-vivienda-form')).toBeInTheDocument();

    // Verify that the underline style is correct
    expect(screen.getByTestId('underline')).toHaveStyle({ transform: 'translateX(0%)' });
  });

  it('renders CotizadorForm with mocked SeguroMovilidadForm after clicking "Mobility" button', () => {
    // Change the selected form to 'mobility'
    render(<CotizadorForm />);
    // Simulate clicking on the mobility button
    fireEvent.click(screen.getByText('Mobility')); 

    // Verify that CotizadorForm renders correctly with mocked SeguroMovilidadForm
    expect(screen.getByText('Mobility')).toBeInTheDocument();
    expect(screen.getByTestId('mocked-seguro-movilidad-form')).toBeInTheDocument();
    expect(screen.getByTestId('underline')).toHaveStyle({ transform: 'translateX(100%)' });
  });
});
