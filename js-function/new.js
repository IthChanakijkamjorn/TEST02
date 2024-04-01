//// create a new element
let newp = document.createElement("p");

//// configure some new style
newp.style.cssText = "text-align: center; color: blue;";

//// configure the content
newp.textContent = "Hi This is new P! ";

//// grab the section element on the page
let selectionElement = document.querySelector("section");

//// attach the new p element before the section element
selectionElement.parentNode.insertBefore(newp, selectionElement);