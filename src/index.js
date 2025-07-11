import "./css/reset.css";
import "./css/style.css";
import formController from "./js/controller/FormController";
import weatherController from "./js/controller/WeatherController";
import "./js/controller/ErrorHandler";
import "./js/controller/SwitchController";
import "./js/controller/SpinnerController";

formController.init();
weatherController.init();