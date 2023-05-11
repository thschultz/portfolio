class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="banner">
                <h1>TJ Schultz - Web Developer</h1>
            </div>
            <div id="nav-container">
                <ul id="nav-list">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="projects.html">Projects</a>
                    </li>
                    <li>
                        <a href="database.html">Database Diagrams</a>
                    </li>
                    <li>
                        <a href="api.html">API Unit Tests</a>
                    </li>
                    <li>
                        <a href="resume.html">Resume</a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                    <a href="/../schultz-valuestream.html">Web 430</a>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define("header-component", Header);