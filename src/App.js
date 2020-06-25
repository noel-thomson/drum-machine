import React from "react";
import "./App.scss";

const data = [
  {
    id: "snare",
    letter: "A",
    src: "https://www.myinstants.com/media/sounds/snare.mp3",
  },
  {
    id: "kick",
    letter: "Z",
    src: "https://www.myinstants.com/media/sounds/bass-drum.mp3",
  },
  {
    id: "bongo",
    letter: "E",
    src: "http://tipiwiki.free.fr/snd/Percussion(4e)2.wav",
  },
  {
    id: "tom tom",
    letter: "Q",
    src: "http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav",
  },
  {
    id: "bass",
    letter: "S",
    src: "http://billor.chsh.chc.edu.tw/sound/bass4.wav",
  },
  {
    id: "shotgun",
    letter: "W",
    src: "http://david.guerrero.free.fr/Effects/ShotgunReload.wav",
  },
  {
    id: "high hat",
    letter: "D",
    src: "http://www.denhaku.com/r_box/tr707/closed.wav",
  },
  {
    id: "kick 2",
    letter: "X",
    src: "http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3",
  },
  {
    id: "laser",
    letter: "C",
    src: "http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav",
  },
];

class DrumPad extends React.Component {
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
          ref={(ref) => (this.audio = ref)}
          className="clip"
          src={this.props.src}
          id={this.props.letter}
        ></audio>
      </div>
    );
  }
}

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
          <h1>{this.state.display}</h1>
        </div>
        <div id="drum-pads">
          {data.map((el) => (
            <DrumPad
              letter={el.letter}
              id={el.id}
              src={el.src}
              handleDisplay={this.handleDisplay.bind(this)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
