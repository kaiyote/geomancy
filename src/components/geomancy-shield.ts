import { LitElement, type PropertyValueMap, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'
import { bulkAdd, rearrange } from '../util/Figure'

@customElement('geomancy-shield')
export class GeomancyShield extends LitElement {
  @property({ type: Array }) mothers!: [number, number, number, number]

  @property({ type: Number }) house!: number

  @property({ type: Number }) houseQuestionIndex!: number

  @state() showSuperJudge = false

  @state() private daughters!: number[]

  @state() private nieces!: number[]

  @state() private witnesses!: number[]

  @state() private judge!: number

  protected willUpdate (changedProperties: PropertyValueMap<GeomancyShield>): void {
    if (changedProperties.has('mothers')) {
      this.daughters = rearrange(this.mothers)
      this.nieces = bulkAdd(this.mothers.concat(...this.daughters))
      this.witnesses = bulkAdd(this.nieces)
      this.judge = bulkAdd(this.witnesses)[0]
    }
  }

  protected render (): unknown {
    return html`
      <div>
        ${repeat(this.mothers.concat(...this.daughters), e => e, e => html`<geomancy-figure .value=${e}></geomancy-figure>`)}
      </div>
      <div>
        ${repeat(this.nieces, e => e, e => html`<geomancy-figure .value=${e}></geomancy-figure>`)}
      </div>
      <div>
        ${repeat(this.witnesses, e => e, e => html`<geomancy-figure .value=${e}></geomancy-figure>`)}
      </div>
      <div>
        <geomancy-figure .value=${this.judge}></geomancy-figure>
      </div>
    `
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      line-height: 1rem;
      margin: 1rem;
    }

    :host > div {
      display: flex;
      width: 100%;
      flex-direction: row-reverse;
      justify-content: space-around;
      align-items: center;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'geomancy-shield': GeomancyShield
  }
}
