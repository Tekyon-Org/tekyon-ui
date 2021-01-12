document.body.appendChild(document.createTextNode("saadasdbuaisdbiuabsd"));

var h1 = document.createElement("h1");
h1.id = "counter";
h1.textContent = 0;
document.body.appendChild(h1);

setInterval(function() {

    h1.textContent = Number(h1.textContent) + 1;

}, 100);

var h2 = document.createElement("h2");
document.body.appendChild(h2);

document.body.onmousemove = function(evt) {
    h2.textContent = evt.clientX + ":" + evt.clientY;
};

var header = document.createElement("tui-header");
header.innerHTML = "lolol";
document.body.appendChild(header);