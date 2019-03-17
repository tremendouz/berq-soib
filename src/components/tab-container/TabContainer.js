import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { erf, sqrt, log10, exp, pow, pi, e } from "mathjs";
import "./TabContainer.css";
import { TextField, Button } from "@material-ui/core";
import BerPlot from "../ber-plot/BerPlot";

function TabContainer(props) {
  return (
    <div className="container">
      <BerPlot type={props.type}></BerPlot>
      <div className="calculateq">
        <TextField id="standard-name" label="Name" />
        <TextField
          id="standard-name2"
          label="RESULT READONLY"
          InputProps={{
            readOnly: true
          }}
        />
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </div>
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0
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
            <Tab label="Gauss" />
            <Tab label="Laplace" />
            <Tab label="Rayleigh" />
            <Tab label="Maxwell" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer type={value}>Gauss</TabContainer>}
        {value === 1 && <TabContainer type={value}>Laplace</TabContainer>}
        {value === 2 && <TabContainer type={value}>Rayleigh</TabContainer>}
        {value === 3 && <TabContainer type={value}>Maxwell</TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
