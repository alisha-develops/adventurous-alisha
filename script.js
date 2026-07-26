gsap.registerPlugin(ScrollToPlugin);

function lockScroll(e) {
    e.preventDefault();
}

window.addEventListener("wheel", lockScroll, { passive: false });
window.addEventListener("touchmove", lockScroll, { passive: false });

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
.to(document.documentElement, {
    scrollTop: document.querySelector(".projects").offsetTop,
    duration: 6,
    ease: "power1.out"
}, "<")
.call(() => {
    gsap.set("#ch1", { 
        rotation: 15 
    });
    window.removeEventListener("wheel", lockScroll);
    window.removeEventListener("touchmove", lockScroll);
    document.body.style.overflow = "scroll";
    document.getElementById("scrollarrow").classList.add("active");
    document.getElementById("wasdmsg").classList.add("active");
});

window.addEventListener("scroll", () => {
    document.getElementById("scrollarrow").classList.remove("active");
});

document.addEventListener("keydown", (e) => {
    document.getElementById("wasdmsg").classList.remove("active");
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


function hideCharacter() {
    document.getElementById("ch1").style.visibility = "hidden";
}
function showCharacter() {
    document.getElementById("ch1").style.visibility = "visible";
}

document.getElementById("startbutton").addEventListener("click", () => {
    document.getElementById("startbutton").style.display = "none";
    tl.play();
});
const openbook = document.getElementById("openbook");
const closedbook = document.getElementById("closebook");
const backdrop = document.getElementById("backdrop");

document.getElementById("closedbook").addEventListener("click", () => {
    openbook.classList.toggle("active");
    closedbook.classList.toggle("active");
    backdrop.classList.toggle("active");
});

closedbook.addEventListener("click", () => {
    openbook.classList.remove("active");
    closedbook.classList.remove("active");
    backdrop.classList.remove("active");
});

const campwindow = document.getElementById("campwindow");

document.getElementById("closedfire").addEventListener("click", () => {
    campwindow.classList.toggle("active");
    initDrawing();
    hideCharacter();
});

document.getElementById("closedraw").addEventListener("click",() => {
    campwindow.classList.remove("active");
    showCharacter();
});
const projects = {
    project1: {
        title: "simple harmonic motion",
        desc: "i wanna pass physics",
        link: "https://simple-harmonic-motion.vercel.app/"
    },
    project2: {
        title: "vision board",
        desc: "a web based editor for your vision/mood board!",
        link: "https://alisha-develops.github.io/vision-board/"
    },
    project3: {
        title: "macropad",
        desc: "a custom macropad configuration preview",
        link: "https://macropadpreview.vercel.app/"
    }
}

document.querySelectorAll(".flag").forEach((flag, index) => {
    flag.addEventListener("click", () => {
        const key = "project" + (index + 1);
        document.getElementById("projecttitle").textContent = projects[key].title;
        document.getElementById("projectdesc").textContent = projects[key].desc;
        document.getElementById("viewproject").onclick = () => {
            document.getElementById("projectframe").src = projects[key].link;
            document.getElementById("projectframe").style.display = "block";
            document.getElementById("projectinfo").style.display = "none";
            document.getElementById("backtoinfo").style.display = "block";
        };
        document.getElementById("projectwindow").style.display = "block";
        document.getElementById("projectbackdrop").classList.add("active");
        hideCharacter();
    });
});

document.getElementById("closeproject").addEventListener("click", () => {
    document.getElementById("projectwindow").style.display = "none";
    document.getElementById("projectframe").src = "";
    document.getElementById("projectframe").style.display = "none";
    document.getElementById("projectinfo").style.display = "block";
    document.getElementById("projectbackdrop").classList.remove("active");
    showCharacter();
});

document.getElementById("backtoinfo").addEventListener("click", () => {
    document.getElementById("projectframe").style.display = "none";
    document.getElementById("projectframe").src = "";
    document.getElementById("projectinfo").style.display = "block";
    document.getElementById("backtoinfo").style.display = "none";
});

document.getElementById("proceedanyway").addEventListener("click", () => {
    document.getElementById("mobilewarning").style.display = "none";
});

document.getElementById("bush").addEventListener("click", () => {
    document.getElementById("game").style.display = "block";
    document.getElementById("gamebackdrop").classList.add("active");
    hideCharacter();
});

document.getElementById("closegame").addEventListener("click", () => {
    document.getElementById("game").style.display = "none";
    document.getElementById("gamebackdrop").classList.remove("active");
    showCharacter();
});

document.querySelector(".campsvg").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("campinfo").classList.add("active");
    document.getElementById("campbackdrop").classList.add("active");
    hideCharacter();
    updateTime();
});

