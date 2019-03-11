import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, LineMarkSeries, ChartLabel } from 'react-vis';
import { erf, sqrt, log10, exp, pow, pi, e } from 'mathjs';
import './TabContainer.css';

function TabContainer(props) {

  const data = new Array(19).fill(0).reduce((prev, curr) => [...prev, {
    x: prev.slice(-1)[0].x + 1,
    y: prev.slice(-1)[0].y * (0.9 + Math.random() * 0.2)
  }], [{ x: 0, y: 10 }]);
  console.log(data);

  let berGaussian = (q) => 0.5 * (1 - erf(q / sqrt(2)));
  let berLaplace = (q) => 0.5 * (exp(-q));
  let berRayleigh = (q) => (exp(0.5 * pow(q, -2)));
  let berMaxwell = (q) => sqrt(0.5 * pi) * (1 - erf(q / sqrt(2)) + pow(sqrt(e), -1));

  function generateQfactors(size) {
    let data = [];
    for (let index = 0; index < size; index++) {
      let qfactor = 20 * log10(1.5 + index);
      let ber = berLaplace(qfactor);
      data.push({ x: ber, y: qfactor });
    }
    return data;
  }

  const dataset = generateQfactors(15);
  console.log(dataset);


  return (
    <div>
      <XYPlot xType="log"
        margin={{ left: 100, bottom: 100 }}
        width={600} height={500}><XAxis /><YAxis />
        <HorizontalGridLines />
        <VerticalGridLines />
        <ChartLabel
          text="BER"
          includeMargin={false}
          xPercent={0.5}
          yPercent={1.2}
          style={{
            textAnchor: 'end'
          }}
        />
        <ChartLabel
          text="Q-Factor [dB]"
          includeMargin={false}
          xPercent={-0.15}
          yPercent={0.5}
          style={{
            textAnchor: 'end',
            transform: 'rotate(90)'
          }}
        />
        <LineMarkSeries data={dataset} />
      </XYPlot>
    </div>
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
