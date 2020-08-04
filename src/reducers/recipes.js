import {
  GET_RECIPES_LOADING,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE
} from '../constants';

export const initialState = {
  recipes: {},
  isLoading: false,
  isSuccess: false,
  error: null
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_RECIPES_SUCCESS:
      return {
        recipes: action.response,
        isLoading: false,
        isSuccess: true,
        error: null
      };
    case GET_RECIPES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        error: action.error
      };
    default: {
      return state;
    }
  }
};

export default recipes;
