import { NetworkInterfaceActionType } from './networkInterface.types';

export const setNetworkInterface = (data) => ({
  type: NetworkInterfaceActionType.SET_NETWORK_INTERFACE,
  payload: data,
});

export const setIsLoading = (loading) => ({
  type: NetworkInterfaceActionType.SET_LOADING,
  payload: loading,
});

export const setGatwayIP = (loading) => ({
  type: NetworkInterfaceActionType.SET_GATEWAYIP,
  payload: loading,
});
