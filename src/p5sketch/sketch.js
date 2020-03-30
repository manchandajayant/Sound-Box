import "p5/lib/addons/p5.sound";
import p5 from "p5";

let mic;
let cVerb;
let convolverFile;
export default function sketch(p) {
  //p.someVar = 445;
  p.preload = function() {
    p.soundFormats("mp3", "wav");
    p.loadSound(convolverFile);
    //console.log("preload");
  };
  p.setup = function() {
    p.createCanvas(100, 100);
    p.background(10);
    mic = new p5.AudioIn();
    //console.log("setup");
    mic.start();
    cVerb = p.createConvolver(convolverFile);
    cVerb.addImpulse(convolverFile);
    cVerb.process(mic);
  };
  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    convolverFile = props.space.file.location;
    //console.log("propss");
  };

  p.touchStarted = function() {
    p.getAudioContext().resume();
  };
}
