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
import $ from"jquery";import AjaxRequest from"@typo3/core/ajax/ajax-request.js";import Icons from"@typo3/backend/icons.js";import Modal from"@typo3/backend/modal.js";import Notification from"@typo3/backend/notification.js";import Viewport from"@typo3/backend/viewport.js";import SecurityUtility from"@typo3/core/security-utility.js";import{ModuleStateStorage}from"@typo3/backend/storage/module-state-storage.js";import"@typo3/backend/element/spinner-element.js";import{Sizes}from"@typo3/backend/enum/icon-types.js";var Identifiers;!function(t){t.containerSelector="#typo3-cms-backend-backend-toolbaritems-shortcuttoolbaritem",t.toolbarIconSelector=".dropdown-toggle span.icon",t.toolbarMenuSelector=".dropdown-menu",t.shortcutItemSelector=".t3js-topbar-shortcut",t.shortcutJumpSelector=".t3js-shortcut-jump",t.shortcutDeleteSelector=".t3js-shortcut-delete",t.shortcutEditSelector=".t3js-shortcut-edit",t.shortcutFormTitleSelector='input[name="shortcut-title"]',t.shortcutFormGroupSelector='select[name="shortcut-group"]',t.shortcutFormSaveSelector=".t3js-shortcut-form-save",t.shortcutFormCancelSelector=".t3js-shortcut-form-cancel",t.shortcutFormSelector=".t3js-shortcut-form"}(Identifiers||(Identifiers={}));class ShortcutMenu{constructor(){this.initializeEvents=()=>{$(Identifiers.containerSelector).on("click",Identifiers.shortcutDeleteSelector,(t=>{t.preventDefault(),t.stopImmediatePropagation(),this.deleteShortcut($(t.currentTarget).closest(Identifiers.shortcutItemSelector).data("shortcutid"))})).on("click",Identifiers.shortcutFormGroupSelector,(t=>{t.preventDefault(),t.stopImmediatePropagation()})).on("click",Identifiers.shortcutEditSelector,(t=>{t.preventDefault(),t.stopImmediatePropagation(),this.editShortcut($(t.currentTarget).closest(Identifiers.shortcutItemSelector))})).on("click",Identifiers.shortcutFormSaveSelector,(t=>{t.preventDefault(),t.stopImmediatePropagation(),this.saveShortcutForm($(t.currentTarget).closest(Identifiers.shortcutFormSelector))})).on("submit",Identifiers.shortcutFormSelector,(t=>{t.preventDefault(),t.stopImmediatePropagation(),this.saveShortcutForm($(t.currentTarget).closest(Identifiers.shortcutFormSelector))})).on("click",Identifiers.shortcutFormCancelSelector,(t=>{t.preventDefault(),t.stopImmediatePropagation(),this.refreshMenu()})).on("click",Identifiers.shortcutJumpSelector,(t=>{t.preventDefault();const e=$(t.currentTarget).data("pageid");e&&ModuleStateStorage.updateWithCurrentMount("web",e,!0);const o=document.querySelector("typo3-backend-module-router");o.setAttribute("endpoint",$(t.currentTarget).attr("href")),o.setAttribute("module",$(t.currentTarget).data("module"))}))},Viewport.Topbar.Toolbar.registerEvent(this.initializeEvents)}createShortcut(t,e,o,r,s){new AjaxRequest(TYPO3.settings.ajaxUrls.shortcut_create).post({routeIdentifier:t,arguments:e,displayName:o}).then((async t=>{const e=await t.resolve();if("success"===e.result?Notification.success(TYPO3.lang["bookmark.savedTitle"],TYPO3.lang["bookmark.savedMessage"]):"alreadyExists"===e.result&&Notification.info(TYPO3.lang["bookmark.alreadyExistsTitle"],TYPO3.lang["bookmark.alreadyExistsMessage"]),this.refreshMenu(),"object"!=typeof s)return void console.warn("Expected argument shortcutButton to be an object, got "+typeof s);const o=$(s).hasClass("dropdown-item"),r=new SecurityUtility;Icons.getIcon("actions-system-shortcut-active",Icons.sizes.small).then((t=>{$(s).html(t+(o?" "+r.encodeHtml(TYPO3.lang["labels.alreadyBookmarked"]):""))})),$(s).addClass(o?"disabled":"active"),$(s).attr("data-dispatch-disabled","disabled"),$(s).attr("title",TYPO3.lang["labels.alreadyBookmarked"])})).catch((()=>{Notification.error(TYPO3.lang["bookmark.failedTitle"],TYPO3.lang["bookmark.failedMessage"])}))}deleteShortcut(t){const e=Modal.confirm(TYPO3.lang["bookmark.delete"],TYPO3.lang["bookmark.confirmDelete"]);e.addEventListener("confirm.button.ok",(()=>{new AjaxRequest(TYPO3.settings.ajaxUrls.shortcut_remove).post({shortcutId:t}).then((()=>{this.refreshMenu()})),e.hideModal()})),e.addEventListener("confirm.button.cancel",(()=>{e.hideModal()}))}editShortcut(t){new AjaxRequest(TYPO3.settings.ajaxUrls.shortcut_editform).withQueryArguments({shortcutId:t.data("shortcutid"),shortcutGroup:t.data("shortcutgroup")}).get({cache:"no-cache"}).then((async t=>{$(Identifiers.containerSelector).find(Identifiers.toolbarMenuSelector).html(await t.resolve())}))}saveShortcutForm(t){new AjaxRequest(TYPO3.settings.ajaxUrls.shortcut_saveform).post({shortcutId:t.data("shortcutid"),shortcutTitle:t.find(Identifiers.shortcutFormTitleSelector).val(),shortcutGroup:t.find(Identifiers.shortcutFormGroupSelector).val()}).then((()=>{Notification.success(TYPO3.lang["bookmark.savedTitle"],TYPO3.lang["bookmark.savedMessage"]),this.refreshMenu()}))}refreshMenu(){const t=$(Identifiers.toolbarIconSelector,Identifiers.containerSelector),e=t.clone(),o=document.createElement("typo3-backend-spinner");o.setAttribute("size",Sizes.small),t.replaceWith(o),new AjaxRequest(TYPO3.settings.ajaxUrls.shortcut_list).get({cache:"no-cache"}).then((async t=>{$(Identifiers.toolbarMenuSelector,Identifiers.containerSelector).html(await t.resolve())})).finally((()=>{$("typo3-backend-spinner",Identifiers.containerSelector).replaceWith(e)}))}}top.TYPO3.ShortcutMenu&&"object"==typeof top.TYPO3.ShortcutMenu||(top.TYPO3.ShortcutMenu=new ShortcutMenu);const shortcutMenuObject=top.TYPO3.ShortcutMenu;export default shortcutMenuObject;