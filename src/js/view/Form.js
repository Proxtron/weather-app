export default function formView() {
    const formElement = document.createElement("form");
    formElement.innerHTML = `
        <input id="location-input" name="location-input" type="text">
        <button type="submit">Search Weather</button>
    `;

    return formElement;
}