import React from "react";
import "./App.css";
import ReactPlayer from "react-player";
import Typography from "@material-ui/core/Typography";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">
          <img
            src="/images/engineer_edited.png"
            width="90"
            height="90"
            alt="crew chief logo"
            style={{ marginRight: "1rem" }}
          />
          Crew Chief
        </Typography>
        <ReactPlayer url="https://www.youtube.com/watch?v=uryDb17KNO0" />
        <a
          href="http://thecrewchief.org/forumdisplay.php?15-Download-CrewChief-for-PC"
          className="button"
        >
          <Typography>Download</Typography>
        </a>
      </header>
    </div>
  );
}

export default App;
