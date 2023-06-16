const klaviers = document.querySelectorAll(".klavier");

const frequencies = {
  doFa: 130.8128,
  doFaDiez: 138.5913,
  reFaBemol: 138.5913,
  reFa: 146.8324,
  reFaDiez: 155.5635,
  miFaBemol: 155.5635,
  miFa: 164.8138,
  faFa: 174.6141,
  faFaDiez: 184.9972,
  solFaBemol: 184.9972,
  solFa: 195.9977,
  solFaDiez: 207.6523,
  laFaBemol: 207.6523,
  laFa: 220.0,
  laFaDiez: 233.0819,
  siFaBemol: 233.0819,
  siFa: 246.9417,
  do: 261.6256,
  doDiez: 277.1826,
  reSolBemol: 277.1826,
  reSol: 293.6648,
  reSolDiez: 311.127,
  miSolBemol: 311.127,
  miSol: 329.6276,
  faSol: 349.2282,
  faSolDiez: 369.9944,
  solSolBemol: 369.9944,
  solSol: 391.9954,
  solSolDiez: 415.3047,
  laSolBemol: 415.3047,
  laSol: 440.0,
  laSolDiez: 466.1638,
  siSolBemol: 466.1638,
  siSol: 493.8833,
  doSol: 523.2511,
  doSolDiez: 554.3653,
};

let isPlaying = false;

const audioController = (type, freq = null) => {
  const context = new AudioContext();
  const o = context.createOscillator();
  const g = context.createGain();
  o.connect(g);
  g.connect(context.destination);

  if (isPlaying) {
    console.log("Start");
    o.frequency.value = freq;
    o.start(0);
  } else {
    console.log("Stop");
    o.start(0);
    o.stop(0);
  }
};

klaviers.forEach((klavier) => {
  klavier.addEventListener("mousedown", () => {
    const clicked = klavier.getAttribute("datatype");

    isPlaying = true;
    audioController(frequencies[clicked]);
  });
});

klaviers.forEach((klavier) => {
  klavier.addEventListener("mouseup", () => {
    const clicked = klavier.getAttribute("datatype");

    isPlaying = false;
    audioController(frequencies[clicked]);
  });
});
