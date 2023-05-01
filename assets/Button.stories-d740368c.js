import{r as N}from"./index-f1f749bf.js";import{c as O}from"./clsx.m-1229b3e0.js";import"./_commonjsHelpers-042e6b4d.js";var l={},D={get exports(){return l},set exports(s){l=s}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L=N,R=Symbol.for("react.element"),S=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,k=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function j(s,e,a){var r,t={},c=null,p=null;a!==void 0&&(c=""+a),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)P.call(e,r)&&!q.hasOwnProperty(r)&&(t[r]=e[r]);if(s&&s.defaultProps)for(r in e=s.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:R,type:s,key:c,ref:p,props:t,_owner:k.current}}u.Fragment=S;u.jsx=j;u.jsxs=j;(function(s){s.exports=u})(D);const B=l.jsx,w=l.jsxs,I="_button_e29bm_1",V="_button_primary_e29bm_15",T="_button_success_e29bm_26",$="_button_failed_e29bm_37",C="_loader_e29bm_53",F="_pulse_e29bm_1",d={button:I,button_primary:V,button_success:T,button_failed:$,loader:C,pulse:F},m=({children:s,className:e="",isDisabled:a=!1,isLoading:r=!1,theme:t="primary"})=>w("button",{className:O(d.button,d[`button_${t}`],e),disabled:a||r,children:[s,r&&B("span",{className:d.loader})]});try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},theme:{defaultValue:{value:"primary"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"failed"'},{value:'"success"'}]}}}}}catch{}const W={component:m,tags:["autodocs"],title:"Example/Button"},o={args:{children:"Редактировать профиль"}},n={args:{children:"Неактивная кнопка",isDisabled:!0}},i={args:{children:"Идет загрузка",isLoading:!0}};var _,f,b;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Редактировать профиль'
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,g,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Неактивная кнопка',
    isDisabled: true
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,h,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Идет загрузка',
    isLoading: true
  }
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const Y=["Primary","Disabled","Loading"];export{n as Disabled,i as Loading,o as Primary,Y as __namedExportsOrder,W as default};
//# sourceMappingURL=Button.stories-d740368c.js.map
