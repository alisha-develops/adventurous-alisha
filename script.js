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

document.getElementById("closedbook").addEventListener("click", () => {
    document.getElementById("openbook").classList.toggle("active");
});