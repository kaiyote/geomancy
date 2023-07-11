import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js'
import { range } from 'lit/directives/range.js'
import { when } from 'lit/directives/when.js'

@customElement('geomancy-input-row')
export class GeomancyInputRow extends LitElement {
  @state() count = 0

  protected render (): unknown {
    return when(this.count === 0, () => html`&nbsp;`, () => map(
      range(this.count),
      i => html`
        <span>
          ${when(i % 2 !== 0, () => html`-`)}◆
        </span>
      `
    ))
  }

  connectedCallback (): void {
    super.connectedCallback()

    this.addEventListener('click', this._onClick)
  }

  disconnectedCallback (): void {
    super.disconnectedCallback()

    this.removeEventListener('click', this._onClick)
  }

  private readonly _onClick: () => void = () => {
    this.count += 1
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      justify-content: flex-start ;
      align-items: center;
      font-size: 1rem;
      padding: 1rem;
      border: 1px solid var(--font-color);
      user-select: none;
    }

    span:nth-child(2n) {
      margin-right: 0.25rem;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'geomancy-input-row': GeomancyInputRow
  }
}
