import './lib/webaudio-controls.js';

const getBaseURL = () => {
    const base = new URL('.', import.meta.url);
    return `${base}`;
};

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

const displayDuration = (player, duration) => {
    duration.innerHTML = calculateTime(player.duration);
}

const displayCurrentTime = (player, current_time) => {
    current_time.innerHTML = calculateTime(player.currentTime);
}

const template = document.createElement("template");
template.innerHTML = `
    <style>
        #container {
            border:             1px solid grey;
            border-radius:      25px;
            width:              60%;
            height:             1050px;
            background-image:   url("./myComponents/assets/imgs/background.jpg");
            background-size:    cover;
            font-family:        'Arial', sansSerif;
            color:              white;
        }
    
        #progress_bar {
            height:             10px;
            width:              300px;
            background-color:   white;
            margin-top:         10px;
            margin-left:        10px;
            margin-right:       10px;
        }
    
        #progressed {
            height:             10px;
            background-color:   blue;
            width:              0%;
            transition:         all 1s;
            position:           relative;
        }
    
        #progressed:after {
            content:            '';
            position:           absolute;
            right:              -10px;
            top:                -5px;
            width:              20px;
            height:             20px;
            border-radius:      10px;
            background-color:   lightblue;
        }
    
        #progress {
            display:            flex;
            justify-content:    center;
            margin-top:         30px;
            vertical-align:     middle;
            line-height:        normal;
        }
        
        #restartButton {
            -webkit-transform:  scaleX(-1);
            transform:          scaleX(-1);
        }
        
        #playlist {
            font-weight:        bold;
            border:             1px solid grey;
            background-color:   gray;
            margin:             5px;
        }
    
        #current_time {
            margin-left:        10px;
            margin-top:         5px;
        }
    
        #duration {
            margin-top:         5px;
        }
    
        input[type="image"] {
            height:             auto; 
            width:              auto; 
            max-width:          30px; 
            max-height:         30px;
            margin-left:        10px;
        }
    
        #options {
            display:            flex;
            justify-content:    center;
        }
    
        #buttons {
            display:            flex;
            justify-content:    center;
        }
        
        #aiguilleDynamic {
            display:            flex;
            justify-content:    center;
        }
        
        #sliders {
            display:            flex;
            justify-content:    center;
        }
        
        .sep {
            cursor:             default;
        }
    
        .canvasFlex {
            display:            flex;
        }
    
        span {
            color:              white;
        }
    
        webaudio-knob {
            padding:            2%;
        }
    
        #myCanvas {
            width:              98%;
            height:             100px;
        }
        
        webaudio-slider {
            padding:            2%;
        }
    </style>
  
    <audio id="myPlayer" crossorigin="anonymous"></audio>
  
    <div id="container">
        <h1 style="text-align:center">Nicolas Meyer - Spotify de pauvre ♥️</h1>
        <h2 style="text-align:center">Musique : <span id="title">Deadmau5 ft Rob Wire - Ghosts 'n' Stuff</span></h2>
        
        <div id="aiguilleDynamic">
            <webaudio-knob id="aiguilleKnob" src="./myComponents/assets/imgs/aiguille.png"
            width="198" height="164" value=0 min=0 max=100 step=1 tooltip="CA BOUGE TOUT SEUL AVEC LE SON !!!"></webaudio-knob>                
        </div>
        
        <div id="progress">
            <span id="current_time"></span>
            <div id="progress_bar">
                <div id="progressed"></div>
            </div>
            <span id="duration"></span>
        </div>
        <br>
        <div id="options">
            <input type="image" id="playAndPauseButton" src="./myComponents/assets/imgs/play.png" /> 
            <input type="image" class="sep" src="./myComponents/assets/imgs/sep.png" /> 
            <input type="image" id="downtotenButton" src="./myComponents/assets/imgs/back.png" /> 
            <input type="image" id="restartButton" src="./myComponents/assets/imgs/restart.png" /> 
            <input type="image" id="uptotenButton" src="./myComponents/assets/imgs/foward.png" />
            <input type="image" class="sep" src="./myComponents/assets/imgs/sep.png" /> 
            <input type="image" id="loop" src="./myComponents/assets/imgs/loop.png" /> 
            <input type="image" id="mute" src="./myComponents/assets/imgs/sound.png" /> 
        </div>
    
        <div id="buttons">
            <webaudio-knob id="knbBalance" src="./myComponents/assets/imgs/LittlePhatty.png" 
            value="0" min="-1" max="1" step="0.1" diameter="64" tooltip="Balance: %s"></webaudio-knob>
            <webaudio-knob id="volumeKnob" src="./myComponents/assets/imgs/LittlePhatty.png" 
            value="0.5" min="0" max="1" step="0.01" diameter="64" tooltip="Volume: %s"></webaudio-knob>
            <webaudio-knob id="speedKnob" src="./myComponents/assets/imgs/LittlePhatty.png" 
            value="1" min="0" max="4" step="0.25" diameter="64" tooltip="Vitesse: %s"></webaudio-knob>    
            <webaudio-switch id="switch" src="./myComponents/assets/imgs/switch_metal.png"
            width="100" height="100" tooltip="Change canvas"></webaudio-switch>
        </div>
        
        <canvas id="myCanvas" width: 100px height: 100px></canvas>
    
        <div id="sliders">
             <webaudio-slider id="gain0" width="40" height="160" value="0" step="1" min="-30" max="30" tooltip="Gain 1">
             </webaudio-slider>
             <webaudio-slider id="gain1" width="40" height="160" value="0" step="1" min="-30" max="30" tooltip="Gain 2">
             </webaudio-slider>
             <webaudio-slider id="gain2" width="40" height="160" value="0" step="1" min="-30" max="30" tooltip="Gain 3">
             </webaudio-slider>
             <webaudio-slider id="gain3" width="40" height="160" value="0" step="1" min="-30" max="30" tooltip="Gain 4">
             </webaudio-slider>
             <webaudio-slider id="gain4" width="40" height="160" value="0" step="1" min="-30" max="30" tooltip="Gain 5">
             </webaudio-slider>
             <webaudio-slider id="gain5" width="40" height="160" value="0" step="1" min="-30" max="30" tooltip="Gain 6">
             </webaudio-slider>
        </div>
    
        <div id="playlist">
            <h3> PLAYLIST</h3>
            <ul id="playlist-list" style="list-style-type: none;">
                <li data-sound="./myComponents/assets/playlist/ghosts_n_stuff.mp3">
                    <input type="image" id="sound0" src="./myComponents/assets/imgs/actif.png" />
                      <span id="titre0">Deadmau5 ft Rob Wire - Ghosts 'n' Stuff</span>
                </li>
                <li data-sound="./myComponents/assets/playlist/death_and_desire.mp3">
                    <input type="image" id="sound1" src="./myComponents/assets/imgs/inactif.png" />
                      <span id="titre1">Knife Party - Death and Desire</span>
                </li>
                <li data-sound="./myComponents/assets/playlist/blood_sugar.mp3">
                    <input type="image" id="sound2" src="./myComponents/assets/imgs/inactif.png" />
                      <span id="titre2">Pendulum - Blood Sugar</span>
                </li>
            </ul>
        </div>
    </div>
`;

