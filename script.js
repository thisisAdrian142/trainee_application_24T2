// background images
document.addEventListener("DOMContentLoaded", function(){
  if(document.body.classList.contains('zone1')) {
    document.body.style.backgroundImage = 'url("./images/forest.gif")';
  }
  else if (document.body.classList.contains('thisisclasszone2')) {
    document.body.style.backgroundImage = 'url("./images/robot_typing.gif")';
  }
  else if (document.body.classList.contains('notzone4thisiszone3')) {
    document.body.style.backgroundImage = 'url("./images/maintenance.gif")';
  }
  else if (document.body.classList.contains('yesthisiszone4')) {
    document.body.style.backgroundImage = 'url("./images/friends.gif")';
  }
});

// style manipulate


// hover reveal
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

