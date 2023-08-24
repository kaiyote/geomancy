import { LitElement, type TemplateResult, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'
import './components'
import './views'
import { type GenerateEventDetail } from './views'
import { provide } from '@lit-labs/context'
import { houseContext, houseIndexContext, mothersContext } from './contexts'
import { Figure } from './util/Figure'

/**
 * The root app element
 */
@customElement('geomancy-app')
export class GeomancyApp extends LitElement {
  @provide({ context: mothersContext })
  @state() mothers: [Figure, Figure, Figure, Figure] = [3, 12, 14, 0] // [-1, -1, -1, -1]

  @provide({ context: houseContext })
  @state() house: number = 7 // -1

  @provide({ context: houseIndexContext })
  @state() houseQuestionIndex: number = 1 // -1

  render (): TemplateResult {
    return html`
      ${when(
        this.hasValidData(),
        () => html`<geomancy-chart-selector></geomancy-chart-selector>`,
        () => html`<geomancy-input @generate=${this.generate}></geomancy-input>`
      )}
    `
  }

  generate ({ detail }: CustomEvent<GenerateEventDetail>): void {
    this.mothers = detail.mothers
    this.house = detail.house
    this.houseQuestionIndex = detail.topicIndex
  }

  hasValidData (): boolean {
    return this.house > -1 && this.houseQuestionIndex > -1 && this.mothers.every(m => m > -1)
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    * {
      box-sizing: border-box;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'geomancy-app': GeomancyApp
  }
}
