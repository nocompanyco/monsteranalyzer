import { SettingsActionType } from './settings.types';

const INITIAL_STATE = {
  networkSetting: [
    {
      id: 1,
      name: 'Network_Interface',
      data: '',
    },
    { id: 2, name: 'IP Address', data: '' },
    { id: 3, name: 'Gateway', data: '' },
  ],
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettingsActionType.SET_NETWORK_SETTINGS:
      return {
        ...state,
        networkSetting: action.payload,
      };
    case SettingsActionType.RESET_NETWORK_SETTINGS:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default settingsReducer;
