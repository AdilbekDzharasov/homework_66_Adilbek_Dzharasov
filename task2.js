const makeColor = () => {
    const elements = document.querySelectorAll(".element");
    for (let e = 0; e < elements.length; e++){
        if (e < 3) {
            elements[e].style.color = "red";
        }
        else {
            elements[e].style.color = "green";
        }
    };
};

makeColor();

