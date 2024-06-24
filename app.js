const buttons = document.querySelectorAll("button");

console.log(buttons);

for (i=0; i<buttons.length; i++) {
    console.log(i);
    if (i == 0) {
        buttons[i].style.border = "2px solid grey";
        buttons[i].style.backgroundColor = "black";
        buttons[i].style.color = "white";
    } else if (i % 3 == 0) {
        buttons[i].style.border = "2px solid hsl(165, 100%, 20%)";
        buttons[i].style.backgroundColor = "hsl(165, 100%, 70%)";
        buttons[i].style.color = "hsl(165, 100%, 12%)";
    } else if (i % 2 == 0) {
        buttons[i].style.border = "2px solid hsl(0, 100%, 70%)";
        buttons[i].style.backgroundColor = "hsl(0, 100%, 28%)";
        buttons[i].style.color = "gainsboro";
    } else {
        buttons[i].style.border = "2px solid hsl(197, 100%, 30%)";
        buttons[i].style.backgroundColor = "hsl(197, 100%, 70%)";
        buttons[i].style.color = "hsl(197, 100%, 12%)";
    }
    console.log(buttons[i]);
}