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
let sound1Gain;

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
    sound1Gain = new p5.Gain();

    button.mousePressed(p.buttonPressed);
    button2.mousePressed(p.buttonStops);

    // console.log("setup");
  };
  p.draw = function () {
    p.background("rgba(230, 250, 230, 0.01)");

    p.cssFunction();
    p.cssFunctionButton2();

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

  // p.pressed = () => {
  //   // console.log("hello");
  // };

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
    sound1Gain.amp(0);
  };
  p.touchStarted = function () {
    p.getAudioContext().resume();
  };

  p.hover = () => {
    button.style("border", "2px solid black");
  };
  p.out = () => {
    button.style("border", "0.12px solid black");
  };
  p.hoverButton2 = () => {
    button2.style("border", "2px solid black");
  };
  p.outButton2 = () => {
    button2.style("border", "0.12px solid black");
  };

  p.cssFunction = () => {
    button.style("font-family", "Dosis, sans-serif");
    button.style("display", "inline-block");
    button.style("padding", "0.35em 1.2em");
    button.style("border", "0.12px solid black");
    button.style("margin", "0 0.3em 0.3em 0");
    button.style("border-radius", "0.12em;");
    button.style("box-sizing", "border-box");
    button.style("text-decoration", "none");
    button.style("font-weight", "300");
    button.style("text-align", "center");
    button.style("transition", "all 0.2s");
    button.style("background-color", "transparent");
    button.mouseOver(p.hover);
    button.mouseOut(p.out);
  };

  p.cssFunctionButton2 = () => {
    button2.style("font-family", "Dosis, sans-serif");
    button2.style("display", "inline-block");
    button2.style("padding", "0.35em 1.2em");
    button2.style("border", "0.12px solid black");
    button2.style("margin", "0 0.3em 0.3em 0");
    button2.style("border-radius", "0.12em;");
    button2.style("box-sizing", "border-box");
    button2.style("text-decoration", "none");
    button2.style("font-weight", "300");
    button2.style("text-align", "center");
    button2.style("transition", "all 0.2s");
    button2.style("background-color", "transparent");
    button2.mouseOver(p.hoverButton2);
    button2.mouseOut(p.outButton2);
  };
}
