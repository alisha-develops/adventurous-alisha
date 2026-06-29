const tl = gsap.timeline({paused: true});

tl.to("#planesvg", { 
    left: "60%", 
    duration: 5,
    ease: "power1.inOut"
})
.call(() => {
    document.getElementById("planesvg").src = "svgcode/planedoor.svg";
})

.to("#ch1", { 
    opacity: 1, 
    duration: 0.3 
}, "+=0.5")

.to("#ch1", { 
    y: 400,
    x: -100,
    rotation: 360,
    duration: 6, 
    ease: "power1.out",
})
.call(() => {
    gsap.set("#ch1", { 
        rotation: 15 
    });
})
.call(() => {
    document.body.style.overflow = "scroll"; 
}, null, "+=2");

document.addEventListener("keydown", (e) => {
    const ch1 = document.getElementById("ch1");
    const rect = ch1.getBoundingClientRect();
    
    if (e.key === "d" && rect.right < window.innerWidth) {
        gsap.to("#ch1", { 
            x: "+=20", 
            duration: 0.1, 
            ease: "none" 
        });
        ch1.style.transform = "scaleX(1)";
    }
    if (e.key === "a" && rect.left > 0) {
        gsap.to("#ch1", { 
            x: "-=20", 
            duration: 0.1, 
            ease: "none" 
        });
        ch1.style.transform = "scaleX(-1)";
    }
    if (e.key === "w" && rect.top > 0) {
        gsap.to("#ch1", { 
            y: "-=15", 
            duration: 0.1, 
            ease: "none" 
        });
    }
    if (e.key === "s" && rect.bottom < window.innerHeight) {
        gsap.to("#ch1", { 
            y: "+=15", 
            duration: 0.1, 
            ease: "none" 
        });
    }
    document.querySelectorAll(".flag, .campsvg, .book, .bonfiresvg").forEach(el => {
        const obj = el.getBoundingClientRect();
        const distance = Math.hypot(
            rect.left - obj.left,
            rect.top - obj.top
        );
        
        if (distance < 100) {
            el.style.filter = "brightness(1.8) drop-shadow(0 0 10px rgba(255, 200, 50, 0.9))";
        } else {
            el.style.filter = "";
        }
    });
});

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

document.getElementById("playgame").addEventListener("click", () => {
    document.getElementById("game").style.display = "block";
    document.getElementById("chatting").style.display = "none";
});

document.getElementById("backtofire").addEventListener("click", () => {
    document.getElementById("game").style.display = "none";
    document.getElementById("chatting").style.display = "block";
});

document.getElementById("flag1").addEventListener("click", () => {
    document.getElementById("projectwindow").classList.add("active");
});

document.getElementById("closeproject").addEventListener("click", () => {
    document.getElementById("projectwindow").classList.remove("active");
});