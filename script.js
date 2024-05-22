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
    set_style('.button-container.success', 'background-color', '#DFD6BB');
    set_style('a', 'color', '#8A6779');
    set_style('a', 'padding', '15px');
    // set_style('.card', 'background-color', '#f3de5d');
    // set_style('.about-me', 'background-color', '#972633');
    // set_style('.about-me', 'background-color', '#f7e9d7');
    set_style('.card', 'background-color', '#D08438');
    set_style('.about-me', 'background-color', '#D73A26');
    set_style('.about-me', 'color', '#F5B42F');
    set_style('.about-me', 'padding', '10px');
    set_style('.about-me', 'border-radius', '10px');
  }

  //* MY PORTFOLIO
  else if (document.body.classList.contains('thisisclasszone2')) {
    document.body.style.backgroundImage = 'url("./images/robot_typing.gif")';
    set_style('.button-container.success', 'background-color', '#D0D5B1');
    set_style('a', 'color', '#91B89F');
    set_style('a', 'padding', '15px');
    set_style('.card', 'background-color', '#49C79E');
    set_style('.about-me', 'background-color', '#296F5B');
    set_style('.about-me', 'color', '#e19e46');
    set_style('.about-me', 'padding', '10px');
    set_style('.about-me', 'border-radius', '10px');
  }

  //* ABOUT THIS PAGE
  else if (document.body.classList.contains('notzone4thisiszone3')) {
    document.body.style.backgroundImage = 'url("./images/maintenance.gif")';
    set_style('.button-container.success', 'background-color', '#4C376C');
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
    set_style('.button-container.success', 'background-color', '#b25440');
    set_style('a', 'color', 'black');
    set_style('a', 'padding', '15px');
    set_style('.card', 'background-color', ' #e1ba21');
    set_style('.about-me', 'background-color', '#e3d498');
    set_style('.about-me', 'padding', '10px');
    set_style('.about-me', 'border-radius', '10px');
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

