import { SettingsActionType } from './settings.types';

export const setSettingsNetwork = (networkSettings) => ({
  type: SettingsActionType.SET_NETWORK_SETTINGS,
  payload: networkSettings,
});
