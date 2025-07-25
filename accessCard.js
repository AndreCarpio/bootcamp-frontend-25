class AccessCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const company = this.getAttribute("company") || "Company Name";
    const name = this.getAttribute("name") || "User Name";
    const role = this.getAttribute("role") || "Role Name";
    const photo = this.getAttribute("photo") || "/defaultImage.webp";

    this.shadowRoot.innerHTML = `
      <div class="accessCard">
        <div class="company">${company}</div>
        <img class="photo" src="${photo}" alt="${name} Photo">
        <div class="name">${name}</div>
        <div class="role">${role}</div>
      </div>
    `;
  }
}

customElements.define("access-card", AccessCard);
