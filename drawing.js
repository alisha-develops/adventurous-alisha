function initDrawing() {
    if (window.drawingInitialized) return;
    window.drawingInitialized = true;

    emailjs.init("p73tPQmNJGMsjQhAb");

    const canvas = document.getElementById("drawingcanvas");
    const ctx = canvas.getContext("2d");
    let drawing = false;
    let currentTool = "draw";
    let currentColor = "#000000";
    let currentSize = 5;

    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        return {
            x: (e.clientX -rect.left) * scaleX,
            y: (e.clientY -rect.top) * scaleY
        };
    }

    function draw(pos) {
        if (currentTool==="erase") {
            ctx.clearRect(pos.x - currentSize * 2, pos.y - currentSize * 2, currentSize * 4, currentSize * 4);
        } else {
            ctx.lineWidth = currentSize;
            ctx.lineCap = "round";
            ctx.strokeStyle = currentColor;
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        }
    }

    document.getElementById("draw1").addEventListener("click", () => {
        currentTool = "draw";
    });

    document.getElementById("erase").addEventListener("click", () => {
        currentTool = "erase";
    });

    document.getElementById("colorpicker").addEventListener("input", (e) => {
        currentColor = e.target.value;
    });

    document.getElementById("bgcolorpicker").addEventListener("input", (e) => {
        ctx.fillStyle = e.target.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    document.getElementById("brushsize").addEventListener("change", (e) => {
        currentSize = parseInt(e.target.value);
    });

    document.getElementById("clearcanvas").addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    canvas.addEventListener("mousedown", (e) => {
        drawing = true;
        const pos = getPos(e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    });

    canvas.addEventListener("mousemove", (e) => {
        if (drawing === false) return;
        draw(getPos(e));
    });

    canvas.addEventListener("mouseup", () => {
        drawing = false;
        ctx.beginPath();
    });

    canvas.addEventListener("mouseleave", () => {
        drawing = false;
        ctx.beginPath();
    });

    canvas.addEventListener("touchstart", (e) => {
        e.preventDefault();
        drawing = true;
        const pos = getPos(e.touches[0]);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    }, { passive: false });

    canvas.addEventListener("touchmove", (e) => {
        e.preventDefault();
        if (drawing === false) return;
        draw(getPos(e.touches[0]));
    }, { passive: false });

    canvas.addEventListener("touchend", () => {
        drawing = false;
        ctx.beginPath();
    });

    document.getElementById("senddrawing").addEventListener("click", () => {
    const name = prompt("what's your name?");
    const message = prompt("leave a message! (optional)");

    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = canvas.width;
    exportCanvas.height = canvas.height;
    const exportCtx = exportCanvas.getContext("2d");
    exportCtx.fillStyle = "#ffffff";
    exportCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
    exportCtx.drawImage(canvas, 0, 0);

    exportCanvas.toBlob(async (blob) => {
        try {
            const formData = new FormData();
            formData.append("file", blob);
            formData.append("upload_preset", "drawing_app");

            const uploadRes = await fetch(
                "https://api.cloudinary.com/v1_1/rnrpiqkl/image/upload",
                { method: "POST", body: formData }
            );
            const uploadData = await uploadRes.json();

            if (!uploadData.secure_url) throw new Error("Upload failed");

            await emailjs.send("service_63dqdjf", "template_6t8ennn", {
                drawing_url: uploadData.secure_url,
                from_name: name,
                message: message,
                time: new Date().toLocaleString(),
            });

            alert("drawing sent! thanks " + name + "!");
        } catch (err) {
            console.error(err);
            alert("something went wrong, try again!");
        }
    }, "image/jpeg", 0.8);
});
}