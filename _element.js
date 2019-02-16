import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `hola-mundo`
 * muestra un mensaje de hola mundo
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class HolaMundo extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'hola-mundo',
      },
    };
  }
}

window.customElements.define('hola-mundo', HolaMundo);
