import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { setRegion } from '../redux/countrySlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('countrySlice reducer', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      countries: [],
      countryData: [],
      region: '',
      status: 'idle',
      error: null,
    });
  });

  it('should set the region', () => {
    const region = 'Europe';
    const expectedAction = {
      type: 'countries/setRegion',
      payload: region,
    };

    store.dispatch(setRegion(region));
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
