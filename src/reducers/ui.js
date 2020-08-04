import {SET_DARK_MODE} from '../constants';

export const initialState = {
  darkMode: false
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
    return {
      ...state,
      darkMode: action.value
    };
    default: {
      return state;
    }
  }
};

export default ui;