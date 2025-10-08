// Burger menu toggle

// variables
const burgerBtn = document.querySelector(".burger-btn");
const burgerCon = document.querySelector("#burger-con");

// functions
function toggleMenu() {
  console.log("Nav dropdown called");
  burgerCon.classList.toggle("open");
}

// event listeners
burgerBtn.addEventListener("click", toggleMenu);

//Video Player 
const playerCon = document.querySelector("#player-container");
const player = document.querySelector("video");
const videoControls = document.querySelector("#video-controls");
const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const stopButton = document.querySelector("#stop-button");
const volumeSlider = document.querySelector("#change-vol");
const fullScreen = document.querySelector("#full-screen");

// console.log(playerCon);

// if user has JS, then remove default controls and show custom
player.controls = false;
videoControls.classList.remove('hidden');

//functions
function playVideo() {
    console.log("Play Video Called!");
    player.play();
}

function pauseVideo() {
    player.pause();
}

function stopVideo() {
    player.pause();
    player.currentTime = 1;
}

function changeVolume() {
    //console.log(volumeSlider.value);
    player.volume = volumeSlider.value;
}

function toggleFullScreen() {
    if(document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        playerCon.requestFullscreen();
    }
}

function hideControls() {
    videoControls.classList.add('hide');
}

function showControls() {
    videoControls.classList.remove('hide');
}

// Event Listeners
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
stopButton.addEventListener("click", stopVideo);
volumeSlider.addEventListener("input", changeVolume);
fullScreen.addEventListener("click", toggleFullScreen);
videoControls.addEventListener("mouseenter", showControls);
videoControls.addEventListener("mouseleave", hideControls);
player.addEventListener("mouseenter", showControls);
player.addEventListener("mouseleave", hideControls);



// Portfolio Student Info Array
let students = {
    Sheldon_Gohetia: {
        name: 'Sheldon Gohetia',
        link: 'https://sheldongohetia.com/',
        role: 'Graphic Designer and Front End Web Developer'
    },
    Qiao_Yi_Chu: {
        name: 'Qiao-Yi Chu',
        link: 'https://joychudesign.com/',
        role: 'Graphic Designer'
    },
    King_Yin_Sham: {
        name: 'King Yin Sham',
        link: 'https://www.sky-connie.com/index.php',
        role: 'Graphic and Motion Designer, PM'
    },
    Ali_El_Maniary: {
        name: 'Ali El Maniary',
        link: 'https://alielmaniary.com/',
        role: 'Graphic and Motion Designer, Front-End Developer'
    },
    Thi_Thanh_Thuong_Nguyen: {
        name: 'Thi Thanh Thuong Nguyen',
        link: 'https://annanguyent.com/',
        role: 'Graphic Designer and Developer'
    },
    Jenifer_Q_Evangelista: {
        name: 'Jenifer Q. Evangelista',
        link: 'https://jeniferquelali.com/',
        role: 'Graphic Designer and Developer'
    },
    Het_Shah: {
        name: 'Het Shah',
        link: 'https://shahhet.ca/',
        role: 'Graphic and Motion Designer'
    },
    Carlos_Menendes: {
        name: 'Carlos Menendes',
        link: 'https://carloscano.ca/',
        role: 'Graphic and Motion Designer, Front-End Developer'
    },
    Henrique_Gamborgi: {
        name: 'Henrique Gamborgi',
        link: 'https://henriquegamborgi.com/',
        role: 'Graphic Designer, PM and Front-End Developer'
    },
    Keith_Lie: {
        name: 'Keith Lie',
        link: 'https://keithliecreative.com/',
        role: 'Graphic and Motion Designer, Front-End Developer'
    },
    Meghan_Damen: {
        name: 'Meghan Damen',
        link: 'https://maggiewest.ca/',
        role: 'Graphic and Motion Designer'
    },
    Bernardo_Jr_Macapagal: {
        name: 'Bernardo Jr. Macapagal',
        link: 'https://bmjrdesigns.com/',
        role: 'Graphic and Motion Designer, PM and Front-End Developer'
    },
    Tanya_Mae_Huertas: {
        name: 'Tanya Mae Huertas',
        link: 'https://heytanyadesigns.com/',
        role: 'Graphic and Motion Designer, Front-End Developer'
    },
    Kirk_Caspe: {
        name: 'Kirk Caspe',
        link: 'https://kirkcaspe.ca/',
        role: 'Graphic and Motion Designer'
    },
    Cassidy_Pelacek: {
        name: 'Cassidy Pelacek',
        link: 'https://cassidentity.ca/',
        role: 'Graphic Designer and Developer'
    },
    Emmanuel_Opadele: {
        name: 'Emmanuel Opadele',
        link: 'https://emmanuelopadele.com/',
        role: 'Graphic and Motion Designer, PM and Developer'
    },
    Bozhi_Zhang: {
        name: 'Bozhi Zhang',
        link: 'https://owenz724.com/',
        role: 'Graphic and Motion Designer'
    },
    Alisher_Yantizhanov: {
        name: 'Alisher Yantizhanov',
        link: 'https://alishdesign.com/',
        role: 'Graphic Designer and Front-End Developer'
    },
    Kyuri_Park: {
        name: 'Kyuri Park',
        link: 'https://kyurihailiepark.ca/',
        role: 'Graphic Designer, PM and Front-End Developer'
    },
    Loi_Pan_Sit: {
        name: 'Loi Pan Sit',
        link: 'https://www.lpsdesigns.com/',
        role: 'Graphic and Motion Designer'
    }
};

