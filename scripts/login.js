const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");

open.addEventListener("click", () => {
    container.classList.add("ativo");
})

close.addEventListener("click", () => {
    container.classList.remove("ativo");
})