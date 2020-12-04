import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';
import datajson from './data.json';
import datajsonDaily from './dataDaily.json';

const apiUrl = 'https://covid19.mathdro.id/api';

type APIDATA = typeof datajson;
type APIDATADAILY = typeof datajsonDaily;

type covidState = {
  data: APIDATA;
  country: string;
  dailyData: APIDATADAILY;
};
const initialState: covidState = {
  data: {
    confirmed: {
      value: 65359887,
      detail: 'https://covid19.mathdro.id/api/confirmed'
    },
    recovered: {
      value: 42072270,
      detail: 'https://covid19.mathdro.id/api/recovered'
    },
    deaths: {
      value: 1509141,
      detail: 'https://covid19.mathdro.id/api/deaths'
    },
    dailySummary: 'https://covid19.mathdro.id/api/daily',
    dailyTimeSeries: {
      pattern: 'https://covid19.mathdro.id/api/daily/[dateString]',
      example: 'https://covid19.mathdro.id/api/daily/2-14-2020'
    },
    image: 'https://covid19.mathdro.id/api/og',
    source: 'https://github.com/mathdroid/covid19',
    countries: 'https://covid19.mathdro.id/api/countries',
    countryDetail: {
      pattern: 'https://covid19.mathdro.id/api/countries/[country]',
      example: 'https://covid19.mathdro.id/api/countries/USA'
    },
    lastUpdate: '2020-12-04T12:27:35.000Z'
  },
  country: '',
  dailyData: [
    {
      totalConfirmed: 555,
      mainlandChina: 548,
      otherLocations: 7,
      deltaConfirmed: 0,
      totalRecovered: 0,
      confirmed: {
        total: 555,
        china: 548,
        outsideChina: 7
      },
      deltaConfirmedDetail: {
        total: 0,
        china: 0,
        outsideChina: 0
      },
      deaths: {
        total: 17,
        china: 17,
        outsideChina: 0
      },
      recovered: {
        total: 0,
        china: 0,
        outsideChina: 0
      },
      active: 0,
      deltaRecovered: 0,
      incidentRate: 0.44821646978651847,
      peopleTested: 0,
      reportDate: '2020-01-22'
    }
  ]
};
