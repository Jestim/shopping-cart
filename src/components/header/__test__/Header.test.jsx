import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

function MockHeader({ itemLength }) {
  return (
    <BrowserRouter>
      <Header cartItemsLength={itemLength} />
    </BrowserRouter>
  );
}

describe('Header', () => {
  test('header component renders', () => {
    const itemLength = 0;
    render(<MockHeader itemLength={itemLength} />);
    const headingEl = screen.getByRole('heading');
    expect(headingEl.textContent).toBe('Fruit Shop');
  });

  test('renders three nav links', () => {
    const itemLength = 0;
    render(<MockHeader itemLength={itemLength} />);
    const linkEls = screen.getAllByRole('link');
    expect(linkEls.length).toBe(3);
  });

  test('render cart item lengt 3 on cart icon', () => {
    const itemLength = 3;
    render(<MockHeader itemLength={itemLength} />);
    const cartIconBadgeEl = screen.getByTestId('cart-icon-badge');
    expect(cartIconBadgeEl.textContent).toBe('3');
  });
});
