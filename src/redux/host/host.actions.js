import { hostActionType } from './host.types';

export const setHostDevices = (host) => ({
  type: hostActionType.SET_HOSTS_DEVICES,
  payload: host,
});

export const SELECT_ALL_HOSTS = (value) => ({
  type: hostActionType.SELECT_ALL_HOSTS,
  payload: value,
});

export const SET_SELECTED_HOSTS = (SelectedHost) => ({
  type: hostActionType.SET_SELECTED_HOSTS,
  payload: SelectedHost,
});

export const resetHostDevices = () => ({
  type: hostActionType.RESET_HOSTS,
});
