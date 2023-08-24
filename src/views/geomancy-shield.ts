import { LitElement, type PropertyValueMap, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'
import { bulkAdd, getBit, rearrange } from '../util/Figure'
import { houseContext, houseIndexContext, mothersContext } from '../contexts'
import { consume } from '@lit-labs/context'
import { classMap } from 'lit/directives/class-map.js'

@customElement('geomancy-shield')
export class GeomancyShield extends LitElement {
  @consume({ context: mothersContext })
  @property({ type: Array, attribute: false }) mothers!: [number, number, number, number]

  @consume({ context: houseContext })
  @property({ type: Number, attribute: false }) house!: number

  @consume({ context: houseIndexContext })
  @property({ type: Number, attribute: false }) houseQuestionIndex!: number

  @state() showSuperJudge = false

  @state() private daughters!: number[]

  @state() private nieces!: number[]

  @state() private witnesses!: number[]

  @state() private judge!: number

  @state() private viaPuncti!: number[]

  protected willUpdate (changedProperties: PropertyValueMap<GeomancyShield>): void {
    if (changedProperties.has('mothers')) {
      this.daughters = rearrange(this.mothers)
      this.nieces = bulkAdd(this.mothers.concat(...this.daughters))
      this.witnesses = bulkAdd(this.nieces)
      this.judge = bulkAdd(this.witnesses)[0]
      this.calculateViaPuncti()
    }
  }

  protected render (): unknown {
    return html`
      <div>
        ${repeat(this.mothers.concat(...this.daughters), e => e, (e, i) => html`<geomancy-figure .value=${e} class=${classMap({ 'via-puncti': this.viaPuncti.includes(i + 1) })}></geomancy-figure>`)}
      </div>
      <div>
        ${repeat(this.nieces, e => e, (e, i) => html`<geomancy-figure .value=${e} class=${classMap({ 'via-puncti': this.viaPuncti.includes(i + 9) })}></geomancy-figure>`)}
      </div>
      <div>
        ${repeat(this.witnesses, e => e, (e, i) => html`<geomancy-figure .value=${e} class=${classMap({ 'via-puncti': this.viaPuncti.includes(i + 13) })}></geomancy-figure>`)}
      </div>
      <div>
        <geomancy-figure .value=${this.judge} class=${classMap({ 'via-puncti': this.viaPuncti.includes(15) })}></geomancy-figure>
      </div>
    `
  }

  private calculateViaPuncti (): void {
    let viaPuncti = [15]
    const judgeBit = getBit(0, this.judge)
    const witnessPuncti = this.houseToGenerators(15).filter(x => getBit(0, this.witnesses[x - 13]) === judgeBit) as Array<13 | 14>
    viaPuncti = viaPuncti.concat(...witnessPuncti)
    const niecePuncti = witnessPuncti.flatMap(this.houseToGenerators).filter(x => getBit(0, this.nieces[x - 9]) === judgeBit) as Array<9 | 10 | 11 | 12>
    viaPuncti = viaPuncti.concat(...niecePuncti)
    const firstGenPuncti = niecePuncti.flatMap(this.houseToGenerators).filter(x => getBit(0, this.mothers.concat(...this.daughters)[x - 1]) === judgeBit)
    viaPuncti = viaPuncti.concat(...firstGenPuncti)

    if (viaPuncti.length > 1) this.viaPuncti = viaPuncti
  }

  private houseToGenerators (x: 9 | 10 | 11 | 12 | 13 | 14 | 15): [number, number] {
    switch (x) {
      case 9: return [1, 2]
      case 10: return [3, 4]
      case 11: return [5, 6]
      case 12: return [7, 8]
      case 13: return [9, 10]
      case 14: return [11, 12]
      case 15: return [13, 14]
    }
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

    * {
      box-sizing: border-box;
    }

    div {
      display: flex;
      width: 100%;
      flex-direction: row-reverse;
      justify-content: space-around;
      align-items: center;
    }

    geomancy-figure {
      border: 1px solid var(--font-color);
      flex-basis: 12.5%;
    }

    geomancy-figure.via-puncti::part(bit-0) {
      color: red;
    }

    div:nth-child(2) geomancy-figure {
      flex-basis: 25%;
    }

    div:nth-child(3) geomancy-figure {
      flex-basis: 37.5%;
    }

    div:last-child geomancy-figure {
      flex-basis: 50%;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'geomancy-shield': GeomancyShield
  }
}
