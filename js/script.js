class customButton extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const style = document.createElement("style");
    console.log(style.isConnected);
    style.textContent = `

        custom-button {

            color: black;
            text-color: white;
        }

        `;
  }
}
customElements.define("custom-button", customButton, { extends: "button" });
