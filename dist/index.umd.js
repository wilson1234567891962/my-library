(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t["my-library"]={},t.React))})(this,function(t,e){"use strict";const u="";function i({img:n,title:r,children:d}){return e.createElement("article",{"data-card":!0},e.createElement("img",{"data-card-img":!0,src:n.src,alt:n.alt}),e.createElement("h2",null,r),d)}const a="",o=e.forwardRef(({kind:n="primary",...r},d)=>e.createElement("button",{"data-button":`kind:${n}`,ref:d,...r}));t.Button=o,t.Card=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
