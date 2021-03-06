import { NetworkActionType } from './network.types';

const INITIAL_STATE = {
  selectedNetwork: '',
  hidden: false,
};

const networkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NetworkActionType.SET_NETWORK:
      return {
        ...state,
        selectedNetwork: action.payload,
      };
    case NetworkActionType.TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: action.payload,
      };

    case NetworkActionType.RESET_SELECTED_NETWORK:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default networkReducer;
