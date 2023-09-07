import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Hero from '../component/Hero/Hero';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders Hero component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Hero />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
