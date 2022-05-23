const slides = document.querySelector(".slides");
const containerDots = document.querySelector(".container-dots");

var slideIndex = 1;

const images = [
    {src: "https://rb.gy/ohx0bd"},
    {src: "https://rb.gy/gggxy8"},
    {src: "https://rb.gy/z2a0fy"},
    {src: "https://rb.gy/nsefjh"},
    {src: "https://rb.gy/dssu2a"}  
];

images.map((img) => {
    var imgTag = document.createElement("img");
    imgTag.src = img.src;

    var dot = document.createElement("div");
    dot.classList.add("dot");

    slides.appendChild(imgTag);
    containerDots.appendChild(dot);
});

const dots = containerDots.querySelectorAll("*").forEach((dot, index) => {
    dot.addEventListener("click", () => {
        moveDot(index + 1);
    });
});

function moveDot(index) {
    slideIndex = index;
    updateImageAndDot();
}

function updateImageAndDot() {
    /* .....Updating Image..... */
    const activeSlide = slides.querySelector("[data-active]");
    slides.children[slideIndex - 1].dataset.active = true;
    activeSlide && delete activeSlide.dataset.active;

    /* .....Updating Dots..... */
    const activeDot = containerDots.querySelector("[data-active]");
    containerDots.children[slideIndex - 1].dataset.active = true;
    activeDot && delete activeDot.dataset.active;
}

const nextSlide = () => {
    if(slideIndex !== images.length) {
        ++slideIndex;
    } else if(slideIndex === images.length) {
        slideIndex = 1;
    }
    updateImageAndDot();
};

const nextBtn = document.querySelector(".next");
nextBtn.onclick = nextSlide;

const prevSlide = () => {
    if(slideIndex !== 1) {
        --slideIndex;
    } else if(slideIndex === 1) {
        slideIndex = images.length;
    }
    updateImageAndDot();
};

const prevBtn = document.querySelector(".prev");
prevBtn.onclick = prevSlide;

updateImageAndDot();