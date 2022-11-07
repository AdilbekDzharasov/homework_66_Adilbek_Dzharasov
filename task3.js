const makeColor = () => {
    const elements = document.querySelectorAll(".element");
    for (let e = 0; e < elements.length; e++){
        if (e < 2) {
            elements[e].style.color = "red";
        }
        else {
            elements[e].style.color = "green";
        }
    };
};

const containers = document.getElementById('container');

const makeElement = () => {
	for (let i=1; i<=5; i++) {
        const div = document.createElement('div');
	    div.className = 'element';
	    const text = document.createTextNode("Element " + i);
	    div.appendChild(text);
	    containers.appendChild(div);
    };
    makeColor();
}

makeElement();

