const boxes = document.querySelectorAll(".box"),
  img = document.querySelector(".img");

boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    box.classList.add("dragging");
  });

  box.addEventListener("dragleave", () => {
    box.classList.remove("dragging");
  });

  box.addEventListener("drop", () => {
    box.appendChild(img);
    box.classList.remove("dragging");
  });
});
