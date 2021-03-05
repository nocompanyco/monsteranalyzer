import { combineReducers } from 'redux';
import networkReducer from './selectedNetwork/network.reducer';
import settingsReducer from './settings/settings.reducer';
import hostReducer from './host/host.reducer';
import networkInterfaceReducer from './networkInterface/networkInterface.reducer';

export default combineReducers({
  network: networkReducer,
  settings: settingsReducer,
  host: hostReducer,
  networkInterface: networkInterfaceReducer,
});
