import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';

import './Main.css';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      darkMode: this.props.ui.darkMode // default to false
    }
  }

  handleDarkModeChange = (event) => {
    this.setState({ darkMode: event.target.checked });

    this.props.setDarkMode(event.target.checked);
  };

  handleKeywordChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log('submitted: ' + this.state.value);
    this.props.getRecipes(this.state.value);
  }

  // TODO: Get Recipes cards
  recipesCards = () => {
    const {
      recipes: { recipes, isLoading, error, success }
    } = this.props;

    console.log(recipes);

    return (
      <div>
        {recipes.results.map((item) => (
          <Card className="card" key={item.id}>
            <CardMedia
              className="card-image"
              image={item.thumbnail_url}
              title="Recipe"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    )
  }

  render() {
    const {
      recipes: { recipes },
      ui: { darkMode }
    } = this.props;
    return (
      <div className={darkMode ? 'main-dark' : 'main-light'}>
        <Container maxWidth="sm">
          <Switch
            checked={this.state.darkMode}
            onChange={this.handleDarkModeChange}
            color="primary"
            name="checkedB"
            classes={{ root: 'ui-swich' }}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />

          <div className="app-title">
            <Typography className="title" variant="h5" gutterBottom>
              Recipe Finder
          </Typography>
          </div>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs>
              <Typography className="title" variant="h5" gutterBottom>
                Search for a recipe with
           </Typography>
            </Grid>
            <Grid item xs>
              <form onSubmit={this.handleSubmit}>
                <TextField id="standard-basic" label="" value={this.state.value} onChange={this.handleKeywordChange} />
              </form>
            </Grid>
          </Grid>
          <Grid>
            {!recipes || (recipes && !recipes.count) ? (
              <Typography>
                No recipes yet.
              </Typography>
            ) : this.recipesCards()}
          </Grid>
        </Container>
      </div>
    )
  }


}

Main.propTypes = {
  ui: PropTypes.object,
  recipes: PropTypes.object,
  setDarkMode: PropTypes.func,
  getRecipes: PropTypes.func
};


export default Main;