import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

//M-UI
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import HotelIcon from '@material-ui/icons/Hotel';

//App
import MyToolbar from "appRoot/comps/MyToolbar";


class ShortlistView extends Component {
  state = {
    toLogin: false,
  }

  componentDidMount() {
    const isLoggedIn = window.localStorage.getItem("HOMELY_USER");
    this.setState({ toLogin: !isLoggedIn });
    let vf = window.sessionStorage.getItem('HOMELY_FILTERS');
    console.log(JSON.parse(vf));
  }


  render() {
    const { classes } = this.props;
    const { toLogin } = this.state;
    //console.log(values)

    if (toLogin === true) {
      return <Redirect to='/account' />
    }

    return (
      <div className={classes.root}>
        <MyToolbar title="Shortlist" />



        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="images/hostels/hostel1.jpg"
            title="Hostel 1"
          />
          <CardContent>
            <Badge badgeContent={4} color="primary" style={{ margin: 8, float: 'right' }}><HotelIcon /></Badge>

            <Typography gutterBottom variant="h5" component="h2">Ramakrishna Hostel</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Balaji nagar, Pune</Typography>
          </CardContent>

          <CardActions style={{ display: `flex`, justifyContent: 'space-between' }}>
            <Button component={Link} to="/hostel/123" size="small" color="primary" variant="outlined">View Details</Button>
            <Button size="small" color="primary" variant="outlined">Enquire</Button>
          </CardActions>
        </Card>

      </div>
    );

  }
}


const styles = ((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 64
  },
  card: {
    maxWidth: 400,
    margin: '8px',
    /* borderBottomLeftRadius: `12.5%`,
     borderBottomRightRadius: `12.5%`*/
  },
  media: {
    height: 140,
  },


}));


export default withStyles(styles)(ShortlistView);