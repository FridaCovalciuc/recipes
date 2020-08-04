import {
  SET_DARK_MODE
} from '../constants';

export function setDarkMode(value) {
  return {
    type: SET_DARK_MODE,
    value
  }
}