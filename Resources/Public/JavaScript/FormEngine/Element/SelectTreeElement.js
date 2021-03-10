/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
var __decorate=this&&this.__decorate||function(e,t,i,r){var a,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(s=(n<3?a(s):n>3?a(t,i,s):a(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};define(["require","exports","bootstrap","lit-element","TYPO3/CMS/Core/lit-helper","TYPO3/CMS/Backend/FormEngineValidation","TYPO3/CMS/Backend/Element/IconElement","./SelectTree"],(function(e,t,i,r,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectTreeElement=void 0;t.SelectTreeElement=class{constructor(e,t,i){this.recordField=null,this.tree=null,this.selectNode=e=>{const t=e.detail.node;this.updateAncestorsIndeterminateState(t),this.calculateIndeterminate(this.tree.nodes),this.saveCheckboxes(),this.tree.setup.input.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},this.loadDataAfter=()=>{this.tree.nodes=this.tree.nodes.map(e=>(e.indeterminate=!1,e)),this.calculateIndeterminate(this.tree.nodes),this.saveCheckboxes(),n.validateField(this.recordField)},this.saveCheckboxes=()=>{void 0!==this.recordField&&(this.recordField.value=this.tree.getSelectedNodes().map(e=>e.identifier).join(","))},this.recordField=document.getElementById(t);const r=document.getElementById(e);this.tree=document.createElement("typo3-backend-form-selecttree"),this.tree.classList.add("svg-tree-wrapper"),this.tree.addEventListener("typo3:svg-tree:nodes-prepared",this.loadDataAfter),this.tree.addEventListener("typo3:svg-tree:node-selected",this.selectNode),this.tree.addEventListener("typo3:svg-tree:node-selected",()=>{i()});const a={dataUrl:this.generateRequestUrl(),readOnlyMode:1===parseInt(this.recordField.dataset.readOnly,10),input:this.recordField,exclusiveNodesIdentifiers:this.recordField.dataset.treeExclusiveKeys,validation:JSON.parse(this.recordField.dataset.formengineValidationRules)[0],expandUpToLevel:this.recordField.dataset.treeExpandUpToLevel,unselectableElements:[]};this.tree.addEventListener("svg-tree:initialized",()=>{const e=document.createElement("typo3-backend-form-selecttree-toolbar");e.tree=this.tree,this.tree.prepend(e)}),this.tree.setup=a,r.append(this.tree),this.listenForVisibleTree()}listenForVisibleTree(){if(!this.tree.offsetParent){let e=this.tree.closest(".tab-pane").getAttribute("id");if(e){document.querySelector('[aria-controls="'+e+'"]').addEventListener("shown.bs.tab",()=>{this.tree.dispatchEvent(new Event("svg-tree:visible"))})}}}generateRequestUrl(){const e={tableName:this.recordField.dataset.tablename,fieldName:this.recordField.dataset.fieldname,uid:this.recordField.dataset.uid,recordTypeValue:this.recordField.dataset.recordtypevalue,dataStructureIdentifier:this.recordField.dataset.datastructureidentifier,flexFormSheetName:this.recordField.dataset.flexformsheetname,flexFormFieldName:this.recordField.dataset.flexformfieldname,flexFormContainerName:this.recordField.dataset.flexformcontainername,flexFormContainerIdentifier:this.recordField.dataset.flexformcontaineridentifier,flexFormContainerFieldName:this.recordField.dataset.flexformcontainerfieldname,flexFormSectionContainerIsNew:this.recordField.dataset.flexformsectioncontainerisnew,command:this.recordField.dataset.command};return TYPO3.settings.ajaxUrls.record_tree_data+"&"+new URLSearchParams(e)}updateAncestorsIndeterminateState(e){let t=!1;e.parents.forEach(e=>{const i=this.tree.nodes[e];i.indeterminate=i.checked||i.indeterminate||t,t=i.checked||i.indeterminate||i.checked||i.indeterminate})}calculateIndeterminate(e){e.forEach(t=>{(t.checked||t.indeterminate)&&t.parents&&t.parents.length>0&&t.parents.forEach(t=>{e[t].indeterminate=!0})})}};let s=class extends r.LitElement{constructor(){super(...arguments),this.settings={collapseAllBtn:"collapse-all-btn",expandAllBtn:"expand-all-btn",searchInput:"search-input",toggleHideUnchecked:"hide-unchecked-btn"},this.hideUncheckedState=!1}createRenderRoot(){return this}firstUpdated(){this.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(e=>new i.Tooltip(e))}render(){return r.html`
      <div class="tree-toolbar btn-toolbar">
        <div class="input-group">
          <span class="input-group-addon input-group-icon filter">
            <typo3-backend-icon identifier="actions-filter" size="small"></typo3-backend-icon>
          </span>
          <input type="text" class="form-control ${this.settings.searchInput}" placeholder="${a.lll("tcatree.findItem")}" @input="${e=>this.filter(e)}">
        </div>
        <div class="btn-group">
          <button type="button" data-bs-toggle="tooltip" class="btn btn-default ${this.settings.expandAllBtn}" title="${a.lll("tcatree.expandAll")}" @click="${()=>this.expandAll()}">
            <typo3-backend-icon identifier="apps-pagetree-category-expand-all" size="small"></typo3-backend-icon>
          </button>
          <button type="button" data-bs-toggle="tooltip" class="btn btn-default ${this.settings.collapseAllBtn}" title="${a.lll("tcatree.collapseAll")}" @click="${()=>this.collapseAll()}">
            <typo3-backend-icon identifier="apps-pagetree-category-collapse-all" size="small"></typo3-backend-icon>
          </button>
          <button type="button" data-bs-toggle="tooltip" class="btn btn-default ${this.settings.toggleHideUnchecked}" title="${a.lll("tcatree.toggleHideUnchecked")}" @click="${()=>this.toggleHideUnchecked()}">
            <typo3-backend-icon identifier="apps-pagetree-category-toggle-hide-checked" size="small"></typo3-backend-icon>
          </button>
        </div>
      </div>
    `}collapseAll(){this.tree.collapseAll()}expandAll(){this.tree.expandAll()}filter(e){const t=e.target;this.tree.filter(t.value.trim())}toggleHideUnchecked(){this.hideUncheckedState=!this.hideUncheckedState,this.hideUncheckedState?this.tree.nodes.forEach(e=>{e.checked?(this.tree.showParents(e),e.expanded=!0,e.hidden=!1):(e.hidden=!0,e.expanded=!1)}):this.tree.nodes.forEach(e=>e.hidden=!1),this.tree.prepareDataForVisibleNodes(),this.tree.updateVisibleNodes()}};s=__decorate([r.customElement("typo3-backend-form-selecttree-toolbar")],s)}));