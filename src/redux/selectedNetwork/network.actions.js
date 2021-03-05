import { NetworkActionType } from './network.types';

export const setNetwork = (network) => ({
  type: NetworkActionType.SET_NETWORK,
  payload: network,
});

export const toggleHidden = (hidden) => ({
  type: NetworkActionType.TOGGLE_HIDDEN,
  payload: hidden,
});

export const resetSelectedNetwork = () => ({
  type: NetworkActionType.RESET_SELECTED_NETWORK,
 
});
