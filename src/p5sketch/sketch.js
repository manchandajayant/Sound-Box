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
    p.createCanvas(1, 1);
    console.log("insetup", convolverFile);

    button = p.createButton("Mic On");
    button2 = p.createButton("Mic Off");
    //button.style("margin-right", "100px");
    //button.position(100, 100);

    mic = new p5.AudioIn();

    button.mousePressed(p.buttonPressed);
    button2.mousePressed(p.buttonStops);

    console.log("setup");
  };
  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    convolverFile = props.space.file.location;

    console.log("props", props);
  };

  p.pressed = () => {
    console.log("hello");
  };

  p.buttonPressed = () => {
    mic.start();
    cVerb = p.createConvolver(convolverFile);
    cVerb.addImpulse(convolverFile);
    con = cVerb.process(mic);
  };
  p.buttonStops = () => {
    mic.stop();
    mic.disconnect();
  };

  p.touchStarted = function() {
    p.getAudioContext().resume();
  };
}
