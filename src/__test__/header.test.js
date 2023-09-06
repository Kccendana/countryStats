/* eslint-disable react/display-name */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../component/Header/Header';

// Mock any dependencies or context that the Header component might use
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <div data-testid="font-awesome-icon" />,
}));

jest.mock('../component/Inputs/Filter/Filter', () => () => (
  <div data-testid="filter-component" />
));

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>,
    );

    // Test FontAwesome icon
    const fontAwesomeIcon = getByTestId('font-awesome-icon');
    expect(fontAwesomeIcon).toBeInTheDocument();

    // Test Filter component
    const filterComponent = getByTestId('filter-component');
    expect(filterComponent).toBeInTheDocument();
  });
});
