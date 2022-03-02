import { render, screen } from '@testing-library/react';
import App from './App';

// in link element the test is looking for 'learn react' to be rendered in the DOM
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// in link element the test is looking for 'learn react' to be rendered in the DOM
test('looks for stuart', () => {
  render(<App />);
  const linkElement = screen.getByText(/stuart/i);
  expect(linkElement).toBeInTheDocument();
});

// in link element the test is looking for 'learn react' to be rendered in the DOM
describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Getting started with React testing library/i)).toBeInTheDocument();
  });
});
