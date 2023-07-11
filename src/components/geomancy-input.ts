import { LitElement, css, html } from 'lit'
import { customElement, query, queryAll, state } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js'
import { range } from 'lit/directives/range.js'
import { type GeomancyInputRow } from '.'
import { Houses } from '../data'
import { repeat } from 'lit/directives/repeat.js'
import { when } from 'lit/directives/when.js'

export interface GenerateEventDetail {
  house: number
  topicIndex: number
  mothers: [number, number, number, number]
}

@customElement('geomancy-input')
export class GeomancyInput extends LitElement {
  static options = Houses.flatMap(house => house.topics.map((topic, index) => ({ display: topic, value: `${house.number}:${index}` }))).sort((a, b) => a.display.localeCompare(b.display))

  @queryAll('geomancy-input-row') inputRows!: NodeListOf<GeomancyInputRow>

  @query('form') form!: HTMLFormElement

  @query('select') select!: HTMLSelectElement

  @state() error = false

  protected render (): unknown {
    return html`
      <form @submit=${this.submit}>
        <h3>Select the general topic of your query here</h3>
        <select required>
          <option disabled selected value=''>Select an Option</option>
          ${repeat(GeomancyInput.options, i => i.value, i => html`<option value=${i.value}>${i.display}</option>`)}
        </select>
        <h3>Click each of the 16 rows to generate the mothers. Try to click at least 12 times in each row, but also try not to count your clicks.</h3>
        ${map(range(16), () => html`<geomancy-input-row></geomancy-input-row>`)}
        ${when(this.error, () => html`<span class='error'>Remember to generate a line of dots in all 16 rows</span>`)}
        <input type='submit' value='Generate'>
      </form>
    `
  }

  private submit (e: SubmitEvent): void {
    e.preventDefault()
    if (Array.of(...this.inputRows).some(ir => ir.count === 0)) this.error = true
    else {
      this.error = false
      this.dispatchEvent(new CustomEvent<GenerateEventDetail>('generate', { detail: { house: +this.select.value.split(':')[0], topicIndex: +this.select.value.split(':')[1], mothers: this.generateMothers() } }))
    }
  }

  private generateMothers (): [number, number, number, number] {
    const counts = Array.of(...this.inputRows).map(ir => ir.count)

    return [
      this.generateMother(counts.slice(0, 4)),
      this.generateMother(counts.slice(4, 8)),
      this.generateMother(counts.slice(8, 12)),
      this.generateMother(counts.slice(12))
    ]
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

    input {
      align-self: center;
      margin-top: 1rem;
    }

    span.error {
      color: red;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'geomancy-input': GeomancyInput
  }
}
