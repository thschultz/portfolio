class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <p>
                    TJ Schultz Portfolio
                </p>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);