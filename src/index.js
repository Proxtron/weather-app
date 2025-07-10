import "./css/reset.css";
import "./css/style.css";
import formController from "./js/controller/FormController";
import weatherController from "./js/controller/WeatherController";
import "./js/controller/ErrorHandler";

formController.init();
weatherController.init();