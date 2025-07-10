import formView from "../view/Form";
import { getWeatherData } from "./Fetch";

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

        const locationInputValue = this.form.querySelector("#location-input").value;
        this.retrieveData(locationInputValue)
        .then((weatherData) => {
            console.log(weatherData);
        }).catch((error) => {
            console.error(error);
        });
    },

    async retrieveData(location) {
        const weatherData = await getWeatherData(location);
        return weatherData;
    }

};