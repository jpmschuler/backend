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
define(["require","exports","./Enum/KeyTypes","jquery","nprogress","./Modal","./Severity","TYPO3/CMS/Core/SecurityUtility","TYPO3/CMS/Backend/Utility/MessageUtility"],function(t,e,n,i,r,o,a,l,s){"use strict";return new(function(){function t(){var t=this;this.securityUtility=new l,i(function(){t.registerEvents()})}return t.prototype.registerEvents=function(){var t=this;i(document).on("click",".t3js-online-media-add-btn",function(e){t.triggerModal(i(e.currentTarget))})},t.prototype.addOnlineMedia=function(t,e){var n=t.data("target-folder"),l=t.data("online-media-allowed"),d=t.data("file-irre-object");r.start(),i.post(TYPO3.settings.ajaxUrls.online_media_create,{url:e,targetFolder:n,allowed:l},function(t){if(t.file){var e={objectGroup:d,table:"sys_file",uid:t.file};s.MessageUtility.send(e)}else var n=o.confirm("ERROR",t.error,a.error,[{text:TYPO3.lang["button.ok"]||"OK",btnClass:"btn-"+a.getCssClass(a.error),name:"ok",active:!0}]).on("confirm.button.ok",function(){n.modal("hide")});r.done()})},t.prototype.triggerModal=function(t){var e=this,r=t.data("btn-submit")||"Add",l=t.data("placeholder")||"Paste media url here...",s=i.map(t.data("online-media-allowed").split(","),function(t){return'<span class="label label-success">'+e.securityUtility.encodeHtml(t.toUpperCase(),!1)+"</span>"}),d=t.data("online-media-allowed-help-text")||"Allow to embed from sources:",c=i("<div>").attr("class","form-control-wrap").append([i("<input>").attr("type","text").attr("class","form-control online-media-url").attr("placeholder",l),i("<div>").attr("class","help-block").html(this.securityUtility.encodeHtml(d,!1)+"<br>"+s.join(" "))]),u=o.show(t.attr("title"),c,a.notice,[{text:r,btnClass:"btn btn-primary",name:"ok",trigger:function(){var n=u.find("input.online-media-url").val();n&&(u.modal("hide"),e.addOnlineMedia(t,n))}}]);u.on("shown.bs.modal",function(t){i(t.currentTarget).find("input.online-media-url").first().focus().on("keydown",function(t){t.keyCode===n.KeyTypesEnum.ENTER&&u.find('button[name="ok"]').trigger("click")})})},t}())});