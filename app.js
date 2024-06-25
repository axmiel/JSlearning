document.addEventListener('DOMContentLoaded', function() {
    let numberOfButtons = randomNumber(100,200);

    function randomNumber(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    }
    
    const contentSection = document.querySelector(".content");

    for (i=0; i<numberOfButtons; i++) {
        const element = document.createElement("button")
        const node = document.createTextNode("Button " + i);
        element.append(node);
        element.setAttribute("class", "button");
        contentSection.append(element);
    }

    const buttons = document.querySelectorAll("button");

    for (i=0; i<buttons.length; i++) {
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
    }
});

