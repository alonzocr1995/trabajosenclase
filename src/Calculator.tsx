import React from "react";
import { BoilingVeredict } from "./BoilingVeredict";
import { ScaleType, TemperatureInput } from "./TemperatureInput";
import "./Calculator.css";
import styled from "styled-components";
interface CalculatorState {
  temperature: string;
  scale: string;
}
export class Calculator extends React.Component<{}, CalculatorState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange(temperature: string) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const toCelsius = (farenheit: number) => {
      return ((farenheit - 32) * 5) / 9;
    };

    const toFahrenheit = (celsius: number) => {
      return (celsius * 9) / 5 + 32;
    };
    const tryConvert = (
      temperature: string,
      convert: (type: number) => number
    ) => {
      const input = parseFloat(temperature);
      if (Number.isNaN(input)) {
        return "";
      }
      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
    };
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    const BoilingStatus = parseFloat(celsius);
    return (
      <Container>
        <TemperatureInput
          scale={ScaleType.C}
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale={ScaleType.F}
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVeredict celsius={BoilingStatus} />
      </Container>
    );
  }
}

const Container = styled.div`
  height: 400px;
  border: 2px solid #cccc;
  background: #ffffff;
  box-shadow: 1px 1px 1px #000;
  fieldset {
    color: #fff;
    background: blue;
  }
`;
