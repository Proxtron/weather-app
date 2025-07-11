export default function unitSlider() {
    const switchElement = document.createElement("label");
    switchElement.classList.add("switch");

    switchElement.innerHTML = `
        <input id="unit-checkbox" type="checkbox">
        <span class="slider round"></span>

    `;
    return switchElement;
}