import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'
import './geomancy-shield'

@customElement('geomancy-chart-selector')
export class GeomancyChartSelector extends LitElement {
  @state() showHouseChart = false

  protected render (): unknown {
    return html`
      <geomancy-radio-row>
        <label>
          <input type="radio" name="chartType" ?checked=${!this.showHouseChart} @change=${() => { this.showHouseChart = false }} />
          Shield Chart
        </label>
        <label>
          <input type="radio" name="chartType" ?checked=${this.showHouseChart} @change=${() => { this.showHouseChart = true }} />
          House Chart
        </label>
      </geomancy-radio-row>
      ${when(this.showHouseChart, () => html`<geomancy-house></geomancy-house>`, () => html`<geomancy-shield></geomancy-shield>`)}
    `
  }
}
