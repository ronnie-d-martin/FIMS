import { combineReducers } from 'redux';

import faculty from './facultyReducers';
import auth from './authReducers';
import admin from './adminReducers';
import aboutA from './adminAbout';
export const reducers = combineReducers({ facultyData: faculty, auth: auth, adminData: admin, aboutA: aboutA });
