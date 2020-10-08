import React from "react";
import "./DrumPad.scss";

export default class DrumPad extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };

  handleKeydown = (e) => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  };

  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.id}
        onClick={this.handleClick.bind(this)}
      >
        <div id="drum-pad-top">•</div>
        <h1>{this.props.letter}</h1>
        <audio
          className="clip"
          id={this.props.id}
          ref={(ref) => (this.audio = ref)}
          src={this.props.src}
        ></audio>
      </div>
    );
  }
}
