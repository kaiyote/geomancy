import { LitElement, type TemplateResult, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import './components'
import { when } from 'lit/directives/when.js'
import { GenerateEventDetail } from './components'

/**
 * The root app element
 */
@customElement('geomancy-app')
export class GeomancyApp extends LitElement {
  @state() mothers?: [number, number, number, number]

  @state() house?: number

  @state() houseQuestionIndex?: number

  render (): TemplateResult {
    return html`
      ${when(
        this.mothers != null && this.house != null && this.houseQuestionIndex != null,
        () => html`
          <geomancy-shield .mothers=${this.mothers!} .house=${this.house!} .houseQuestionIndex=${this.houseQuestionIndex!}></geomancy-shield>
        `,
        () => html`
          <geomancy-input @generate=${this.generate}></geomancy-input>
        `)
      }
    `
  }

  generate ({ detail }: CustomEvent<GenerateEventDetail>): void {
    console.log(detail)

    debugger
    this.mothers = detail.mothers
    this.house = detail.house
    this.houseQuestionIndex = detail.topicIndex
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }


    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }

      button {
        background-color: #f9f9f9;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'geomancy-app': GeomancyApp
  }
}