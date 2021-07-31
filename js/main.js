"use strict";

let text = document.querySelector(".blackboard-text");
const colors = ["Blanco", "Azul", "Verde", "Rojo", "Amarillo", "Rosa"];

function writePenalty() {
  for (let i = 0; i < 50; i++) {
    const textRepeat = "Selecciona un color";
    const newLi = document.createElement("li");
    const newContent = document.createTextNode(textRepeat);
    text.appendChild(newLi);
    newLi.appendChild(newContent);

    const newSelect = document.createElement("select");

    for (let x = 0; x < colors.length; x++) {
      addOption(newSelect, colors[x]);
    }
    newLi.appendChild(newSelect);
    function changeColor(event) {
      if (event.currentTarget.value === "Rosa") {
        event.currentTarget.parentElement.classList.add("pink");
      } else if (event.currentTarget.value === "Amarillo") {
        event.currentTarget.parentElement.classList.add("yellow");
        event.currentTarget.parentElement.classList.remove("pink");
      } else if (event.currentTarget.value === "Rojo") {
        event.currentTarget.parentElement.classList.add("red");
        event.currentTarget.parentElement.classList.remove("pink", "yellow");
      } else if (event.currentTarget.value === "Verde") {
        event.currentTarget.parentElement.classList.add("green");
        event.currentTarget.parentElement.classList.remove(
          "pink",
          "yellow",
          "red"
        );
      } else if (event.currentTarget.value === "Azul") {
        event.currentTarget.parentElement.classList.add("blue");
        event.currentTarget.parentElement.classList.remove(
          "pink",
          "yellow",
          "red",
          "green"
        );
      }
    }
    newSelect.addEventListener("change", changeColor);
  }

  //Recibe por parametro el select a modificar y el color a añadir
  function addOption(mySelect, color) {
    const option = document.createElement("option");
    const optionColor = document.createTextNode(color);
    option.appendChild(optionColor);
    mySelect.appendChild(option);
  }
}

writePenalty();
