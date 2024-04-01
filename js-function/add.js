let newli = document.createElement("li");

newli.style.cssText = "color: blue;";

newli.textContent = "Helps improve blood circulation";

let lastElement = benefits.lastElementChild;

benefits.insertBefore(newli, lastElement);