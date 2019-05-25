import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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
import { generateQfactors, berMethods } from "../../helpers/BerHelper";
const styles = {
};

function BerPlot(props) {
  const dataset = generateQfactors(15, berMethods[props.type]);
  // const plotType = props.type == 3 ? "log" : "log";
  const plotType = "linear";
  console.log(dataset);

  return (
    <div className="container">
      <XYPlot
        xType={plotType}
        yType="log"
        margin={{ left: 100, bottom: 100 }}
        width={600}
        height={500}
      >
        <XAxis />
        <YAxis />
        <HorizontalGridLines />
        <VerticalGridLines />
        <ChartLabel
        // change i to qfactor withotu db
          text="Q-Factor"
          includeMargin={false}
          xPercent={0.5}
          yPercent={1.2}
          style={{
            textAnchor: "end"
          }}
        />
        <ChartLabel
        // change it to ber
          text="BER"
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
