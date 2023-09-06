import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const countriesUrl = 'https://restcountries.com/v3.1/all';
const codeUrl = 'https://restcountries.com/v3.1/alpha/';
const filterByRegionUrl = 'https://restcountries.com/v3.1/region/';

const initialState = {
  countries: [],
  countryData: [],
  region: '',
  status: 'idle',
  error: null,
};

export const getAllCountries = createAsyncThunk('countries/getAllCountries', async () => {
  try {
    const response = await axios.get(countriesUrl);
    return response.data;
  } catch (error) {
    throw new Error('Fetch country failed');
  }
});

export const searchCountryByCode = createAsyncThunk('countries/searchCountryByCode', async (code) => {
  try {
    const response = await axios.get(`${codeUrl}${code}`);
    return response.data;
  } catch (error) {
    throw new Error('Fetch country by code failed');
  }
});

export const countriesByRegion = createAsyncThunk('countries/countriesByRegion', async (region) => {
  try {
    const response = await axios.get(`${filterByRegionUrl}${region}`);
    return response.data;
  } catch (error) {
    throw new Error('Fetch country by region failed');
  }
});

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.countries = [];
      })
      .addCase(searchCountryByCode.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchCountryByCode.fulfilled, (state, action) => {
        state.countryData = action.payload;
      })
      .addCase(searchCountryByCode.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.countryData = [];
      })
      .addCase(countriesByRegion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(countriesByRegion.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.status = 'success';
      })
      .addCase(countriesByRegion.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.countries = [];
      });
  },
});

export const { setRegion } = countrySlice.actions;
export default countrySlice.reducer;
