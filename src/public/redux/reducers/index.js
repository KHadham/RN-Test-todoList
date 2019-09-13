import {combineReducers} from 'redux';

import reNote from './note';
import reHistory from './history';
import reKategori from './kategori';

const appReducer = combineReducers({
  reNote,
  reHistory,
  reKategori
});

export default appReducer;
