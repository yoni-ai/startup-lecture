import './style.css'
import p5Lib from 'p5'
import { FFT, Player } from 'tone'

let p5, isPlaying = false,
  changePlayState = false;

function p5Handler(_p5) {
  p5 = _p5

  let r = p5.random(255),
    g = p5.random(255),
    b = p5.random(255),
    fft,
    spectrum,
    player

  p5.preload = _ => {
    player = new Player('/funk.mp3')
    fft = new FFT(512)
    player.connect(fft)
    fft.toDestination()
  }

  p5.setup = _ => {
    p5.createCanvas(1000, 700)
  }

  function toggleAudio() {
    isPlaying = !isPlaying
    isPlaying ? player.start() : player.stop()
  }

  p5.draw = _ => {
    p5.clear()
    p5.background('black')

    if (changePlayState) {
      toggleAudio()
      changePlayState = false
    }

    spectrum = fft.getValue();

    r = p5.random(255);
    g = p5.random(255);
    b = p5.random(255);

    for (let i = 0;i < spectrum.length;++i) {
      const y = -p5.map(spectrum[i], -100, 0, 0, 700)
      p5.stroke(r, g, b)
      p5.fill(0)
      p5.rect(i * 2, 700, .4, y * 1.3)
    }
  }
}

document.querySelector('#toggle').onclick = () => {
  changePlayState = true
}

new p5Lib(p5Handler, document.querySelector('#canvas'))