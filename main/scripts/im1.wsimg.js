!function(t,e){var n=function(t){function e(t){return n()+"-"+(e=(e=(e=(new Date).getTime()).toString()).substr(e.length-4))+"-4"+r(3)+"-"+(r(1,"89ab")+r(3))+"-"+function(t){if(t){var e=i(t);return e&&e.length>8&&(e=e.substr(0,8)),("1"+e+r(11)).substr(0,12)}return"0"+r(11)}(t);var e}function n(){var t=new Date,e=Math.round(t.getTime()/1e3);(e=(e=parseInt(e.toString().slice(1))).toString(16)).length>8&&(e=e.substring(0,8));var n=(e="00000000"+e).length-8;return e.substring(n)}function r(t,e){var n="";e||(e="abcdef0123456789");for(var r=0;r<t;r++)n+=e.charAt(Math.floor(Math.random()*e.length));return n}function i(t){for(var e=0,n=0,r=t.length;n<r;n++)e=31*e+t.charCodeAt(n)<<0;return(e=Math.abs(e)).toString(16)}return t||(t={}),t.debugMode?{hashString:i,getFirstSegment:n,generateGuid:e,hashCode:i}:{generateGuid:e}};void 0!==e&&(e.tcg=n);var r=function(t){function e(){this.properties={},this.id="",this.properties.cts=(new Date).getTime(),this.get=function(t){if(this.properties.hasOwnProperty(t))return this.properties[t]},this.set=function(t,e){this.properties[t]=e},this.setEventType=function(t){this.set("event_type",t)},this.getEventType=function(){return this.get("event_type")},this.getProperties=function(){return this.properties},this.merge=function(t){for(var e in t)t.hasOwnProperty(e)&&this.set(e,t[e])},this.isSet=function(t){if(this.properties.hasOwnProperty(t))return!0}}function n(){t.debugMode&&console&&console.log.apply&&console.firebug}function r(t){return"object"==typeof t&&t instanceof Array}function i(t,e,n,r,i,o,a){var c=new Date;c.setTime(c.getTime()+60*r*1e3);var s=e+"="+encodeURI(n)+(r?"; expires="+c.toGMTString():"")+(r?"; max-age="+60*r:"")+(i?"; path="+i:"")+(o?"; domain="+o:"")+(a?"; secure":"");t.cookie=s}t||(t={}),t.window||(t.window=window),t.doc||(t.doc=document),t.debugMode||(t.debugMode=!1);var o={host:"",queryString:"",toString:function(){var t=-1===this.host.indexOf("?")?"?":"&";return this.host+t+this.queryString}};return{getDataLayerValues:function(t,n){for(var r=new e,i=0;i<t.length;i++)for(var o in t[i])if(t[i].hasOwnProperty(o)){if(n&&0===o.indexOf("tccl."))continue;r.set(o,t[i][o])}return r},getUserAgent:function(){return t.window.navigator.userAgent},getHostname:function(){return t.window.location.hostname},getPageName:function(e){return e||(e=t.window.location.pathname),"string"!=typeof e||void 0===e||""===e?"notspecified":(e.lastIndexOf("/")===e.length-1&&(e=e.substring(0,e.length-1)),0!==e.indexOf("/")&&(e="/"+e),e)},eventObject:e,createRequestUrl:function(t,e){var n=o;return n.queryString=function(t,e){var n="",r="";for(var i in t)if(t.hasOwnProperty(i)&&""!==i&&0!==i.indexOf(e)){var o="";if(null!==(o=t[i])){if(void 0===o||"undefined"===o||""===o)continue;try{r=decodeURIComponent(o)}catch(t){r=o}n+=""!==n?"&":"",n+=i+"="+encodeURIComponent(r)}}return n}(t,"tccl."),n.host=e,n.toString().length>2048&&(n.queryString=n.queryString.substring(0,2047-n.host.length)),n},getReferrer:function(e){return n(t.doc.referrer),t.doc.referrer.substr(0,e)},getISODate:function(){return Date.prototype.toISOString||function(){function t(t){var e=String(t);return 1===e.length&&(e="0"+e),e}Date.prototype.toISOString=function(){var e=this.getUTCFullYear()+"-"+t(this.getUTCMonth()+1);return e+="-"+t(this.getUTCDate())+"T"+t(this.getUTCHours())+":",(e+=t(this.getUTCMinutes())+":"+t(this.getUTCSeconds())+".")+String((this.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}}(),(new Date).toISOString()},rand:function(t,e){var n=arguments.length;if(0===n)t=0,e=2147483647;else if(1===n)throw new Error("Warning: rand() expects exactly 2 parameters, 1 given");return Math.floor(Math.random()*(e-t+1))+t},getBeaconEndpoint:function(t,e){return function(t){return"//img."+t}(t)+e},getCurrentUtcTimestamp:function(){return Math.round((new Date).getTime())},debug:n,isArray:r,getCookieValues:function(t,e){var n=this.findCookie(t,e),r={};if(n&&"null value"!==n)for(var i=n.split("&"),o=i.length-1;o>=0;o--){var a=i[o].split("=");r[a[0]]=a[1]}return r},getCookieValue:function(t,e,n){var r=this.getCookieValues(t,e);if(r.hasOwnProperty(n))return r[n]},checkCookiesEnabled:function(t,e){var n=!!e.cookieEnabled;return void 0!==e.cookieEnabled||n||(i(t,"testcookie"),n=-1!==t.cookie.indexOf("testcookie")),n},setCookie:i,findCookie:function(t,e,n,r,i){n=[],"string"==typeof(r=t.cookie)&&(n=r.split("; "));var o={};for(i=n.length-1;i>=0;i--){var a=n[i].indexOf("="),c=n[i].substring(0,a);if(c===e){var s=n[i].substring(a+1);o[c]=s?decodeURIComponent(s):"null value";break}}return o[e]},usrinToString:function(t){if("object"==typeof t&&r(t)){for(var e="",n=0;n<t.length;n++)n>0&&(e+="^"),r(t[n])&&(e+=t[n][0]+","+t[n][1]);if(""!==e)return e}}}}();if(!i)var i=function(t){function e(){if(!t.perfSent&&(t.perfSent=!0,t.performance&&t.performance.timing))try{return r.tce=t.performance.timing.connectEnd||0,r.tcs=t.performance.timing.connectStart||0,r.tdc=t.performance.timing.domComplete||0,r.tdclee=t.performance.timing.domContentLoadedEventEnd||0,r.tdcles=t.performance.timing.domContentLoadedEventStart||0,r.tdi=t.performance.timing.domInteractive||0,r.tdl=t.performance.timing.domLoading||0,r.tdle=t.performance.timing.domainLookupEnd||0,r.tdls=t.performance.timing.domainLookupStart||0,r.tfs=t.performance.timing.fetchStart||0,r.tns=t.performance.timing.navigationStart||0,r.trqs=t.performance.timing.requestStart||0,r.tre=t.performance.timing.responseEnd||0,r.trps=t.performance.timing.responseStart||0,r.tles=t.performance.timing.loadEventStart||0,r.tlee=t.performance.timing.loadEventEnd||0,t.performance.navigation&&t.performance.navigation.type&&(r.nt=t.performance.navigation.type||0),n(r),e=r,t.window._trfq&&e&&t.window._trfq.push(["cmdLogPerf",e]),r}catch(t){return n(t),r}var e}function n(e){try{t.debugMode&&t.window.console&&console.log}catch(t){}}t||(t={}),t.window||(t.window=window),t.debugMode||(t.debugMode=!1),t.document||(t.document=document),t.delay||(t.delay=200),t.maxDelay||(t.maxDelay=7e3),t.perfSent=!1;var r={};return void 0===t.createEvent&&(t.createEvent=!0),t.performance||(t.window&&t.window.performance?t.performance=t.window.performance:n()),void 0!==t.document.readyState&&"complete"===t.document.readyState?setTimeout(e,t.delay):t.createEvent&&(t.document&&t.document.addEventListener?t.window.addEventListener("load",function(){setTimeout(e,t.delay)}):t.document&&t.document.attachEvent&&t.document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&setTimeout(e,t.delay)})),setTimeout(function(){t.perfSent||e()},t.maxDelay),t.debugMode,{getPerformanceData:e}};void 0!==e&&(e.tcp=i),function(t){t||(t={}),t.debugMode=t.debugMode||!1,t.window=t.window||window,t.doc=t.doc||document,t.utility=t.utility||r,t.perf||(t.perf=i),t.guid||(t.guid=new n),t.baseHost="test-secureserver.net",t.tcnPath="/t/1/tl/event",t.version="1.0.6",t.trfdData=[];void 0!==t.window._trfd?t.trfd=t.window._trfd:t.trfd=[];var e=t.utility.getDataLayerValues(t.trfd,!1);t.baseHost=e.get("tccl.baseHost"),t.trfdData=e.getProperties(),t.perfOn=!e["tccl.perfOn"]||e["tccl.perfOn"],t.perfOn&&"function"==typeof t.perf&&(t.window.perfhandler=t.perf());var o=t.globalTrackerName="TCCTracker",a=new function(){var e=t.utility.debug;e("TrackerQueue object created.");var n=[];this.push=function(n,r){var i=Array.prototype.slice.call(n,1),a=n[0];e("tracker queue object name %s",o),e("tracker queue object method name %s",a),t.window[o][a]&&t.window[o][a].apply(t.window[o],i),r&&"function"==typeof r&&r()},this.loadCommands=function(t){n=t},this.process=function(){var t=this;n.length>0&&this.push(n.shift(),function(){n.length>0&&t.process()})}};void 0===t.window[o]&&(t.window[o]=new function(t){function e(e,i,o){var a=function(){var e=t.utility.findCookie(t.doc,"_tccl_visitor"),n=t.utility.findCookie(t.doc,"_tccl_visit");return e||n?(e||(e=t.guid.generateGuid()),n||(n=t.guid.generateGuid())):e=n=t.guid.generateGuid(),t.utility.setCookie(t.doc,"_tccl_visitor",e,525600,"/",null),t.utility.setCookie(t.doc,"_tccl_visit",n,30,"/",null),{visitor:e,visit:n}}(),u=a.visitor,d=a.visit;e.set("dh",t.utility.getHostname()),e.set("dr",t.utility.getReferrer(1e3)),e.set("ua",t.utility.getUserAgent()),e.set("vci",c),e.set("cv",r),e.set("z",t.utility.rand()),e.set("vg",d),e.set("vtg",u),e.set("ap",s.ap?s.ap:"not_set"),e.set("trfd",JSON.stringify(s)),e.get("dp")||e.set("dp",t.utility.getPageName());var f=e.getProperties();"pageevent"!==i&&"perf"!==i&&"pageview"!==i||n(f,o)}function n(e,n){var r=t.utility.createRequestUrl(e,a),i=new Image(1,1);i.onload="function"==typeof n?n:function(){},i.class="trafficImage",i.src=r.toString(),n()}var r=t.hasOwnProperty("version")?t.version:"not.set",i=t.hasOwnProperty("baseHost")?t.baseHost:"godaddy.com",o=t.hasOwnProperty("imgSitePath")?t.imgSitePath:"/t/1/tl/event",a=t.utility.getBeaconEndpoint(i,o),c=t.utility.rand(),s=t.hasOwnProperty("trfdData")?t.trfdData:{};return t.debugMode,{cmdLogEvent:function(n,r,i,o){var a=new t.utility.eventObject,c="pageevent";a.set("ht",c),a.set("ea",n),a.set("eid",r),i&&a.set("usrin",t.utility.usrinToString(i)),o&&a.merge(o),e(a,c,function(){})},cmdLogPerf:function(n){var r=new t.utility.eventObject;r.merge(n),r.set("ht","perf"),e(r,"perf",function(){})},cmdLogPage:function(n,r,i,o){var a=new t.utility.eventObject,c="pageview";a.set("ht",c),a.set("eid",r),n&&a.set("dp",n),i&&a.set("usrin",t.utility.usrinToString(i)),o&&a.merge(o),e(a,c,function(){})}}}(t));var c=t.window._trfq||[];t.utility.isArray(c)&&a.loadCommands(c),window._trfq=a,window._trfq.process()}(),e.true={}}(0,function(){return this}());
