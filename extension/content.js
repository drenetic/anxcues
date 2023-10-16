var divBg=document.createElement("div");
divBg.setAttribute("id", "anxOverlay");
document.body.appendChild(divBg);

var divContainer=document.createElement("div")
divContainer.setAttribute("id", "anxContainer");

divBg.append(divContainer);

var centerContent=document.createElement("div")
centerContent.setAttribute("class", "center-content");
divContainer.append(centerContent);
var circle = document.createElement("div")
circle.setAttribute("class", "circle");
centerContent.append(circle);
