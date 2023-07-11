import { LitElement, type PropertyValueMap, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { range } from 'lit/directives/range.js'
import { map } from 'lit/directives/map.js'
import { getBit, getData } from '../util/Figure'

@customElement('geomancy-figure')
export class GeomancyFigure extends LitElement {
  @property({ type: Number }) value = 0

  @property({ reflect: true, noAccessor: true }) title = ''

  protected updated (changedProperties: PropertyValueMap<GeomancyFigure>): void {
    if (changedProperties.has('value')) {
      this.title = getData(this.value)?.name ?? ''
    }
  }

  protected render (): unknown {
    return map(range(4), i => html`<div aria-hidden="true">${map(range(1, getBit(i, this.value) - 1, -1), () => html`<span>◆</span>`)}</div>`)
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
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'geomancy-figure': GeomancyFigure
  }
}
