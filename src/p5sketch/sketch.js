import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";

import p5 from "p5";

let mic;
let cVerb;
let convolverFile;
let button;
let button2;
let con;
let fft;
var analyzer;
var numSamples = 1024;
var samples = [];

export default function sketch(p) {
  p.setup = function () {
    p.soundFormats("mp3", "wav");
    p.loadSound(convolverFile);
    p.createCanvas(300, 50);
    p.createDiv("");

    // console.log("insetup", convolverFile);

    button = p.createButton("Mic On");
    button2 = p.createButton("Mic Off");
    //button.style("margin-right", "100px");
    //button.position(100, 100);

    mic = new p5.AudioIn();
    analyzer = new p5.FFT(0.5, numSamples);
    analyzer.setInput(mic);

    button.mousePressed(p.buttonPressed);
    button2.mousePressed(p.buttonStops);

    // console.log("setup");
  };
  p.draw = function () {
    p.background("rgba(230, 250, 230, 0.01)");
    //p.fill(4, 20);

    //let spectrum = fft.analyze();

    samples = analyzer.waveform();
    var bufLen = samples.length;

    // draw snapshot of the samples

    p.beginShape();
    for (var i = 0; i < bufLen; i++) {
      var x = p.map(i, 2, bufLen, 0, p.width);
      var y = p.map(samples[i], -1, 1, -p.height / 2, p.height / 2);
      p.vertex(x, y + p.height / 2);
      p.fill(100, 30);
      p.strokeWeight(0.04);
    }
    p.endShape();
  };
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    convolverFile = props.space.file.location;

    // console.log("props", props);
  };

  p.pressed = () => {
    // console.log("hello");
  };

  p.buttonPressed = () => {
    mic.start();
    analyzer.setInput(mic);
    cVerb = p.createConvolver(convolverFile);
    cVerb.addImpulse(convolverFile);
    con = cVerb.process(mic);
  };
  p.buttonStops = () => {
    mic.stop();
    mic.disconnect();
  };
  p.touchStarted = function () {
    p.getAudioContext().resume();
  };
}
