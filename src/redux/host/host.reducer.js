import { hostActionType } from './host.types';

const INITIAL_STATE = {
  hostDevices: [],
  selectAll: false,
  hostSelected: {},
};

const hostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case hostActionType.SET_HOSTS_DEVICES:
      return {
        ...state,
        hostDevices: action.payload,
      };
    case hostActionType.SELECT_ALL_HOSTS:
      return {
        ...state,
        selectAll: action.payload,
      };
    case hostActionType.SET_SELECTED_HOSTS:
      return {
        ...state,
        hostSelected: action.payload,
      };
    default:
      return state;
  }
};

export default hostReducer;
