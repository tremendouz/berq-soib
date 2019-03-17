import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { erf, sqrt, log10, exp, pow, pi, e } from "mathjs";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  LineMarkSeries,
  ChartLabel
} from "react-vis";
import "./BerPlot.css";

const styles = {
};
let berGaussian = q => 0.5 * (1 - erf(q / sqrt(2)));
let berLaplace = q => 0.5 * exp(-q);
let berRayleigh = q => exp(-0.5 * (q * q));
let max1 = q => q*exp(-0.5 * (q * q));
let max2 = q => sqrt(pi/0.5) * (1 - erf(q / sqrt(2)));
let berMaxwell = q => max1(q) + max2(q);

//   sqrt(0.5 * pi) * (1 - erf(q / sqrt(2)) + pow(sqrt(e), -1));
const berMethods = [berGaussian, berLaplace, berRayleigh, berMaxwell];

function generateQfactors(size, method = berLaplace) {
  let data = [];
  let qfactor = 20 * log10(1);
  let increment = method == berLaplace ? 2 : 0.55;
  for (let index = 0; index < size; index++) {
    qfactor += increment;
    let ber = method(qfactor);
    data.push({ x: ber, y: qfactor });
  }
  return data;
}

function BerPlot(props) {
  const dataset = generateQfactors(15, berMethods[props.type]);
  const plotType = props.type == 3 ? "log" : "log";
  console.log(dataset);
  // switch log to 'linear'if lpalce

  return (
    <div className="container">
      <XYPlot
        xType={plotType}
        margin={{ left: 100, bottom: 100 }}
        width={600}
        height={500}
      >
        <XAxis />
        <YAxis />
        <HorizontalGridLines />
        <VerticalGridLines />
        <ChartLabel
          text="BER"
          includeMargin={false}
          xPercent={0.5}
          yPercent={1.2}
          style={{
            textAnchor: "end"
          }}
        />
        <ChartLabel
          text="Q-Factor [dB]"
          includeMargin={false}
          xPercent={-0.15}
          yPercent={0.5}
          style={{
            textAnchor: "end",
            transform: "rotate(90)"
          }}
        />
        <LineMarkSeries data={dataset} />
      </XYPlot>
    </div>
  );
}

BerPlot.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BerPlot);
