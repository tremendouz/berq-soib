import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Line from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  const data = {
    labels: [
      '10/04/2018', '10/05/2018', 
      '10/06/2018', '10/07/2018', 
      '10/08/2018', '10/09/2018', 
      '10/10/2018', '10/11/2018', 
      '10/12/2018', '10/13/2018', 
      '10/14/2018', '10/15/2018'
    ],
    datasets: [
      {
        label: 'Temperature',
        data: [22,19,27,23,22,24,17,25,23,24,20,19],
        fill: false,          // Don't fill area under the line
        borderColor: 'green'  // Line color
      }
    ]
  }
  return (
    <Line data={data}></Line>
    // <Typography component="div" style={{ padding: 8 * 3 }}>
    //   {props.children}
    // </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
