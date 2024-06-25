document.addEventListener('DOMContentLoaded', function() {
    let numberOfButtons = randomNumber(10, 25);

    function randomNumber(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    }
    
    const perf = performance.now()

    const contentSection = document.querySelector(".content");

    for (i=0; i<numberOfButtons; i++) {
        let element = document.createElement("button");
        element.textContent = "Button " + i;
        element.setAttribute("class", "button");
        if (i == 0) {
            element.style.border = "2px solid grey";
            element.style.backgroundColor = "black";
            element.style.color = "white";
        } else if (i % 3 == 0) {
            element.style.border = "2px solid hsl(165, 100%, 20%)";
            element.style.backgroundColor = "hsl(165, 100%, 70%)";
            element.style.color = "hsl(165, 100%, 12%)";
        } else if (i % 2 == 0) {
            element.style.border = "2px solid hsl(0, 100%, 70%)";
            element.style.backgroundColor = "hsl(0, 100%, 28%)";
            element.style.color = "gainsboro";
        } else {
            element.style.border = "2px solid hsl(197, 100%, 30%)";
            element.style.backgroundColor = "hsl(197, 100%, 70%)";
            element.style.color = "hsl(197, 100%, 12%)";
        }
        contentSection.append(element);
    }

    console.log('Time to execute: ' + (performance.now() - perf));
});