class MyWebAudioPlayer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.basePath = getBaseURL();
    }

    connectedCallback() {
        // Déclaration des boutons utilisés
        this.player = this.shadowRoot.querySelector("#myPlayer");
        this.player.loop = false;
        this.player.src = this.getAttribute("src");
        this.progressed = this.shadowRoot.querySelector("#progressed");
        this.progress_bar = this.shadowRoot.querySelector("#progress_bar");
        this.current_time = this.shadowRoot.querySelector("#current_time");
        this.duration = this.shadowRoot.querySelector("#duration");
        this.playAndPauseButton = this.shadowRoot.querySelector("#playAndPauseButton");
        this.loopButton = this.shadowRoot.querySelector("#loop");
        this.mute = this.shadowRoot.querySelector("#mute");
        this.aiguille = this.shadowRoot.querySelector("#aiguilleKnob");
        this.aiguilleSpeed = this.shadowRoot.querySelector("#aiguilleSpeedKnob");
        this.switch = this.shadowRoot.querySelector("#switch");
        this.playlist = this.shadowRoot.querySelector("#playlist-list").children;

        // récupérer le canvas
        this.canvas = this.shadowRoot.querySelector("#myCanvas");
        this.ctx = this.canvas.getContext("2d");

        // Récupération du contexte WebAudio
        this.audioCtx = new AudioContext();

        this.player.ontimeupdate = (e) => {
            this.progressed.style.width = Math.floor(100*this.player.currentTime / this.player.duration)+"%";
            displayCurrentTime(this.player, this.current_time);
        }

        this.declareListeners();

        this.buildAudioGraph();

        requestAnimationFrame(() => {
            this.animationLoop();
        });
    }

    buildAudioGraph() {
        let audioContext = this.audioCtx;

        let playerNode = audioContext.createMediaElementSource(this.player);

        this.analyserNode = audioContext.createAnalyser();
        this.pannerNode = audioContext.createStereoPanner();

        this.analyserNode.fftSize = 256;
        this.bufferLength = this.analyserNode.frequencyBinCount;
        this.dataArray = new Uint8Array(this.bufferLength);

        let filters = [];

        [60, 170, 350, 1000, 3500, 10000].forEach(function(freq) {
            var eq = audioContext.createBiquadFilter();
            eq.frequency.value = freq;
            eq.type = "peaking";
            eq.gain.value = 0;
            filters.push(eq);
        });

        playerNode.connect(filters[0]);
        for(var i = 0; i < filters.length - 1; i++) {
            filters[i].connect(filters[i+1]);
        }

        filters[filters.length - 1].connect(audioContext.destination);

        this.filters = filters;
        playerNode.connect(this.analyserNode);
        this.analyserNode.connect(audioContext.destination);

        playerNode.connect(this.pannerNode);
        this.pannerNode.connect(audioContext.destination);
    }

    visualize() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.analyserNode.getByteTimeDomainData(this.dataArray);

        this.ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = 'lightBlue';
        this.ctx.beginPath();

        let sliceWidth = this.canvas.width / this.bufferLength;
        let x = 0;

        for(let i = 0; i < this.bufferLength; i++) {
            let v = this.dataArray[i] / 255;
            let y = v * this.canvas.height;

            if(i === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
            x += sliceWidth;
        }

        this.ctx.lineTo(this.canvas.width, this.canvas.height/2);

        this.ctx.stroke();

        requestAnimationFrame(() => {
            this.visualize();
        });
    }

    animationLoop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.analyserNode.getByteFrequencyData(this.dataArray);

        let barWidth = this.canvas.width / this.bufferLength;
        let barHeight;
        let x = 0;
        let heightScale = this.canvas.height / 128;

        for(let i = 0; i < this.bufferLength; i++) {
            barHeight = this.dataArray[i];
            this.aiguille.value = this.dataArray[20] / 3 + 10;

            this.ctx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
            barHeight *= heightScale;
            this.ctx.fillRect(x, this.canvas.height - barHeight / 2, barWidth, barHeight / 2);
            x += barWidth + 1;
        }
        requestAnimationFrame(() => {
            this.animationLoop();
        });
    }

    declareListeners() {
        this.shadowRoot.querySelector("#playAndPauseButton").addEventListener("click", () => {
            this.playAndPause();
        });

        this.shadowRoot.querySelector("#restartButton").addEventListener("click", () => {
            this.player.currentTime = 0;
        });

        this.shadowRoot.querySelector("#uptotenButton").addEventListener("click", () => {
            this.player.currentTime += 10;
        });

        this.shadowRoot.querySelector("#downtotenButton").addEventListener("click", () => {
            this.player.currentTime -= 10;
        });

        this.shadowRoot.querySelector("#loop").addEventListener("click", () => {
            this.loop();
        });

        this.shadowRoot.querySelector("#progress_bar").addEventListener("click", (event) => {
            this.player.currentTime = ((event.offsetX/this.progress_bar.offsetWidth) * this.player.duration);
        });

        this.shadowRoot.querySelector("#volumeKnob").addEventListener("input", (event) => {
            this.player.volume = event.target.value;
        });

        this.shadowRoot.querySelector("#speedKnob").addEventListener("input", (event) => {
            this.player.playbackRate = parseFloat(event.target.value);
            this.aiguilleSpeed.value = parseFloat(event.target.value);
        });

        this.shadowRoot.querySelector("#knbBalance").addEventListener("input", (event) => {
            this.pannerNode.pan.value = parseFloat(event.target.value);
        });

        this.shadowRoot.querySelector("#gain0").addEventListener("input", (event) => {
            this.filters[0].gain.value = parseFloat(event.target.value);
        });

        this.shadowRoot.querySelector("#gain1").addEventListener("input", (event) => {
            this.filters[1].gain.value = parseFloat(event.target.value);
        });

        this.shadowRoot.querySelector("#gain2").addEventListener("input", (event) => {
            this.filters[2].gain.value = parseFloat(event.target.value);
        });

        this.shadowRoot.querySelector("#gain3").addEventListener("input", (event) => {
            this.filters[3].gain.value = parseFloat(event.target.value);
        });

        this.shadowRoot.querySelector("#gain4").addEventListener("input", (event) => {
            this.filters[4].gain.value = parseFloat(event.target.value);
        });

        this.shadowRoot.querySelector("#gain5").addEventListener("input", (event) => {
            this.filters[5].gain.value = parseFloat(event.target.value);
        });

        this.shadowRoot.querySelector("#mute").addEventListener("click", () => {
            this.muted();
        });

        this.shadowRoot.querySelector("#switch").addEventListener("click", () => {
            this.switchVisualize();
        });

        for(let i = 0; i < this.playlist.length; i++) {
            this.shadowRoot.querySelector("#sound"+i).addEventListener('click', (e) => {
                let titre = this.shadowRoot.querySelector("#titre"+i).innerText;
                this.playListManager(e, titre, i);
            });
        }
    }

    playAndPause() {
        if(this.player.paused) {
            this.player.play();
            this.audioCtx.resume();

            this.playAndPauseButton.innerText = "Pause";
            this.playAndPauseButton.src = "./myComponents/assets/imgs/pause.png";
            displayDuration(this.player, this.duration);
        } else {
            this.player.pause();
            this.playAndPauseButton.innerText = "Play";
            this.playAndPauseButton.src = "./myComponents/assets/imgs/play.png";
        }
    }

    loop() {
        if(this.player.loop) {
            this.player.loop = false;
            this.loopButton.src = "./myComponents/assets/imgs/loop.png";
        } else {
            this.player.loop = true;
            this.loopButton.src = "./myComponents/assets/imgs/loopOn.png";
        }
    }

    muted() {
        if(this.player.muted) {
            this.player.muted = false;
            this.mute.src = "./myComponents/assets/imgs/sound.png";
        } else {
            this.player.muted = true;
            this.mute.src = "./myComponents/assets/imgs/mute.png";
        }
    }

    switchVisualize(){
        if(this.switch.value == 0) {
            requestAnimationFrame(() => {
                this.animationLoop();
            });
        } else {
            requestAnimationFrame(() => {
                this.visualize();
            });
        }
    }

    playListManager(src, titre, idMusic) {
        this.playAndPauseButton.src = "./myComponents/assets/imgs/play.png";
        for(let i = 0; i < 3; i++) {
            this.shadowRoot.querySelector("#sound"+i).src = "./myComponents/assets/imgs/inactif.png";
        }
        this.shadowRoot.querySelector("#sound"+idMusic).src = "./myComponents/assets/imgs/actif.png";
        this.shadowRoot.querySelector("#title").textContent = titre;
        this.player.src = src.path[1].dataset.sound;
    }
}

customElements.define("my-audioplayer", MyWebAudioPlayer);
