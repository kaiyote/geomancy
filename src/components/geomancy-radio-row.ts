import { css, LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('geomancy-radio-row')
export class GeomancyRadioRow extends LitElement {
  protected render (): unknown {
    return html`<slot></slot>`
  }

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
  `
}
