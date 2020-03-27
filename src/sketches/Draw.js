import "p5/lib/addons/p5.sound";
import p5 from "p5";
import soundFile from "./r.mp3";
let mic;
let sound;
let cVerb;
export default function sketch(p) {
  p.preload = function() {
    p.soundFormats("mp3");
    sound = p.loadSound(soundFile);
  };
  p.setup = function() {
    p.createCanvas(20, 20);
    p.background(10);
    mic = new p5.AudioIn();
    //mic.start();
    cVerb = p.createConvolver(soundFile);
    cVerb.addImpulse(soundFile);
    cVerb.process(mic);
  };

  // p.draw = function() {
  //   p.background(200);

  //   var vol = mic.getLevel();

  //   p.fill(127);
  //   p.stroke(0);

  //   // Draw an ellipse with height based on volume
  //   var h = p.map(vol, 0, 0.5, p.height, 0);
  //   p.ellipse(p.width / 2, h - 25, 50, 50);
  // };

  p.touchStarted = function() {
    p.getAudioContext().resume();
  };
}
