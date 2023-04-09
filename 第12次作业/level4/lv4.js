class MyDiv extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({ mode: "open" });
    let div = document.createElement("div");
    div.style.width='100px'
    div.style.height='40px'
    div.style.background='lightblue'
    div.onclick=(()=>{
      alert('makabaka')
    })
    shadowRoot.appendChild(div);
  }
}
customElements.define('my-div', MyDiv);