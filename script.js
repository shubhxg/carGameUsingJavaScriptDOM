const carStart = document.getElementById('start');
const carStop = document.getElementById('stop');
const carGearUp = document.getElementById('gup');
const carGearDown = document.getElementById('gdown');
const autoPilot = document.getElementById('autoPilot');
const honkButton = document.getElementById('honk');

// Initializing buttons

carGearUp.classList.add("inactivebutton");
carGearDown.classList.add("inactivebutton");
carStop.classList.add("inactivebutton");
autoPilot.classList.add("inactivebutton");
honkButton.classList.add("inactivebutton");


let isStarted = false;
let gear = 0;


// audio elements
const carStartAudio = document.getElementById('carStartAudio');
const carGearUpAudio = document.getElementById('carGearUpAudio');
const carGearDownAudio = document.getElementById('carGearDownAudio');
const autoPilotAudio = document.getElementById('autoPilotAudio');
// const keysClingAudio = document.getElementById('keysCling')
const carVideo = document.getElementById('car_img');
const honkAudio = document.getElementById('honkAudio');



// car start
carStart.addEventListener('click', () => {
    if (!gear) {
        // isStarted = true;
        carStartAudio.play();
        carStarter();
    } else {
        errorAudio.play();
        window.alert('Car is already started!');
    }
});

// car gearup
carGearUp.addEventListener('click', () => {
    if (gear && (gear < 5)) {
        ++gear;
        console.log(gear);
        carGearUpAudio.play();
        resetterForGearUp();

        //speeding up the car
        carSpeedControl(carVideo.playbackRate + 0.5);

        if (gear == 5) {
            carGearUp.classList.add("inactivebutton");
        }

    } else {
        startTheCarAlert();
    }
});

// car geardown
carGearDown.addEventListener("click", () => {
    if (gear) {
        gear--;

        carGearDownAudio.play();
        resetterForGearDown();

        // speeding down the car
        if (gear) {
            carGearUp.classList.remove("inactivebutton");
            carSpeedControl(carVideo.playbackRate - 0.5);
        }
        else {
            carSpeedControl(0);
            resetterForStop();
        }

    } else {
        startTheCarAlert();
    }
});

// autopilot
autoPilot.addEventListener('click', () => {
    if (gear) {
        autoPilotAudio.play();
        resetterForAutoPilot();
    } else {
        startTheCarAlert()
    }
});

// car stop
carStop.addEventListener("click", () => {
    if (gear > 0) {
        resetterForStop();
        gear = 0;
    } else {
        errorAudio.play();
        window.alert('Car is already stopped!');
    }
});

// honk
honkButton.addEventListener('click', () => {
    if (gear) {
        honkAudio.currentTime = 0;
        honkAudio.play();
    } else {
        startTheCarAlert();
    }
});

// audio resetters--------------
function resetterForStop() {
    // Gradually decrease the speed before stopping
    const speedDecrement = 0.1; // Adjust this value for the decrement speed

    const speedInterval = setInterval(() => {
        if (carVideo.playbackRate > speedDecrement) {
            carVideo.playbackRate -= speedDecrement;
        } else {
            clearInterval(speedInterval); // Stop decreasing speed once it reaches 0
            carVideo.playbackRate = 0; // Ensure playback rate is set to 0
            carVideo.pause();
        }
    }, 100); // Adjust the interval as needed

    // Resetting other elements
    carStartAudio.pause();
    carGearUpAudio.pause();
    carGearDownAudio.pause();
    autoPilotAudio.pause();
    carStartAudio.currentTime = 0;
    carGearUpAudio.currentTime = 0;
    carGearDownAudio.currentTime = 0;
    autoPilot.currentTime = 0;

    carStart.classList.remove("inactivebutton");
    carGearUp.classList.add("inactivebutton");
    carGearDown.classList.add("inactivebutton");
    carStop.classList.add("inactivebutton");
    autoPilot.classList.add("inactivebutton");
    honkButton.classList.add("inactivebutton");
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
    gear = 1;
    carVideo.playbackRate = gear; // Start with a slow initial speed
    carVideo.play();

    // Gradually increase the speed
    const targetSpeed = 1; // Adjust this value to your desired speed
    const speedIncrement = 0.25; // Adjust this value for the increment speed

    const speedInterval = setInterval(() => {
        if (carVideo.playbackRate < targetSpeed) {
            carVideo.playbackRate += speedIncrement;
        } else {
            clearInterval(speedInterval); // Stop increasing speed once the target is reached
        }
    }, 500); // Adjust the interval as needed

    carStart.classList.add("inactivebutton");
    carGearUp.classList.remove("inactivebutton");
    carGearDown.classList.remove("inactivebutton");
    carStop.classList.remove("inactivebutton");
    autoPilot.classList.remove("inactivebutton");
    honkButton.classList.remove("inactivebutton");
}
