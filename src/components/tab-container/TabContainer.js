import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./TabContainer.css";
import BerPlot from "../ber-plot/BerPlot";
import CalcCard from "../calc-card/CalcCard";

function TabContainer(props) {
  return (
    <div className="container">
      <BerPlot type={props.type}></BerPlot>
      <CalcCard type={props.type}></CalcCard>
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
