import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Filter from '../component/Inputs/Filter/Filter';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders Filter component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Filter />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
