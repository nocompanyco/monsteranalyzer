import { hostActionType } from './host.types';

export const setHostDevices = (host) => ({
  type: hostActionType.SET_HOSTS_DEVICES,
  payload: host,
});
