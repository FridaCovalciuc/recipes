import {
  GET_RECIPES
} from '../constants';
import api from '../api';

export function getRecipes(input) {
  return api.fetch(
    GET_RECIPES,
    api.config.getRecipes(input),
    api.http.get()
  );
}