import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledWith
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
    });
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('status')).toHaveTextContent(/loading/i);
  });

  test('displays error message when fetching fails', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: new Error('Failed to fetch'),
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('alert')).toHaveTextContent(/failed to fetch/i);
  });

  test('handles user interaction with buttons', () => {
    const mockHandleClick = jest.fn();
    render(
      <CoreFunctionalityComponent
        onClick={mockHandleClick}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(mockHandleClick).toHaveBeenCalled();
  });

  test('ensures accessibility features are correctly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'core functionality button');
    expect(button).toBeEnabled();
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledWith
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
    });
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('status')).toHaveTextContent(/loading/i);
  });

  test('displays error message when fetching fails', () => {
    (useExternalData as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: new Error('Failed to fetch'),
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('alert')).toHaveTextContent(/failed to fetch/i);
  });

  test('handles user interaction with buttons', () => {
    const mockHandleClick = jest.fn();
    render(
      <CoreFunctionalityComponent
        onClick={mockHandleClick}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(mockHandleClick).toHaveBeenCalled();
  });

  test('ensures accessibility features are correctly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'core functionality button');
    expect(button).toBeEnabled();
  });
});