export default function formView() {
    const formElement = document.createElement("form");
    formElement.classList.add("location-form");
    formElement.innerHTML = `
        <div class="input-section">
            <input id="location-input" class="location-input" name="location-input" type="text" placeholder="Search...">
            <p id="error-message"></p>
        </div>
        <button class="search-weather-btn "type="submit">Search Weather</button>
    `;

    return formElement;
}