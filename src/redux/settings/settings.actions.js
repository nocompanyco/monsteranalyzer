import { SettingsActionType } from './settings.types';

export const setSettingsNetwork = (networkSettings) => ({
  type: SettingsActionType.SET_NETWORK_SETTINGS,
  payload: networkSettings,
});

export const resetSettingsNetwork = () => ({
  type: SettingsActionType.RESET_NETWORK_SETTINGS,
  
});
