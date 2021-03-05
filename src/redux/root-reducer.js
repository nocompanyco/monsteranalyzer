import { combineReducers } from 'redux';
import networkReducer from './network/network.reducer';
import settingsReducer from './settings/settings.reducer';
import hostReducer from './host/host.reducer';

export default combineReducers({
  network: networkReducer,
  settings: settingsReducer,
  host: hostReducer,
});
