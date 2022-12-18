import { LitElement, html, css, customElement } from 'lit-element';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/crud/src/vaadin-crud-grid.js';
import '@vaadin/grid/src/vaadin-grid.js';
import '@vaadin/grid/src/vaadin-grid-column.js';

@customElement('activiti-grid-view')
export class ActivitiGridView extends LitElement {
  static get styles() {
    return css`
      :host {
          display: block;
          height: 100%;
      }
      `;
  }

  render() {
    return html`
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <vaadin-horizontal-layout class="header" style="width: 100%; flex-basis: var(--lumo-size-l); flex-shrink: 0; background-color: var(--lumo-contrast-10pct); flex-direction: row;" id="vaadinHorizontalLayout">
  <h1 style="flex-grow: 1;"> Activiti Grid</h1>
 </vaadin-horizontal-layout>
 <vaadin-vertical-layout class="content" style="width: 100%; flex-grow: 1; flex-shrink: 1; flex-basis: auto;" id="vaadinVerticalLayout">
  <vaadin-crud-grid id="Id" is-attached all-rows-visible multi-sort-priority="prepend" cell-class-name-generator="Grid" XML="xml"></vaadin-crud-grid>
  <vaadin-grid items="[[items]]" is-attached multi-sort-priority="prepend">
   <vaadin-grid-column width="50px" flex-grow="0">
    <template class="header">
      # 
     <table></table>
    </template>
    <template>
      [[index]] 
    </template>
    <template class="footer">
      # 
    </template>
   </vaadin-grid-column>
   <vaadin-grid-column>
    <template class="header">
      Value 
    </template>
    <template>
      [[item.value]] 
    </template>
    <template class="footer">
      Value 
    </template>
   </vaadin-grid-column>
  </vaadin-grid>
 </vaadin-vertical-layout>
 <vaadin-horizontal-layout class="footer" style="width: 100%; flex-basis: var(--lumo-size-l); flex-shrink: 0; background-color: var(--lumo-contrast-10pct);"></vaadin-horizontal-layout>
</vaadin-vertical-layout> 167
`;
  }

  // Remove this method to render the contents of this view inside Shadow DOM
  createRenderRoot() {
    return this;
  }
}
