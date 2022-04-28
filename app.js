window.onload = () => {
    const body = document.querySelector("body");
    const toggleBtn = document.getElementById("toggleBtn");
    toggleBtn.onclick = () => {
        toggleBtn.classList.toggle("active");
        body.classList.toggle("active");
    };
};