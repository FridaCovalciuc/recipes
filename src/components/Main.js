import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';

import './Main.css';

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      value: '',
      darkMode: false // default to light
    }
  }

  handleDarkModeChange = (event) => {
    this.setState({ darkMode: event.target.checked });

  };

  handleKeywordChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log('submitted: ' + this.state.value);
  }

  // TODO: Get Recipes cards
  recipesCards = () => (
    <Card className="card">
      <CardContent>
        <Typography variant="h2" component="h2">
          benevo
          </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
            <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )

  render() {
    return (
      <Container maxWidth="sm">
       <Switch
        checked={this.state.darkMode}
        onChange={this.handleDarkModeChange}
        color="primary"
        name="checkedB"
        classes={{root: 'ui-swich'}}
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


      </Container>
    )
  }


}

export default Main;