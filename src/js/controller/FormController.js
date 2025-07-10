import formView from "../view/Form";
import { getWeatherData } from "./Fetch";
import pubsub from "./pubsub";

export default {
    formContainer: document.getElementById("form-container"),
    errorContainer: document.getElementById("error-message"),

    init() {
        this.showForm();
        this.form.addEventListener("submit", (event) => this.formCallBack(event));
    },

    showForm() {
        this.formContainer.innerHTML = "";
        const form = formView();
        this.form = form;
        this.formContainer.appendChild(form);
    },

    formCallBack(event) {
        event.preventDefault();

        this.locationInput = this.form.querySelector("#location-input");
        const locationInputValue = this.locationInput.value;

        this.retrieveData(locationInputValue)
        .then((weatherData) => {
            this.errorContainer.innerText = "";
            this.locationInput.value = "";
            pubsub.emit("displayWeather", weatherData);
        }).catch((error) => {
            this.errorContainer.innerText = "";
            this.locationInput.value = "";
            this.errorContainer.innerText = error.message;
        });
    },

    async retrieveData(location) {
        return await getWeatherData(location);
    }

};