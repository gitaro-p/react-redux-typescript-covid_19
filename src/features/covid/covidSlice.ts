import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';
import datajson from './data.json';
import datajsonDaily from './dataDaily.json';

const apiUrl = 'https://covid19.mathdro.id/api';

type APIDATA = typeof datajson;
type APIDATADAILY = typeof datajsonDaily;
