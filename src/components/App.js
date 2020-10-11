import React from "react";
import DrumPad from "./DrumPad";
import audio from "../audio.js";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Press a key!",
    };
  }
  handleDisplay = (display) => this.setState({ display });
  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <header>
            <h4>React Drum Machine</h4>
          </header>
          <h1>{this.state.display}</h1>
        </div>
        <div id="drum-pads">
          {audio.map((el) => (
            <DrumPad
              letter={el.letter}
              id={el.id}
              src={el.src}
              handleDisplay={this.handleDisplay.bind(this)}
              key={el.id}
            />
          ))}
        </div>
        <footer>
          <p>&copy; 2020 Noel Thomson</p>
        </footer>
      </div>
    );
  }
}

export default App;
