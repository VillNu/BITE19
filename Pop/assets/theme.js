/* Run function after window resize */
afterResize = (function() {
  var t = {};
  return function(callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (t[uniqueId]) {
      clearTimeout(t[uniqueId]);
    }
    t[uniqueId] = setTimeout(callback, ms);
  };
})();

window.theme = window.theme || {};
window.timber = window.timber || {};

/* ================ VENDOR ================ */
/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});
/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(a){a.flexslider=function(b,c){var d=a(b);d.vars=a.extend({},a.flexslider.defaults,c);var j,e=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,h="click touchend MSPointerUp",i="",k="vertical"===d.vars.direction,l=d.vars.reverse,m=d.vars.itemWidth>0,n="fade"===d.vars.animation,o=""!==d.vars.asNavFor,p={},q=!0;a.data(b,"flexslider",d),p={init:function(){d.animating=!1,d.currentSlide=parseInt(d.vars.startAt?d.vars.startAt:0,10),isNaN(d.currentSlide)&&(d.currentSlide=0),d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" ")),d.slides=a(d.vars.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(d.vars.sync).length>0,"slide"===d.vars.animation&&(d.vars.animation="swing"),d.prop=k?"top":"marginLeft",d.args={},d.manualPause=!1,d.stopped=!1,d.started=!1,d.startTimeout=null,d.transitions=!d.vars.video&&!n&&d.vars.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;return!1}(),d.ensureAnimationEnd="",""!==d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)),""!==d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),d.setup("init"),d.vars.controlNav&&p.controlNav.setup(),d.vars.directionNav&&p.directionNav.setup(),d.vars.keyboard&&(1===a(d.containerSelector).length||d.vars.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,d.vars.pauseOnAction)}}),d.vars.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var f=0>b?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(f,d.vars.pauseOnAction)}),d.vars.pausePlay&&p.pausePlay.setup(),d.vars.slideshow&&d.vars.pauseInvisible&&p.pauseInvisible.init(),d.vars.slideshow&&(d.vars.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause()},function(){d.manualPause||d.manualPlay||d.stopped||d.play()}),d.vars.pauseInvisible&&p.pauseInvisible.isHidden()||(d.vars.initDelay>0?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play())),o&&p.asNav.setup(),g&&d.vars.touch&&p.touch(),(!n||n&&d.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",p.resize),d.find("img").attr("draggable","false"),setTimeout(function(){d.vars.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(e+"active-slide").eq(d.currentItem).addClass(e+"active-slide"),f?(b._slider=d,d.slides.each(function(){var b=this;b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1),b.addEventListener("MSGestureTap",function(b){b.preventDefault();var c=a(this),e=c.index();a(d.vars.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0))})})):d.slides.on(h,function(b){b.preventDefault();var c=a(this),f=c.index(),g=c.offset().left-a(d).scrollLeft();0>=g&&c.hasClass(e+"active-slide")?d.flexAnimate(d.getTarget("prev"),!0):a(d.vars.asNavFor).data("flexslider").animating||c.hasClass(e+"active-slide")||(d.direction=d.currentItem<f?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var f,g,b="thumbnails"===d.vars.controlNav?"control-thumbs":"control-paging",c=1;if(d.controlNavScaffold=a('<ol class="'+e+"control-nav "+e+b+'"></ol>'),d.pagingCount>1)for(var j=0;j<d.pagingCount;j++){if(g=d.slides.eq(j),f="thumbnails"===d.vars.controlNav?'<img src="'+g.attr("data-thumb")+'"/>':"<a>"+c+"</a>","thumbnails"===d.vars.controlNav&&!0===d.vars.thumbCaptions){var k=g.attr("data-thumbcaption");""!=k&&void 0!=k&&(f+='<span class="'+e+'caption">'+k+"</span>")}d.controlNavScaffold.append("<li>"+f+"</li>"),c++}d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},setupManual:function(){d.controlNav=d.manualControls,p.controlNav.active(),d.controlNav.bind(h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},set:function(){var b="thumbnails"===d.vars.controlNav?"img":"a";d.controlNav=a("."+e+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(e+"active").eq(d.animatingTo).addClass(e+"active")},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),p.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):p.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+d.vars.prevText+'</a></li><li><a class="'+e+'next" href="#">'+d.vars.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+e+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+e+"direction-nav li a",d)),p.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault();var c;(""===i||i===b.type)&&(c=a(this).hasClass(e+"next")?d.getTarget("next"):d.getTarget("prev"),d.flexAnimate(c,d.vars.pauseOnAction)),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(){var a=e+"disabled";1===d.pagingCount?d.directionNav.addClass(a).attr("tabindex","-1"):d.vars.animationLoop?d.directionNav.removeClass(a).removeAttr("tabindex"):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+e+"prev").addClass(a).attr("tabindex","-1"):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+e+"next").addClass(a).attr("tabindex","-1"):d.directionNav.removeClass(a).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=a('<div class="'+e+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+e+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+e+"pauseplay a",d)),p.pausePlay.update(d.vars.slideshow?e+"pause":e+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),(""===i||i===b.type)&&(a(this).hasClass(e+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(a){"play"===a?d.pausePlay.removeClass(e+"pause").addClass(e+"play").html(d.vars.playText):d.pausePlay.removeClass(e+"play").addClass(e+"pause").html(d.vars.pauseText)}},touch:function(){function r(f){d.animating?f.preventDefault():(window.navigator.msPointerEnabled||1===f.touches.length)&&(d.pause(),g=k?d.h:d.w,i=Number(new Date),o=f.touches[0].pageX,p=f.touches[0].pageY,e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g,a=k?p:o,c=k?o:p,b.addEventListener("touchmove",s,!1),b.addEventListener("touchend",t,!1))}function s(b){o=b.touches[0].pageX,p=b.touches[0].pageY,h=k?a-p:a-o,j=k?Math.abs(h)<Math.abs(o-c):Math.abs(h)<Math.abs(p-c);var f=500;(!j||Number(new Date)-i>f)&&(b.preventDefault(),!n&&d.transitions&&(d.vars.animationLoop||(h/=0===d.currentSlide&&0>h||d.currentSlide===d.last&&h>0?Math.abs(h)/g+2:1),d.setProps(e+h,"setTouch")))}function t(){if(b.removeEventListener("touchmove",s,!1),d.animatingTo===d.currentSlide&&!j&&null!==h){var k=l?-h:h,m=k>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(m)&&(Number(new Date)-i<550&&Math.abs(k)>50||Math.abs(k)>g/2)?d.flexAnimate(m,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}b.removeEventListener("touchend",t,!1),a=null,c=null,h=null,e=null}function u(a){a.stopPropagation(),d.animating?a.preventDefault():(d.pause(),b._gesture.addPointer(a.pointerId),q=0,g=k?d.h:d.w,i=Number(new Date),e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g)}function v(a){a.stopPropagation();var c=a.target._slider;if(c){var d=-a.translationX,f=-a.translationY;return q+=k?f:d,h=q,j=k?Math.abs(q)<Math.abs(-d):Math.abs(q)<Math.abs(-f),a.detail===a.MSGESTURE_FLAG_INERTIA?(setImmediate(function(){b._gesture.stop()}),void 0):((!j||Number(new Date)-i>500)&&(a.preventDefault(),!n&&c.transitions&&(c.vars.animationLoop||(h=q/(0===c.currentSlide&&0>q||c.currentSlide===c.last&&q>0?Math.abs(q)/g+2:1)),c.setProps(e+h,"setTouch"))),void 0)}}function w(b){b.stopPropagation();var d=b.target._slider;if(d){if(d.animatingTo===d.currentSlide&&!j&&null!==h){var f=l?-h:h,k=f>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(k)&&(Number(new Date)-i<550&&Math.abs(f)>50||Math.abs(f)>g/2)?d.flexAnimate(k,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}a=null,c=null,h=null,e=null,q=0}}var a,c,e,g,h,i,j=!1,o=0,p=0,q=0;f?(b.style.msTouchAction="none",b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",u,!1),b._slider=d,b.addEventListener("MSGestureChange",v,!1),b.addEventListener("MSGestureEnd",w,!1)):b.addEventListener("touchstart",r,!1)},resize:function(){!d.animating&&d.is(":visible")&&(m||d.doMath(),n?p.smoothHeight():m?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):k?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(d.vars.smoothHeight&&p.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!k||n){var b=n?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(d.vars.sync).data("flexslider"),e=d.animatingTo;switch(b){case"animate":c.flexAnimate(e,d.vars.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause()}},uniqueID:function(b){return b.find("[id]").each(function(){var b=a(this);b.attr("id",b.attr("id")+"_clone")}),b},pauseInvisible:{visProp:null,init:function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)a[b]+"Hidden"in document&&(p.pauseInvisible.visProp=a[b]+"Hidden");if(p.pauseInvisible.visProp){var c=p.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(c,function(){p.pauseInvisible.isHidden()?d.startTimeout?clearTimeout(d.startTimeout):d.pause():d.started?d.play():d.vars.initDelay>0?setTimeout(d.play,d.vars.initDelay):d.play()})}},isHidden:function(){return document[p.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(j),j=setTimeout(function(){i=""},3e3)}},d.flexAnimate=function(b,c,f,h,i){if(d.vars.animationLoop||b===d.currentSlide||(d.direction=b>d.currentSlide?"next":"prev"),o&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,i)||f)&&d.is(":visible")){if(o&&h){var j=a(d.vars.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,j.flexAnimate(b,!0,!1,!0,i),d.direction=d.currentItem<b?"next":"prev",j.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,c&&d.pause(),d.vars.before(d),d.syncExists&&!i&&p.sync("animate"),d.vars.controlNav&&p.controlNav.active(),m||d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),d.atEnd=0===b||b===d.last,d.vars.directionNav&&p.directionNav.update(),b===d.last&&(d.vars.end(d),d.vars.animationLoop||d.pause()),n)g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.wrapup(q)):(d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing),d.slides.eq(b).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup));else{var r,s,t,q=k?d.slides.filter(":first").height():d.computedW;m?(r=d.vars.itemMargin,t=(d.itemW+r)*d.move*d.animatingTo,s=t>d.limit&&1!==d.visible?d.limit:t):s=0===d.currentSlide&&b===d.count-1&&d.vars.animationLoop&&"next"!==d.direction?l?(d.count+d.cloneOffset)*q:0:d.currentSlide===d.last&&0===b&&d.vars.animationLoop&&"prev"!==d.direction?l?0:(d.count+1)*q:l?(d.count-1-b+d.cloneOffset)*q:(b+d.cloneOffset)*q,d.setProps(s,"",d.vars.animationSpeed),d.transitions?(d.vars.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd),d.wrapup(q)}),clearTimeout(d.ensureAnimationEnd),d.ensureAnimationEnd=setTimeout(function(){d.wrapup(q)},d.vars.animationSpeed+100)):d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(q)})}d.vars.smoothHeight&&p.smoothHeight(d.vars.animationSpeed)}},d.wrapup=function(a){n||m||(0===d.currentSlide&&d.animatingTo===d.last&&d.vars.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&d.vars.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d)},d.animateSlides=function(){!d.animating&&q&&d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.animatedSlides=null,d.playing=!1,d.vars.pausePlay&&p.pausePlay.update("play"),d.syncExists&&p.sync("pause")},d.play=function(){d.playing&&clearInterval(d.animatedSlides),d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed),d.started=d.playing=!0,d.vars.pausePlay&&p.pausePlay.update("pause"),d.syncExists&&p.sync("play")},d.stop=function(){d.pause(),d.stopped=!0},d.canAdvance=function(a,b){var c=o?d.pagingCount-1:d.last;return b?!0:o&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:o&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||o?d.vars.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var e=function(){var c=a?a:(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo,e=function(){if(m)return"setTouch"===b?a:l&&d.animatingTo===d.last?0:l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;switch(b){case"setTotal":return l?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return l?a:a;case"jumpEnd":return l?a:d.count*a;case"jumpStart":return l?d.count*a:a;default:return a}}();return-1*e+"px"}();d.transitions&&(e=k?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c),d.container.css("transition-duration",c)),d.args[d.prop]=e,(d.transitions||void 0===c)&&d.container.css(d.args),d.container.css("transform",e)},d.setup=function(b){if(n)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)),d.vars.smoothHeight&&p.smoothHeight();else{var c,f;"init"===b&&(d.viewport=a('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,l&&(f=a.makeArray(d.slides).reverse(),d.slides=a(f),d.container.empty().append(d.slides))),d.vars.animationLoop&&!m&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(d.container),p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(d.container)),d.newSlides=a(d.vars.selector,d),c=l?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,k&&!m?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),d.vars.smoothHeight&&p.smoothHeight()},"init"===b?100:0))}m||d.slides.removeClass(e+"active-slide").eq(d.currentSlide).addClass(e+"active-slide"),d.vars.init(d)},d.doMath=function(){var a=d.slides.first(),b=d.vars.itemMargin,c=d.vars.minItems,e=d.vars.maxItems;d.w=void 0===d.viewport?d.width():d.viewport.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),m?(d.itemT=d.vars.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=e?e*d.itemT-b:d.w,d.itemW=d.minW>d.w?(d.w-b*(c-1))/c:d.maxW<d.w?(d.w-b*(e-1))/e:d.vars.itemWidth>d.w?d.w:d.vars.itemWidth,d.visible=Math.floor(d.w/d.itemW),d.move=d.vars.move>0&&d.vars.move<d.visible?d.vars.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:d.vars.itemWidth>d.w?d.itemW*(d.count-1)+b*(d.count-1):(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding},d.update=function(a,b){d.doMath(),m||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),d.vars.controlNav&&!d.manualControls&&("add"===b&&!m||d.pagingCount>d.controlNav.length?p.controlNav.update("add"):("remove"===b&&!m||d.pagingCount<d.controlNav.length)&&(m&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),p.controlNav.update("remove",d.last))),d.vars.directionNav&&p.directionNav.update()},d.addSlide=function(b,c){var e=a(b);d.count+=1,d.last=d.count-1,k&&l?void 0!==c?d.slides.eq(d.count-c).after(e):d.container.prepend(e):void 0!==c?d.slides.eq(c).before(e):d.container.append(e),d.update(c,"add"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():k&&l?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.removed(d)},p.init()},a(window).blur(function(){focused=!1}).focus(function(){focused=!0}),a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length&&b.allowOneSlide===!0||0===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0===c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery);
/**
 * @license
 * Lodash 4.17.5 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="debounce,assignIn,isUndefined,filter,isFunction,find,isArray,includes,each,remove"`
 */
;(function(){function t(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}function n(t,n){for(var r=-1,e=null==t?0:t.length;++r<e&&n(t[r],r,t)!==false;);return t}function r(t,n){for(var r=-1,e=null==t?0:t.length,u=0,o=[];++r<e;){var i=t[r];n(i,r,t)&&(o[u++]=i)}return o}function e(t,n){for(var r=-1,e=null==t?0:t.length,u=Array(e);++r<e;)u[r]=n(t[r],r,t);return u}function u(t,n){for(var r=-1,e=n.length,u=t.length;++r<e;)t[u+r]=n[r];
return t}function o(t,n){for(var r=-1,e=null==t?0:t.length;++r<e;)if(n(t[r],r,t))return true;return false}function i(t,n,r,e){for(var u=t.length,o=r+(e?1:-1);e?o--:++o<u;)if(n(t[o],o,t))return o;return-1}function c(t,n,r){return n===n?g(t,n,r):i(t,a,r)}function a(t){return t!==t}function f(t){return function(n){return null==n?Kn:n[t]}}function s(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}function l(t){return function(n){return t(n)}}function h(t,n){return e(n,function(n){return t[n]})}function p(t,n){
return t.has(n)}function v(t,n){return null==t?Kn:t[n]}function y(t){var n=-1,r=Array(t.size);return t.forEach(function(t,e){r[++n]=[e,t]}),r}function b(t,n){return function(r){return t(n(r))}}function _(t){var n=-1,r=Array(t.size);return t.forEach(function(t){r[++n]=t}),r}function g(t,n,r){for(var e=r-1,u=t.length;++e<u;)if(t[e]===n)return e;return-1}function d(){}function j(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function w(){this.__data__=qe?qe(null):{},
this.size=0}function m(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}function O(t){var n=this.__data__;if(qe){var r=n[t];return r===Zn?Kn:r}return je.call(n,t)?n[t]:Kn}function A(t){var n=this.__data__;return qe?n[t]!==Kn:je.call(n,t)}function z(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=qe&&n===Kn?Zn:n,this}function x(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function S(){this.__data__=[],this.size=0}function k(t){
var n=this.__data__,r=K(n,t);return!(r<0)&&(r==n.length-1?n.pop():Ie.call(n,r,1),--this.size,true)}function $(t){var n=this.__data__,r=K(n,t);return r<0?Kn:n[r][1]}function E(t){return K(this.__data__,t)>-1}function I(t,n){var r=this.__data__,e=K(r,t);return e<0?(++this.size,r.push([t,n])):r[e][1]=n,this}function T(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function F(){this.size=0,this.__data__={hash:new j,map:new(De||x),string:new j}}function L(t){var n=Gt(this,t).delete(t);
return this.size-=n?1:0,n}function P(t){return Gt(this,t).get(t)}function M(t){return Gt(this,t).has(t)}function U(t,n){var r=Gt(this,t),e=r.size;return r.set(t,n),this.size+=r.size==e?0:1,this}function B(t){var n=-1,r=null==t?0:t.length;for(this.__data__=new T;++n<r;)this.add(t[n])}function N(t){return this.__data__.set(t,Zn),this}function C(t){return this.__data__.has(t)}function D(t){this.size=(this.__data__=new x(t)).size}function R(){this.__data__=new x,this.size=0}function W(t){var n=this.__data__,r=n.delete(t);
return this.size=n.size,r}function V(t){return this.__data__.get(t)}function q(t){return this.__data__.has(t)}function G(t,n){var r=this.__data__;if(r instanceof x){var e=r.__data__;if(!De||e.length<Xn-1)return e.push([t,n]),this.size=++r.size,this;r=this.__data__=new T(e)}return r.set(t,n),this.size=r.size,this}function H(t,n){var r=hu(t),e=!r&&lu(t),u=!r&&!e&&pu(t),o=!r&&!e&&!u&&bu(t),i=r||e||u||o,c=i?s(t.length,String):[],a=c.length;for(var f in t)!n&&!je.call(t,f)||i&&("length"==f||u&&("offset"==f||"parent"==f)||o&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||tn(f,a))||c.push(f);
return c}function J(t,n,r){var e=t[n];je.call(t,n)&&zn(e,r)&&(r!==Kn||n in t)||Y(t,n,r)}function K(t,n){for(var r=t.length;r--;)if(zn(t[r][0],n))return r;return-1}function Q(t,n){return t&&Ft(n,Cn(n),t)}function X(t,n){return t&&Ft(n,Dn(n),t)}function Y(t,n,r){"__proto__"==n&&Fe?Fe(t,n,{configurable:true,enumerable:true,value:r,writable:true}):t[n]=r}function Z(t,r,e,u,o,i){var c,a=r&nr,f=r&rr,s=r&er;if(e&&(c=o?e(t,u,o,i):e(t)),c!==Kn)return c;if(!$n(t))return t;var l=hu(t);if(l){if(c=Xt(t),!a)return Tt(t,c);
}else{var h=iu(t),p=h==gr||h==dr;if(pu(t))return xt(t,a);if(h==Or||h==hr||p&&!o){if(c=f||p?{}:Yt(t),!a)return f?Pt(t,X(c,t)):Lt(t,Q(c,t))}else{if(!re[h])return o?t:{};c=Zt(t,h,a)}}i||(i=new D);var v=i.get(t);if(v)return v;if(i.set(t,c),yu(t))return t.forEach(function(n){c.add(Z(n,r,e,n,t,i))}),c;if(vu(t))return t.forEach(function(n,u){c.set(u,Z(n,r,e,u,t,i))}),c;var y=s?f?Vt:Wt:f?Dn:Cn,b=l?Kn:y(t);return n(b||t,function(n,u){b&&(u=n,n=t[u]),J(c,u,Z(n,r,e,u,t,i))}),c}function tt(t,n){var r=[];return nu(t,function(t,e,u){
n(t,e,u)&&r.push(t)}),r}function nt(t,n){return t&&ru(t,n,Cn)}function rt(t,n){n=zt(n,t);for(var r=0,e=n.length;null!=t&&r<e;)t=t[yn(n[r++])];return r&&r==e?t:Kn}function et(t,n,r){var e=n(t);return hu(t)?e:u(e,r(t))}function ut(t){return null==t?t===Kn?Er:mr:Te&&Te in Object(t)?Kt(t):ln(t)}function ot(t,n){return null!=t&&n in Object(t)}function it(t){return En(t)&&ut(t)==hr}function ct(t,n,r,e,u){return t===n||(null==t||null==n||!En(t)&&!En(n)?t!==t&&n!==n:at(t,n,r,e,ct,u))}function at(t,n,r,e,u,o){
var i=hu(t),c=hu(n),a=i?pr:iu(t),f=c?pr:iu(n);a=a==hr?Or:a,f=f==hr?Or:f;var s=a==Or,l=f==Or,h=a==f;if(h&&pu(t)){if(!pu(n))return false;i=true,s=false}if(h&&!s)return o||(o=new D),i||bu(t)?Ct(t,n,r,e,u,o):Dt(t,n,a,r,e,u,o);if(!(r&ur)){var p=s&&je.call(t,"__wrapped__"),v=l&&je.call(n,"__wrapped__");if(p||v){var y=p?t.value():t,b=v?n.value():n;return o||(o=new D),u(y,b,r,e,o)}}return!!h&&(o||(o=new D),Rt(t,n,r,e,u,o))}function ft(t){return En(t)&&iu(t)==jr}function st(t,n,r,e){var u=r.length,o=u,i=!e;if(null==t)return!o;
for(t=Object(t);u--;){var c=r[u];if(i&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return false}for(;++u<o;){c=r[u];var a=c[0],f=t[a],s=c[1];if(i&&c[2]){if(f===Kn&&!(a in t))return false}else{var l=new D;if(e)var h=e(f,s,a,t,n,l);if(!(h===Kn?ct(s,f,ur|or,e,l):h))return false}}return true}function lt(t){return!(!$n(t)||un(t))&&(Sn(t)?Oe:Yr).test(bn(t))}function ht(t){return En(t)&&iu(t)==Sr}function pt(t){return En(t)&&kn(t.length)&&!!ne[ut(t)]}function vt(t){return typeof t=="function"?t:null==t?Vn:typeof t=="object"?hu(t)?gt(t[0],t[1]):_t(t):Gn(t);
}function yt(t){if(!on(t))return Me(t);var n=[];for(var r in Object(t))je.call(t,r)&&"constructor"!=r&&n.push(r);return n}function bt(t){if(!$n(t))return sn(t);var n=on(t),r=[];for(var e in t)("constructor"!=e||!n&&je.call(t,e))&&r.push(e);return r}function _t(t){var n=Ht(t);return 1==n.length&&n[0][2]?an(n[0][0],n[0][1]):function(r){return r===t||st(r,t,n)}}function gt(t,n){return rn(t)&&cn(n)?an(yn(t),n):function(r){var e=Bn(r,t);return e===Kn&&e===n?Nn(r,t):ct(n,e,ur|or)}}function dt(t){return function(n){
return rt(n,t)}}function jt(t,n){for(var r=t?n.length:0,e=r-1;r--;){var u=n[r];if(r==e||u!==o){var o=u;tn(u)?Ie.call(t,u,1):At(t,u)}}return t}function wt(t,n){return cu(hn(t,n,Vn),t+"")}function mt(t,n,r){var e=-1,u=t.length;n<0&&(n=-n>u?0:u+n),r=r>u?u:r,r<0&&(r+=u),u=n>r?0:r-n>>>0,n>>>=0;for(var o=Array(u);++e<u;)o[e]=t[e+n];return o}function Ot(t){if(typeof t=="string")return t;if(hu(t))return e(t,Ot)+"";if(Tn(t))return Ze?Ze.call(t):"";var n=t+"";return"0"==n&&1/t==-ar?"-0":n}function At(t,n){
return n=zt(n,t),t=pn(t,n),null==t||delete t[yn(gn(n))]}function zt(t,n){return hu(t)?t:rn(t,n)?[t]:au(Un(t))}function xt(t,n){if(n)return t.slice();var r=t.length,e=Se?Se(r):new t.constructor(r);return t.copy(e),e}function St(t){var n=new t.constructor(t.byteLength);return new xe(n).set(new xe(t)),n}function kt(t,n){return new t.constructor(n?St(t.buffer):t.buffer,t.byteOffset,t.byteLength)}function $t(t){var n=new t.constructor(t.source,Kr.exec(t));return n.lastIndex=t.lastIndex,n}function Et(t){
return Ye?Object(Ye.call(t)):{}}function It(t,n){return new t.constructor(n?St(t.buffer):t.buffer,t.byteOffset,t.length)}function Tt(t,n){var r=-1,e=t.length;for(n||(n=Array(e));++r<e;)n[r]=t[r];return n}function Ft(t,n,r,e){var u=!r;r||(r={});for(var o=-1,i=n.length;++o<i;){var c=n[o],a=e?e(r[c],t[c],c,r,t):Kn;a===Kn&&(a=t[c]),u?Y(r,c,a):J(r,c,a)}return r}function Lt(t,n){return Ft(t,uu(t),n)}function Pt(t,n){return Ft(t,ou(t),n)}function Mt(t){return wt(function(n,r){var e=-1,u=r.length,o=u>1?r[u-1]:Kn,i=u>2?r[2]:Kn;
for(o=t.length>3&&typeof o=="function"?(u--,o):Kn,i&&nn(r[0],r[1],i)&&(o=u<3?Kn:o,u=1),n=Object(n);++e<u;){var c=r[e];c&&t(n,c,e,o)}return n})}function Ut(t,n){return function(r,e){if(null==r)return r;if(!xn(r))return t(r,e);for(var u=r.length,o=n?u:-1,i=Object(r);(n?o--:++o<u)&&e(i[o],o,i)!==false;);return r}}function Bt(t){return function(n,r,e){for(var u=-1,o=Object(n),i=e(n),c=i.length;c--;){var a=i[t?c:++u];if(r(o[a],a,o)===false)break}return n}}function Nt(t){return function(n,r,e){var u=Object(n);
if(!xn(n)){var o=qt(r,3);n=Cn(n),r=function(t){return o(u[t],t,u)}}var i=t(n,r,e);return i>-1?u[o?n[i]:i]:Kn}}function Ct(t,n,r,e,u,i){var c=r&ur,a=t.length,f=n.length;if(a!=f&&!(c&&f>a))return false;var s=i.get(t);if(s&&i.get(n))return s==n;var l=-1,h=true,v=r&or?new B:Kn;for(i.set(t,n),i.set(n,t);++l<a;){var y=t[l],b=n[l];if(e)var _=c?e(b,y,l,n,t,i):e(y,b,l,t,n,i);if(_!==Kn){if(_)continue;h=false;break}if(v){if(!o(n,function(t,n){if(!p(v,n)&&(y===t||u(y,t,r,e,i)))return v.push(n)})){h=false;break}}else if(y!==b&&!u(y,b,r,e,i)){
h=false;break}}return i.delete(t),i.delete(n),h}function Dt(t,n,r,e,u,o,i){switch(r){case Fr:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return false;t=t.buffer,n=n.buffer;case Tr:return!(t.byteLength!=n.byteLength||!o(new xe(t),new xe(n)));case yr:case br:case wr:return zn(+t,+n);case _r:return t.name==n.name&&t.message==n.message;case xr:case kr:return t==n+"";case jr:var c=y;case Sr:var a=e&ur;if(c||(c=_),t.size!=n.size&&!a)return false;var f=i.get(t);if(f)return f==n;e|=or,i.set(t,n);var s=Ct(c(t),c(n),e,u,o,i);
return i.delete(t),s;case $r:if(Ye)return Ye.call(t)==Ye.call(n)}return false}function Rt(t,n,r,e,u,o){var i=r&ur,c=Wt(t),a=c.length;if(a!=Wt(n).length&&!i)return false;for(var f=a;f--;){var s=c[f];if(!(i?s in n:je.call(n,s)))return false}var l=o.get(t);if(l&&o.get(n))return l==n;var h=true;o.set(t,n),o.set(n,t);for(var p=i;++f<a;){s=c[f];var v=t[s],y=n[s];if(e)var b=i?e(y,v,s,n,t,o):e(v,y,s,t,n,o);if(!(b===Kn?v===y||u(v,y,r,e,o):b)){h=false;break}p||(p="constructor"==s)}if(h&&!p){var _=t.constructor,g=n.constructor;
_!=g&&"constructor"in t&&"constructor"in n&&!(typeof _=="function"&&_ instanceof _&&typeof g=="function"&&g instanceof g)&&(h=false)}return o.delete(t),o.delete(n),h}function Wt(t){return et(t,Cn,uu)}function Vt(t){return et(t,Dn,ou)}function qt(){var t=d.iteratee||qn;return t=t===qn?vt:t,arguments.length?t(arguments[0],arguments[1]):t}function Gt(t,n){var r=t.__data__;return en(n)?r[typeof n=="string"?"string":"hash"]:r.map}function Ht(t){for(var n=Cn(t),r=n.length;r--;){var e=n[r],u=t[e];n[r]=[e,u,cn(u)];
}return n}function Jt(t,n){var r=v(t,n);return lt(r)?r:Kn}function Kt(t){var n=je.call(t,Te),r=t[Te];try{t[Te]=Kn;var e=true}catch(t){}var u=me.call(t);return e&&(n?t[Te]=r:delete t[Te]),u}function Qt(t,n,r){n=zt(n,t);for(var e=-1,u=n.length,o=false;++e<u;){var i=yn(n[e]);if(!(o=null!=t&&r(t,i)))break;t=t[i]}return o||++e!=u?o:(u=null==t?0:t.length,!!u&&kn(u)&&tn(i,u)&&(hu(t)||lu(t)))}function Xt(t){var n=t.length,r=new t.constructor(n);return n&&"string"==typeof t[0]&&je.call(t,"index")&&(r.index=t.index,
r.input=t.input),r}function Yt(t){return typeof t.constructor!="function"||on(t)?{}:tu(ke(t))}function Zt(t,n,r){var e=t.constructor;switch(n){case Tr:return St(t);case yr:case br:return new e(+t);case Fr:return kt(t,r);case Lr:case Pr:case Mr:case Ur:case Br:case Nr:case Cr:case Dr:case Rr:return It(t,r);case jr:return new e;case wr:case kr:return new e(t);case xr:return $t(t);case Sr:return new e;case $r:return Et(t)}}function tn(t,n){var r=typeof t;return n=null==n?fr:n,!!n&&("number"==r||"symbol"!=r&&te.test(t))&&t>-1&&t%1==0&&t<n;
}function nn(t,n,r){if(!$n(r))return false;var e=typeof n;return!!("number"==e?xn(r)&&tn(n,r.length):"string"==e&&n in r)&&zn(r[n],t)}function rn(t,n){if(hu(t))return false;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!Tn(t))||(Vr.test(t)||!Wr.test(t)||null!=n&&t in Object(n))}function en(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}function un(t){return!!we&&we in t}function on(t){var n=t&&t.constructor;return t===(typeof n=="function"&&n.prototype||_e);
}function cn(t){return t===t&&!$n(t)}function an(t,n){return function(r){return null!=r&&(r[t]===n&&(n!==Kn||t in Object(r)))}}function fn(t){var n=An(t,function(t){return r.size===tr&&r.clear(),t}),r=n.cache;return n}function sn(t){var n=[];if(null!=t)for(var r in Object(t))n.push(r);return n}function ln(t){return me.call(t)}function hn(n,r,e){return r=Ue(r===Kn?n.length-1:r,0),function(){for(var u=arguments,o=-1,i=Ue(u.length-r,0),c=Array(i);++o<i;)c[o]=u[r+o];o=-1;for(var a=Array(r+1);++o<r;)a[o]=u[o];
return a[r]=e(c),t(n,this,a)}}function pn(t,n){return n.length<2?t:rt(t,mt(n,0,-1))}function vn(t){var n=0,r=0;return function(){var e=Ne(),u=cr-(e-r);if(r=e,u>0){if(++n>=ir)return arguments[0]}else n=0;return t.apply(Kn,arguments)}}function yn(t){if(typeof t=="string"||Tn(t))return t;var n=t+"";return"0"==n&&1/t==-ar?"-0":n}function bn(t){if(null!=t){try{return de.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function _n(t,n,r){var e=null==t?0:t.length;if(!e)return-1;var u=null==r?0:Pn(r);
return u<0&&(u=Ue(e+u,0)),i(t,qt(n,3),u)}function gn(t){var n=null==t?0:t.length;return n?t[n-1]:Kn}function dn(t,n){var r=[];if(!t||!t.length)return r;var e=-1,u=[],o=t.length;for(n=qt(n,3);++e<o;){var i=t[e];n(i,e,t)&&(r.push(i),u.push(e))}return jt(t,u),r}function jn(t,n){return(hu(t)?r:tt)(t,qt(n,3))}function wn(t,r){return(hu(t)?n:nu)(t,qt(r,3))}function mn(t,n,r,e){t=xn(t)?t:Rn(t),r=r&&!e?Pn(r):0;var u=t.length;return r<0&&(r=Ue(u+r,0)),In(t)?r<=u&&t.indexOf(n,r)>-1:!!u&&c(t,n,r)>-1}function On(t,n,r){
function e(n){var r=h,e=p;return h=p=Kn,g=n,y=t.apply(e,r)}function u(t){return g=t,b=setTimeout(c,n),d?e(t):y}function o(t){var r=t-_,e=t-g,u=n-r;return j?Be(u,v-e):u}function i(t){var r=t-_,e=t-g;return _===Kn||r>=n||r<0||j&&e>=v}function c(){var t=su();return i(t)?a(t):(b=setTimeout(c,o(t)),Kn)}function a(t){return b=Kn,w&&h?e(t):(h=p=Kn,y)}function f(){b!==Kn&&clearTimeout(b),g=0,h=_=p=b=Kn}function s(){return b===Kn?y:a(su())}function l(){var t=su(),r=i(t);if(h=arguments,p=this,_=t,r){if(b===Kn)return u(_);
if(j)return b=setTimeout(c,n),e(_)}return b===Kn&&(b=setTimeout(c,n)),y}var h,p,v,y,b,_,g=0,d=false,j=false,w=true;if(typeof t!="function")throw new TypeError(Yn);return n=Mn(n)||0,$n(r)&&(d=!!r.leading,j="maxWait"in r,v=j?Ue(Mn(r.maxWait)||0,n):v,w="trailing"in r?!!r.trailing:w),l.cancel=f,l.flush=s,l}function An(t,n){if(typeof t!="function"||null!=n&&typeof n!="function")throw new TypeError(Yn);var r=function(){var e=arguments,u=n?n.apply(this,e):e[0],o=r.cache;if(o.has(u))return o.get(u);var i=t.apply(this,e);
return r.cache=o.set(u,i)||o,i};return r.cache=new(An.Cache||T),r}function zn(t,n){return t===n||t!==t&&n!==n}function xn(t){return null!=t&&kn(t.length)&&!Sn(t)}function Sn(t){if(!$n(t))return false;var n=ut(t);return n==gr||n==dr||n==vr||n==zr}function kn(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=fr}function $n(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}function En(t){return null!=t&&typeof t=="object"}function In(t){return typeof t=="string"||!hu(t)&&En(t)&&ut(t)==kr}function Tn(t){
return typeof t=="symbol"||En(t)&&ut(t)==$r}function Fn(t){return t===Kn}function Ln(t){if(!t)return 0===t?t:0;if(t=Mn(t),t===ar||t===-ar){return(t<0?-1:1)*sr}return t===t?t:0}function Pn(t){var n=Ln(t),r=n%1;return n===n?r?n-r:n:0}function Mn(t){if(typeof t=="number")return t;if(Tn(t))return lr;if($n(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=$n(n)?n+"":n}if(typeof t!="string")return 0===t?t:+t;t=t.replace(Hr,"");var r=Xr.test(t);return r||Zr.test(t)?ee(t.slice(2),r?2:8):Qr.test(t)?lr:+t;
}function Un(t){return null==t?"":Ot(t)}function Bn(t,n,r){var e=null==t?Kn:rt(t,n);return e===Kn?r:e}function Nn(t,n){return null!=t&&Qt(t,n,ot)}function Cn(t){return xn(t)?H(t):yt(t)}function Dn(t){return xn(t)?H(t,true):bt(t)}function Rn(t){return null==t?[]:h(t,Cn(t))}function Wn(t){return function(){return t}}function Vn(t){return t}function qn(t){return vt(typeof t=="function"?t:Z(t,nr))}function Gn(t){return rn(t)?f(yn(t)):dt(t)}function Hn(){return[]}function Jn(){return false}var Kn,Qn="4.17.5",Xn=200,Yn="Expected a function",Zn="__lodash_hash_undefined__",tr=500,nr=1,rr=2,er=4,ur=1,or=2,ir=800,cr=16,ar=1/0,fr=9007199254740991,sr=1.7976931348623157e308,lr=NaN,hr="[object Arguments]",pr="[object Array]",vr="[object AsyncFunction]",yr="[object Boolean]",br="[object Date]",_r="[object Error]",gr="[object Function]",dr="[object GeneratorFunction]",jr="[object Map]",wr="[object Number]",mr="[object Null]",Or="[object Object]",Ar="[object Promise]",zr="[object Proxy]",xr="[object RegExp]",Sr="[object Set]",kr="[object String]",$r="[object Symbol]",Er="[object Undefined]",Ir="[object WeakMap]",Tr="[object ArrayBuffer]",Fr="[object DataView]",Lr="[object Float32Array]",Pr="[object Float64Array]",Mr="[object Int8Array]",Ur="[object Int16Array]",Br="[object Int32Array]",Nr="[object Uint8Array]",Cr="[object Uint8ClampedArray]",Dr="[object Uint16Array]",Rr="[object Uint32Array]",Wr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Vr=/^\w*$/,qr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gr=/[\\^$.*+?()[\]{}|]/g,Hr=/^\s+|\s+$/g,Jr=/\\(\\)?/g,Kr=/\w*$/,Qr=/^[-+]0x[0-9a-f]+$/i,Xr=/^0b[01]+$/i,Yr=/^\[object .+?Constructor\]$/,Zr=/^0o[0-7]+$/i,te=/^(?:0|[1-9]\d*)$/,ne={};
ne[Lr]=ne[Pr]=ne[Mr]=ne[Ur]=ne[Br]=ne[Nr]=ne[Cr]=ne[Dr]=ne[Rr]=true,ne[hr]=ne[pr]=ne[Tr]=ne[yr]=ne[Fr]=ne[br]=ne[_r]=ne[gr]=ne[jr]=ne[wr]=ne[Or]=ne[xr]=ne[Sr]=ne[kr]=ne[Ir]=false;var re={};re[hr]=re[pr]=re[Tr]=re[Fr]=re[yr]=re[br]=re[Lr]=re[Pr]=re[Mr]=re[Ur]=re[Br]=re[jr]=re[wr]=re[Or]=re[xr]=re[Sr]=re[kr]=re[$r]=re[Nr]=re[Cr]=re[Dr]=re[Rr]=true,re[_r]=re[gr]=re[Ir]=false;var ee=parseInt,ue=typeof global=="object"&&global&&global.Object===Object&&global,oe=typeof self=="object"&&self&&self.Object===Object&&self,ie=ue||oe||Function("return this")(),ce=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ae=ce&&typeof module=="object"&&module&&!module.nodeType&&module,fe=ae&&ae.exports===ce,se=fe&&ue.process,le=function(){
try{return se&&se.binding&&se.binding("util")}catch(t){}}(),he=le&&le.isMap,pe=le&&le.isSet,ve=le&&le.isTypedArray,ye=Array.prototype,be=Function.prototype,_e=Object.prototype,ge=ie["__core-js_shared__"],de=be.toString,je=_e.hasOwnProperty,we=function(){var t=/[^.]+$/.exec(ge&&ge.keys&&ge.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),me=_e.toString,Oe=RegExp("^"+de.call(je).replace(Gr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ae=fe?ie.Buffer:Kn,ze=ie.Symbol,xe=ie.Uint8Array,Se=Ae?Ae.allocUnsafe:Kn,ke=b(Object.getPrototypeOf,Object),$e=Object.create,Ee=_e.propertyIsEnumerable,Ie=ye.splice,Te=ze?ze.toStringTag:Kn,Fe=function(){
try{var t=Jt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),Le=Object.getOwnPropertySymbols,Pe=Ae?Ae.isBuffer:Kn,Me=b(Object.keys,Object),Ue=Math.max,Be=Math.min,Ne=Date.now,Ce=Jt(ie,"DataView"),De=Jt(ie,"Map"),Re=Jt(ie,"Promise"),We=Jt(ie,"Set"),Ve=Jt(ie,"WeakMap"),qe=Jt(Object,"create"),Ge=bn(Ce),He=bn(De),Je=bn(Re),Ke=bn(We),Qe=bn(Ve),Xe=ze?ze.prototype:Kn,Ye=Xe?Xe.valueOf:Kn,Ze=Xe?Xe.toString:Kn,tu=function(){function t(){}return function(n){if(!$n(n))return{};if($e)return $e(n);t.prototype=n;
var r=new t;return t.prototype=Kn,r}}();j.prototype.clear=w,j.prototype.delete=m,j.prototype.get=O,j.prototype.has=A,j.prototype.set=z,x.prototype.clear=S,x.prototype.delete=k,x.prototype.get=$,x.prototype.has=E,x.prototype.set=I,T.prototype.clear=F,T.prototype.delete=L,T.prototype.get=P,T.prototype.has=M,T.prototype.set=U,B.prototype.add=B.prototype.push=N,B.prototype.has=C,D.prototype.clear=R,D.prototype.delete=W,D.prototype.get=V,D.prototype.has=q,D.prototype.set=G;var nu=Ut(nt),ru=Bt(),eu=Fe?function(t,n){
return Fe(t,"toString",{configurable:true,enumerable:false,value:Wn(n),writable:true})}:Vn,uu=Le?function(t){return null==t?[]:(t=Object(t),r(Le(t),function(n){return Ee.call(t,n)}))}:Hn,ou=Le?function(t){for(var n=[];t;)u(n,uu(t)),t=ke(t);return n}:Hn,iu=ut;(Ce&&iu(new Ce(new ArrayBuffer(1)))!=Fr||De&&iu(new De)!=jr||Re&&iu(Re.resolve())!=Ar||We&&iu(new We)!=Sr||Ve&&iu(new Ve)!=Ir)&&(iu=function(t){var n=ut(t),r=n==Or?t.constructor:Kn,e=r?bn(r):"";if(e)switch(e){case Ge:return Fr;case He:return jr;case Je:
return Ar;case Ke:return Sr;case Qe:return Ir}return n});var cu=vn(eu),au=fn(function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(qr,function(t,r,e,u){n.push(e?u.replace(Jr,"$1"):r||t)}),n}),fu=Nt(_n),su=function(){return ie.Date.now()};An.Cache=T;var lu=it(function(){return arguments}())?it:function(t){return En(t)&&je.call(t,"callee")&&!Ee.call(t,"callee")},hu=Array.isArray,pu=Pe||Jn,vu=he?l(he):ft,yu=pe?l(pe):ht,bu=ve?l(ve):pt,_u=Mt(function(t,n){Ft(n,Dn(n),t)});d.assignIn=_u,
d.constant=Wn,d.debounce=On,d.filter=jn,d.iteratee=qn,d.keys=Cn,d.keysIn=Dn,d.memoize=An,d.property=Gn,d.remove=dn,d.values=Rn,d.extend=_u,d.eq=zn,d.find=fu,d.findIndex=_n,d.forEach=wn,d.get=Bn,d.hasIn=Nn,d.identity=Vn,d.includes=mn,d.isArguments=lu,d.isArray=hu,d.isArrayLike=xn,d.isBuffer=pu,d.isFunction=Sn,d.isLength=kn,d.isMap=vu,d.isObject=$n,d.isObjectLike=En,d.isSet=yu,d.isString=In,d.isSymbol=Tn,d.isTypedArray=bu,d.isUndefined=Fn,d.last=gn,d.stubArray=Hn,d.stubFalse=Jn,d.now=su,d.toFinite=Ln,
d.toInteger=Pn,d.toNumber=Mn,d.toString=Un,d.each=wn,d.VERSION=Qn,typeof define=="function"&&typeof define.amd=="object"&&define.amd?(ie._=d, define(function(){return d})):ae?((ae.exports=d)._=d,ce._=d):ie._=d}).call(this);


/* ================ SLATE ================ */
theme.a11y = {
  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects if focusing a link, just $link.focus();
   *
   * @param {JQuery} $element - The element to be acted upon
   */
  pageLinkFocus: function($element) {
    var focusClass = 'js-focus-hidden';

    $element
      .first()
      .attr('tabIndex', '-1')
      .focus()
      .addClass(focusClass)
      .one('blur', callback);

    function callback() {
      $element
        .first()
        .removeClass(focusClass)
        .removeAttr('tabindex');
    }
  },

  /**
   * If there's a hash in the url, focus the appropriate element
   */
  focusHash: function() {
    var hash = window.location.hash;

    // is there a hash in the url? is it an element on the page?
    if (hash && document.getElementById(hash.slice(1))) {
      this.pageLinkFocus($(hash));
    }
  },

  /**
   * When an in-page (url w/hash) link is clicked, focus the appropriate element
   */
  bindInPageLinks: function() {
    $('a[href*=#]').on(
      'click',
      function(evt) {
        this.pageLinkFocus($(evt.currentTarget.hash));
      }.bind(this)
    );
  },

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  trapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (!options.$elementToFocus) {
      options.$elementToFocus = options.$container;
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();

    $(document).on(eventName, function(evt) {
      if (
        options.$container[0] !== evt.target &&
        !options.$container.has(evt.target).length
      ) {
        options.$container.focus();
      }
    });
  },

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  removeTrapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  }
};

theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (_.isUndefined(constructor)) return;

    var instance = _.assignIn(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = _.filter(this.instances, function(instance) {
      var isEventInstance = instance.id === evt.detail.sectionId;

      if (isEventInstance) {
        if (_.isFunction(instance.onUnload)) {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(
      function(index, container) {
        this._createInstance(container, constructor);
      }.bind(this)
    );
  }
});


/* ================ MODULES ================ */
theme.Slideshow = (function() {
  theme.sliders = function(slider) {
    this.$slider = $(slider);

    // Set optional parameters
    var auto = this.$slider.data('autoplay')
        ? this.$slider.data('autoplay')
        : false,
      rate = this.$slider.data('speed') ? this.$slider.data('speed') : 0;

    this.sliderArgs = {
      animation: this.$slider.data('animation-type'),
      animationSpeed: 500,
      pauseOnHover: true,
      keyboard: false,
      slideshow: auto,
      slideshowSpeed: rate
    };

    var self = this;
    var windowWidth = $(window).width();

    // Resize the slideshow after resizing the window.
    $(window).bind('resize.slideshow', function() {
      // iOS can trigger resize events on scroll, this checks that it is a
      // legitimate resize event
      if ($(window).width() === windowWidth) return;

      windowWidth = $(window).width();
      setTimeout(function() {
        self.$slider.data('flexslider').resize();
      }, 1000);
    });

    if (this.$slider.length) {
      if (this.$slider.find('li').length === 1) {
        this.sliderArgs.touch = false;
      }

      return this.$slider.flexslider(this.sliderArgs);
    }
  };

  return theme.sliders;
})();


/*================ SECTIONS ================*/
theme.Header = (function() {
  function Header() {
    this.selectors = {
      html: 'html',
      body: 'body',
      pageWrapper: '.page-element',

      // Mobile Menu
      menu: '#navToggle',

      // Navigation
      navigation: '#accessibleNav',
      dropdownToggle: '.site-nav__dropdown-toggle',
      dropdown: '.site-nav__dropdown',
      siteNavWithDropdown: '.site-nav--has-dropdown',
      gridFull: '.grid--full',
      iconPlus: '.icon-plus',
      iconMinus: '.icon-minus',
      iconChevronDown: '.icon-chevron-down',
      iconChevronUp: '.icon-chevron-up'
    };

    this.init();
  }

  Header.prototype = _.assignIn({}, Header.prototype, {
    init: function() {
      this.cacheSelectors();
      this.cacheVariables();
      this.accessibleNav();
      this.menu();
      this.menuDropdownCheck();

      // ajaxifyShopify.init will run from Product.prototype when on the product page
      if (
        theme.cartType === 'drawer' &&
        theme.currentTemplate.indexOf('product') === -1
      ) {
        ajaxifyShopify.init({
          method: theme.cartType,
          wrapperClass: 'wrapper',
          formSelector: '#addToCartForm',
          addToCartSelector: '#addToCart',
          cartCountSelector: '#cartCount',
          cartCostSelector: '#cartCost',
          toggleCartButton: '.cart-toggle',
          btnClass: 'btn',
          moneyFormat: theme.moneyFormat
        });
      }
    },

    cacheSelectors: function() {
      window.cache = window.cache || {};
      $.extend(window.cache, {
        $html: $(this.selectors.html),
        $body: $(this.selectors.body),
        $pageWrapper: $(this.selectors.pageWrapper),
        $menu: $(this.selectors.menu),

        // Navigation
        $navigation: $(this.selectors.navigation),
        $dropdownToggle: $(this.selectors.dropdownToggle),
        $dropdown: $(this.selectors.dropdown),
        $siteNavWithDropdown: $(this.selectors.siteNavWithDropdown),
        $gridFull: $(this.selectors.gridFull)
      });
    },

    cacheVariables: function() {
      this.variables = {
        mobileDrawerOpen: false,
        breakpointLarge: 1025
      };
    },

    accessibleNav: function() {
      var $nav = cache.$navigation,
        $allLinks = $nav.find('a'),
        $topLevel = $nav.children('li').find('a'),
        $parents = $nav.find(cache.$siteNavWithDropdown),
        $subMenuLinks = $nav.find(cache.$dropdown).find('a'),
        activeClass = 'nav-hover',
        focusClass = 'nav-focus';

      // Mouseenter
      $parents.on('mouseenter', function(evt) {
        var $el = $(this);

        if (!$el.hasClass(activeClass)) {
          evt.preventDefault();
        }

        showDropdown($el);
      });

      // Mouseout
      $parents.on('mouseleave', function() {
        hideDropdown($(this));
      });

      $subMenuLinks.on('touchstart', function(evt) {
        // Prevent touchstart on body from firing instead of link
        evt.stopImmediatePropagation();
      });

      $allLinks.focus(function() {
        handleFocus($(this));
      });

      $allLinks.blur(function() {
        removeFocus($topLevel);
      });

      // accessibleNav private methods
      function handleFocus($el) {
        var isSubItem = $(cache.$dropdown).has($el).length,
          $newFocus = null;

        // Add focus class for top level items, or keep menu shown
        if (!isSubItem) {
          removeFocus($topLevel);
          addFocus($el);
        } else {
          $newFocus = $el.closest(cache.$siteNavWithDropdown).find('a');
          addFocus($newFocus);
        }
      }

      function showDropdown($el) {
        $el.addClass(activeClass);

        setTimeout(function() {
          cache.$body.on('touchstart', function() {
            hideDropdown($el);
          });
        }, 250);
      }

      function hideDropdown($el) {
        $el.removeClass(activeClass);
        cache.$body.off('touchstart');
      }

      function addFocus($el) {
        $el.addClass(focusClass);
      }

      function removeFocus($el) {
        $el.removeClass(focusClass);
      }
    },

    menu: function() {
      var self = this;

      self.menuCheck();

      cache.$menu.on('click', function(evt) {
        evt.preventDefault();

        // Prevent the menu animation from firing until the hamburger icon has been clicked.
        cache.$pageWrapper.addClass('activated');

        if (self.variables.mobileDrawerOpen) {
          self.menuClose();
        } else {
          self.menuOpen();
        }
      });

      $(window).resize(function() {
        afterResize(
          function() {
            self.menuCheck();
          },
          200,
          'id'
        );
      });
    },

    menuCheck: function() {
      var self = this;
      var width = self.getWidth();

      if (width > self.variables.breakpointLarge) {
        self.menuClose();
      }
    },

    menuClose: function() {
      cache.$html.removeClass('page-move--toggled');
      cache.$body.removeClass('mobile-drawer--open page-move--nav');
      cache.$menu
        .find('.icon-x')
        .removeClass('icon-x')
        .addClass('icon-hamburger');
      cache.$menu.attr('aria-expanded', false);
      cache.$html.off('keyup.drawerMenu');

      this.variables.mobileDrawerOpen = false;

      cache.$pageWrapper.off('click.mobileDrawerOpen');

      theme.a11y.removeTrapFocus({
        $container: $('.site-nav'),
        namespace: 'drawer'
      });
    },

    menuOpen: function() {
      var self = this;

      cache.$body.addClass('page-move--nav');
      cache.$menu
        .find('.icon-hamburger')
        .removeClass('icon-hamburger')
        .addClass('icon-x');
      cache.$menu.attr('aria-expanded', true);

      cache.$html.on('keyup.drawerMenu', function(evt) {
        if (evt.keyCode === 27) {
          self.menuClose();
        }
      });

      //setTimeout value should reflect CSS animation speeds
      setTimeout(function() {
        cache.$body.addClass('mobile-drawer--open');
        cache.$html.addClass('page-move--toggled');
        self.variables.mobileDrawerOpen = true;
      }, 600);

      cache.$pageWrapper.on('click.mobileDrawerOpen', function() {
        if (self.variables.mobileDrawerOpen) {
          self.menuClose();
        }
      });

      theme.a11y.trapFocus({
        $container: $('.site-nav'),
        namespace: 'drawer'
      });
    },

    menuDropdownCheck: function() {
      var $activeChildLinks = cache.$siteNavWithDropdown.find(
          '.site-nav__child-link--active'
        ),
        classActive = 'active',
        classDropdownState = 'site-nav--open-dropdown',
        classDropdownIconOpen = 'site-nav__dropdown-icon--open',
        classDropdownIconClose = 'site-nav__dropdown-icon--close',
        classIconPlus = 'icon-plus',
        classIconMinus = 'icon-minus',
        classIconChevronUp = 'icon-chevron-up',
        classIconChevronDown = 'icon-chevron-down';

      if ($activeChildLinks.length) {
        $activeChildLinks
          .parents(cache.$siteNavWithDropdown)
          .addClass(classDropdownState);
      }

      cache.$dropdownToggle.on(
        'click',
        function(evt) {
          evt.preventDefault();
          var $target = $(evt.target),
            $targetDropdown = $target.closest(cache.$siteNavWithDropdown),
            $targetDropdownToggle = $targetDropdown
              .children(this.selectors.gridFull)
              .find(cache.$dropdownToggle);

          if ($targetDropdownToggle.hasClass(classDropdownIconOpen)) {
            $targetDropdownToggle
              .removeClass(classDropdownIconOpen)
              .addClass(classDropdownIconClose);
            $targetDropdownToggle.attr('aria-expanded', true);
            $targetDropdownToggle
              .children(this.selectors.iconPlus)
              .removeClass(classIconPlus)
              .addClass(classIconMinus);
            $targetDropdownToggle
              .children(this.selectors.iconChevronDown)
              .removeClass(classIconChevronDown)
              .addClass(classIconChevronUp);
            toggleDropdownState(this, evt, true);
          } else {
            $targetDropdownToggle
              .removeClass(classDropdownIconClose)
              .addClass(classDropdownIconOpen);
            $targetDropdownToggle.attr('aria-expanded', false);
            $targetDropdownToggle
              .children(this.selectors.iconMinus)
              .removeClass(classIconMinus)
              .addClass(classIconPlus);
            $targetDropdownToggle
              .children(this.selectors.iconChevronUp)
              .removeClass(classIconChevronUp)
              .addClass(classIconChevronDown);
            toggleDropdownState(this, evt, false);
          }
        }.bind(this)
      );

      function toggleDropdownState(self, evt, open) {
        var $target = $(evt.target),
          $targetDropdown = $target.closest(cache.$siteNavWithDropdown),
          $targetDropdownMenu = $targetDropdown.children(
            self.selectors.dropdown
          ),
          $targetDropdownToggle = $targetDropdown
            .children(cache.$gridFull)
            .find(cache.$dropdownToggle);

        $targetDropdownMenu.slideToggle(350, function() {
          if (open) {
            $targetDropdownToggle.addClass(classActive);
            $targetDropdown.addClass(classDropdownState);
          } else {
            $targetDropdownToggle.removeClass(classActive);
            $targetDropdown.removeClass(classDropdownState);
          }
        });
      }
    },

    getWidth: function() {
      return window.innerWidth;
    }
  });

  return Header;
})();

theme.Product = (function() {
  function Product(container) {
    var $container = (this.$container = $(container));
    var sectionId = (this.sectionId = $container.attr('data-section-id'));

    this.selectors = {
      $html: $('html'),
      $productImages: $('.product-single__image-wrapper', this.$container),
      $thumbImages: $('#productThumbs').find('a.product-single__thumb'),
      $addToCart: $('#addToCart-' + sectionId),
      $productPrice: $('.product-price', this.$container),
      $comparePrice: $('.compare-price', this.$container),
      $comparePriceA11y: $('.compare-price-a11y', this.$container),
      $priceA11y: $('.price-a11y', this.$container),
      $quantityElements: $(
        '.quantity-selector, label + .js-qty',
        this.$container
      ),
      $addToCartText: $('.add-to-cart-text', this.$container),
      $SKU: $('.variant-sku', this.$container),
      $shopifyPaymentButton: $('.shopify-payment-button', this.$container)
    };

    if (!$('#ProductJson-' + sectionId).html()) return;

    this.zoomEnable = $(container).data('zoom-enable');
    this.enableHistoryState =
      $(container).data('enable-history-state') || false;
    this.productSingleObject = JSON.parse(
      document.getElementById('ProductJson-' + sectionId).innerHTML
    );

    this.init();
  }

  Product.prototype = _.assignIn({}, Product.prototype, {
    init: function() {
      this.initBreakpoints();
      timber.cacheSelectors();
      this.productImageSwitch();
      if (this.zoomEnable) {
        this.productImageZoom();
      }
      this.initProductVariant();
      timber.responsiveVideos();
      timber.rteBannerImages();

      if (theme.cartType === 'drawer') {
        ajaxifyShopify.init({
          method: theme.cartType,
          wrapperClass: 'wrapper',
          formSelector: '#addToCartForm-' + this.sectionId,
          addToCartSelector: '#addToCart-' + this.sectionId,
          cartCountSelector: '#cartCount',
          cartCostSelector: '#cartCost',
          toggleCartButton: '.cart-toggle',
          btnClass: 'btn',
          moneyFormat: theme.moneyFormat
        });
      }
    },

    initBreakpoints: function() {
      var self = this;

      enquire.register(theme.variables.mediaQuerySmall, {
        match: function() {
          if (self.zoomEnable) {
            if (self.selectors.$productImages.length) {
              // remove event handlers for product zoom on mobile
              self.selectors.$productImages.trigger('zoom.destroy');
              self.selectors.$productImages.off();
              self.selectors.$productImages.removeClass('image-zoom');
            }
          }

          theme.variables.bpSmall = true;
        },
        unmatch: function() {
          theme.variables.bpSmall = false;

          if (self.zoomEnable) {
            // reinit product zoom
            self.productImageZoom();
          }
        }
      });
    },

    productImageSwitch: function() {
      var self = this;

      if (this.selectors.$thumbImages.length) {
        // Switch the main image with one of the thumbnails
        // Note: this does not change the variant selected, just the image
        this.selectors.$thumbImages.on('click', function(evt) {
          evt.preventDefault();
          var newImageId = $(this).attr('data-image-id');
          self.switchImage(newImageId);
        });
      }
    },

    switchImage: function(imageId) {
      var $newImage = $(
        this.selectors.$productImages.selector +
          "[data-image-id='" +
          imageId +
          "']",
        this.$container
      );
      var $otherImages = $(
        this.selectors.$productImages.selector +
          ":not([data-image-id='" +
          imageId +
          "'])",
        this.$container
      );

      $newImage.removeClass('hide');
      $otherImages.addClass('hide');
    },

    productImageZoom: function() {
      if (theme.variables.bpSmall) return;

      if (!this.zoomEnable) return;

      if (
        !this.selectors.$productImages.length ||
        timber.cache.$html.hasClass('supports-touch')
      )
        return;

      // Destroy zoom (in case it was already set), then set it up again
      this.selectors.$productImages.trigger('zoom.destroy');

      this.selectors.$productImages.each(function() {
        $(this).addClass('image-zoom');
        $(this).zoom({
          url: $(this)
            .find('img')
            .attr('data-zoom')
        });
      });
    },

    productPage: function(options) {
      var self = this,
        moneyFormat = options.money_format,
        variant = options.variant,
        translations = options.translations;

      if (variant) {
        // Update variant image, if one is set
        if (variant.featured_image) {
          var newImg = variant.featured_image;

          self.switchImage(newImg.id);
        }

        // Select a valid variant if available
        if (variant.available) {
          // Available, enable the submit button, change text, show quantity elements
          this.selectors.$addToCart
            .removeClass('disabled')
            .prop('disabled', false);
          this.selectors.$addToCartText.html(translations.add_to_cart);
          this.selectors.$quantityElements.show();
          this.selectors.$shopifyPaymentButton.show();
        } else {
          // Sold out, disable the submit button, change text, hide quantity elements
          this.selectors.$addToCart.addClass('disabled').prop('disabled', true);
          this.selectors.$addToCartText.html(translations.sold_out);
          this.selectors.$quantityElements.hide();
          this.selectors.$shopifyPaymentButton.hide();
        }

        // Regardless of stock, update the product price
        this.selectors.$productPrice.html(
          Shopify.formatMoney(variant.price, moneyFormat)
        );
        // Show Product SKU
        this.selectors.$SKU.html(variant.sku);
        // Also update and show the product's compare price if necessary
        if (variant.compare_at_price > variant.price) {
          this.selectors.$comparePrice
            .html(Shopify.formatMoney(variant.compare_at_price, moneyFormat))
            .show();
          this.selectors.$comparePriceA11y.attr('aria-hidden', 'false');
          this.selectors.$priceA11y.attr('aria-hidden', 'false');
        } else {
          this.selectors.$comparePrice.hide();
          this.selectors.$comparePriceA11y.attr('aria-hidden', 'true');
        }
      } else {
        // The variant doesn't exist, disable submit button.
        // This may be an error or notice that a specific variant is not available.
        // To only show available variants, implement linked product options:
        //   - http://docs.shopify.com/manual/configuration/store-customization/advanced-navigation/linked-product-options
        this.selectors.$addToCart.addClass('disabled').prop('disabled', true);
        this.selectors.$addToCartText.html(translations.unavailable);
        this.selectors.$quantityElements.hide();
        this.selectors.$shopifyPaymentButton.hide();
      }
    },

    initProductVariant: function() {
      var self = this,
        product = this.productSingleObject;

      var selectCallback = function(variant, selector) {
        self.productPage({
          money_format: theme.moneyFormat,
          variant: variant,
          selector: selector,
          translations: {
            add_to_cart: theme.productStrings.addToCart,
            sold_out: theme.productStrings.soldOut,
            unavailable: theme.productStrings.unavailable
          }
        });
      };

      this.optionSelector = new Shopify.OptionSelectors(
        'ProductSelect-' + this.sectionId,
        {
          product: product,
          onVariantSelected: selectCallback,
          enableHistoryState: this.enableHistoryState
        }
      );

      // Add label if only one product option and it isn't 'Title'. Could be 'Size'.
      if (product.options.length === 1 && product.options[0] !== 'Title') {
        $('.selector-wrapper:eq(0)', this.$container).prepend(
          '<label>' + product.options[0] + '</label>'
        );
      }

      // Hide selectors if we only have 1 variant and its title contains 'Default'.
      if (
        product.variants.length === 1 &&
        product.variants[0].title.toLowerCase().indexOf('default') !== -1
      ) {
        $('.product-single__variants', this.$container).hide();
      }
    }
  });

  return Product;
})();

theme.Collection = (function() {
  function Collection() {
    this.selectors = {
      filterDropdowns: '.filter-dropdown',
      filterSelect: '.filter-dropdown__select',
      filterLabel: '.filter-dropdown__label',
      sortDropdown: '#sortBy',
      tagList: '#sortTags'
    };

    this.init();
  }

  Collection.prototype = _.assignIn({}, Collection.prototype, {
    init: function() {
      this.cacheSelectors();
      this.collectionSorting();
      this.setFilterLabels();
      this.setQueryParams();

      // Bind Events
      cache.$sortDropdown.on('change', this.sortCollection);
      cache.$tagList.on('change', this.filterCollection);
    },

    cacheSelectors: function() {
      window.cache = window.cache || {};
      $.extend(window.cache, {
        $html: $('html'),
        $filterDropdowns: $(this.selectors.filterDropdowns),
        $filterSelect: $(this.selectors.filterSelect),
        $filterLabel: $(this.selectors.filterLabel),
        $sortDropdown: $(this.selectors.sortDropdown),
        $tagList: $(this.selectors.tagList)
      });
    },

    collectionSorting: function() {
      if (cache.$tagList.length) {
        cache.$tagList.on('change', function() {
          window.location.href = $(this).val();
        });
      }
    },

    updateFilterLabel: function(evt, element) {
      var $label, selectedVariant, $select;

      // eslint-disable-next-line
      $select = evt ? $(evt.target) : $(element);

      $label = $select
        .prev('.filter-dropdown__label')
        .find('.filter-dropdown__label--active');
      selectedVariant = $select.find('option:selected').text();
      $label.html(' ' + selectedVariant);
      cache.$filterDropdowns.addClass('loaded');
    },

    setFilterLabels: function() {
      var self = this;

      if (
        cache.$filterSelect.length &&
        cache.$html.hasClass('supports-pointerevents')
      ) {
        cache.$filterSelect.each(function() {
          self.updateFilterLabel(null, this);
        });

        cache.$filterSelect.on('change', self.updateFilterLabel);
      }
    },

    setQueryParams: function() {
      var self = this;

      //don't execute if sort dropdown is not present.
      if (!cache.$sortDropdown.length) return;

      Shopify.queryParams = {};
      if (location.search.length) {
        for (
          var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&');
          i < aCouples.length;
          i++
        ) {
          aKeyValue = aCouples[i].split('=');
          if (aKeyValue.length > 1) {
            Shopify.queryParams[
              decodeURIComponent(aKeyValue[0])
            ] = decodeURIComponent(aKeyValue[1]);
          }
        }
      }

      cache.$sortDropdown.val(Shopify.queryParams.sort_by);

      if (
        cache.$html.hasClass('supports-pointerevents') &&
        Shopify.queryParams.sort_by
      ) {
        self.updateFilterLabel(null, cache.$sortDropdown);
      }
    },

    filterCollection: function() {
      //check to make sure there is a tag dropdown present
      if (!cache.$tagList.length) return;

      var search = document.location.search.replace(/\?(page=\w+)?&?/, '');

      // only add the search parameters to the url if they exist
      search = search !== '' ? '?' + search : '';

      document.location.href = cache.$tagList.val() + search;
    },

    sortCollection: function() {
      if (!cache.$sortDropdown.length) return;

      // go back to page 1 of results
      if (Shopify.queryParams.page) {
        delete Shopify.queryParams.page;
      }

      Shopify.queryParams.sort_by = cache.$sortDropdown.val();
      location.search = jQuery.param(Shopify.queryParams);
    }
  });

  return Collection;
})();

theme.slideshows = {};

theme.SlideshowSection = (function() {
  function SlideshowSection(container) {
    var $container = (this.$container = $(container));
    var id = $container.attr('data-section-id');
    var slideshow = (this.slideshow = '#flexslider--' + id);

    theme.slideshows[slideshow] = new theme.Slideshow(slideshow);
  }

  return SlideshowSection;
})();

theme.SlideshowSection.prototype = _.assignIn(
  {},
  theme.SlideshowSection.prototype,
  {
    onUnload: function() {
      $(window).unbind('.slideshow');
      delete theme.slideshows[this.slideshow];
    },

    onBlockSelect: function(evt) {
      var $slideshow = $(this.slideshow);
      var $slide = $('#slide--' + evt.detail.blockId + ':not(.clone)');
      var slideIndex = $slide.data('flexslider-index');
      var $slideImg = $slide.find('img');
      $slideshow.flexslider(slideIndex, true);

      $slideImg.on('load', function() {
        var intervalAttempts = 0;

        // Needed to resize the slider as the on('load') listener doesn't wait until the image has loaded.
        var imageHeightCheck = setInterval(function() {
          intervalAttempts++;
          if (
            $slideImg.length &&
            $slideImg.height() === 0 &&
            intervalAttempts < 10
          ) {
            sizeSlideshow($slideshow);
          } else {
            // clear interval
            sizeSlideshow($slideshow);
            clearInterval(imageHeightCheck);
          }
        }, 500);
      });

      function sizeSlideshow($slideshow) {
        $slideshow.resize();
      }
    },

    onBlockDeselect: function() {
      // Resume autoplay
      $(this.slideshow).flexslider('play');
    }
  }
);

theme.Maps = (function() {
  var config = {
    zoom: 14
  };
  var apiStatus = null;
  var mapsToLoad = [];

  function Map(container) {
    theme.$currentMapContainer = this.$container = $(container);
    var key = this.$container.data('api-key');

    if (typeof key !== 'string' || key === '') return;

    if (apiStatus === 'loaded') {
      var self = this;

      // Check if the script has previously been loaded with this key
      var $script = $('script[src*="' + key + '&"]');
      if ($script.length === 0) {
        $.getScript('https://maps.googleapis.com/maps/api/js?key=' + key).then(
          function() {
            apiStatus = 'loaded';
            self.createMap();
          }
        );
      } else {
        this.createMap();
      }
    } else {
      mapsToLoad.push(this);

      if (apiStatus !== 'loading') {
        apiStatus = 'loading';
        if (typeof window.google === 'undefined') {
          $.getScript(
            'https://maps.googleapis.com/maps/api/js?key=' + key
          ).then(function() {
            apiStatus = 'loaded';
            initAllMaps();
          });
        }
      }
    }
  }

  function initAllMaps() {
    // API has loaded, load all Map instances in queue
    $.each(mapsToLoad, function(index, instance) {
      instance.createMap();
    });
  }

  function geolocate($map) {
    var deferred = $.Deferred();
    var geocoder = new google.maps.Geocoder();
    var address = $map.data('address-setting');

    geocoder.geocode({ address: address }, function(results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
        deferred.reject(status);
      }

      deferred.resolve(results);
    });

    return deferred;
  }

  Map.prototype = _.assignIn({}, Map.prototype, {
    createMap: function() {
      var $map = this.$container.find('.map-section__container');

      return geolocate($map)
        .then(
          function(results) {
            var mapOptions = {
              zoom: config.zoom,
              styles: config.styles,
              center: results[0].geometry.location,
              draggable: false,
              clickableIcons: false,
              scrollwheel: false,
              disableDoubleClickZoom: true,
              disableDefaultUI: true
            };

            var map = (this.map = new google.maps.Map($map[0], mapOptions));
            var center = (this.center = map.getCenter());

            //eslint-disable-next-line no-unused-vars
            var marker = new google.maps.Marker({
              map: map,
              position: center
            });

            google.maps.event.addDomListener(window, 'resize', function() {
              google.maps.event.trigger(map, 'resize');
              map.setCenter(center);
            });
          }.bind(this)
        )
        .fail(function() {
          var errorMessage;

          switch (status) {
            case 'ZERO_RESULTS':
              errorMessage = theme.mapStrings.addressNoResults;
              break;
            case 'OVER_QUERY_LIMIT':
              errorMessage = theme.mapStrings.addressQueryLimit;
              break;
            default:
              errorMessage = theme.mapStrings.addressError;
              break;
          }

          // Only show error in the theme editor
          if (Shopify.designMode) {
            var $mapContainer = $map.parents('.map-section');

            $mapContainer.addClass('page-width map-section--load-error');
            $mapContainer.find('.map-section__content-wrapper').remove();
            $mapContainer
              .find('.map-section__wrapper')
              .html(
                '<div class="errors text-center" style="width: 100%;">' +
                  errorMessage +
                  '</div>'
              );
          }
        });
    },

    onUnload: function() {
      if (typeof window.google !== 'undefined') {
        google.maps.event.clearListeners(this.map, 'resize');
      }
    }
  });

  return Map;
})();

// Global function called by Google on auth errors.
// Show an auto error message on all map instances.
// eslint-disable-next-line camelcase, no-unused-vars
function gm_authFailure() {
  if (!Shopify.designMode) return;

  theme.$currentMapContainer.addClass('page-width map-section--load-error');
  theme.$currentMapContainer.find('.map-section__content-wrapper').remove();
  theme.$currentMapContainer
    .find('.map-section__wrapper')
    .html(
      '<div class="errors text-center" style="width: 100%;">' +
        theme.mapStrings.authError +
        '</div>'
    );
}

theme.FeaturedVideoSection = (function() {
  function FeaturedVideoSection() {
    timber.responsiveVideos();
  }

  return FeaturedVideoSection;
})();

theme.FeaturedVideoSection.prototype = _.assignIn(
  {},
  theme.FeaturedVideoSection.prototype,
  {
    onSelect: function() {
      timber.responsiveVideos();
    }
  }
);

window.theme = window.theme || {};

theme.PasswordHeader = (function() {
  function PasswordHeader() {
    this.init();
  }

  PasswordHeader.prototype = _.assignIn({}, PasswordHeader.prototype, {
    init: function() {
      $('.js-toggle-login-modal').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        closeOnBgClick: false,
        closeBtnInside: false,
        closeOnContentClick: false,
        tClose: password.strings.pageClose,
        removalDelay: 500,
        callbacks: {
          open: function() {
            window.setTimeout(function() {
              document.getElementById('password').focus();
            }, 50);
          },
          close: function() {
            window.setTimeout(function() {
              document.getElementById('email').focus();
            }, 50);
          }
        }
      });
      if ($('.storefront-password-form .errors').size()) {
        $('.js-toggle-login-modal').click();
      }
    }
  });

  return PasswordHeader;
})();


$(document).ready(function() {
  var sections = new theme.Sections();

  sections.register('header', theme.Header);
  sections.register('product-template', theme.Product);
  sections.register('collection-template', theme.Collection);
  sections.register('slideshow-section', theme.SlideshowSection);
  sections.register('map-section', theme.Maps);
  sections.register('featured-video-section', theme.FeaturedVideoSection);
  sections.register('password-header', theme.PasswordHeader);
});

timber.cacheSelectors = function() {
  timber.cache = {
    // General
    $html: $('html'),
    $window: $(window),

    // Home Page
    $slider: $('.flexslider'),
    $slides: $('.flexslider li'),

    // Cart Page
    $cartEmpty: $('#cartEmpty'),
    $ajaxifyCart: $('#ajaxifyCart'),
    cartNoCookies: 'cart--no-cookies',

    // RTE content
    $rte: $('.rte')
  };
};

timber.init = function() {
  timber.cacheSelectors();
  timber.cartInit();
  timber.responsiveVideos();
  timber.rteBannerImages();
};

timber.cartInit = function() {
  if (timber.cookiesEnabled()) return;

  timber.cache.$cartEmpty.addClass(timber.cache.cartNoCookies);
  timber.cache.$ajaxifyCart.addClass(timber.cache.cartNoCookies);
};

timber.cookiesEnabled = function() {
  var cookieEnabled = navigator.cookieEnabled;

  if (!cookieEnabled) {
    document.cookie = 'testcookie';
    cookieEnabled = document.cookie.indexOf('testcookie') !== -1;
  }
  return cookieEnabled;
};

timber.rteBannerImages = function() {
  if (!timber.cache.$rte) return;

  var $imgContainers = timber.cache.$rte.find('img:not([style])').parent('p');

  if ($imgContainers) {
    $imgContainers.addClass('banner-img');
  }
};

timber.responsiveVideos = function() {
  var $iframeVideo = $(
    'iframe[src*="youtube.com/embed"], iframe[src*="player.vimeo"]'
  );
  var $iframeReset = $iframeVideo.add('iframe#admin_bar_iframe');

  $iframeVideo.each(function() {
    // Add wrapper to make video responsive
    if (!$(this).parents('.video-wrapper').length) {
      $(this).wrap('<div class="video-wrapper"></div>');
    }
  });

  $iframeReset.each(function() {
    // Re-set the src attribute on each iframe after page load
    // for Chrome's "incorrect iFrame content on 'back'" bug.
    // https://code.google.com/p/chromium/issues/detail?id=395791
    // Need to specifically target video and admin bar
    this.src = this.src;
  });
};

// Initialize Timber's JS on docready
$(timber.init);
