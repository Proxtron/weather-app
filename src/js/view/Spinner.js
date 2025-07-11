import spinnerGif from "../../assets/icon/spinner.svg"

export default function Spinner() {
    const imgElement = document.createElement("img");
    imgElement.classList.add("spinner")
    imgElement.src = spinnerGif;
    return imgElement;
}