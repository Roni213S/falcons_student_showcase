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

// Testimonials and Portfolio 

const testimonials = [
  { name: "Marco Deluca", position: "IDP Program Coordinator and Professor at Fanshawe College", testimonial: "Utilizing a diverse range of media, the Interactive Media Design students have masterfully highlighted the heroic sacrifices made by Indian soldiers in World War I." },
  { name: "Rob Haaf", position:"IDP Professor at Fanshawe College", testimonial: "It is always rewarding to see the innovation and passion that our students bring to Industry Night. The skills they have developed in the IDP3 program are impressive and set them up for future success." },
  { name: "Jarrod Osterback", position:"IDP Professor at Fanshawe College", testimonial: "Industry Night is a wonderful opportunity for our students to shine. The projects they present are a testament to their hard work and the real-world skills they've gained throughout our program." }
];

const testimonialCon = document.querySelector("#testimonial-con");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
let count = 0;

// Functions

function displayTestimonial() {
  const testimonialDiv = document.createElement("div");
  testimonialDiv.classList.add("col-span-full");

  const testimonialName = document.createElement("h3");
  const testimonialPosition = document.createElement("h4");
  const testimonialParagraph = document.createElement("p");

  testimonialName.textContent = testimonials[count].name;
  testimonialPosition.textContent = testimonials[count].position;
  testimonialParagraph.textContent = `"${testimonials[count].testimonial}"`;

  testimonialCon.innerHTML = "";
  testimonialDiv.appendChild(testimonialName);
  testimonialDiv.appendChild(testimonialPosition);
  testimonialDiv.appendChild(testimonialParagraph);
  testimonialCon.appendChild(testimonialDiv);
}

function nextTestimonial() {
  count++;
  if (count >= testimonials.length) count = 0;
  displayTestimonial();
}
function previousTestimonial() {
  count--;
  if (count < 0) count = testimonials.length - 1;
  displayTestimonial();
}

displayTestimonial();
next.addEventListener("click", nextTestimonial);
previous.addEventListener("click", previousTestimonial);

//Portfolio

const portfolioCon = document.querySelector(".lightbox-grid");

const portfolios = [
  { name: "Sheldon Gohetia", pLink: "sheldongohetia.com" },
  { name: "Qiao-Yi Chu", pLink: "joychudesign.com" },
  { name: "King Yin Sham", pLink: "www.sky-connie.com/index.php" },
  { name: "Ali El Maniary", pLink: "alielmaniary.com" },
  { name: "Thi Thanh Thuong Nguyen", pLink: "annanguyent.com" },
  { name: "Jenifer Q. Evangelista", pLink: "jeniferquelali.com" },
  { name: "Het Shah", pLink: "shahhet.ca" },
  { name: "Carlos Menendes", pLink: "carloscano.ca" },
  { name: "Henrique Gamborgi", pLink: "henriquegamborgi.com" },
  { name: "Keith Lie", pLink: "keithliecreative.com" },
  { name: "Meghan Damen", pLink: "maggiewest.ca" },
  { name: "Bernardo Jr. Macapagal", pLink: "bmjrdesigns.com" },
  { name: "Tanya Mae Huertas", pLink: "heytanyadesigns.com" },
  { name: "Kirk Caspe", pLink: "kirkcaspe.ca" },
  { name: "Cassidy Pelacek", pLink: "cassidentity.ca" },
  { name: "Emmanuel Opadele", pLink: "emmanuelopadele.com" },
  { name: "Bozhi Zhang", pLink: "owenz724.com" },
  { name: "Alisher Yantizhanov", pLink: "alishdesign.com" },
  { name: "Kyuri Park", pLink: "kyurihailiepark.ca" },
  { name: "Loi Pan Sit", pLink: "www.lpsdesigns.com" }
];

if (portfolioCon) {
  portfolios.forEach(function (portfolio, i) {
    const item = document.createElement("div");
    item.classList.add("lightbox-item");
    if (i >= 4) item.classList.add("desktop-only"); 

    const box = document.createElement("div");
    box.classList.add("box");
    const icon = document.createElement("i");
    icon.classList.add("fa", "fa-camera");
    box.appendChild(icon);

    const portfolioName = document.createElement("h3");
    portfolioName.textContent = portfolio.name;

    const portfolioLink = document.createElement("a");
    portfolioLink.href = `https://${portfolio.pLink}`;
    portfolioLink.target = "_blank";
    portfolioLink.textContent = portfolio.pLink;

    item.appendChild(box);
    item.appendChild(portfolioName);
    item.appendChild(portfolioLink);
    portfolioCon.appendChild(item);
  });
}

