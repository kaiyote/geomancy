import { LitElement, css, html } from 'lit'
import { customElement, query, queryAll, state } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js'
import { range } from 'lit/directives/range.js'
import { repeat } from 'lit/directives/repeat.js'
import { when } from 'lit/directives/when.js'
import { type GeomancyInputRow, type GeomancyFigureSelector } from '../components'
import { Houses } from '../data'

export interface GenerateEventDetail {
  house: number
  topicIndex: number
  mothers: [number, number, number, number]
}

@customElement('geomancy-input')
export class GeomancyInput extends LitElement {
  static options = Houses.flatMap(house => house.topics.map((topic, index) => ({ display: topic, value: `${house.number}:${index}` }))).sort((a, b) => a.display.localeCompare(b.display))

  @queryAll('geomancy-input-row') inputRows!: NodeListOf<GeomancyInputRow>

  @queryAll('geomancy-figure-selector') figureSelectors!: NodeListOf<GeomancyFigureSelector>

  @query('form') form!: HTMLFormElement

  @query('select') select!: HTMLSelectElement

  @state() error = false

  @state() manual = true

  private get inputRowCounts (): number[] { return Array.of(...this.inputRows).map(ir => ir.count) }

  private get externalMothers (): [number, number, number, number] { return Array.of(...this.figureSelectors).map(fs => fs.value) as [number, number, number, number] }

  protected render (): unknown {
    return html`
      <form @submit=${this.submit}>
        <h3>Select the general topic of your query here</h3>
        <select required>
          <option disabled selected value=''>Select an Option</option>
          ${repeat(GeomancyInput.options, i => i.value, i => html`<option value=${i.value}>${i.display}</option>`)}
        </select>
        <h3>How would you like to generate the mothers?</h3>
        <geomancy-radio-row>
          <label>
            <input type="radio" name="generationMethod" ?checked=${this.manual} @change=${() => { this.manual = true }} />
            Manually generate by casting points
          </label>
          <label>
            <input type="radio" name="generationMethod" ?checked=${!this.manual} @change=${() => { this.manual = false }} />
            Select the figures (you generated the mothers yourself elsewhere)
          </label>
        </geomancy-radio-row>
        ${when(this.manual, this.manualGeneration, this.selectionGeneration)}
        <input type='submit' value='Generate'>
      </form>
    `
  }

  private manualGeneration = () => {
    return html`
      <h3>Click each of the 16 rows to generate the mothers. Try to click at least 12 times in each row, but also try not to count your clicks.</h3>
      ${map(range(16), () => html`<geomancy-input-row></geomancy-input-row>`)}
      ${when(this.error, () => html`<span class='error'>Remember to generate a line of dots in all 16 rows</span>`)}
    `
  }

  private selectionGeneration = () => {
    return html`
      <h3>Specify the mothers you generated elsewhere.</h3>
      <span class='selector-row'>
        ${map(range(4), i => html`<geomancy-figure-selector heading=${`Mother ${i + 1}`}></geomancy-figure-selector>`)}
      </span>
      ${when(this.error, () => html`<span class='error'>Remember to specify all four mothers</span>`)}
    `
  }

  private submit (e: SubmitEvent): void {
    e.preventDefault()
    if (this.manual && this.inputRowCounts.some(ir => ir === 0)) this.error = true
    else if (!this.manual && this.externalMothers.some(em => em === -1)) this.error = true
    else {
      this.error = false
      this.dispatchEvent(new CustomEvent<GenerateEventDetail>('generate', { detail: { house: +this.select.value.split(':')[0], topicIndex: +this.select.value.split(':')[1], mothers: this.generateMothers() } }))
    }
  }

  private generateMothers (): [number, number, number, number] {
    if (this.manual) {
      return [
        this.generateMother(this.inputRowCounts.slice(0, 4)),
        this.generateMother(this.inputRowCounts.slice(4, 8)),
        this.generateMother(this.inputRowCounts.slice(8, 12)),
        this.generateMother(this.inputRowCounts.slice(12))
      ]
    } else {
      return this.externalMothers
    }
  }

  private generateMother (rows: number[]): number {
    return rows.map(r => r % 2 !== 0).reduce((total, r, index) => total + (r ? 2 ** index : 0), 0)
  }

  static styles = css`
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      font-size: 1rem;
      line-height: 1rem;
      margin: 1rem;
    }

    select {
      align-self: center;
    }

    input[type="submit"] {
      align-self: center;
      margin-top: 1rem;
    }

    span.error {
      color: red;
    }

    span.selector-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'geomancy-input': GeomancyInput
  }
}
