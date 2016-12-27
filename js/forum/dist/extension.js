/** Trumbowyg v2.4.0 - A lightweight WYSIWYG editor - alex-d.github.io/Trumbowyg - License MIT - Author : Alexandre Demode (Alex-D) / alex-d.fr */
jQuery.trumbowyg={langs:{en:{viewHTML:"View HTML",undo:"Undo",redo:"Redo",formatting:"Formatting",p:"Paragraph",blockquote:"Quote",code:"Code",header:"Header",bold:"Bold",italic:"Italic",strikethrough:"Stroke",underline:"Underline",strong:"Strong",em:"Emphasis",del:"Deleted",superscript:"Superscript",subscript:"Subscript",unorderedList:"Unordered list",orderedList:"Ordered list",insertImage:"Insert Image",link:"Link",createLink:"Insert link",unlink:"Remove link",justifyLeft:"Align Left",justifyCenter:"Align Center",justifyRight:"Align Right",justifyFull:"Align Justify",horizontalRule:"Insert horizontal rule",removeformat:"Remove format",fullscreen:"Fullscreen",close:"Close",submit:"Confirm",reset:"Cancel",required:"Required",description:"Description",title:"Title",text:"Text",target:"Target"}},plugins:{},svgPath:null},function(e,t,n,a){"use strict";a.fn.trumbowyg=function(e,t){var n="trumbowyg";if(e===Object(e)||!e)return this.each(function(){a(this).data(n)||a(this).data(n,new o(this,e))});if(1===this.length)try{var r=a(this).data(n);switch(e){case"execCmd":return r.execCmd(t.cmd,t.param,t.forceCss);case"openModal":return r.openModal(t.title,t.content);case"closeModal":return r.closeModal();case"openModalInsert":return r.openModalInsert(t.title,t.fields,t.callback);case"saveRange":return r.saveRange();case"getRange":return r.range;case"getRangeText":return r.getRangeText();case"restoreRange":return r.restoreRange();case"enable":return r.toggleDisable(!1);case"disable":return r.toggleDisable(!0);case"destroy":return r.destroy();case"empty":return r.empty();case"html":return r.html(t)}}catch(i){}return!1};var o=function(e,o){var r=this,i="trumbowyg-icons";r.doc=e.ownerDocument||n,r.$ta=a(e),r.$c=a(e),o=o||{},null!=o.lang||null!=a.trumbowyg.langs[o.lang]?r.lang=a.extend(!0,{},a.trumbowyg.langs.en,a.trumbowyg.langs[o.lang]):r.lang=a.trumbowyg.langs.en;var s=null!=a.trumbowyg.svgPath?a.trumbowyg.svgPath:o.svgPath;if(r.hasSvg=s!==!1,r.svgPath=r.doc.querySelector("base")?t.location.href.split("#")[0]:"",0===a("#"+i,r.doc).length&&s!==!1){if(null==s)try{throw new Error}catch(l){var d=l.stack.split("\n");for(var c in d)if(d[c].match(/http[s]?:\/\//)){s=d[Number(c)].match(/((http[s]?:\/\/.+\/)([^\/]+\.js))(\?.*)?:/)[1].split("/"),s.pop(),s=s.join("/")+"/ui/icons.svg";break}}var u=r.doc.createElement("div");u.id=i,r.doc.body.insertBefore(u,r.doc.body.childNodes[0]),a.ajax({async:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"xml",url:s,data:null,beforeSend:null,complete:null,success:function(e){u.innerHTML=(new XMLSerializer).serializeToString(e.documentElement)}})}var g=r.lang.header,f=function(){return(t.chrome||t.Intl&&Intl.v8BreakIterator)&&"CSS"in t};r.btnsDef={viewHTML:{fn:"toggle"},undo:{isSupported:f,key:"Z"},redo:{isSupported:f,key:"Y"},p:{fn:"formatBlock"},blockquote:{fn:"formatBlock"},h1:{fn:"formatBlock",title:g+" 1"},h2:{fn:"formatBlock",title:g+" 2"},h3:{fn:"formatBlock",title:g+" 3"},h4:{fn:"formatBlock",title:g+" 4"},subscript:{tag:"sub"},superscript:{tag:"sup"},bold:{key:"B",tag:"b"},italic:{key:"I",tag:"i"},underline:{tag:"u"},strikethrough:{tag:"strike"},strong:{fn:"bold",key:"B"},em:{fn:"italic",key:"I"},del:{fn:"strikethrough"},createLink:{key:"K",tag:"a"},unlink:{},insertImage:{},justifyLeft:{tag:"left",forceCss:!0},justifyCenter:{tag:"center",forceCss:!0},justifyRight:{tag:"right",forceCss:!0},justifyFull:{tag:"justify",forceCss:!0},unorderedList:{fn:"insertUnorderedList",tag:"ul"},orderedList:{fn:"insertOrderedList",tag:"ol"},horizontalRule:{fn:"insertHorizontalRule"},removeformat:{},fullscreen:{"class":"trumbowyg-not-disable"},close:{fn:"destroy","class":"trumbowyg-not-disable"},formatting:{dropdown:["p","blockquote","h1","h2","h3","h4"],ico:"p"},link:{dropdown:["createLink","unlink"]}},r.o=a.extend(!0,{},{lang:"en",fixedBtnPane:!1,fixedFullWidth:!1,autogrow:!1,prefix:"trumbowyg-",semantic:!0,resetCss:!1,removeformatPasted:!1,tagsToRemove:[],btnsGrps:{design:["bold","italic","underline","strikethrough"],semantic:["strong","em","del"],justify:["justifyLeft","justifyCenter","justifyRight","justifyFull"],lists:["unorderedList","orderedList"]},btns:[["viewHTML"],["undo","redo"],["formatting"],"btnGrp-semantic",["superscript","subscript"],["link"],["insertImage"],"btnGrp-justify","btnGrp-lists",["horizontalRule"],["removeformat"],["fullscreen"]],btnsDef:{},inlineElementsSelector:"a,abbr,acronym,b,caption,cite,code,col,dfn,dir,dt,dd,em,font,hr,i,kbd,li,q,span,strikeout,strong,sub,sup,u",pasteHandlers:[],imgDblClickHandler:function(){var e=a(this),t=e.attr("src"),n="(Base64)";return 0===t.indexOf("data:image")&&(t=n),r.openModalInsert(r.lang.insertImage,{url:{label:"URL",value:t,required:!0},alt:{label:r.lang.description,value:e.attr("alt")}},function(t){return t.src!==n&&e.attr({src:t.src}),e.attr({alt:t.alt}),!0}),!1},plugins:{}},o),r.disabled=r.o.disabled||"TEXTAREA"===e.nodeName&&e.disabled,o.btns?r.o.btns=o.btns:r.o.semantic||(r.o.btns[4]="btnGrp-design"),a.each(r.o.btnsDef,function(e,t){r.addBtnDef(e,t)}),r.eventNamespace="trumbowyg-event",r.keys=[],r.tagToButton={},r.tagHandlers=[],r.pasteHandlers=[].concat(r.o.pasteHandlers),r.init()};o.prototype={init:function(){var e=this;e.height=e.$ta.height(),e.initPlugins();try{e.doc.execCommand("enableObjectResizing",!1,!1)}catch(t){}e.doc.execCommand("defaultParagraphSeparator",!1,"p"),e.buildEditor(),e.buildBtnPane(),e.fixedBtnPaneEvents(),e.buildOverlay(),setTimeout(function(){e.disabled&&e.toggleDisable(!0),e.$c.trigger("tbwinit")})},addBtnDef:function(e,t){this.btnsDef[e]=t},buildEditor:function(){var e=this,n=e.o.prefix,o="";e.$box=a("<div/>",{"class":n+"box "+n+"editor-visible "+n+e.o.lang+" trumbowyg"}),e.isTextarea=e.$ta.is("textarea"),e.isTextarea?(o=e.$ta.val(),e.$ed=a("<div/>"),e.$box.insertAfter(e.$ta).append(e.$ed,e.$ta)):(e.$ed=e.$ta,o=e.$ed.html(),e.$ta=a("<textarea/>",{name:e.$ta.attr("id"),height:e.height}).val(o),e.$box.insertAfter(e.$ed).append(e.$ta,e.$ed),e.syncCode()),e.$ta.addClass(n+"textarea").attr("tabindex",-1),e.$ed.addClass(n+"editor").attr({contenteditable:!0,dir:e.lang._dir||"ltr"}).html(o),e.o.tabindex&&e.$ed.attr("tabindex",e.o.tabindex),e.$c.is("[placeholder]")&&e.$ed.attr("placeholder",e.$c.attr("placeholder")),e.o.resetCss&&e.$ed.addClass(n+"reset-css"),e.o.autogrow||e.$ta.add(e.$ed).css({height:e.height}),e.semanticCode();var r,i=!1,s=!1;e.$ed.on("dblclick","img",e.o.imgDblClickHandler).on("keydown",function(t){if(s=229===t.which,t.ctrlKey){i=!0;var n=e.keys[String.fromCharCode(t.which).toUpperCase()];try{return e.execCmd(n.fn,n.param),!1}catch(a){}}}).on("keyup input",function(t){t.which>=37&&t.which<=40||(!t.ctrlKey||89!==t.which&&90!==t.which?i||17===t.which||s||(e.semanticCode(!1,13===t.which),e.$c.trigger("tbwchange")):e.$c.trigger("tbwchange"),setTimeout(function(){i=!1},200))}).on("mouseup keydown keyup",function(){clearTimeout(r),r=setTimeout(function(){e.updateButtonPaneStatus()},50)}).on("focus blur",function(t){e.$c.trigger("tbw"+t.type),"blur"===t.type&&a("."+n+"active-button",e.$btnPane).removeClass(n+"active-button "+n+"active")}).on("cut",function(){setTimeout(function(){e.semanticCode(!1,!0),e.$c.trigger("tbwchange")},0)}).on("paste",function(n){if(e.o.removeformatPasted){n.preventDefault();try{var o=t.clipboardData.getData("Text");try{e.doc.selection.createRange().pasteHTML(o)}catch(r){e.doc.getSelection().getRangeAt(0).insertNode(e.doc.createTextNode(o))}}catch(i){e.execCmd("insertText",(n.originalEvent||n).clipboardData.getData("text/plain"))}}a.each(e.pasteHandlers,function(e,t){t(n)}),setTimeout(function(){e.semanticCode(!1,!0),e.$c.trigger("tbwpaste",n)},0)}),e.$ta.on("keyup paste",function(){e.$c.trigger("tbwchange")}),e.$box.on("keydown",function(t){return 27===t.which&&1===a("."+n+"modal-box",e.$box).length?(e.closeModal(),!1):void 0})},buildBtnPane:function(){var e=this,t=e.o.prefix,n=e.$btnPane=a("<div/>",{"class":t+"button-pane"});a.each(e.o.btns,function(o,r){try{var i=r.split("btnGrp-");null!=i[1]&&(r=e.o.btnsGrps[i[1]])}catch(s){}a.isArray(r)||(r=[r]);var l=a("<div/>",{"class":t+"button-group "+(r.indexOf("fullscreen")>=0?t+"right":"")});a.each(r,function(t,n){try{var a;e.isSupportedBtn(n)&&(a=e.buildBtn(n)),l.append(a)}catch(o){}}),n.append(l)}),e.$box.prepend(n)},buildBtn:function(e){var t=this,n=t.o.prefix,o=t.btnsDef[e],r=o.dropdown,i=null!=o.hasIcon?o.hasIcon:!0,s=t.lang[e]||e,l=a("<button/>",{type:"button","class":n+e+"-button "+(o["class"]||"")+(i?"":" "+n+"textual-button"),html:t.hasSvg&&i?'<svg><use xlink:href="'+t.svgPath+"#"+n+(o.ico||e).replace(/([A-Z]+)/g,"-$1").toLowerCase()+'"/></svg>':o.text||o.title||t.lang[e]||e,title:(o.title||o.text||s)+(o.key?" (Ctrl + "+o.key+")":""),tabindex:-1,mousedown:function(){return(!r||a("."+e+"-"+n+"dropdown",t.$box).is(":hidden"))&&a("body",t.doc).trigger("mousedown"),!t.$btnPane.hasClass(n+"disable")||a(this).hasClass(n+"active")||a(this).hasClass(n+"not-disable")?(t.execCmd((r?"dropdown":!1)||o.fn||e,o.param||e,o.forceCss||!1),!1):!1}});if(r){l.addClass(n+"open-dropdown");var d=n+"dropdown",c=a("<div/>",{"class":d+"-"+e+" "+d+" "+n+"fixed-top","data-dropdown":e});a.each(r,function(e,n){t.btnsDef[n]&&t.isSupportedBtn(n)&&c.append(t.buildSubBtn(n))}),t.$box.append(c.hide())}else o.key&&(t.keys[o.key]={fn:o.fn||e,param:o.param||e});return r||(t.tagToButton[(o.tag||e).toLowerCase()]=e),l},buildSubBtn:function(e){var t=this,n=t.o.prefix,o=t.btnsDef[e],r=null!=o.hasIcon?o.hasIcon:!0;return o.key&&(t.keys[o.key]={fn:o.fn||e,param:o.param||e}),t.tagToButton[(o.tag||e).toLowerCase()]=e,a("<button/>",{type:"button","class":n+e+"-dropdown-button"+(o.ico?" "+n+o.ico+"-button":""),html:t.hasSvg&&r?'<svg><use xlink:href="'+t.svgPath+"#"+n+(o.ico||e).replace(/([A-Z]+)/g,"-$1").toLowerCase()+'"/></svg>'+(o.text||o.title||t.lang[e]||e):o.text||o.title||t.lang[e]||e,title:o.key?" (Ctrl + "+o.key+")":null,style:o.style||null,mousedown:function(){return a("body",t.doc).trigger("mousedown"),t.execCmd(o.fn||e,o.param||e,o.forceCss||!1),!1}})},isSupportedBtn:function(e){try{return this.btnsDef[e].isSupported()}catch(t){}return!0},buildOverlay:function(){var e=this;return e.$overlay=a("<div/>",{"class":e.o.prefix+"overlay"}).css({top:e.$btnPane.outerHeight(),height:e.$ed.outerHeight()+1+"px"}).appendTo(e.$box),e.$overlay},showOverlay:function(){var e=this;a(t).trigger("scroll"),e.$overlay.fadeIn(200),e.$box.addClass(e.o.prefix+"box-blur")},hideOverlay:function(){var e=this;e.$overlay.fadeOut(50),e.$box.removeClass(e.o.prefix+"box-blur")},fixedBtnPaneEvents:function(){var e=this,n=e.o.fixedFullWidth,o=e.$box;e.o.fixedBtnPane&&(e.isFixed=!1,a(t).on("scroll."+e.eventNamespace+" resize."+e.eventNamespace,function(){if(o){e.syncCode();var r=a(t).scrollTop(),i=o.offset().top+1,s=e.$btnPane,l=s.outerHeight()-2;r-i>0&&r-i-e.height<0?(e.isFixed||(e.isFixed=!0,s.css({position:"fixed",top:0,left:n?"0":"auto",zIndex:7}),a([e.$ta,e.$ed]).css({marginTop:s.height()})),s.css({width:n?"100%":o.width()-1+"px"}),a("."+e.o.prefix+"fixed-top",o).css({position:n?"fixed":"absolute",top:n?l:l+(r-i)+"px",zIndex:15})):e.isFixed&&(e.isFixed=!1,s.removeAttr("style"),a([e.$ta,e.$ed]).css({marginTop:0}),a("."+e.o.prefix+"fixed-top",o).css({position:"absolute",top:l}))}}))},toggleDisable:function(e){var t=this,n=t.o.prefix;t.disabled=e,e?t.$ta.attr("disabled",!0):t.$ta.removeAttr("disabled"),t.$box.toggleClass(n+"disabled",e),t.$ed.attr("contenteditable",!e)},destroy:function(){var e=this,n=e.o.prefix,o=e.height;e.isTextarea?e.$box.after(e.$ta.css({height:o}).val(e.html()).removeClass(n+"textarea").show()):e.$box.after(e.$ed.css({height:o}).removeClass(n+"editor").removeAttr("contenteditable").html(e.html()).show()),e.$ed.off("dblclick","img"),e.destroyPlugins(),e.$box.remove(),e.$c.removeData("trumbowyg"),a("body").removeClass(n+"body-fullscreen"),e.$c.trigger("tbwclose"),a(t).off("scroll."+e.eventNamespace+" resize."+e.eventNamespace)},empty:function(){this.$ta.val(""),this.syncCode(!0)},toggle:function(){var e=this,t=e.o.prefix;e.semanticCode(!1,!0),setTimeout(function(){e.doc.activeElement.blur(),e.$box.toggleClass(t+"editor-hidden "+t+"editor-visible"),e.$btnPane.toggleClass(t+"disable"),a("."+t+"viewHTML-button",e.$btnPane).toggleClass(t+"active"),e.$box.hasClass(t+"editor-visible")?e.$ta.attr("tabindex",-1):e.$ta.removeAttr("tabindex")},0)},dropdown:function(e){var n=this,o=n.doc,r=n.o.prefix,i=a("[data-dropdown="+e+"]",n.$box),s=a("."+r+e+"-button",n.$btnPane),l=i.is(":hidden");if(a("body",o).trigger("mousedown"),l){var d=s.offset().left;s.addClass(r+"active"),i.css({position:"absolute",top:s.offset().top-n.$btnPane.offset().top+s.outerHeight(),left:n.o.fixedFullWidth&&n.isFixed?d+"px":d-n.$btnPane.offset().left+"px"}).show(),a(t).trigger("scroll"),a("body",o).on("mousedown."+n.eventNamespace,function(){a("."+r+"dropdown",o).hide(),a("."+r+"active",o).removeClass(r+"active"),a("body",o).off("mousedown."+n.eventNamespace)})}},html:function(e){var t=this;return null!=e?(t.$ta.val(e),t.syncCode(!0),t):t.$ta.val()},syncTextarea:function(){var e=this;e.$ta.val(e.$ed.text().trim().length>0||e.$ed.find("hr,img,embed,iframe,input").length>0?e.$ed.html():"")},syncCode:function(e){var t=this;!e&&t.$ed.is(":visible")?t.syncTextarea():t.$ed.html(t.$ta.val()),t.o.autogrow&&(t.height=t.$ed.height(),t.height!==t.$ta.css("height")&&(t.$ta.css({height:t.height}),t.$c.trigger("tbwresize")))},semanticCode:function(e,t){var n=this;if(n.saveRange(),n.syncCode(e),a(n.o.tagsToRemove.join(","),n.$ed).remove(),n.o.semantic){if(n.semanticTag("b","strong"),n.semanticTag("i","em"),t){var o=n.o.inlineElementsSelector,r=":not("+o+")";n.$ed.contents().filter(function(){return 3===this.nodeType&&this.nodeValue.trim().length>0}).wrap("<span data-tbw/>");var i=function(e){if(0!==e.length){var t=e.nextUntil(r).addBack().wrapAll("<p/>").parent(),n=t.nextAll(o).first();t.next("br").remove(),i(n)}};i(n.$ed.children(o).first()),n.semanticTag("div","p",!0),n.$ed.find("p").filter(function(){return n.range&&this===n.range.startContainer?!1:0===a(this).text().trim().length&&0===a(this).children().not("br,span").length}).contents().unwrap(),a("[data-tbw]",n.$ed).contents().unwrap(),n.$ed.find("p:empty").remove()}n.restoreRange(),n.syncTextarea()}},semanticTag:function(e,t,n){a(e,this.$ed).each(function(){var e=a(this);e.wrap("<"+t+"/>"),n&&a.each(e.prop("attributes"),function(){e.parent().attr(this.name,this.value)}),e.contents().unwrap()})},createLink:function(){for(var e,t,n,o=this,r=o.doc.getSelection(),i=r.focusNode;["A","DIV"].indexOf(i.nodeName)<0;)i=i.parentNode;if(i&&"A"===i.nodeName){var s=a(i);e=s.attr("href"),t=s.attr("title"),n=s.attr("target");var l=o.doc.createRange();l.selectNode(i),r.addRange(l)}o.saveRange(),o.openModalInsert(o.lang.createLink,{url:{label:"URL",required:!0,value:e},title:{label:o.lang.title,value:t},text:{label:o.lang.text,value:o.getRangeText()},target:{label:o.lang.target,value:n}},function(e){var t=a(['<a href="',e.url,'">',e.text,"</a>"].join(""));return e.title.length>0&&t.attr("title",e.title),e.target.length>0&&t.attr("target",e.target),o.range.deleteContents(),o.range.insertNode(t[0]),!0})},unlink:function(){var e=this,t=e.doc.getSelection(),n=t.focusNode;if(t.isCollapsed){for(;["A","DIV"].indexOf(n.nodeName)<0;)n=n.parentNode;if(n&&"A"===n.nodeName){var a=e.doc.createRange();a.selectNode(n),t.addRange(a)}}e.execCmd("unlink",void 0,void 0,!0)},insertImage:function(){var e=this;e.saveRange(),e.openModalInsert(e.lang.insertImage,{url:{label:"URL",required:!0},alt:{label:e.lang.description,value:e.getRangeText()}},function(t){return e.execCmd("insertImage",t.url),a('img[src="'+t.url+'"]:not([alt])',e.$box).attr("alt",t.alt),!0})},fullscreen:function(){var e,n=this,o=n.o.prefix,r=o+"fullscreen";n.$box.toggleClass(r),e=n.$box.hasClass(r),a("body").toggleClass(o+"body-fullscreen",e),a(t).trigger("scroll"),n.$c.trigger("tbw"+(e?"open":"close")+"fullscreen")},execCmd:function(t,n,a,o){var r=this;o=!!o||"","dropdown"!==t&&r.$ed.focus();try{r.doc.execCommand("styleWithCSS",!1,a||!1)}catch(i){}try{r[t+o](n)}catch(i){try{t(n)}catch(s){"insertHorizontalRule"===t?n=void 0:"formatBlock"!==t||-1===e.userAgent.indexOf("MSIE")&&-1===e.appVersion.indexOf("Trident/")||(n="<"+n+">"),r.doc.execCommand(t,!1,n),r.syncCode(),r.semanticCode(!1,!0)}"dropdown"!==t&&(r.updateButtonPaneStatus(),r.$c.trigger("tbwchange"))}},openModal:function(e,n){var o=this,r=o.o.prefix;if(a("."+r+"modal-box",o.$box).length>0)return!1;o.saveRange(),o.showOverlay(),o.$btnPane.addClass(r+"disable");var i=a("<div/>",{"class":r+"modal "+r+"fixed-top"}).css({top:o.$btnPane.height()}).appendTo(o.$box);o.$overlay.one("click",function(){return i.trigger("tbwcancel"),!1});var s=a("<form/>",{action:"",html:n}).on("submit",function(){return i.trigger("tbwconfirm"),!1}).on("reset",function(){return i.trigger("tbwcancel"),!1}),l=a("<div/>",{"class":r+"modal-box",html:s}).css({top:"-"+o.$btnPane.outerHeight()+"px",opacity:0}).appendTo(i).animate({top:0,opacity:1},100);return a("<span/>",{text:e,"class":r+"modal-title"}).prependTo(l),i.height(l.outerHeight()+10),a("input:first",l).focus(),o.buildModalBtn("submit",l),o.buildModalBtn("reset",l),a(t).trigger("scroll"),i},buildModalBtn:function(e,t){var n=this,o=n.o.prefix;return a("<button/>",{"class":o+"modal-button "+o+"modal-"+e,type:e,text:n.lang[e]||e}).appendTo(a("form",t))},closeModal:function(){var e=this,t=e.o.prefix;e.$btnPane.removeClass(t+"disable"),e.$overlay.off();var n=a("."+t+"modal-box",e.$box);n.animate({top:"-"+n.height()},100,function(){n.parent().remove(),e.hideOverlay()}),e.restoreRange()},openModalInsert:function(e,t,n){var o=this,r=o.o.prefix,i=o.lang,s="",l="tbwconfirm";return a.each(t,function(e,t){var n=t.label,a=t.name||e,o=t.attributes||{},l=Object.keys(o).map(function(e){return e+'="'+o[e]+'"'}).join(" ");s+='<label><input type="'+(t.type||"text")+'" name="'+a+'" value="'+(t.value||"").replace(/"/g,"&quot;")+'"'+l+'><span class="'+r+'input-infos"><span>'+(n?i[n]?i[n]:n:i[e]?i[e]:e)+"</span></span></label>"}),o.openModal(e,s).on(l,function(){var e=a("form",a(this)),r=!0,i={};a.each(t,function(t,n){var s=a('input[name="'+t+'"]',e),l=s.attr("type");"checkbox"===l.toLowerCase()?i[t]=s.is(":checked"):i[t]=a.trim(s.val()),n.required&&""===i[t]?(r=!1,o.addErrorOnModalField(s,o.lang.required)):n.pattern&&!n.pattern.test(i[t])&&(r=!1,o.addErrorOnModalField(s,n.patternError))}),r&&(o.restoreRange(),n(i,t)&&(o.syncCode(),o.$c.trigger("tbwchange"),o.closeModal(),a(this).off(l)))}).one("tbwcancel",function(){a(this).off(l),o.closeModal()})},addErrorOnModalField:function(e,t){var n=this.o.prefix,o=e.parent();e.on("change keyup",function(){o.removeClass(n+"input-error")}),o.addClass(n+"input-error").find("input+span").append(a("<span/>",{"class":n+"msg-error",text:t}))},saveRange:function(){var e=this,t=e.doc.getSelection();if(e.range=null,t.rangeCount){var n,a=e.range=t.getRangeAt(0),o=e.doc.createRange();o.selectNodeContents(e.$ed[0]),o.setEnd(a.startContainer,a.startOffset),n=(o+"").length,e.metaRange={start:n,end:n+(a+"").length}}},restoreRange:function(){var e,t=this,n=t.metaRange,a=t.range,o=t.doc.getSelection();if(a){if(n&&n.start!==n.end){var r,i=0,s=[t.$ed[0]],l=!1,d=!1;for(e=t.doc.createRange();!d&&(r=s.pop());)if(3===r.nodeType){var c=i+r.length;!l&&n.start>=i&&n.start<=c&&(e.setStart(r,n.start-i),l=!0),l&&n.end>=i&&n.end<=c&&(e.setEnd(r,n.end-i),d=!0),i=c}else for(var u=r.childNodes,g=u.length;g>0;)g-=1,s.push(u[g])}o.removeAllRanges(),o.addRange(e||a)}},getRangeText:function(){return this.range+""},updateButtonPaneStatus:function(){var e=this,t=e.o.prefix,n=e.getTagsRecursive(e.doc.getSelection().focusNode),o=t+"active-button "+t+"active";a("."+t+"active-button",e.$btnPane).removeClass(o),a.each(n,function(n,r){var i=e.tagToButton[r.toLowerCase()],s=a("."+t+i+"-button",e.$btnPane);if(s.length>0)s.addClass(o);else try{s=a("."+t+"dropdown ."+t+i+"-dropdown-button",e.$box);var l=s.parent().data("dropdown");a("."+t+l+"-button",e.$box).addClass(o)}catch(d){}})},getTagsRecursive:function(e,t){var n=this;if(t=t||[],!e||!e.parentNode)return t;e=e.parentNode;var o=e.tagName;return"DIV"===o?t:("P"===o&&""!==e.style.textAlign&&t.push(e.style.textAlign),a.each(n.tagHandlers,function(a,o){t=t.concat(o(e,n))}),t.push(o),n.getTagsRecursive(e,t))},initPlugins:function(){var e=this;e.loadedPlugins=[],a.each(a.trumbowyg.plugins,function(t,n){(!n.shouldInit||n.shouldInit(e))&&(n.init(e),n.tagHandler&&e.tagHandlers.push(n.tagHandler),e.loadedPlugins.push(n))})},destroyPlugins:function(){a.each(this.loadedPlugins,function(e,t){t.destroy&&t.destroy()})}}}(navigator,window,document,jQuery);;
System.register("xengine/signature/Components/Fields/SignatureTextarea", ["flarum/Component"], function (_export) {
    "use strict";

    var Component, SignatureTextarea;
    return {
        setters: [function (_flarumComponent) {
            Component = _flarumComponent["default"];
        }],
        execute: function () {
            SignatureTextarea = (function (_Component) {
                babelHelpers.inherits(SignatureTextarea, _Component);

                function SignatureTextarea() {
                    babelHelpers.classCallCheck(this, SignatureTextarea);
                    babelHelpers.get(Object.getPrototypeOf(SignatureTextarea.prototype), "constructor", this).apply(this, arguments);
                }

                babelHelpers.createClass(SignatureTextarea, [{
                    key: "view",
                    value: function view() {
                        return m(
                            "div",
                            { className: "SignatureHolder" },
                            m(
                                "div",
                                { id: "trumbowyg-icons" },
                                m(
                                    "svg",
                                    { xmlns: "http://www.w3.org/2000/svg" },
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-blockquote", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M21.3 31.9h-.6c.8-1.2 1.9-2.2 3.4-3.2 2.1-1.4 5-2.7 9.2-3.3l-1.4-8.9c-4.7.7-8.5 2.1-11.7 4-2.4 1.4-4.3 3.1-5.8 4.9-2.3 2.7-3.7 5.7-4.5 8.5-.8 2.8-1 5.4-1 7.5 0 2.3.3 4 .4 4.8 0 .1.1.3.1.4 1.2 5.4 6.1 9.5 11.9 9.5 6.7 0 12.2-5.4 12.2-12.2s-5.5-12-12.2-12zM49.5 31.9h-.6c.8-1.2 1.9-2.2 3.4-3.2 2.1-1.4 5-2.7 9.2-3.3l-1.4-8.9c-4.7.7-8.5 2.1-11.7 4-2.4 1.4-4.3 3.1-5.8 4.9-2.3 2.7-3.7 5.7-4.5 8.5-.8 2.8-1 5.4-1 7.5 0 2.3.3 4 .4 4.8 0 .1.1.3.1.4 1.2 5.4 6.1 9.5 11.9 9.5 6.7 0 12.2-5.4 12.2-12.2s-5.5-12-12.2-12z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-bold", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M51.1 37.8c-1.1-1.4-2.5-2.5-4.2-3.3 1.2-.8 2.1-1.8 2.8-3 1-1.6 1.5-3.5 1.5-5.3 0-2-.6-4-1.7-5.8-1.1-1.8-2.8-3.2-4.8-4.1-2-.9-4.6-1.3-7.8-1.3h-16v42h16.3c2.6 0 4.8-.2 6.7-.7 1.9-.5 3.4-1.2 4.7-2.1 1.3-1 2.4-2.4 3.2-4.1.9-1.7 1.3-3.6 1.3-5.7.2-2.5-.5-4.7-2-6.6zM40.8 50.2c-.6.1-1.8.2-3.4.2h-9V38.5h8.3c2.5 0 4.4.2 5.6.6 1.2.4 2 1 2.7 2 .6.9 1 2 1 3.3 0 1.1-.2 2.1-.7 2.9-.5.9-1 1.5-1.7 1.9-.8.4-1.7.8-2.8 1zm2.6-20.4c-.5.7-1.3 1.3-2.5 1.6-.8.3-2.5.4-4.8.4h-7.7V21.6h7.1c1.4 0 2.6 0 3.6.1s1.7.2 2.2.4c1 .3 1.7.8 2.2 1.7.5.9.8 1.8.8 3-.1 1.3-.4 2.2-.9 3z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-close", viewBox: "0 0 72 72" },
                                        m("path", { d: "M57 20.5l-5.4-5.4-15.5 15.5-15.6-15.5-5.4 5.4L30.7 36 15.1 51.5l5.4 5.4 15.6-15.5 15.5 15.5 5.4-5.4L41.5 36z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-create-link", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M31.1 48.9l-6.7 6.7c-.8.8-1.6.9-2.1.9s-1.4-.1-2.1-.9L15 50.4c-1.1-1.1-1.1-3.1 0-4.2l6.1-6.1.2-.2 6.5-6.5c-1.2-.6-2.5-.9-3.8-.9-2.3 0-4.6.9-6.3 2.6L11 41.8c-3.5 3.5-3.5 9.2 0 12.7l5.2 5.2c1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6l6.7-6.7c2.5-2.6 3.1-6.7 1.5-10l-5.9 5.9zM38.7 22.5l6.7-6.7c.8-.8 1.6-.9 2.1-.9s1.4.1 2.1.9l5.2 5.2c1.1 1.1 1.1 3.1 0 4.2l-6.1 6.1-.2.2L42 38c1.2.6 2.5.9 3.8.9 2.3 0 4.6-.9 6.3-2.6l6.7-6.7c3.5-3.5 3.5-9.2 0-12.7l-5.2-5.2c-1.7-1.7-4-2.6-6.3-2.6s-4.6.9-6.3 2.6l-6.7 6.7c-2.7 2.7-3.3 6.9-1.7 10.2l6.1-6.1c0 .1 0 .1 0 0z" }),
                                        m("path", {
                                            d: "M44.2 30.5c.2-.2.4-.6.4-.9 0-.3-.1-.6-.4-.9l-2.3-2.3c-.3-.2-.6-.4-.9-.4-.3 0-.6.1-.9.4L25.9 40.6c-.2.2-.4.6-.4.9 0 .3.1.6.4.9l2.3 2.3c.2.2.6.4.9.4.3 0 .6-.1.9-.4l14.2-14.2zM49.9 55.4h-8.5v-5h8.5v-8.9h5.2v8.9h8.5v5h-8.5v8.9h-5.2v-8.9z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-del", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M45.8 45c0 1-.3 1.9-.9 2.8-.6.9-1.6 1.6-3 2.1s-3.1.8-5 .8c-2.1 0-4-.4-5.7-1.1-1.7-.7-2.9-1.7-3.6-2.7-.8-1.1-1.3-2.6-1.5-4.5l-.1-.8-6.7.6v.9c.1 2.8.9 5.4 2.3 7.6 1.5 2.3 3.5 4 6.1 5.1 2.6 1.1 5.7 1.6 9.4 1.6 2.9 0 5.6-.5 8-1.6 2.4-1.1 4.3-2.7 5.6-4.7 1.3-2 2-4.2 2-6.5 0-1.6-.3-3.1-.9-4.5l-.2-.6H44c0 .1 1.8 2.3 1.8 5.5zM29 28.9c-.8-.8-1.2-1.7-1.2-2.9 0-.7.1-1.3.4-1.9.3-.6.7-1.1 1.4-1.6.6-.5 1.4-.9 2.5-1.1 1.1-.3 2.4-.4 3.9-.4 2.9 0 5 .6 6.3 1.7 1.3 1.1 2.1 2.7 2.4 5.1l.1.9 6.8-.5v-.9c-.1-2.5-.8-4.7-2.1-6.7s-3.2-3.5-5.6-4.5c-2.4-1-5.1-1.5-8.1-1.5-2.8 0-5.3.5-7.6 1.4-2.3 1-4.2 2.4-5.4 4.3-1.2 1.9-1.9 3.9-1.9 6.1 0 1.7.4 3.4 1.2 4.9l.3.5h11.8c-2.3-.9-3.9-1.7-5.2-2.9zm13.3-6.2zM22.7 20.3zM13 34.1h46.1v3.4H13z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-em", viewBox: "0 0 72 72" },
                                        m("path", { d: "M26 57l10.1-42h7.2L33.2 57H26z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-fullscreen", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M25.2 7.1H7.1v17.7l6.7-6.5 10.5 10.5 4.5-4.5-10.4-10.5zM47.2 7.1l6.5 6.7-10.5 10.5 4.5 4.5 10.5-10.4 6.7 6.8V7.1zM47.7 43.2l-4.5 4.5 10.4 10.5-6.8 6.7h18.1V47.2l-6.7 6.5zM24.3 43.2L13.8 53.6l-6.7-6.8v18.1h17.7l-6.5-6.7 10.5-10.5z" }),
                                        m("path", { fill: "currentColor",
                                            d: "M10.7 28.8h18.1V11.2l-6.6 6.4L11.6 7.1l-4.5 4.5 10.5 10.5zM60.8 28.8l-6.4-6.6 10.5-10.6-4.5-4.5-10.5 10.5-6.7-6.9v18.1zM60.4 64.9l4.5-4.5-10.5-10.5 6.9-6.7H43.2v17.6l6.6-6.4zM11.6 64.9l10.5-10.5 6.7 6.9V43.2H11.1l6.5 6.6L7.1 60.4z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-h1", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M6.4 14.9h7.4v16.7h19.1V14.9h7.4V57h-7.4V38H13.8v19H6.4V14.9zM47.8 22.5c1.4 0 2.8-.1 4.1-.4 1.3-.2 2.5-.6 3.6-1.2 1.1-.5 2-1.3 2.8-2.1.8-.9 1.3-1.9 1.5-3.2h5.5v41.2h-7.4v-29H47.8v-5.3z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-h2", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M1.5 14.9h7.4v16.7H28V14.9h7.4V57H28V38H8.8v19H1.5V14.9zM70.2 56.9H42c0-3.4.9-6.4 2.5-9s3.8-4.8 6.6-6.7c1.3-1 2.7-1.9 4.2-2.9 1.5-.9 2.8-1.9 4-3 1.2-1.1 2.2-2.2 3-3.4.8-1.2 1.2-2.7 1.2-4.3 0-.7-.1-1.5-.3-2.4s-.5-1.6-1-2.4c-.5-.7-1.2-1.3-2.1-1.8-.9-.5-2.1-.7-3.5-.7-1.3 0-2.4.3-3.3.8s-1.6 1.3-2.1 2.2-.9 2-1.2 3.3c-.3 1.3-.4 2.6-.4 4.1h-6.7c0-2.3.3-4.4.9-6.3.6-1.9 1.5-3.6 2.7-5 1.2-1.4 2.7-2.5 4.4-3.3 1.7-.8 3.8-1.2 6.1-1.2 2.5 0 4.6.4 6.3 1.2 1.7.8 3.1 1.9 4.1 3.1 1 1.3 1.8 2.6 2.2 4.1.4 1.5.6 2.9.6 4.2 0 1.6-.3 3.1-.8 4.5-.5 1.3-1.2 2.6-2.1 3.7-.9 1.1-1.8 2.2-2.9 3.1-1.1.9-2.2 1.8-3.4 2.7-1.2.8-2.4 1.6-3.5 2.4-1.2.7-2.3 1.5-3.3 2.2-1 .7-1.9 1.5-2.6 2.3-.7.8-1.3 1.7-1.5 2.6h20.1v5.9z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-h3", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M1.4 14.5h7.4v16.7h19.1V14.5h7.4v42.1h-7.4v-19H8.8v19H1.4V14.5zM53.1 32.4c1.1 0 2.2 0 3.3-.2 1.1-.2 2.1-.5 2.9-1 .9-.5 1.6-1.2 2.1-2 .5-.9.8-1.9.8-3.2 0-1.8-.6-3.2-1.8-4.2-1.2-1.1-2.7-1.6-4.6-1.6-1.2 0-2.2.2-3.1.7-.9.5-1.6 1.1-2.2 1.9-.6.8-1 1.7-1.3 2.7-.3 1-.4 2-.4 3.1h-6.7c.1-2 .5-3.9 1.1-5.6.7-1.7 1.6-3.2 2.7-4.4s2.6-2.2 4.2-2.9c1.6-.7 3.5-1.1 5.6-1.1 1.6 0 3.2.2 4.7.7 1.6.5 2.9 1.2 4.2 2.1 1.2.9 2.2 2.1 3 3.4.7 1.4 1.1 3 1.1 4.8 0 2.1-.5 3.9-1.4 5.4-.9 1.6-2.4 2.7-4.4 3.4v.1c2.4.5 4.2 1.6 5.5 3.5 1.3 1.9 2 4.1 2 6.8 0 2-.4 3.7-1.2 5.3-.8 1.6-1.8 2.9-3.2 3.9-1.3 1.1-2.9 1.9-4.7 2.5-1.8.6-3.6.9-5.6.9-2.4 0-4.5-.3-6.3-1s-3.3-1.7-4.5-2.9c-1.2-1.3-2.1-2.8-2.7-4.5-.6-1.8-1-3.7-1-5.9h6.7c-.1 2.5.5 4.6 1.9 6.3 1.3 1.7 3.3 2.5 5.9 2.5 2.2 0 4.1-.6 5.6-1.9 1.5-1.3 2.3-3.1 2.3-5.4 0-1.6-.3-2.9-.9-3.8-.6-.9-1.5-1.7-2.5-2.2-1-.5-2.2-.8-3.4-.9-1.3-.1-2.6-.2-3.9-.1v-5.2z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-h4", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M1.5 14.9h7.4v16.7H28V14.9h7.4V57H28V38H8.9v19H1.5V14.9zM70.5 47.2h-5.3V57h-6.4v-9.8H41.2v-6.7l17.7-24.8h6.4v26.2h5.3v5.3zm-24.2-5.3h12.5V23.7h-.1L46.3 41.9z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-horizontal-rule", viewBox: "0 0 72 72" },
                                        m("path", { d: "M9.1 32h54v8h-54z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-insert-image", viewBox: "0 0 72 72" },
                                        m("path", { d: "M64 17v38H8V17h56m8-8H0v54h72V9z" }),
                                        m("path", { d: "M17.5 22C15 22 13 24 13 26.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zM16 50h27L29.5 32zM36 36.2l8.9-8.5L60.2 50H45.9S35.6 35.9 36 36.2z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-italic", viewBox: "0 0 72 72" },
                                        m("path", { d: "M26 57l10.1-42h7.2L33.2 57H26z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-justify-center", viewBox: "0 0 72 72" },
                                        m("path", { d: "M9 14h54v8H9zM9 50h54v8H9zM18 32h36v8H18z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-justify-full", viewBox: "0 0 72 72" },
                                        m("path", { d: "M9 14h54v8H9zM9 50h54v8H9zM9 32h54v8H9z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-justify-left", viewBox: "0 0 72 72" },
                                        m("path", { d: "M9 14h54v8H9zM9 50h54v8H9zM9 32h36v8H9z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-justify-right", viewBox: "0 0 72 72" },
                                        m("path", { d: "M9 14h54v8H9zM9 50h54v8H9zM27 32h36v8H27z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-link", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M30.9 49.1l-6.7 6.7c-.8.8-1.6.9-2.1.9s-1.4-.1-2.1-.9l-5.2-5.2c-1.1-1.1-1.1-3.1 0-4.2l6.1-6.1.2-.2 6.5-6.5c-1.2-.6-2.5-.9-3.8-.9-2.3 0-4.6.9-6.3 2.6L10.8 42c-3.5 3.5-3.5 9.2 0 12.7l5.2 5.2c1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6l6.7-6.7C38 50.5 38.6 46.3 37 43l-6.1 6.1zM38.5 22.7l6.7-6.7c.8-.8 1.6-.9 2.1-.9s1.4.1 2.1.9l5.2 5.2c1.1 1.1 1.1 3.1 0 4.2l-6.1 6.1-.2.2-6.5 6.5c1.2.6 2.5.9 3.8.9 2.3 0 4.6-.9 6.3-2.6l6.7-6.7c3.5-3.5 3.5-9.2 0-12.7l-5.2-5.2c-1.7-1.7-4-2.6-6.3-2.6s-4.6.9-6.3 2.6l-6.7 6.7c-2.7 2.7-3.3 6.9-1.7 10.2l6.1-6.1z" }),
                                        m("path", {
                                            d: "M44.1 30.7c.2-.2.4-.6.4-.9 0-.3-.1-.6-.4-.9l-2.3-2.3c-.2-.2-.6-.4-.9-.4-.3 0-.6.1-.9.4L25.8 40.8c-.2.2-.4.6-.4.9 0 .3.1.6.4.9l2.3 2.3c.2.2.6.4.9.4.3 0 .6-.1.9-.4l14.2-14.2z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-ordered-list", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M27 14h36v8H27zM27 50h36v8H27zM27 32h36v8H27zM11.8 15.8V22h1.8v-7.8h-1.5l-2.1 1 .3 1.3zM12.1 38.5l.7-.6c1.1-1 2.1-2.1 2.1-3.4 0-1.4-1-2.4-2.7-2.4-1.1 0-2 .4-2.6.8l.5 1.3c.4-.3 1-.6 1.7-.6.9 0 1.3.5 1.3 1.1 0 .9-.9 1.8-2.6 3.3l-1 .9V40H15v-1.5h-2.9zM13.3 53.9c1-.4 1.4-1 1.4-1.8 0-1.1-.9-1.9-2.6-1.9-1 0-1.9.3-2.4.6l.4 1.3c.3-.2 1-.5 1.6-.5.8 0 1.2.3 1.2.8 0 .7-.8.9-1.4.9h-.7v1.3h.7c.8 0 1.6.3 1.6 1.1 0 .6-.5 1-1.4 1-.7 0-1.5-.3-1.8-.5l-.4 1.4c.5.3 1.3.6 2.3.6 2 0 3.2-1 3.2-2.4 0-1.1-.8-1.8-1.7-1.9z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-p", viewBox: "0 0 72 72" },
                                        m("path", { d: "M47.8 15.1H30.1c-4.7 0-8.5 3.7-8.5 8.4s3.7 8.4 8.4 8.4v25h7V19.8h3v37.1h4.1V19.8h3.7v-4.7z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-redo", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M10.8 51.2c0-5.1 2.1-9.7 5.4-13.1 3.3-3.3 8-5.4 13.1-5.4H46v-12L61.3 36 45.9 51.3V39.1H29.3c-3.3 0-6.4 1.3-8.5 3.5-2.2 2.2-3.5 5.2-3.5 8.5h-6.5z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-removeformat", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M58.2 54.6L52 48.5l3.6-3.6 6.1 6.1 6.4-6.4 3.8 3.8-6.4 6.4 6.1 6.1-3.6 3.6-6.1-6.1-6.4 6.4-3.7-3.8 6.4-6.4zM21.7 52.1H50V57H21.7zM18.8 15.2h34.1v6.4H39.5v24.2h-7.4V21.5H18.8v-6.3z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-strikethrough", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M45.8 45c0 1-.3 1.9-.9 2.8-.6.9-1.6 1.6-3 2.1s-3.1.8-5 .8c-2.1 0-4-.4-5.7-1.1-1.7-.7-2.9-1.7-3.6-2.7-.8-1.1-1.3-2.6-1.5-4.5l-.1-.8-6.7.6v.9c.1 2.8.9 5.4 2.3 7.6 1.5 2.3 3.5 4 6.1 5.1 2.6 1.1 5.7 1.6 9.4 1.6 2.9 0 5.6-.5 8-1.6 2.4-1.1 4.3-2.7 5.6-4.7 1.3-2 2-4.2 2-6.5 0-1.6-.3-3.1-.9-4.5l-.2-.6H44c0 .1 1.8 2.3 1.8 5.5zM29 28.9c-.8-.8-1.2-1.7-1.2-2.9 0-.7.1-1.3.4-1.9.3-.6.7-1.1 1.4-1.6.6-.5 1.4-.9 2.5-1.1 1.1-.3 2.4-.4 3.9-.4 2.9 0 5 .6 6.3 1.7 1.3 1.1 2.1 2.7 2.4 5.1l.1.9 6.8-.5v-.9c-.1-2.5-.8-4.7-2.1-6.7s-3.2-3.5-5.6-4.5c-2.4-1-5.1-1.5-8.1-1.5-2.8 0-5.3.5-7.6 1.4-2.3 1-4.2 2.4-5.4 4.3-1.2 1.9-1.9 3.9-1.9 6.1 0 1.7.4 3.4 1.2 4.9l.3.5h11.8c-2.3-.9-3.9-1.7-5.2-2.9zm13.3-6.2zM22.7 20.3zM13 34.1h46.1v3.4H13z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-strong", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M51.1 37.8c-1.1-1.4-2.5-2.5-4.2-3.3 1.2-.8 2.1-1.8 2.8-3 1-1.6 1.5-3.5 1.5-5.3 0-2-.6-4-1.7-5.8-1.1-1.8-2.8-3.2-4.8-4.1-2-.9-4.6-1.3-7.8-1.3h-16v42h16.3c2.6 0 4.8-.2 6.7-.7 1.9-.5 3.4-1.2 4.7-2.1 1.3-1 2.4-2.4 3.2-4.1.9-1.7 1.3-3.6 1.3-5.7.2-2.5-.5-4.7-2-6.6zM40.8 50.2c-.6.1-1.8.2-3.4.2h-9V38.5h8.3c2.5 0 4.4.2 5.6.6 1.2.4 2 1 2.7 2 .6.9 1 2 1 3.3 0 1.1-.2 2.1-.7 2.9-.5.9-1 1.5-1.7 1.9-.8.4-1.7.8-2.8 1zm2.6-20.4c-.5.7-1.3 1.3-2.5 1.6-.8.3-2.5.4-4.8.4h-7.7V21.6h7.1c1.4 0 2.6 0 3.6.1s1.7.2 2.2.4c1 .3 1.7.8 2.2 1.7.5.9.8 1.8.8 3-.1 1.3-.4 2.2-.9 3z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-subscript", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M32 15h7.8L56 57.1h-7.9L44.3 46H27.4l-4 11.1h-7.6L32 15zm-2.5 25.4h12.9L36 22.3h-.2l-6.3 18.1zM58.7 59.9c.6-1.4 2-2.8 4.1-4.4 1.9-1.3 3.1-2.3 3.7-2.9.8-.9 1.3-1.9 1.3-3 0-.9-.2-1.6-.7-2.2-.5-.6-1.2-.9-2.1-.9-1.2 0-2.1.5-2.5 1.4-.3.5-.4 1.4-.5 2.5h-4c.1-1.8.4-3.2 1-4.3 1.1-2.1 3-3.1 5.8-3.1 2.2 0 3.9.6 5.2 1.8 1.3 1.2 1.9 2.8 1.9 4.8 0 1.5-.5 2.9-1.4 4.1-.6.8-1.6 1.7-3 2.6L66 57.7c-1 .7-1.7 1.2-2.1 1.6-.4.3-.7.7-1 1.1H72V64H57.8c0-1.5.3-2.8.9-4.1z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-superscript", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M32 15h7.8L56 57.1h-7.9l-4-11.1H27.4l-4 11.1h-7.6L32 15zm-2.5 25.4h12.9L36 22.3h-.2l-6.3 18.1zM49.6 28.8c.5-1.1 1.6-2.3 3.4-3.6 1.5-1.1 2.5-1.9 3-2.4.7-.7 1-1.6 1-2.4 0-.7-.2-1.3-.6-1.8-.4-.5-1-.7-1.7-.7-1 0-1.7.4-2.1 1.1-.2.4-.3 1.1-.4 2.1H49c.1-1.5.3-2.6.8-3.5.9-1.7 2.5-2.6 4.8-2.6 1.8 0 3.2.5 4.3 1.5 1.1 1 1.6 2.3 1.6 4 0 1.3-.4 2.4-1.1 3.4-.5.7-1.3 1.4-2.4 2.2l-1.3 1c-.8.6-1.4 1-1.7 1.3-.3.3-.6.6-.8.9h7.4v3H48.8c0-1.3.3-2.4.8-3.5z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-table", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M25.686 51.38v-6.347q0-.462-.297-.76-.298-.297-.761-.297H14.04q-.463 0-.761.297-.298.298-.298.76v6.346q0 .463.298.76.298.298.76.298h10.589q.463 0 .76-.298.298-.297.298-.76zm0-12.692v-6.346q0-.463-.297-.76-.298-.298-.761-.298H14.04q-.463 0-.761.298-.298.297-.298.76v6.346q0 .462.298.76.298.297.76.297h10.589q.463 0 .76-.297.298-.298.298-.76zm16.94 12.691v-6.346q0-.462-.297-.76-.298-.297-.761-.297H30.98q-.463 0-.76.297-.299.298-.299.76v6.346q0 .463.298.76.298.298.761.298h10.588q.463 0 .76-.298.299-.297.299-.76zm-16.94-25.383v-6.345q0-.463-.297-.76-.298-.298-.761-.298H14.04q-.463 0-.761.297-.298.298-.298.76v6.346q0 .463.298.76.298.298.76.298h10.589q.463 0 .76-.298.298-.297.298-.76zm16.94 12.692v-6.346q0-.463-.297-.76-.298-.298-.761-.298H30.98q-.463 0-.76.298-.299.297-.299.76v6.346q0 .462.298.76.298.297.761.297h10.588q.463 0 .76-.297.299-.298.299-.76zm16.94 12.691v-6.346q0-.462-.297-.76-.298-.297-.76-.297H47.92q-.463 0-.76.297-.298.298-.298.76v6.346q0 .463.297.76.298.298.761.298h10.588q.463 0 .761-.298.298-.297.298-.76zm-16.94-25.383v-6.345q0-.463-.297-.76-.298-.298-.761-.298H30.98q-.463 0-.76.297-.299.298-.299.76v6.346q0 .463.298.76.298.298.761.298h10.588q.463 0 .76-.298.299-.297.299-.76zm16.94 12.692v-6.346q0-.463-.297-.76-.298-.298-.76-.298H47.92q-.463 0-.76.298-.298.297-.298.76v6.346q0 .462.297.76.298.297.761.297h10.588q.463 0 .761-.297.298-.298.298-.76zm0-12.692v-6.345q0-.463-.297-.76-.298-.298-.76-.298H47.92q-.463 0-.76.297-.298.298-.298.76v6.346q0 .463.297.76.298.298.761.298h10.588q.463 0 .761-.298.298-.297.298-.76zm4.236-10.576v35.96q0 2.18-1.555 3.734-1.555 1.553-3.739 1.553H14.04q-2.184 0-3.739-1.553-1.555-1.553-1.555-3.735V15.42q0-2.181 1.555-3.735 1.555-1.553 3.739-1.553h44.468q2.184 0 3.739 1.553 1.555 1.554 1.555 3.735z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-underline", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M36 35zM15.2 55.9h41.6V59H15.2zM21.1 13.9h6.4v21.2c0 1.2.1 2.5.2 3.7.1 1.3.5 2.4 1 3.4.6 1 1.4 1.8 2.6 2.5 1.1.6 2.7 1 4.8 1 2.1 0 3.7-.3 4.8-1 1.1-.6 2-1.5 2.6-2.5.6-1 .9-2.1 1-3.4.1-1.3.2-2.5.2-3.7V13.9H51v23.3c0 2.3-.4 4.4-1.1 6.1-.7 1.7-1.7 3.2-3 4.4-1.3 1.2-2.9 2-4.7 2.6-1.8.6-3.9.9-6.1.9-2.2 0-4.3-.3-6.1-.9-1.8-.6-3.4-1.5-4.7-2.6-1.3-1.2-2.3-2.6-3-4.4-.7-1.7-1.1-3.8-1.1-6.1V13.9z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-undo", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M61.2 51.2c0-5.1-2.1-9.7-5.4-13.1-3.3-3.3-8-5.4-13.1-5.4H26.1v-12L10.8 36l15.3 15.3V39.1h16.7c3.3 0 6.4 1.3 8.5 3.5 2.2 2.2 3.5 5.2 3.5 8.5h6.4z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-unlink", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M30.9 49.1l-6.7 6.7c-.8.8-1.6.9-2.1.9s-1.4-.1-2.1-.9l-5.2-5.2c-1.1-1.1-1.1-3.1 0-4.2l6.1-6.1.2-.2 6.5-6.5c-1.2-.6-2.5-.9-3.8-.9-2.3 0-4.6.9-6.3 2.6L10.8 42c-3.5 3.5-3.5 9.2 0 12.7l5.2 5.2c1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6l6.7-6.7C38 50.5 38.6 46.3 37 43l-6.1 6.1zM38.5 22.7l6.7-6.7c.8-.8 1.6-.9 2.1-.9s1.4.1 2.1.9l5.2 5.2c1.1 1.1 1.1 3.1 0 4.2l-6.1 6.1-.2.2-6.5 6.5c1.2.6 2.5.9 3.8.9 2.3 0 4.6-.9 6.3-2.6l6.7-6.7c3.5-3.5 3.5-9.2 0-12.7l-5.2-5.2c-1.7-1.7-4-2.6-6.3-2.6s-4.6.9-6.3 2.6l-6.7 6.7c-2.7 2.7-3.3 6.9-1.7 10.2l6.1-6.1z" }),
                                        m("path", {
                                            d: "M44.1 30.7c.2-.2.4-.6.4-.9 0-.3-.1-.6-.4-.9l-2.3-2.3c-.2-.2-.6-.4-.9-.4-.3 0-.6.1-.9.4L25.8 40.8c-.2.2-.4.6-.4.9 0 .3.1.6.4.9l2.3 2.3c.2.2.6.4.9.4.3 0 .6-.1.9-.4l14.2-14.2zM41.3 55.8v-5h22.2v5H41.3z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-unordered-list", viewBox: "0 0 72 72" },
                                        m("path", { d: "M27 14h36v8H27zM27 50h36v8H27zM9 50h9v8H9zM9 32h9v8H9zM9 14h9v8H9zM27 32h36v8H27z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-view-html", viewBox: "0 0 72 72" },
                                        m("path", { fill: "none", stroke: "currentColor", "stroke-width": "8", "stroke-miterlimit": "10", d: "M26.9 17.9L9 36.2 26.9 54M45 54l17.9-18.3L45 17.9" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-base64", viewBox: "0 0 72 72" },
                                        m("path", { d: "M64 17v38H8V17h56m8-8H0v54h72V9z" }),
                                        m("path", {
                                            d: "M29.9 28.9c-.5-.5-1.1-.8-1.8-.8s-1.4.2-1.9.7c-.5.4-.9 1-1.2 1.6-.3.6-.5 1.3-.6 2.1-.1.7-.2 1.4-.2 1.9l.1.1c.6-.8 1.2-1.4 2-1.8.8-.4 1.7-.5 2.7-.5.9 0 1.8.2 2.6.6.8.4 1.6.9 2.2 1.5.6.6 1 1.3 1.2 2.2.3.8.4 1.6.4 2.5 0 1.1-.2 2.1-.5 3-.3.9-.8 1.7-1.5 2.4-.6.7-1.4 1.2-2.3 1.6-.9.4-1.9.6-3 .6-1.6 0-2.8-.3-3.9-.9-1-.6-1.8-1.4-2.5-2.4-.6-1-1-2.1-1.3-3.4-.2-1.3-.4-2.6-.4-3.9 0-1.3.1-2.6.4-3.8.3-1.3.8-2.4 1.4-3.5.7-1 1.5-1.9 2.5-2.5 1-.6 2.3-1 3.8-1 .9 0 1.7.1 2.5.4.8.3 1.4.6 2 1.1.6.5 1.1 1.1 1.4 1.8.4.7.6 1.5.7 2.5h-4c0-1-.3-1.6-.8-2.1zm-3.5 6.8c-.4.2-.8.5-1 .8-.3.4-.5.8-.6 1.2-.1.5-.2 1-.2 1.5s.1.9.2 1.4c.1.5.4.9.6 1.2.3.4.6.7 1 .9.4.2.9.3 1.4.3.5 0 1-.1 1.3-.3.4-.2.7-.5 1-.9.3-.4.5-.8.6-1.2.1-.5.2-.9.2-1.4 0-.5-.1-1-.2-1.4-.1-.5-.3-.9-.6-1.2-.3-.4-.6-.7-1-.9-.4-.2-.9-.3-1.4-.3-.4 0-.9.1-1.3.3zM36.3 41.3v-3.8l9-12.1H49v12.4h2.7v3.5H49v4.8h-4v-4.8h-8.7zM45 30.7l-5.3 7.2h5.4l-.1-7.2z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-back-color", viewBox: "0 0 72 72" },
                                        m("path", { d: "M36.5 22.3l-6.3 18.1H43l-6.3-18.1z" }),
                                        m("path", { d: "M9 8.9v54.2h54.1V8.9H9zm39.9 48.2L45 46H28.2l-3.9 11.1h-7.6L32.8 15h7.8l16.2 42.1h-7.9z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-fore-color", viewBox: "0 0 72 72" },
                                        m("path", { d: "M32 15h7.8L56 57.1h-7.9l-4-11.1H27.4l-4 11.1h-7.6L32 15zm-2.5 25.4h12.9L36 22.3h-.2l-6.3 18.1z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-insert-audio", viewBox: "0 0 8 8" },
                                        m("path", {
                                            d: "M3.344 0L2 2H0v4h2l1.344 2H4V0h-.656zM5 1v1c.152 0 .313.026.469.063H5.5c.86.215 1.5.995 1.5 1.938a1.99 1.99 0 0 1-2 2.001v1a2.988 2.988 0 0 0 3-3 2.988 2.988 0 0 0-3-3zm0 2v2l.25-.031C5.683 4.851 6 4.462 6 4c0-.446-.325-.819-.75-.938v-.031h-.031L5 3z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-emoji", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M36.05 9C21.09 9 8.949 21.141 8.949 36.101c0 14.96 12.141 27.101 27.101 27.101 14.96 0 27.101-12.141 27.101-27.101S51.01 9 36.05 9zm9.757 15.095c2.651 0 4.418 1.767 4.418 4.418s-1.767 4.418-4.418 4.418-4.418-1.767-4.418-4.418 1.767-4.418 4.418-4.418zm-19.479 0c2.651 0 4.418 1.767 4.418 4.418s-1.767 4.418-4.418 4.418-4.418-1.767-4.418-4.418 1.767-4.418 4.418-4.418zm9.722 30.436c-14.093 0-16.261-13.009-16.261-13.009h32.522S50.143 54.531 36.05 54.531z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-noembed", viewBox: "0 0 72 72" },
                                        m("path", { d: "M31.5 33.6V25l11 11-11 11v-8.8z" }),
                                        m("path", { d: "M64 17v38H8V17h56m8-8H0v54h72V9z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-preformatted", viewBox: "0 0 72 72" },
                                        m("path", {
                                            d: "M10.3 33.5c.4 0 .9-.1 1.5-.2s1.2-.3 1.8-.7c.6-.3 1.1-.8 1.5-1.3.4-.5.6-1.3.6-2.1V17.1c0-1.4.3-2.6.8-3.6s1.2-1.9 2-2.5c.8-.7 1.6-1.2 2.5-1.5.9-.3 1.6-.5 2.2-.5h5.3v5.3h-3.2c-.7 0-1.3.1-1.8.4-.4.3-.8.6-1 1-.2.4-.4.9-.4 1.3-.1.5-.1.9-.1 1.4v11.4c0 1.2-.2 2.1-.7 2.9-.5.8-1 1.4-1.7 1.8-.6.4-1.3.8-2 1-.7.2-1.3.3-1.7.4v.1c.5 0 1 .1 1.7.3.7.2 1.3.5 2 .9.6.5 1.2 1.1 1.7 1.9.5.8.7 2 .7 3.4v11.1c0 .4 0 .9.1 1.4.1.5.2.9.4 1.3s.6.7 1 1c.4.3 1 .4 1.8.4h3.2V63h-5.3c-.6 0-1.4-.2-2.2-.5-.9-.3-1.7-.8-2.5-1.5s-1.4-1.5-2-2.5c-.5-1-.8-2.2-.8-3.6V43.5c0-.9-.2-1.7-.6-2.3-.4-.6-.9-1.1-1.5-1.5-.6-.4-1.2-.6-1.8-.7-.6-.1-1.1-.2-1.5-.2v-5.3zM61.8 38.7c-.4 0-1 .1-1.6.2-.6.1-1.2.4-1.8.7-.6.3-1.1.7-1.5 1.3-.4.5-.6 1.3-.6 2.1v12.1c0 1.4-.3 2.6-.8 3.6s-1.2 1.9-2 2.5c-.8.7-1.6 1.2-2.5 1.5-.9.3-1.6.5-2.2.5h-5.3v-5.3h3.2c.7 0 1.3-.1 1.8-.4.4-.3.8-.6 1-1 .2-.4.4-.9.4-1.3.1-.5.1-.9.1-1.4V42.3c0-1.2.2-2.1.7-2.9.5-.8 1-1.4 1.7-1.8.6-.4 1.3-.8 2-1 .7-.2 1.3-.3 1.7-.4v-.1c-.5 0-1-.1-1.7-.3-.7-.2-1.3-.5-2-.9-.6-.4-1.2-1.1-1.7-1.9-.5-.8-.7-2-.7-3.4V18.5c0-.4 0-.9-.1-1.4-.1-.5-.2-.9-.4-1.3s-.6-.7-1-1c-.4-.3-1-.4-1.8-.4h-3.2V9.1h5.3c.6 0 1.4.2 2.2.5.9.3 1.7.8 2.5 1.5s1.4 1.5 2 2.5c.5 1 .8 2.2.8 3.6v11.6c0 .9.2 1.7.6 2.3.4.6.9 1.1 1.5 1.5.6.4 1.2.6 1.8.7.6.1 1.2.2 1.6.2v5.2z" })
                                    ),
                                    m(
                                        "symbol",
                                        { id: "trumbowyg-upload", viewBox: "0 0 72 72" },
                                        m("path", { d: "M64 27v28H8V27H0v36h72V27h-8z" }),
                                        m("path", { d: "M32.1 6.7h8v33.6h-8z" }),
                                        m("path", { d: "M48 35.9L36 49.6 24 36h24z" })
                                    )
                                )
                            ),
                            m(
                                "div",
                                { config: this.configTextarea(this), className: this.props.className },
                                m.trust(this.props.content)
                            )
                        );
                    }
                }, {
                    key: "configTextarea",
                    value: function configTextarea(element) {
                        m.redraw();

                        var Texteditor = $('.' + this.props.className);
                        Texteditor.trumbowyg({
                            btns: [['formatting'], 'btnGrp-semantic', ['superscript', 'subscript'], ['link'], ['insertImage'], 'btnGrp-justify', ['fullscreen']],
                            autogrow: true,
                            removeformatPasted: true,
                            svgPath: '.trumbowyg-icons'
                        });
                    }
                }]);
                return SignatureTextarea;
            })(Component);

            _export("default", SignatureTextarea);
        }
    };
});;
System.register('xengine/signature/Components/Modal/SignatureLoadingModal', ['flarum/components/Modal', 'flarum/components/FieldSet', 'flarum/utils/ItemList'], function (_export) {
    'use strict';

    var Modal, FieldSet, ItemList, SignatureLoadingModal;
    return {
        setters: [function (_flarumComponentsModal) {
            Modal = _flarumComponentsModal['default'];
        }, function (_flarumComponentsFieldSet) {
            FieldSet = _flarumComponentsFieldSet['default'];
        }, function (_flarumUtilsItemList) {
            ItemList = _flarumUtilsItemList['default'];
        }],
        execute: function () {
            SignatureLoadingModal = (function (_Modal) {
                babelHelpers.inherits(SignatureLoadingModal, _Modal);

                function SignatureLoadingModal() {
                    babelHelpers.classCallCheck(this, SignatureLoadingModal);
                    babelHelpers.get(Object.getPrototypeOf(SignatureLoadingModal.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(SignatureLoadingModal, [{
                    key: 'init',
                    value: function init() {
                        this.value = this.props.value;
                        this.title = m.prop(this.props.title || '');
                        this.close = this.props.close || false;
                        this.errors = this.props.errors || false;
                    }
                }, {
                    key: 'isDismissible',
                    value: function isDismissible() {
                        return this.close;
                    }
                }, {
                    key: 'className',
                    value: function className() {
                        return 'LoadingModal Modal--small';
                    }
                }, {
                    key: 'content',
                    value: function content() {
                        var ErrorWindow = '';
                        if (this.errors) {
                            ErrorWindow = m("ul", this.errors.map(function (error) {
                                return m("li", error);
                            }));
                        }
                        return m(
                            'div',
                            { className: 'Modal-body' },
                            m(
                                'p',
                                null,
                                this.value
                            ),
                            ErrorWindow
                        );
                    }
                }]);
                return SignatureLoadingModal;
            })(Modal);

            _export('default', SignatureLoadingModal);
        }
    };
});;
System.register('xengine/signature/Components/Model/UserSignature', ['flarum/Model', 'flarum/models/User'], function (_export) {
    'use strict';

    var Model, User, UserSignature;
    return {
        setters: [function (_flarumModel) {
            Model = _flarumModel['default'];
        }, function (_flarumModelsUser) {
            User = _flarumModelsUser['default'];
        }],
        execute: function () {
            UserSignature = (function () {
                function UserSignature(userSession) {
                    babelHelpers.classCallCheck(this, UserSignature);

                    User.prototype.signature = Model.attribute('signature');
                    this._userdata = userSession;
                }

                babelHelpers.createClass(UserSignature, [{
                    key: 'getSignature',
                    value: function getSignature() {
                        return this._userdata.attribute('signature');
                    }
                }, {
                    key: 'setSignature',
                    value: function setSignature(signature) {
                        return this._userdata.save({ signature: signature });
                    }
                }]);
                return UserSignature;
            })();

            _export('default', UserSignature);
        }
    };
});;
System.register('xengine/signature/Components/View/SignatureSettings', ['xengine/signature/Components/Model/UserSignature', 'flarum/components/UserPage', 'flarum/helpers/listItems', 'flarum/utils/ItemList', 'flarum/components/Button', 'xengine/signature/Components/Fields/SignatureTextarea', 'xengine/signature/Components/Modal/SignatureLoadingModal'], function (_export) {
    'use strict';

    var UserSignature, UserPage, listItems, ItemList, Button, SignatureTextarea, SignatureLoadingModal, SignatureSettings;
    return {
        setters: [function (_xengineSignatureComponentsModelUserSignature) {
            UserSignature = _xengineSignatureComponentsModelUserSignature['default'];
        }, function (_flarumComponentsUserPage) {
            UserPage = _flarumComponentsUserPage['default'];
        }, function (_flarumHelpersListItems) {
            listItems = _flarumHelpersListItems['default'];
        }, function (_flarumUtilsItemList) {
            ItemList = _flarumUtilsItemList['default'];
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton['default'];
        }, function (_xengineSignatureComponentsFieldsSignatureTextarea) {
            SignatureTextarea = _xengineSignatureComponentsFieldsSignatureTextarea['default'];
        }, function (_xengineSignatureComponentsModalSignatureLoadingModal) {
            SignatureLoadingModal = _xengineSignatureComponentsModalSignatureLoadingModal['default'];
        }],
        execute: function () {
            SignatureSettings = (function (_UserPage) {
                babelHelpers.inherits(SignatureSettings, _UserPage);

                function SignatureSettings() {
                    babelHelpers.classCallCheck(this, SignatureSettings);
                    babelHelpers.get(Object.getPrototypeOf(SignatureSettings.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(SignatureSettings, [{
                    key: 'init',
                    value: function init() {
                        babelHelpers.get(Object.getPrototypeOf(SignatureSettings.prototype), 'init', this).call(this);

                        this.show(app.session.user);
                        app.drawer.hide();
                        app.modal.close();
                        app.setTitle(app.translator.trans('core.forum.settings.title'));

                        this.model = new UserSignature(app.session.user);
                    }
                }, {
                    key: 'content',
                    value: function content() {
                        return m(
                            'div',
                            { className: 'SettingsPage' },
                            m(
                                'ul',
                                null,
                                listItems(this.signatureItems().toArray())
                            )
                        );
                    }

                    /**
                     * Build an item list for the user's settings controls.
                     *
                     * @return {ItemList}
                     */
                }, {
                    key: 'signatureItems',
                    value: function signatureItems() {
                        var _this = this;

                        var items = new ItemList();

                        items.add('signature', SignatureTextarea.component({
                            className: 'Signature',
                            rows: 10,
                            cols: 100,
                            content: this.model.getSignature()
                        }));
                        items.add('saveSignature', Button.component({
                            children: app.translator.trans('xengine-signature.forum.buttons.save'),
                            className: 'Button',
                            onclick: function onclick() {
                                return _this.saveSignature();
                            }
                        }));

                        return items;
                    }
                }, {
                    key: 'saveSignature',
                    value: function saveSignature() {
                        app.modal.show(new SignatureLoadingModal({
                            title: app.translator.trans('xengine-signature.forum.modal.loading.title'),
                            value: app.translator.trans('xengine-signature.forum.modal.loading.content')
                        }));
                        this.signature = $('.Signature').trumbowyg('html');

                        var data = { Signature: this.signature };

                        app.request({
                            url: app.forum.attribute('apiUrl') + '/settings/signature/validate',
                            method: 'POST',
                            data: data
                        }).then(this.response.bind(this));
                    }
                }, {
                    key: 'response',
                    value: function response(_response) {
                        if (!_response.status) {
                            app.modal.show(new SignatureLoadingModal({
                                title: app.translator.trans('xengine-signature.forum.modal.error.title'),
                                value: app.translator.trans('xengine-signature.forum.modal.error.content'),
                                errors: _response.errors,
                                close: true
                            }));
                        } else {
                            this.model.setSignature(this.signature).then(function () {
                                window.location.reload();
                            });
                        }
                    }
                }]);
                return SignatureSettings;
            })(UserPage);

            _export('default', SignatureSettings);
        }
    };
});;
System.register('xengine/signature/main', ['flarum/extend', 'flarum/app', 'xengine/signature/Components/View/SignatureSettings', 'flarum/components/LinkButton', 'flarum/components/UserPage', 'flarum/components/CommentPost'], function (_export) {
    'use strict';

    var extend, app, SignatureSettings, LinkButton, UserPage, CommentPost;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_xengineSignatureComponentsViewSignatureSettings) {
            SignatureSettings = _xengineSignatureComponentsViewSignatureSettings['default'];
        }, function (_flarumComponentsLinkButton) {
            LinkButton = _flarumComponentsLinkButton['default'];
        }, function (_flarumComponentsUserPage) {
            UserPage = _flarumComponentsUserPage['default'];
        }, function (_flarumComponentsCommentPost) {
            CommentPost = _flarumComponentsCommentPost['default'];
        }],
        execute: function () {

            app.initializers.add('xengine-signature', function () {
                app.routes['settings.signature'] = { path: '/settings/signature', component: SignatureSettings.component() };
                extend(UserPage.prototype, 'navItems', function (dom) {
                    dom.add('Signature', LinkButton.component({
                        href: app.route('settings.signature'),
                        children: app.translator.trans('xengine-signature.forum.buttons.signature'),
                        icon: 'photo'
                    }), -100);
                });

                extend(CommentPost.prototype, 'view', function (vdom) {
                    var Signature = this.props.post.user().data.attributes.signature || false;

                    if (Signature) {
                        vdom.children.push(m('div.SignatureWrapper', m.trust(Signature)));
                    }
                });
            });
        }
    };
});