
import { render, screen } from '@testing-library/react';
import Footer from '../../components/common/Footer';

test('renders Footer component', () => {
    render(<Footer />);
    
    // Verify that the component renders correctly
    expect(screen.getByTestId('total-guard-assurance')).toBeInTheDocument();
    expect(screen.getByText('+1 001 234 5678')).toBeInTheDocument();
    expect(screen.getByText('Request for quote')).toBeInTheDocument();
  });
