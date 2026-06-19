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

// document.getElementById("startbutton").addEventListener("click", () => {
//     document.getElementById("startbutton").style.display = "none";
//     tl.play();
// });
