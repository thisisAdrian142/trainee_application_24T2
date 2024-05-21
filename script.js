document.addEventListener("DOMContentLoaded", function(){
//* other styles
function set_style(class_name, property, value) {
  const ele = document.querySelectorAll(class_name);
  ele.forEach(element => {
    element.style[property] = value;
  });
}
 
  //* ABOUT ME
  if(document.body.classList.contains('zone1')) {
    document.body.style.backgroundImage = 'url("./images/forest.gif")';
    set_style('.button-container.success', 'background-color', '#9601f4');
    set_style('a', 'color', '#34dab5');
    set_style('a', 'padding', '15px');
    set_style('.card', 'background-color', '#f3de5d');
    set_style('.about-me', 'background-color', '#972633');
    set_style('.about-me', 'color', 'rgb(218, 158, 64)');
    set_style('.about-me', 'padding', '10px');
    set_style('.about-me', 'border-radius', '10px');
  }

  //* MY PORTFOLIO
  else if (document.body.classList.contains('thisisclasszone2')) {
    document.body.style.backgroundImage = 'url("./images/robot_typing.gif")';
    set_style('.button-container.success', 'background-color', '#079ad8');
    set_style('a', 'color', '#34dab5');
    set_style('a', 'padding', '15px');
    set_style('.card', 'background-color', '#1a828a');
    set_style('.about-me', 'background-color', '#3f9e75');
    set_style('.about-me', 'color', '#e19e46');
    set_style('.about-me', 'padding', '10px');
    set_style('.about-me', 'border-radius', '10px');
  }

  //* ABOUT THIS PAGE
  else if (document.body.classList.contains('notzone4thisiszone3')) {
    document.body.style.backgroundImage = 'url("./images/maintenance.gif")';
    set_style('.button-container.success', 'background-color', '#db9a55');
    set_style('a', 'color', '#904536');
    set_style('a', 'padding', '15px');
    set_style('.card', 'background-color', ' #e1ba21');
    set_style('.about-me', 'background-color', '#e3d498');
    set_style('.about-me', 'color', '#7ea049');
    set_style('.about-me', 'padding', '10px');
    set_style('.about-me', 'border-radius', '10px');
  }

  //* CONTACTS
  else if (document.body.classList.contains('yesthisiszone4')) {
    document.body.style.backgroundImage = 'url("./images/friends.gif")';
  }
});

//* hover reveal
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

