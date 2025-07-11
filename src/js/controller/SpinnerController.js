import Spinner from "../view/Spinner";

const spinnerContainer = document.getElementById("spinner-container");
const spinner = Spinner();
const overlay = document.getElementById("overlay");
spinnerContainer.appendChild(spinner);

export function showSpinner() {
    overlay.classList.add("show-spinner");
}

export function hideSpinner() {
    overlay.classList.remove("show-spinner");
}
