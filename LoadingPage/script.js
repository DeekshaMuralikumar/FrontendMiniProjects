setTimeout(() => {
    const img = document.getElementById("cardImg");
    const title = document.getElementById("cardTitle");
    const desc = document.getElementById("cardDesc");
    const btn = document.getElementById("cardBtn");

    const imgWrapper = document.getElementById("imgWrapper");
    const btnWrapper = document.getElementById("btnWrapper");

    imgWrapper.classList.remove("skeleton");
    btnWrapper.classList.remove("skeleton");
    title.classList.remove("skeleton", "short");
    desc.classList.remove("skeleton", "short");

    title.textContent = "Jimmy";
    desc.textContent = "Jimmy is my best friend.";

    img.style.opacity = "1";
    btn.style.opacity = "1";

}, 2000); 