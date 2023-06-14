import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Aumente Suas Vendas Em Até 50% Mentoria Personalizada de 30 minutos/i);
  expect(linkElement).toBeInTheDocument();
});
