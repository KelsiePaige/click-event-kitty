var button = document.querySelector(".show-cat");
//console.log(button);
var cat = document.querySelector(".cat");
//console.log(cat);
button.addEventListener("click", function () {
    if (cat.classList.contains("show")) {
        //console.log("Yes!");
        cat.classList.remove("show");
        button.innerText = "Wait, don't go!";
        button.classList.add("disappear");
    } else {
        //console.log("No!"); 
        cat.classList.add("show");
        button.innerText = "Get out of here, cat!";
        button.classList.remove("disappear");
    }
});
