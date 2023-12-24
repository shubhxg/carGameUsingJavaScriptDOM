const carStart = document.getElementById('start');
const carStop = document.getElementById('stop');
const carGearUp = document.getElementById('gup');
const carGearDown = document.getElementById('gdown');
const autoPilot = document.getElementById('autoPilot');
let isStarted = false;

// Define audio elements
const carStartAudio = document.getElementById('carStartAudio');
const carGearUpAudio = document.getElementById('carGearUpAudio');
const carGearDownAudio = document.getElementById('carGearDownAudio');
const autoPilotAudio = document.getElementById('autoPilotAudio');
const keysClingAudio = document.getElementById('keysCling')
const errorAudio = document.getElementById('errorSound')

// car start
carStart.addEventListener('click', () => {
    if (!isStarted) {
        isStarted = true;
        carStartAudio.play();
    } else {
        errorAudio.play();
    }

});

// car gearup
carGearUp.addEventListener('click', () => {
    if (isStarted) {
        carGearUpAudio.play();
        resetterForGearUp();
    } else {
        startTheCarAlert();
    }
});

// car geardown
carGearDown.addEventListener("click", () => {
    if (isStarted) {
        carGearDownAudio.play();
        resetterForGearDown();
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

function startShaking() {
    const image = document.getElementById('car_img');
    const imageClone = image.cloneNode(true);

    // Replace the original image with the cloned one
    image.parentNode.replaceChild(imageClone, image);

    // Add the 'shake' class to start the animation
    imageClone.classList.add('shake');
}

function startTheCarAlert() {
    keysClingAudio.play();
    window.alert("First start the car!")
}