document.getElementById("closecamp").addEventListener("click", () => {
    document.getElementById("campinfo").classList.remove("active");
    document.getElementById("campbackdrop").classList.remove("active");
    showCharacter();
});

function updateTime() {
    const time = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    document.getElementById("alishttime").textContent = time;
}

setInterval(updateTime, 1000);

function getKarachiHour() {
    const now = new Date();
    const karachi = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Karachi" }));
    return karachi.getHours();
}

function applyDayNight() {
    const hour = getKarachiHour();
    let isNight = false;

    if (hour >= 20) {
        isNight = true;
    }

    if (hour < 6) {
        isNight = true;
    }

    if (isNight) {
        document.getElementById("cloudsvg").style.filter = "brightness(0.5) saturate(0.6)";
        
        document.body.style.backgroundColor = "rgb(20, 35, 60)";
    
        document.querySelector(".projects").style.background = 
            "linear-gradient(180deg, rgb(20, 35, 60), rgb(40, 60, 30), rgb(25, 45, 20))";
        
        document.querySelector(".forest").style.background = 
            "linear-gradient(180deg, rgb(25, 45, 20), rgb(10, 30, 15), rgb(5, 20, 10))";

        document.getElementById("mountainsvg").style.filter = 
            "brightness(0.6) saturate(0.7)";

        document.getElementById("forestsvg").style.filter = 
            "brightness(0.6) saturate(0.7)";

        document.querySelector(".intro").style.color = "rgb(150, 180, 220)";

        document.getElementById("startbutton").style.borderColor = "rgb(43, 44, 46)";
        document.getElementById("startbutton").style.color = "rgb(43, 44, 46)";

        document.querySelector(".intro h1:last-child").style.color = "rgb(24, 24, 26)";

        document.querySelector(".intro h1:first-child").style.color = "rgb(24, 24, 26)";

        document.getElementById("startbutton").classList.add("night");
        
        addStars();

    } else {
        document.getElementById("cloudsvg").style.filter = 
            "brightness(0.85) contrast(1.5) saturate(0.5)";
        
        document.body.style.backgroundColor = "rgb(178, 209, 238)";
        
        document.querySelector(".projects").style.background = 
            "linear-gradient(180deg, rgb(178, 209, 238), #dfbd28, rgb(228, 182, 31), rgb(201, 136, 15))";
        
        document.querySelector(".forest").style.background = 
            "linear-gradient(180deg, rgb(201, 136, 15), rgb(8, 77, 25), rgb(38, 80, 9))";

        document.querySelector(".intro").style.color = "rgb(33, 79, 122)";

        document.querySelectorAll(".flag").forEach(flag => {
            flag.style.filter = "";
        });
        document.querySelector(".campsvg").style.filter = "";
        document.getElementById("startbutton").style.borderColor = "rgb(33, 79, 122)";
        document.getElementById("startbutton").style.color = "rgb(33, 79, 122)";
        document.querySelector(".intro h1:last-child").style.color = "rgb(33, 79, 122)";
        document.querySelector(".intro h1:first-child").style.color = "rgb(33, 79, 122)";

        document.getElementById("mountainsvg").style.filter = "";
        document.getElementById("forestsvg").style.filter = "";
        document.querySelectorAll(".star").forEach(s => s.remove());
    }
}

applyDayNight();

function addStars() {
    const projects = document.querySelector(".projects");
    
    document.querySelectorAll(".star").forEach(s => s.remove());
    
    for (let i = 0; i < 80; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: white;
            border-radius: 50%;
            top: ${Math.random() * 60}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.8 + 0.2};
            animation: twinkle ${Math.random() * 2 + 1}s infinite alternate;
            z-index: 0;
            pointer-events: none;
        `;
        projects.appendChild(star);
    }
}

