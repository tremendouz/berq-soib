import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { TextField, Button, Card, CardContent } from "@material-ui/core";
import { generateQfactors, berMethods } from "../../helpers/BerHelper";

const styles = {};

let qinput = 1;
let currentIdx = {};
let resultInfo = {};

const inputMap = { 0: "Gaussa", 1: "Laplace’a", 2: "Rayleigha", 3: "Maxwella" };

function calculateBer(idx, method, q) {
  let type = inputMap[idx];
  let ber = Number(method(q)).toExponential(2);
  return `Wartość BER dla parametru Q: ${q}[dB] przy założeniu szumu o rozkładzie ${type} wynosi ${ber}
    `;
}

let handleChange = name => event => {
  qinput = event.target.value;
};

function CalcCard(props) {
  currentIdx = props.type;
  resultInfo = calculateBer(currentIdx, berMethods[currentIdx], qinput);
  const [infoText, setInfoText] = useState("");

  let handleClick = () => {
    console.log(qinput);
    resultInfo = calculateBer(currentIdx, berMethods[currentIdx], qinput);
    setInfoText(resultInfo);
  };

  return (
    <Card className="custom-card">
      <CardContent>
        <div className="calc-input">
          <TextField label="Q-Factor [dB]" onChange={handleChange("name")} />
          <Button
            variant="contained"
            color="primary"
            className="custom-button"
            onClick={() => handleClick("name")}
          >
            Calculate
          </Button>
        </div>
        <div className="result">
          {infoText}
        </div>
      </CardContent>
    </Card>
  );
}

CalcCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CalcCard);
