import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { Figures } from '../data'
import { repeat } from 'lit/directives/repeat.js'
import { when } from 'lit/directives/when.js'

@customElement('geomancy-figure-selector')
export class GeomancyFigureSelector extends LitElement {
  static figureValues = Figures.map(f => ({ value: f.value, display: f.name }))

  @property() heading: string = ''

  @state() value = -1

  protected render (): unknown {
    return html`
      <label>
        ${this.heading}
        <select @change=${(e: Event) => { this.value = +(e.target as HTMLSelectElement)!.value }}>
          <option disabled selected value='-1'>Select a Figure</option>
          ${repeat(GeomancyFigureSelector.figureValues, f => f.value, f => html`<option value=${f.value}>${f.display}</option>`)}
        </select>
        ${when(this.value !== -1, () => html`<geomancy-figure value=${this.value}></geomancy-figure>`, () => html`<span class='placeholder'></span>`)}
      </label>
    `
  }

  static styles = css`
    label {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    select {
      margin-top: 1rem;
    }

    span.placeholder {
      height: 4rem;
      margin: 1rem;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'geomancy-figure-selector': GeomancyFigureSelector
  }
}
