import{j as a,M as I}from"./index-B_YavJp2.js";import{R as d,r as v}from"./index-C2WPW1L7.js";import"./index-DX7rA-C0.js";var E={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},N=d.createContext&&d.createContext(E),R=["attr","size","title"];function T(e,t){if(e==null)return{};var r=B(e,t),n,s;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)n=c[s],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function B(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?L(Object(r),!0).forEach(function(n){F(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function F(e,t,r){return t=W(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function W(e){var t=G(e,"string");return typeof t=="symbol"?t:t+""}function G(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function D(e){return e&&e.map((t,r)=>d.createElement(t.tag,m({key:r},t.attr),D(t.child)))}function _(e){return t=>d.createElement(H,u({attr:m({},e.attr)},t),D(e.child))}function H(e){var t=r=>{var{attr:n,size:s,title:c}=e,h=T(e,R),l=s||r.size||"1em",i;return r.className&&(i=r.className),e.className&&(i=(i?i+" ":"")+e.className),d.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,h,{className:i,style:m(m({color:e.color||r.color},r.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&d.createElement("title",null,c),e.children)};return N!==void 0?d.createElement(N.Consumer,null,r=>t(r)):t(E)}function K(e){return _({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(e)}function $(e){return _({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}const A=(e,t)=>{if(!t)return e;const r=e.split(new RegExp(`(${t})`,"gi"));return a.jsx("span",{children:r.map((n,s)=>n.toLowerCase()===t.toLowerCase()?a.jsx("span",{className:"highlight",children:n},s):n)})},O=({id:e,options:t,placeholder:r,label:n,withSearch:s,usePortal:c,multiple:h})=>{const[l,i]=v.useState([]),[b,j]=v.useState(!1),[f,g]=v.useState(""),x=t.filter(o=>o.toLowerCase().includes(f.toLowerCase())&&!l.includes(o)),M=o=>{h?i([...l,o]):(i([o]),j(!1)),g("")},z=o=>{i(l.filter(w=>w!==o))},y=a.jsxs("div",{className:"dropdown-menu",children:[s&&a.jsxs("div",{className:"dropdown-search-wrapper",children:[a.jsx($,{className:"dropdown-search-icon"}),a.jsx("input",{type:"text",placeholder:"Search...",value:f,onChange:o=>g(o.target.value),className:"dropdown-search"})]}),a.jsx("ul",{className:"dropdown-options",children:x.length>0?x.map(o=>a.jsx("li",{onClick:()=>M(o),className:"dropdown-option",children:A(o,f)},o)):a.jsx("li",{className:"dropdown-no-options",children:"No options found"})})]});return a.jsxs("div",{className:"dropdown-container",id:e,children:[a.jsx("label",{className:"dropdown-label",children:n}),a.jsxs("div",{className:"dropdown-wrapper",children:[a.jsxs("div",{onClick:()=>j(!b),className:"dropdown-input",children:[l.map(o=>a.jsxs("div",{className:"dropdown-tag",children:[o,a.jsx("span",{onClick:w=>{w.stopPropagation(),z(o)},className:"dropdown-remove",children:a.jsx("span",{className:"dropdown-remove-x",children:"✖"})})]},o)),a.jsx("input",{type:"text",placeholder:l.length===0?r:"",onChange:o=>g(o.target.value),className:"dropdown-search-input",readOnly:!0}),a.jsx(K,{className:"dropdown-icon"})]}),b&&(c?I.createPortal(y,document.body):y)]})]})};O.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdown"};const X={title:"Component/Select Dropdown Field",component:O,argTypes:{id:{control:"text"},withSearch:{control:"boolean"},usePortal:{control:"boolean"},multiple:{control:"boolean"}}},J=e=>a.jsx(O,{...e}),p=J.bind({});p.args={id:"sdd-1",placeholder:"Select options...",options:["Option 1","Option with icon","Long Long Option 3","Long Long Long Option 4","Long Long Long Long Option 5","Long Long Long Long Long Option 6"],label:"Label",withSearch:!0,usePortal:!1,multiple:!0};var P,S,C;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:"args => <MultiSelectDropdown {...args} />",...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const Y=["Default"];export{p as Default,Y as __namedExportsOrder,X as default};
