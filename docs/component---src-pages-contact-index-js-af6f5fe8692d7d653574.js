(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[415],{2964:function(e){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.tagName,a=void 0===r?"span":r,n=t.split,l=t.setClassName,c=void 0===l?function(e){return"char"+e}:l;e.normalize();var i=1;function o(e){var t=e.parentNode,r=e.nodeValue;(n?n(r):r.split("")).forEach((function(r){var n=document.createElement(a),l=c(i++,r);l&&(n.className=l),n.appendChild(document.createTextNode(r)),n.setAttribute("aria-hidden","true"),t.insertBefore(n,e)})),""!==r.trim()&&t.setAttribute("aria-label",r),t.removeChild(e)}!function e(t){if(3===t.nodeType)return o(t);var r=Array.prototype.slice.call(t.childNodes);if(1===r.length&&3===r[0].nodeType)return o(r[0]);r.forEach((function(t){e(t)}))}(e)}},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(n),c=function(){return c=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)},i=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function o(e){return e&&e.map((function(e,t){return a.createElement(e.tag,c({key:t},e.attr),o(e.child))}))}function s(e){return function(t){return a.createElement(m,c({attr:c({},e.attr)},t),o(e.child))}}function m(e){var t=function(t){var r,n=e.attr,l=e.size,o=e.title,s=i(e,["attr","size","title"]),m=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}},2922:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(5785),n=r(7294),l=r(2884),c=r(2964),i=r.n(c),o=r(3201),s=r(1521),m=r(1501),u=r(8211),h=r(1027),f=r.p+"static/bg-1ea17b8454c0b8a82b8e275c067803e2.jpg",d=function(){var e=(0,n.useRef)(),t=(0,n.useRef)(),r=(0,n.useRef)(l.ZP.timeline());return(0,n.useEffect)((function(){i()(t.current),r.current.set([].concat((0,a.Z)(e.current.children),(0,a.Z)(t.current.children)),{opacity:0}).to(e.current.children,{stagger:{each:.1},duration:.5,ease:"expo.easeIn",startAt:{y:function(e,t){return e%2==0?h.M8.getRandomFloat(-35,-15):h.M8.getRandomFloat(15,35)},rotation:h.M8.getRandomFloat(-20,0)},y:0,rotation:0,opacity:1}).to(t.current.children,{stagger:{each:.08},ease:"expo.easeIn",duration:.5,startAt:{y:"50%"},y:0,opacity:1})}),[r]),n.createElement(m.Z,{title:"Contact Me(chachazw@gmail.com) - Chacha Chou - Front-end developer"},n.createElement("section",{className:"w-full h-screen relative"},n.createElement("div",{className:"w-full h-screen retro-blend-darken opacity-50"},n.createElement("img",{src:f,alt:"Chacha Chou"})),n.createElement("div",{className:"w-full h-screen flex flex-col justify-center items-center text-sm fixed top-0"},n.createElement("h2",{className:"typing animate whitespace-nowrap text-primary mb-8 py-1 z-10"}),n.createElement("div",{className:"icon-wrapper flex py-8",ref:e},n.createElement("a",{href:"https://www.zhihu.com/people/chachaxw",target:"_blank",rel:"noreferrer"},n.createElement("div",{className:"icon zhihu relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg mx-5"},n.createElement("div",{className:"tooltip"},"知乎"),n.createElement(o.Vg3,{className:"text-2xl"}))),n.createElement("a",{href:"https://twitter.com/ChachaChou18",target:"_blank",rel:"noreferrer"},n.createElement("div",{className:"icon twitter relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg mx-5"},n.createElement("div",{className:"tooltip"},"Twitter"),n.createElement(o.fWC,{className:"text-xl"}))),n.createElement("a",{href:"https://github.com/chachaxw",target:"_blank",rel:"noreferrer"},n.createElement("div",{className:"icon github relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg mx-5"},n.createElement("div",{className:"tooltip"},"Github"),n.createElement(o.hJX,{className:"text-xl"}))),n.createElement("a",{href:"https://stackoverflow.com/users/6071623/chacha",target:"_blank",rel:"noreferrer"},n.createElement("div",{className:"icon stack relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg mx-5"},n.createElement("div",{className:"tooltip"},"Stack Overflow"),n.createElement(o.Hjm,{className:"text-xl"}))),n.createElement("a",{href:"mailto:chachazw@gmail.com",rel:"noreferrer"},n.createElement("div",{className:"icon email relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg mx-5"},n.createElement("div",{className:"tooltip"},"Send Mail"),n.createElement(s.hBs,{className:"text-xl"})))),n.createElement("div",{className:"w-full charming-text p-4 text-center text-white",ref:t},"Designed & Developed by Chacha"))),n.createElement(u.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-contact-index-js-af6f5fe8692d7d653574.js.map