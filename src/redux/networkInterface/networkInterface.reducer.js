import { NetworkInterfaceActionType } from './networkInterface.types';

const INITIAL_STATE = {
  networkInterface: {},
  isloading:true,
  gatewayIP:''
};

const networkInterfaceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NetworkInterfaceActionType.SET_NETWORK_INTERFACE:
      return {
        ...state,
        networkInterface: action.payload,
      };
      case NetworkInterfaceActionType.SET_LOADING:
      return {
        ...state,
        isloading: action.payload,
      };
      case NetworkInterfaceActionType.SET_GATEWAYIP:
        return {
          ...state,
          gatewayIP: action.payload,
        };
    default:
      return state;
  }
};

export default networkInterfaceReducer;
