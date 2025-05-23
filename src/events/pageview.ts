import type {
  ComponentSettings,
  MCEvent,
  Client,
} from '@managed-components/types'
import { setGclAwCookie } from '../utils'

/**
 * Page view event handler
 * @remarks Sets the _gcl_aw cookie if _gl or gclid query params exist, and runs conversion linker if enabled
 * @param event - The event object containing client information
 * @param settings - The component settings
 * @returns void
 */
export async function pageViewHandler(
  event: MCEvent,
  settings: ComponentSettings
) {
  const { client } = event

  // set the _gcl_aw cookie if _gl or gclid query params exists
  setGclAwCookie(client)

  // run conversion linker if enabled and return
  if (settings.domains) {
    conversionLinkerHandler(client, settings)
  }
}

/**
 * conversionLinkerHandler
 * Sets up the Google Ads conversion linker client-side script
 * @param client - The client object used to execute the linker script
 * @param settings - The component settings containing a property called domains that is a comma-separated list of domains without spaces in between
 * @remarks This function is used to set up the Google Ads conversion linker script on the client side
 * @returns void
 */
const conversionLinkerHandler = (
  client: Client,
  settings: ComponentSettings
) => {
  const clientJS = `function linker(a,p){var g=[{domains:${JSON.stringify(
    settings.domains.split(',')
    // eslint-disable-next-line no-useless-escape
  )},fragment:!1,placement:1,forms:!1,sameHost:!1}],s=/([^?#]+)(\\?[^#]*)?(#.*)?/,h=/:[0-9]+$/,f=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var v,i={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"};function t(t,e,r,o){t.addEventListener?t.addEventListener(e,r,!!o):t.attachEvent&&t.attachEvent("on"+e,r)}function m(){for(var t=["aw","dc","gf","ha","gb"],e={},r=0;r<t.length;++r){var o,n=function(t,e){t=i[t];if(void 0!==t)return e+t}(t[r],"_gcl");!n||(o=function(t){for(var e=t+"=",r=decodeURIComponent(document.cookie).split(";"),o=0;o<r.length;o++){for(var n=r[o];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(e))return[n.substring(e.length,n.length)]}return[]}(n,p.cookie)).length&&(e[n]=o.sort()[o.length-1])}return e}function u(t){for(var e in t)if(t.hasOwnProperty(e))return 1}function l(t,e,r,o){r.href&&(o=k(t,e,r.href,void 0!==o&&o),f.test(o)&&(r.href=o))}function d(t,e,r){if(r&&r.action){var o=(r.method||"").toLowerCase();if("get"===o){for(var n,a=r.childNodes||[],i=!1,c=0;c<a.length;c++){var s=a[c];if(s.name===t){s.setAttribute("value",e),i=!0;break}}i||((n=p.createElement("input")).setAttribute("type","hidden"),n.setAttribute("name",t),n.setAttribute("value",e),r.appendChild(n))}else"post"===o&&(o=k(t,e,r.action),f.test(o)&&(r.action=o))}}function b(t,e,r){for(var o=g,n={},a=0;a<o.length;++a){var i,c,s=o[a];if(i=!r||s.forms)t:{var h=s.domains,f=t,u=!!s.sameHost;if(h&&(u||f!==p.location.hostname))for(var l=0;l<h.length;l++)if(h[l]instanceof RegExp){if(h[l].test(f)){i=!0;break t}}else if(0<=f.indexOf(h[l])||u&&0<=h[l].indexOf(f)){i=!0;break t}i=!1}i&&(null==(c=1)&&(c=1),c===e&&function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])}(n,m()))}return n}function w(t){var e,r=[];for(e in t)if(t.hasOwnProperty(e)){var o=t[e];if(void 0!==o&&o==o&&null!==o&&"[object Object]"!==o.toString()){r.push(e);var n=r,a=n.push,i=String(o);Rf=(o=void 0,o="ABCDEFGHIJKLMNOPQRSTUVWXYZ",(o+="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase()+"0123456789-_")+"."),Tf=function(){for(var t=Rf,e={},r=0;r<t.length;++r)e[t[r]]=r;return e}();for(var c=[],s=0;s<i.length;s+=3){var h=s+1<i.length,f=s+2<i.length,u=i.charCodeAt(s),l=h?i.charCodeAt(s+1):0,p=f?i.charCodeAt(s+2):0,g=u>>2,u=(3&u)<<4|l>>4,l=(15&l)<<2|p>>6,p=63&p;f||(p=64,h||(l=64)),c.push(Rf[g],Rf[u],Rf[l],Rf[p])}o=c.join(""),a.call(n,o)}}var m=r.join("*");return["1",function(t,e){var r=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1e3)-(void 0===e?0:e),t].join("*");if(!(t=v)){for(var o=Array(256),n=0;n<256;n++){for(var a=n,i=0;i<8;i++)a=1&a?a>>>1^3988292384:a>>>1;o[n]=a}t=o}v=t;for(var c=4294967295,s=0;s<r.length;s++)c=c>>>8^v[255&(c^r.charCodeAt(s))];return((-1^c)>>>0).toString(36)}(m),m].join("*")}function k(a,t,e,r){function o(t){var e,r=t,o=new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)").exec(r),n=r;o&&(e=o[2],r=o[4],n=o[1],r&&(n=n+e+r));n=(t=n).charAt(t.length-1);return t&&"&"!==n&&(t+="&"),t+c}r=void 0!==r&&r;var n=s.exec(e);if(!n)return"";var i=n[1],e=n[2]||"",n=n[3]||"",c=a+"="+t;return r?n="#"+o(n.substring(1)):e="?"+o(e.substring(1)),""+i+e+n}function c(t,e){var r,o="FORM"===(t.tagName||"").toUpperCase(),n=b(e,1,o),a=b(e,2,o),i=b(e,3,o);for(r in u(n)&&(n=w(n),o?d("_gl",n,t):l("_gl",n,t,!1)),!o&&u(a)&&l("_gl",w(a),t,!0),i)if(i.hasOwnProperty(r))t:{var c=r,s=i[r],h=t;if(h.tagName){if("a"===h.tagName.toLowerCase()){l(c,s,h,void 0);break t}if("form"===h.tagName.toLowerCase()){d(c,s,h);break t}}"string"==typeof h&&k(c,s,h,void 0)}}function C(t){return t?t.replace(":","").toLowerCase():""}function e(t,e,r,o,n){return"protocol"!==(e=e&&String(e).toLowerCase())&&"port"!==e||(t.protocol=C(t.protocol)||C(a.location.protocol)),"port"===e?t.port=String(Number((t.hostname?t:a.location).port)||("http"==t.protocol?80:"https"==t.protocol?443:"")):"host"===e&&(t.hostname=(t.hostname||a.location.hostname).replace(h,"").toLowerCase()),function(t,e,r,o,n){var a=C(t.protocol);switch(e=e&&String(e).toLowerCase()){case"url_no_fragment":c=je(t);break;case"protocol":c=a;break;case"host":var i,c=t.hostname.replace(h,"").toLowerCase();!r||(i=/^www\d*\./.exec(c))&&i[0]&&(c=c.substr(i[0].length));break;case"port":c=String(Number(t.port)||("http"==a?80:"https"==a?443:""));break;case"path":t.pathname||t.hostname||ya("TAGGING",1);var s=(c="/"==t.pathname.substr(0,1)?t.pathname:"/"+t.pathname).split("/");0<=Ga(o||[],s[s.length-1])&&(s[s.length-1]=""),c=s.join("/");break;case"query":c=t.search.replace("?",""),n&&(c=fe(c,n,void 0));break;case"extension":s=t.pathname.split(".");c=(c=1<s.length?s[s.length-1]:"").split("/")[0];break;case"fragment":c=t.hash.replace("#","");break;default:c=t&&t.href}return c}(t,e,r,o,n)}function r(t){try{t.action&&c(t,e(function(t){var e=p.createElement("a");t&&(e.href=t);var r=e.pathname;return"/"!==r[0]&&(t||ya("TAGGING",1),r="/"+r),t=e.hostname.replace(h,""),{href:e.href,protocol:e.protocol,host:e.host,hostname:t,pathname:r,search:e.search,hash:e.hash,port:e.port}}(t.action),"host"))}catch(t){}}function o(t){!function(t){try{var e,r;t:{for(var o=t,n=100;o&&0<n;){if(o.href&&o.nodeName.match(/^a(?:rea)?$/i)){e=o;break t}o=o.parentNode,n--}e=null}e&&("http:"!==(r=e.protocol)&&"https:"!==r||c(e,e.hostname))}catch(t){}}(t.target||t.srcElement||{})}t(document,"mousedown",o),t(document,"keyup",o),t(document,"submit",function(t){r(t.target||t.srcElement||{})});var n=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){r(this),n.call(this)}}linker(window,document);`
  client.execute(clientJS)
}
