import formView from "../view/Form";
import { getWeatherData } from "./Fetch";
import pubsub from "./pubsub";
import { setErrorElement } from "./ErrorHandler";
import * as SpinnerController from "./SpinnerController";

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
        this.errorContainer = this.formContainer.querySelector("#error-message");
        this.formContainer.appendChild(form);
    },

    formCallBack(event) {
        event.preventDefault();

        this.locationInput = this.form.querySelector("#location-input");
        const locationInputValue = this.locationInput.value;

        SpinnerController.showSpinner();
        this.retrieveData(locationInputValue)
        .then((weatherData) => {
            this.locationInput.value = "";
            pubsub.emit("displayWeather", weatherData);
            pubsub.emit("hideError");
        }).catch((error) => {
            this.locationInput.value = "";
            setErrorElement(this.errorContainer);
            pubsub.emit("showError", error.message);
        }).finally(() => {
            SpinnerController.hideSpinner();
        });
    },

    async retrieveData(location) {
        return await getWeatherData(location);
    }

};