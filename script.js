const carStart = document.getElementById('start');
const carStop = document.getElementById('stop');
const carGearUp = document.getElementById('gup');
const carGearDown = document.getElementById('gdown');
const autoPilot = document.getElementById('autoPilot');
const honkButton = document.getElementById('honk');
let isStarted = false;

// audio elements
const carStartAudio = document.getElementById('carStartAudio');
const carGearUpAudio = document.getElementById('carGearUpAudio');
const carGearDownAudio = document.getElementById('carGearDownAudio');
const autoPilotAudio = document.getElementById('autoPilotAudio');
const keysClingAudio = document.getElementById('keysCling')
const errorAudio = document.getElementById('errorSound')
const carVideo = document.getElementById('car_img');
const honkAudio = document.getElementById('honkAudio');

// car start
carStart.addEventListener('click', () => {
    if (!isStarted) {
        isStarted = true;
        carStartAudio.play();
        carStarter();
    } else {
        errorAudio.play();
        window.alert('Car is already started!');
    }
});

// car gearup
carGearUp.addEventListener('click', () => {
    if (isStarted) {
        carGearUpAudio.play();
        resetterForGearUp();

        //speeding up the car
        carSpeedControl(2.8);
    } else {
        startTheCarAlert();
    }
});

// car geardown
carGearDown.addEventListener("click", () => {
    if (isStarted) {
        carGearDownAudio.play();
        resetterForGearDown();
        // speeding down the car
        carSpeedControl(1);
    } else {
        startTheCarAlert();
    }
});

// autopilot
autoPilot.addEventListener('click', () => {
    if (isStarted) {
        autoPilotAudio.play();
        resetterForAutoPilot();
    } else {
        startTheCarAlert()
    }
});

// car stop
carStop.addEventListener("click", () => {
    if (isStarted) {
        resetterForStop();
        isStarted = false;
    } else {
        errorAudio.play();
        window.alert('Car is already stopped!');
    }
});

// honk
honkButton.addEventListener('click', () => {
    if (isStarted) {
        honkAudio.currentTime = 0;
        honkAudio.play();
    } else {
        startTheCarAlert();
    }
});

// audio resetters--------------
function resetterForStop() {
    //resetting
    carStartAudio.pause();
    carGearUpAudio.pause();
    carGearDownAudio.pause();
    autoPilotAudio.pause();
    carStartAudio.currentTime = 0;
    carGearUpAudio.currentTime = 0;
    carGearDownAudio.currentTime = 0;
    autoPilot.currentTime = 0;

    carVideo.pause()
}

function resetterForGearDown() {
    //resetting
    carStartAudio.pause();
    carGearUpAudio.pause();
    carStartAudio.currentTime = 0;
    carGearUpAudio.currentTime = 0;

}

function resetterForGearUp() {
    // resetting
    carStartAudio.pause();
    carStartAudio.currentTime = 0;
    carGearDownAudio.currentTime = 0;
    carGearUpAudio.currentTime = 0;
}

function resetterForAutoPilot() {
    //resetting
    carStartAudio.currentTime = 0;
    carGearDownAudio.currentTime = 0;
    carGearUpAudio.currentTime = 0;
}

function startTheCarAlert() {
    keysClingAudio.play();
    window.alert("First start the car!")
}

// function to change speed of car video
function carSpeedControl(speed) {
    carVideo.playbackRate = speed;
}

function carStarter() {
    carVideo.playbackRate = 1;
    carVideo.play();
}
