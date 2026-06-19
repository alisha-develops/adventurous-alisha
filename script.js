let tl = gsap.timeline();

tl.to("#planesvg", {
    left: "60%",
    duration: 5,
    ease: "power1.inOut",
    delay: 0.5
})
.call(() => {
    document.getElementById("planesvg").src = "svgcode/planedoor.svg"
})
.to("#planesvg", {
    x: -5,
    duration: 1.0,
    yoyo: true,
    repeat: 3
})