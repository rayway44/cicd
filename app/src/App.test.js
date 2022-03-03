import { render, screen } from '@testing-library/react';
import App from './App';
import textReplace from './unit-test'

test(`removes special characters reformatting '$hello world' to hello world`,() => {
  expect(textReplace('$hello world')).toBe('hello world');
})

// in link element variable the test is looking for 'learn react' to be rendered in the DOM
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Header/i);
//   expect(linkElement).toBeInTheDocument();
// });

// in link element the test is looking for 'learn react' to be rendered in the DOM
test('looks for stuart', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

// in link element the test is looking for 'learn react' to be rendered in the DOM
describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Mission 04/i)).toBeInTheDocument();
  });
});
