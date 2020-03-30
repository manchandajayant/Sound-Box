import "p5/lib/addons/p5.sound";
import p5 from "p5";

import soundFile from "./Hamilton48k.wav";
import soundFile2 from "./r.mp3";

let mic;
let sound;
let cVerb;
let sound2;
export default function sketch(p) {
  //p.someVar = 445;
  p.preload = function() {
    p.soundFormats("mp3", "wav");
    sound2 = p.loadSound(soundFile2);
    sound = p.loadSound(soundFile);
    p.someVar = soundFile;
    console.log("preload", soundFile);
  };
  p.setup = function() {
    p.createCanvas(100, 100);
    // cnv.mousePressed(p.playSound);
    //p.createCanvas(20, 20);
    p.background(10);
    mic = new p5.AudioIn();
    console.log("setup");
    //mic.start();
    cVerb = p.createConvolver(soundFile);
    cVerb.addImpulse(soundFile);
    cVerb.process(mic);
  };
  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    //const { id } = props.spaces;
    p.loadSound(props.space.file.location);
    //p.someVar = props.space.file.location;
    console.log("propss", props.space.file.location);
  };

  p.touchStarted = function() {
    p.getAudioContext().resume();
  };

  // p.playSound = function() {
  //   sound2.play();
  // };
}
