import formView from "../view/Form";
import { getWeatherData } from "./Fetch";
import pubsub from "./pubsub";

export default {
    formContainer: document.getElementById("form-container"),

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
            this.locationInput.value = "";
            pubsub.emit("displayWeather", weatherData);
            pubsub.emit("hideError");
        }).catch((error) => {
            this.locationInput.value = "";
            pubsub.emit("showError", error.message);
        });
    },

    async retrieveData(location) {
        return await getWeatherData(location);
    }

};