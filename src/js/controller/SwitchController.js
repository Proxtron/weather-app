import UnitSlider from "../view/UnitSlider";
import pubsub from "./pubsub";

const unitSwitchContainer = document.getElementById("unit-switch-container");

function init() {
    render();

    
}

function render() {
    const unitSlider = UnitSlider();
    const unitCheckbox = unitSlider.querySelector("#unit-checkbox");
    unitCheckbox.addEventListener("click", () => {
        pubsub.emit("unitChange")
    });
    
    unitSwitchContainer.appendChild(unitSlider);
}

init();