import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";


//M-UI
import { withStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


//App
import MyToolbar from "appRoot/comps/MyToolbar";


class HomeView extends Component {
  state = {
    toLogin: false,
    values: {
      city: '',
      locality: '',
      gender: '',
      roomType: '',
      tenants: '',
      attached: '',
      food: { brkFast: false, dinner: false, lunch: false },
      rent: [0, 100]
    }
  }

  componentDidMount() {
    const isLoggedIn = window.localStorage.getItem("HOMELY_USER");
    this.setState({ toLogin: !isLoggedIn })
  }

  handleChange = (event) => {
    let el = event.target;
    let vals;

    if (el.type === 'checkbox') {
      //console.log(el.name, el.value, el.checked);
      let tmpVals = { ...this.state.values[el.name], [el.value]: el.checked, };
      vals = { ...this.state.values, [el.name]: tmpVals, };
      //this.setState({ values: { ...this.state.values, [el.name]: tmpVals, } });
    } else {
      vals = { ...this.state.values, [el.name]: el.value, };
      //this.setState({ values: { ...this.state.values, [el.name]: el.value, } });
    }

    this.setState({ values: vals });

    window.sessionStorage.setItem('HOMELY_FILTERS', JSON.stringify(vals));
  }

  render() {
    const { classes } = this.props;
    const { values } = this.state;
    //console.log(values)

    if (this.state.toLogin === true) {
      return <Redirect to='/account' />
    }

    return (
      <div className={classes.root}>
        <MyToolbar title="Discover" />

        <form id="filterForm" className={classes.form} autoComplete="off">


          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="search-city">Search City</InputLabel>
            <Select
              value={values.city}
              onChange={this.handleChange}
              inputProps={{
                name: 'city',
                id: 'search-city',
              }}
            >
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Banglore">Banglore</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Pune">Pune</MenuItem>
              <MenuItem value="Kolkata">Kolkata</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="search-locality">Search Locality</InputLabel>
            <Select
              value={values.locality}
              onChange={this.handleChange}
              inputProps={{
                name: 'locality',
                id: 'search-locality',
              }}
            >
              <MenuItem value="l1">Locality1</MenuItem>
              <MenuItem value="l2">Locality2</MenuItem>
              <MenuItem value="l3">Locality3</MenuItem>
              <MenuItem value="l4">Locality4</MenuItem>
              <MenuItem value="l5">Locality5</MenuItem>
              <MenuItem value="l6">Locality6</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              className={classes.group}
              aria-label="Gender"
              name="gender"
              value={values.gender}
              onChange={this.handleChange}

            >
              <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" labelPlacement="end" />
              <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" labelPlacement="end" />

            </RadioGroup>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <FormLabel component="legend">Room Type</FormLabel>
            <RadioGroup
              className={classes.group}
              aria-label="Room Type"
              name="roomType"
              value={values.roomType}
              onChange={this.handleChange}

            >
              <FormControlLabel value="shared" control={<Radio color="primary" />} label="Shared" labelPlacement="end" />
              <FormControlLabel value="single" control={<Radio color="primary" />} label="Single" labelPlacement="end" />
              <FormControlLabel value="double" control={<Radio color="primary" />} label="Double" labelPlacement="end" />
              <FormControlLabel value="tripple" control={<Radio color="primary" />} label="Tripple" labelPlacement="end" />
              <FormControlLabel value="four" control={<Radio color="primary" />} label="Four" labelPlacement="end" />

            </RadioGroup>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <FormLabel component="legend">Preffered Tenants</FormLabel>
            <RadioGroup
              className={classes.group}
              aria-label="Preffered Tenants"
              name="tenants"
              value={values.tenants}
              onChange={this.handleChange}

            >
              <FormControlLabel value="students" control={<Radio color="primary" />} label="Students" labelPlacement="end" />
              <FormControlLabel value="professionals" control={<Radio color="primary" />} label="Professionals" labelPlacement="end" />

            </RadioGroup>
          </FormControl>


          <FormControl fullWidth margin="normal">
            <FormLabel component="legend">Attached Bathroom</FormLabel>
            <RadioGroup
              className={classes.group}
              aria-label="Attached Bathroom"
              name="attached"
              value={values.attached}
              onChange={this.handleChange}

            >
              <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" labelPlacement="end" />
              <FormControlLabel value="no" control={<Radio color="primary" />} label="No" labelPlacement="end" />

            </RadioGroup>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <FormLabel component="legend">Food Included</FormLabel>
            <FormGroup
              className={classes.group}
              aria-label="Food Included"

            >
              <FormControlLabel name="food" control={<Checkbox checked={values.food.lunch} onChange={this.handleChange} value="lunch" color="primary" />} label="Lunch" labelPlacement="end" />
              <FormControlLabel name="food" control={<Checkbox checked={values.food.brkFast} onChange={this.handleChange} value="brkFast" color="primary" />} label="BrkFast" labelPlacement="end" />
              <FormControlLabel name="food" control={<Checkbox checked={values.food.dinner} onChange={this.handleChange} value="dinner" color="primary" />} label="Dinner" labelPlacement="end" />

            </FormGroup>
          </FormControl>


          <Typography id="range-slider" gutterBottom color="textSecondary">Rent Range</Typography>
          <div style={{ padding: '2px 16px' }}>
            <Slider
              name="rent"
              value={values.rent}
              onChange={(e, newVal) => {
                this.setState({ values: { ...this.state.values, rent: newVal, } });
              }}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              valueLabelDisplay="auto"
              step={10}
              marks={marks}
              min={0}
              max={80}

            />
          </div>

        </form>

        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: 48, padding: `16 32 48 32`, textAlign: `center`, background: `linear-gradient(45deg, #ff9800 40%, #ff6d00 60%)` }}>
          <Button fullWidth style={{ height: 48 }} component={Link} to="/shortlist" >
            <Typography variant="h5" style={{ color: `#fff` }}>Apply Filters</Typography>
          </Button>
        </div>

      </div >
    );

  }
}


const styles = ((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 64,
    paddingTop: 48
  },
  form: {
    padding: 16
  },
  formControl: {
    margin: theme.spacing(1),
  },
  group: {
    margin: `1px 4px 4px 16px`,
    display: 'flex',
    flexFlow: `row wrap`,
    justifyContent: `flex-start`
  },

}));

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '10K',
  },
  {
    value: 20,
    label: '20K',
  },
  {
    value: 30,
    label: '30K',
  },
  {
    value: 40,
    label: '40K',
  },
  {
    value: 50,
    label: '50K',
  },
  {
    value: 60,
    label: '60K',
  },
  {
    value: 70,
    label: '70K',
  },
  {
    value: 80,
    label: '80K',
  },
];

export default withStyles(styles)(HomeView);