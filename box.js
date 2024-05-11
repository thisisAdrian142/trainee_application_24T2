//todo 1: Get the IDs
let border_range = document.getElementById("border-range");
let padding_range = document.getElementById("padding-range");
let content_range = document.getElementById("content-range");

//todo 2: Get the Classes
let border_box = document.querySelector(".border");
let padding_box = document.querySelector(".padding");
let content_box = document.querySelector(".content");

//todo 3: attach the Event Listener
border_range.addEventListener("change", function(){
    border_box.style.padding = border_range.value + "px" 
})

padding_range.addEventListener("change", function(){
    padding_box.style.padding = padding_range.value + "px"
})

content_range.addEventListener("change", function(){
    content_box.style.padding = content_range.value + "px"
})


//* correct
let border_color = document.getElementById("border-color");

//! incorrect
// let border_color_box = document.querySelector(".border");
// use the same "class" access

border_color.addEventListener("change", function(){
    //! incorrect
    //border_color_box.style.padding = border_color.color;


    border_box.style.backgroundColor = border_color.value

})
