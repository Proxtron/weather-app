import pubsub from "./pubsub";

let errorContainer;

export function setErrorElement(element) {
    errorContainer = element;
}

pubsub.on("showError", (message) => {
    errorContainer = document.getElementById("error-message");
    showError(message);
});

pubsub.on("hideError", () => {
    errorContainer = document.getElementById("error-message");
    hideError();
})

function showError(message) {
    errorContainer.innerText = message;
}

function hideError() {
    errorContainer.innerText = "";
}
