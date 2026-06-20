const tl = gsap.timeline({paused: true});

tl.to("#planesvg", { 
    left: "60%", 
    duration: 5,
    ease: "power1.inOut"
})
.call(() => {
    document.getElementById("planesvg").src = "svgcode/planedoor.svg";
})
.call(() => {
    document.body.style.overflow = "scroll"; 
}, null, "+=2");

document.getElementById("startbutton").addEventListener("click", () => {
    document.getElementById("startbutton").style.display = "none";
    tl.play();
});

const openbook = document.getElementById("openbook");
const closedbook = document.getElementById("closebook");
const backdrop = document.getElementById("backdrop");
const bookcontent = document.getElementById("bookcontent");

document.getElementById("closedbook").addEventListener("click", () => {
    openbook.classList.toggle("active");
    closedbook.classList.toggle("active");
    backdrop.classList.toggle("active");
    bookcontent.classList.toggle("active");
});

closedbook.addEventListener("click", () => {
    openbook.classList.remove("active");
    closedbook.classList.remove("active");
    backdrop.classList.remove("active");
    bookcontent.classList.remove("active");
});

const chatwindow = document.getElementById("chatwindow");

document.getElementById("closedfire").addEventListener("click", () => {
    chatwindow.classList.toggle("active");
});
document.getElementById("closechat").addEventListener("click",() => {
    chatwindow.classList.remove("active");
});

