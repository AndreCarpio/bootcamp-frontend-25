class AccessCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const company = this.getAttribute("company") || "Company Name";
    const name = this.getAttribute("name") || "User Name";
    const role = this.getAttribute("role") || "Role Name";
    const photo = this.getAttribute("photo") || "/defaultImage.webp";

    this.shadowRoot.innerHTML = `
        <style>
            .accessCard {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 400px;
              border-radius: 12px;
              padding: 8px;
              background-color: #1f1f1f;
              gap: 12px;
            }

            .company {
              font-size: 50px;
              background-color: white;
              color: #1f1f1f;
              font-weight: bold;
              width: 100%;
              text-align: center;
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;
              padding: 7px 0px;
            }

            .photo {
              width: 250px;
              height: 250px;
              border-radius: 15%;
              object-fit: cover;
              margin-bottom: 10px;
              margin: auto;
            }

            .name {
              font-size: 30px;
              width: 100%;
              text-align: center;
              padding: 18px 4px;
              font-weight: bold;
              color: white;
            }

            .role {
              font-size: 40px;
              background-color: rgb(189, 22, 22);
              color: white;
              font-weight: bold;
              width: 100%;
              text-align: center;
              padding: 7px 0px;
              border-bottom-left-radius: 8px;
              border-bottom-right-radius: 8px;
            }
        </style>

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
