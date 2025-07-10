import pubsub from "./pubsub";

const errorContainer = document.getElementById("error-message");

pubsub.on("showError", (message) => {
    showError(message);
});

pubsub.on("hideError", () => {
    hideError();
})

function showError(message) {
    errorContainer.innerText = message;
}

function hideError() {
    errorContainer.innerText = "";
}
