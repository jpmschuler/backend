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
import{SeverityEnum}from"@typo3/backend/enum/severity.js";import $ from"jquery";import{default as Modal}from"@typo3/backend/modal.js";import Severity from"@typo3/backend/severity.js";import Icons from"@typo3/backend/icons.js";class Wizard{constructor(){this.setup={slides:[],settings:{},forceSelection:!0,$carousel:null},this.originalSetup=$.extend(!0,{},this.setup)}set(e,t){return this.setup.settings[e]=t,this}addSlide(e,t,s="",i=SeverityEnum.info,a){const r={identifier:e,title:t,content:s,severity:i,callback:a};return this.setup.slides.push(r),this}addFinalProcessingSlide(e){return e||(e=()=>{this.dismiss()}),Icons.getIcon("spinner-circle-dark",Icons.sizes.large,null,null).then((t=>{let s=$("<div />",{class:"text-center"}).append(t);this.addSlide("final-processing-slide",top.TYPO3.lang["wizard.processing.title"],s[0].outerHTML,Severity.info,e)}))}show(){let e=this.generateSlides(),t=this.setup.slides[0];const s=Modal.advanced({title:t.title,content:e,severity:t.severity,buttons:[{text:top.TYPO3.lang["wizard.button.cancel"],active:!0,btnClass:"btn-default",name:"cancel",trigger:()=>{this.getComponent().trigger("wizard-dismiss")}},{text:top.TYPO3.lang["wizard.button.next"],btnClass:"btn-"+Severity.getCssClass(t.severity),name:"next"}],callback:()=>{this.addProgressBar(),this.initializeEvents(s)}});this.setup.forceSelection&&this.lockNextStep(),this.getComponent().on("wizard-visible",(()=>{this.runSlideCallback(t,this.setup.$carousel.find(".carousel-item").first())})).on("wizard-dismissed",(()=>{this.setup=$.extend(!0,{},this.originalSetup)}))}getComponent(){return null===this.setup.$carousel&&this.generateSlides(),this.setup.$carousel}dismiss(){Modal.dismiss()}lockNextStep(){let e=this.setup.$carousel.closest(".modal").find('button[name="next"]');return e.prop("disabled",!0),e}unlockNextStep(){let e=this.setup.$carousel.closest(".modal").find('button[name="next"]');return e.prop("disabled",!1),e}setForceSelection(e){this.setup.forceSelection=e}initializeEvents(e){let t=this.setup.$carousel.closest(".modal"),s=t.find(".modal-title"),i=t.find(".modal-footer"),a=i.find('button[name="next"]');a.on("click",(()=>{this.setup.$carousel.carousel("next")})),this.setup.$carousel.on("slide.bs.carousel",(()=>{let e=this.setup.$carousel.data("currentSlide")+1,r=this.setup.$carousel.data("currentIndex")+1;s.text(this.setup.slides[r].title),this.setup.$carousel.data("currentSlide",e),this.setup.$carousel.data("currentIndex",r),e>=this.setup.$carousel.data("realSlideCount")?(t.find(".modal-header .close").remove(),i.slideUp()):i.find(".progress-bar").width(this.setup.$carousel.data("initialStep")*e+"%").text(top.TYPO3.lang["wizard.progress"].replace("{0}",e).replace("{1}",this.setup.$carousel.data("slideCount"))),a.removeClass("btn-"+Severity.getCssClass(this.setup.slides[r-1].severity)).addClass("btn-"+Severity.getCssClass(this.setup.slides[r].severity)),t.removeClass("modal-severity-"+Severity.getCssClass(this.setup.slides[r-1].severity)).addClass("modal-severity-"+Severity.getCssClass(this.setup.slides[r].severity))})).on("slid.bs.carousel",(e=>{let t=this.setup.$carousel.data("currentIndex"),s=this.setup.slides[t];this.runSlideCallback(s,$(e.relatedTarget)),this.setup.forceSelection&&this.lockNextStep()}));let r=this.getComponent();r.on("wizard-dismiss",this.dismiss),e.addEventListener("typo3-modal-hidden",(()=>{r.trigger("wizard-dismissed")})),e.addEventListener("typo3-modal-shown",(()=>{r.trigger("wizard-visible")}))}runSlideCallback(e,t){"function"==typeof e.callback&&e.callback(t,this.setup.settings,e.identifier)}addProgressBar(){let e,t=this.setup.$carousel.find(".carousel-item").length,s=Math.max(1,t),i=this.setup.$carousel.closest(".modal").find(".modal-footer");e=Math.round(100/s),this.setup.$carousel.data("initialStep",e).data("slideCount",s).data("realSlideCount",t).data("currentIndex",0).data("currentSlide",1),s>1&&i.prepend($("<div />",{class:"progress"}).append($("<div />",{role:"progressbar",class:"progress-bar","aria-valuemin":0,"aria-valuenow":e,"aria-valuemax":100}).width(e+"%").text(top.TYPO3.lang["wizard.progress"].replace("{0}","1").replace("{1}",s))))}generateSlides(){if(null!==this.setup.$carousel)return this.setup.$carousel;let e='<div class="carousel slide" data-bs-ride="false"><div class="carousel-inner" role="listbox">';for(let t of Object.values(this.setup.slides)){let s=t.content;"object"==typeof s&&(s=s.html()),e+='<div class="carousel-item" data-bs-slide="'+t.identifier+'">'+s+"</div>"}return e+="</div></div>",this.setup.$carousel=$(e),this.setup.$carousel.find(".carousel-item").first().addClass("active"),this.setup.$carousel}}let wizardObject;try{window.opener&&window.opener.TYPO3&&window.opener.TYPO3.Wizard&&(wizardObject=window.opener.TYPO3.Wizard),parent&&parent.window.TYPO3&&parent.window.TYPO3.Wizard&&(wizardObject=parent.window.TYPO3.Wizard),top&&top.TYPO3&&top.TYPO3.Wizard&&(wizardObject=top.TYPO3.Wizard)}catch{}wizardObject||(wizardObject=new Wizard,"undefined"!=typeof TYPO3&&(TYPO3.Wizard=wizardObject));export default wizardObject;