// import React from 'react';
import Main from '../components/Main';
import {connect} from 'react-redux';
import {getRecipes} from '../actions/recipes';
import { setDarkMode } from '../actions/ui';

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    ui: state.ui
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipes: (input) => {
      return dispatch(getRecipes(input));
    },
    setDarkMode: (value) => {
      return dispatch(setDarkMode(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

