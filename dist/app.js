parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"A2T1":[function(require,module,exports) {
"use strict";var t=this,e=function(){};e.prototype.onAdd=function(e){t.container=document.createElement("div"),t.container.className="mapboxgl-ctrl";var o={width:"96px",height:"auto",cursor:"pointer",marginLeft:"10px",marginBottom:"10px"};for(var n in o)t.container.style[n]=o[n];var i=document.createElement("img");return i.src="https://tilecloud.github.io/logo/tilecloud-256x60.png",i.style.maxWidth="100%",i.style.display="block",t.container.appendChild(i),i.addEventListener("click",function(){location.href="https://tilecloud.io/"}),t.container},e.prototype.onRemove=function(){t.container.parentNode.removeChild(t.container)},"undefined"!=typeof module&&void 0!==module.exports?module.exports=e:window.TileCloudControl=e;
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/app.map