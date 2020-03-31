import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import p5 from "p5";

let mic;
let cVerb;
let convolverFile;
let button;
let button2;

let con;

export default function sketch(p) {
  p.setup = function() {
    p.soundFormats("mp3", "wav");
    p.loadSound(convolverFile);
    console.log("insetup", convolverFile);
    button = p.createButton("Mic On");
    button2 = p.createButton("Mic Off");

    mic = new p5.AudioIn();

    button.mousePressed(p.buttonPressed);
    button2.mousePressed(p.buttonStops);

    console.log("setup");
  };
  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    convolverFile = props.space.file.location;
    console.log("props");
  };

  p.buttonPressed = () => {
    mic.start();
    cVerb = p.createConvolver(convolverFile);
    cVerb.addImpulse(convolverFile);
    con = cVerb.process(mic);
  };
  p.buttonStops = () => {
    mic.stop();
  };

  p.touchStarted = function() {
    p.getAudioContext().resume();
  };
  // p.button2Pressed = function() {
  //   // ensure audio is enabled
  //   p.userStartAudio();

  //   // make sure user enabled the mic
  //   if (p.state === 0 && p.mic.enabled) {
  //     // record to our p5.SoundFile
  //     recorder.record(soundFile);

  //     p.background(255, 0, 0);
  //     p.text("Recording!", p.width / 2, p.height / 2);
  //     p.state++;
  //   } else if (p.state === 1) {
  //     p.background(0, 255, 0);

  //     // stop recorder and
  //     // send result to soundFile
  //     recorder.stop();

  //     p.text(
  //       "Done! Tap to play and download",
  //       p.width / 2,
  //       p.height / 2,
  //       p.width - 20
  //     );
  //     p.state++;
  //   } else if (p.state === 2) {
  //     soundFile.play(); // play the result!
  //     p.save(soundFile, "mySound.wav");
  //     p.state++;
  //   }
  // };
}
