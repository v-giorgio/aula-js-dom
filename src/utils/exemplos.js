const section = document.querySelector(".example-section");
const div = document.querySelector(".example-div");
const btn = document.querySelector(".example-btn");

btn.addEventListener("click", (event) => {
  /*   if (div.classList.contains("example-div")) {
    div.classList.remove("example-div");
    div.classList.add("example-div-2");
  } else {
    div.classList.remove("example-div-2");
    div.classList.add("example-div");
  } */

  div.classList.toggle("example-div-2");

  btn.parentElement.classList.toggle("example-section-bg");

  // btn.classList.toggle("example-btn-2");

  event.target.classList.toggle("example-btn-2");

  if (!section.getElementsByTagName("p").length) {
    let string = textEvent(event.target.innerText);
    let paragraph = document.createElement("p");
    paragraph.textContent = string;
    paragraph.classList.add("text");
    section.appendChild(paragraph);
  }
});

const textEvent = (text) => {
  // return "Botão " + "'" + text + "'" + " clicado";
  return `Botão '${text}' clicado`;
};
