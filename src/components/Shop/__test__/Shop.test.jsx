import { render, screen, fireEvent } from '@testing-library/react';
import Shop from '../Shop';
import products from '../../../data/data';

const mockHandleAddToCart = jest.fn();

describe('Shop', () => {
  test('renders as many products as there ar in data file', () => {
    render(<Shop handleAddToCart={mockHandleAddToCart} />);
    const renderedProducts = screen.getAllByTestId(/product-/i);
    expect(renderedProducts.length).toBe(products.length);
  });

  test('calls handleAddToCart on add to cart button click', () => {
    render(<Shop handleAddToCart={mockHandleAddToCart} />);
    const addToCartButtons = screen.getAllByRole('button', {
      name: 'Add to cart',
    });
    fireEvent.click(addToCartButtons[0]);
    expect(mockHandleAddToCart).toBeCalled();
  });
});
