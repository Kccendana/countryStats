import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CountryCards from '../component/CountryCards/CountryCards';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders CountryCards component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <CountryCards />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
