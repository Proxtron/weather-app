import "./css/reset.css";
import "./css/style.css";
import formController from "./js/controller/FormController";
import weatherController from "./js/controller/WeatherController";
import "./js/controller/ErrorHandler";
import "./js/controller/SwitchController";

formController.init();
weatherController.init();