const items = document.querySelectorAll(".item");
const image = document.getElementById("hover-image");

items.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    const imageData = e.target.getAttribute("data-image");
    image.style.display = "block";
    image.setAttribute("src", imageData);
  });

  el.addEventListener("mousemove", (e) => {
    image.style.top = `${e.clientY}px`;
    image.style.left = `${e.clientX}px`;
  });

  el.addEventListener("mouseleave", () => {
    image.style.display = "none";
    image.setAttribute("src", "");
  });
});
