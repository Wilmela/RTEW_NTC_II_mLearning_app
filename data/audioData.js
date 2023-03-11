import AudioModule from "../model/audioModule";

export default AUDIOLINKS = [
  new AudioModule(
    "1",
    "Electronic Devices and Circuits",
    require("../assets/sound/EDC.mp3")
  ),
  new AudioModule(
    "2",
    "Radio Communication",
    require("../assets/sound/RC.mp3")
  ),
  new AudioModule(
    "3",
    "Radio and Audio Frequency Amplifier",
    require("../assets/sound/RAFA.mp3")
  ),
  
  new AudioModule(
    "4",
    "Satellite Transmission and Reception",
    require("../assets/sound/STAR.mp3")
  ),
  new AudioModule(
    "5",
    "Television",
    require("../assets/sound/TEL.mp3")
  ),
];
