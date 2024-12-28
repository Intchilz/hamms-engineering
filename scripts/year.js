const currentYearElement = document.getElementById("currentyear");
currentYearElement.innerHTML = getCurrentYear(date);

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.innerHTML = `Last Updated: ${getLastModified(date)}`;
lastModifiedElement.classList.add("footer__text-accent");

