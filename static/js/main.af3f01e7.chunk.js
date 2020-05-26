(this["webpackJsonpwebsite-builder"]=this["webpackJsonpwebsite-builder"]||[]).push([[0],{1:function(e,t,a){e.exports={Inspector:"Inspector_Inspector__3WPh0",Button:"Inspector_Button__1FKLO",Icon:"Inspector_Icon__7g4TO",Main:"Inspector_Main__j4paC",Category:"Inspector_Category__10PAM",Name:"Inspector_Name__3Qcx9",Wrapper:"Inspector_Wrapper__1nR6A",Type:"Inspector_Type__2xiRS",FieldName:"Inspector_FieldName__2XkFh",Input:"Inspector_Input__3alb2",Textarea:"Inspector_Textarea__3ytcC",Dropdown:"Inspector_Dropdown__ROz_L",Reveal:"Inspector_Reveal__17c9m"}},10:function(e,t,a){e.exports={ModalComponent:"ModalComponent_ModalComponent__YiUSP",Wrapper:"ModalComponent_Wrapper__3yZH4",expand:"ModalComponent_expand__xYB8Q",Section:"ModalComponent_Section__3gaaK",Name:"ModalComponent_Name__12fwJ",Icon:"ModalComponent_Icon__3I4ap",Dropdown:"ModalComponent_Dropdown__1yGgI",Option:"ModalComponent_Option__32_y5"}},13:function(e,t,a){e.exports={Interstitial:"Interstitial_Interstitial__3lQqE",Image:"Interstitial_Image__1iqO2",Wrapper:"Interstitial_Wrapper__1lGz8",Meta:"Interstitial_Meta__gyTr6",Main:"Interstitial_Main__21who",Line:"Interstitial_Line__1ap7c",Description:"Interstitial_Description__3lLjQ",Link:"Interstitial_Link__1vAWP"}},15:function(e,t,a){e.exports={Introduction:"Introduction_Introduction__6gGa6",Wrapper:"Introduction_Wrapper__2ywTM",Meta:"Introduction_Meta__3Hx2u",Main:"Introduction_Main__352U6",Line:"Introduction_Line__OuCh_",Description:"Introduction_Description__kiscO"}},28:function(e,t,a){e.exports=a(39)},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),l=a.n(i),o=a(2),c=a(5),u=a(20),m=a(19),s=a(11),p=a(4),y=a.n(p),v=function(e){var t=e.pages,a=e.selectedPage,i=e.selectedComponent,l=e.addPage,c=e.removePage,u=e.addComponent,m=e.selectPage,p=e.selectComponent,v=Object(n.useState)(!0),_=Object(s.a)(v,2),d=_[0],b=_[1],g=Object(o.f)();return r.a.createElement("div",{className:[y.a.Hierarchy,d?y.a.Reveal:""].join(" ")},r.a.createElement("button",{className:y.a.Button,onClick:function(){return b(!d)}},r.a.createElement("div",{className:y.a.Icon})),r.a.createElement("div",{className:y.a.Main},t.map((function(e,n){return r.a.createElement("div",{className:[y.a.Page,a===n?y.a.ActivePage:""].join(" "),key:e.name},r.a.createElement("div",{className:y.a.Wrapper,onClick:function(){return function(e){g.push(a!==e?t[e].url:"/"),m(a!==e?e:null),p(null)}(n)}},r.a.createElement("p",{className:y.a.Name},e.name),r.a.createElement("div",{className:y.a.Expand})),r.a.createElement("div",{className:y.a.Components},e.content.map((function(e,t){return r.a.createElement("div",{className:[y.a.Component,i===t?y.a.ActiveComponent:""].join(" "),onClick:function(){return function(e){p(i!==e?e:null)}(t)},key:t},r.a.createElement("p",{className:y.a.Type},e.type," "))})),r.a.createElement("div",{className:y.a.Options},r.a.createElement("button",{className:y.a.Add,onClick:function(){return u(!0,null)}},"Add component"),0!==n&&r.a.createElement("button",{className:y.a.Remove,onClick:function(){return c(n)}},"Remove page"))))})),r.a.createElement("button",{className:y.a.AddPage,onClick:l},"Add Page")))},_=a(1),d=a.n(_),b=function(e){var t=e.pages,a=e.styles,i=e.selectedPage,l=e.selectedComponent,o=e.changePage,c=e.changeContent,u=e.changeStyle,m=Object(n.useState)(!0),p=Object(s.a)(m,2),y=p[0],v=p[1],_=Object(n.useState)(0),b=Object(s.a)(_,2),g=b[0],h=b[1];if(null==i)return null;var f=function(e){return"Page"===e?r.a.createElement("div",{className:d.a.Category},r.a.createElement("h2",{className:d.a.Name},e),r.a.createElement("div",{className:d.a.Wrapper},r.a.createElement("div",{className:d.a.Type},r.a.createElement("p",{className:d.a.FieldName},"Name"),r.a.createElement("input",{className:d.a.Input,placeholder:"Start typing..",value:t[i].name,onChange:function(e){return o("name",e.target.value)}})),r.a.createElement("div",{className:d.a.Type},r.a.createElement("p",{className:d.a.FieldName},"URL"),r.a.createElement("input",{className:d.a.Input,placeholder:"Start typing..",value:t[i].url,onChange:function(e){return o("url",e.target.value)}})))):null==l?null:"Content"===e?r.a.createElement("div",{className:d.a.Category},r.a.createElement("h2",{className:d.a.Name},e),r.a.createElement("div",{className:d.a.Wrapper},t[i].content[l].content.map((function(e,t){var a;switch(e.type){case"textarea":a=r.a.createElement("textarea",{className:d.a.Textarea,placeholder:"Start typing..",value:e.value,onChange:function(e){return c(t,e.target.value)}});break;case"input":a=r.a.createElement("input",{className:d.a.Input,placeholder:"Start typing..",value:e.value,onChange:function(e){return c(t,e.target.value)}});break;case"url":a=r.a.createElement("input",{className:d.a.Input,placeholder:"Start typing..",value:e.value,onChange:function(e){return c(t,"/"+e.target.value.substr(1))}})}return r.a.createElement("div",{className:d.a.Type,key:e.name},r.a.createElement("p",{className:d.a.FieldName},e.name),a)})))):"Styles"===e?r.a.createElement("div",{className:d.a.Category},r.a.createElement("h2",{className:d.a.Name},e),r.a.createElement("div",{className:d.a.Wrapper},r.a.createElement("div",{className:d.a.Type},r.a.createElement("p",{className:d.a.FieldName},"Element"),r.a.createElement("select",{className:d.a.Dropdown,value:g,onChange:function(e){return h(e.target.value)}},a[t[i].content[l].type].map((function(e,t){return r.a.createElement("option",{value:t,key:e.name},e.name)})))),a[t[i].content[l].type][g].options.map((function(e,t){var a;switch(e.type){case"text":a=r.a.createElement("input",{style:{textAlign:"center"},className:d.a.Input,value:e.value,onChange:function(e){return u(t,g,e.target.value)}})}return r.a.createElement("div",{className:d.a.Type,key:e.name},r.a.createElement("p",{className:d.a.FieldName},e.name),a)})))):void 0};return r.a.createElement("div",{className:[d.a.Inspector,y?d.a.Reveal:""].join(" ")},r.a.createElement("button",{className:d.a.Button,onClick:function(){return v(!y)}},r.a.createElement("div",{className:d.a.Icon})),r.a.createElement("div",{className:d.a.Main},f("Page"),f("Content"),f("Styles")))},g=[{type:"Banner",content:[{name:"main",attribute:"main",type:"input",value:"Invest in your brows, it is the crown you never take off"},{name:"description",attribute:"description",type:"textarea",value:"Come and discover your oasis. It has never been easier to take a break from stress and the harmful factors that surround you every day!"},{name:"image URL",attribute:"image",type:"input",value:"https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{name:"button left URL",attribute:"linkLeftTo",type:"url",value:"/services"},{name:"button left text",attribute:"linkLeftText",type:"input",value:"View services"},{name:"button right URL",attribute:"linkRightTo",type:"input",value:"https://letscomit.com/"},{name:"button right text",attribute:"linkRightText",type:"input",value:"Book now"},{name:"scroll to ID name",attribute:"scrollTo",type:"input",value:""}]},{type:"Introduction",content:[{name:"meta",attribute:"meta",type:"input",value:"What we offer"},{name:"main",attribute:"main",type:"input",value:"Our services"},{name:"description",attribute:"description",type:"textarea",value:"Donec nec mattis turpis. Ut non libero diam. Curabitur malesuada nec neque nec hendrerit. Pellentesque commodo a tellus a feugiat. Cras porta lorem in lorem sodales semper. Sed viverra, sem quis consectetur eleifend, magna orci dictum metus, ut venenatis neque metus ut mi."},{name:"ID",attribute:"id",type:"input",value:""}]},{type:"Interstitial",content:[{name:"meta",attribute:"meta",type:"input",value:"About us"},{name:"main",attribute:"main",type:"input",value:"What we are about"},{name:"description",attribute:"description",type:"textarea",value:"Vestibulum placerat erat in venenatis rhoncus. Nam pellentesque turpis a nisl rutrum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada."},{name:"image URL",attribute:"image",type:"input",value:"https://images.pexels.com/photos/4153800/pexels-photo-4153800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{name:"button text",attribute:"linkText",type:"input",value:"Learn more"},{name:"button URL",attribute:"linkTo",type:"url",value:"/about"},{name:"ID",attribute:"id",type:"input",value:""}]}],h=a(10),f=a.n(h),E=function(e){var t=e.addComponent,a=Object(n.useState)(0),i=Object(s.a)(a,2),l=i[0],o=i[1];return r.a.createElement("div",{className:f.a.ModalComponent},r.a.createElement("div",{className:f.a.Wrapper},r.a.createElement("div",{className:f.a.Section},r.a.createElement("h1",{className:f.a.Name},"Preview"),r.a.createElement("div",{className:f.a.Icon})),r.a.createElement("div",{className:f.a.Section},r.a.createElement("h1",{className:f.a.Name},"Component"),r.a.createElement("select",{className:f.a.Dropdown,value:l,onChange:function(e){return o(e.target.value)}},g.map((function(e,t){return r.a.createElement("option",{value:t,key:e.type},e.type)})))),r.a.createElement("div",{className:f.a.Section},r.a.createElement("button",{className:f.a.Option,onClick:function(){t(!1,g[l])}},"Add"),r.a.createElement("button",{className:f.a.Option,onClick:function(){t(!1,null)}},"Cancel"))))},x={},N=[],C={},I=function(){var e=Object(n.useState)(x)[1];return Object(n.useEffect)((function(){return N.push(e),function(){N=N.filter((function(t){return t!==e}))}}),[e]),[x,function(e,t){var a=C[e](x,t);x=Object(c.a)(Object(c.a)({},x),a);var n,r=Object(m.a)(N);try{for(r.s();!(n=r.n()).done;){(0,n.value)(x)}}catch(i){r.e(i)}finally{r.f()}}]},F=function(e,t){t&&(x=Object(c.a)(Object(c.a)({},x),t)),C=Object(c.a)(Object(c.a)({},C),e)},S=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(),o=Object(s.a)(l,2),p=o[0],y=o[1],_=Object(n.useState)(!1),d=Object(s.a)(_,2),g=d[0],h=d[1],f=I()[0].pages,x=I()[0].styles,N=I()[1],C=function(e,t){if(h(e),null!=t){var n=Object(u.a)(f);n[a].content.push(t),N("MODIFY_PAGE",{pages:n}),y(n[a].content.length-1)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{pages:f,selectedPage:a,selectedComponent:p,addPage:function(){var e,t=0,a=Object(m.a)(f);try{for(a.s();!(e=a.n()).done;){e.value.name.includes("New Page")&&t++}}catch(r){a.e(r)}finally{a.f()}var n={name:"New Page"+(0!==t?" "+t:""),url:"/",content:[]};y(null),i(f.length),N("MODIFY_PAGE",{pages:f.concat([n])})},removePage:function(e){y(null),i(null);var t=Object(u.a)(f);t.splice(e,1),N("REMOVE_PAGE",{pages:t})},addComponent:C,selectPage:i,selectComponent:y}),r.a.createElement(b,{pages:f,styles:x,selectedPage:a,selectedComponent:p,changePage:function(e,t){var n=Object(u.a)(f);n[a][e]="url"===e?"/"+t.substr(1):t,N("MODIFY_PAGE",{pages:n})},changeContent:function(e,t){var n=JSON.parse(JSON.stringify(f));n[a].content[p].content[e].value=t,N("MODIFY_PAGE",{pages:n})},changeStyle:function(e,t,n){var r=Object(c.a)({},x);r[f[a].content[p].type][t].options[e].value=n,N("MODIFY_STYLES",{styles:r})}}),g&&r.a.createElement(E,{addComponent:C}))},O=a(12),k=a(8),W=a.n(k),L=function(e){var t=e.id,a=e.image,n=e.imageAlt,i=e.main,l=e.description,o=e.linkLeftTo,c=e.linkLeftText,u=e.linkRightTo,m=e.linkRightText,s=e.scrollTo,p=e.styles;return r.a.createElement("section",{className:W.a.Banner,id:t},r.a.createElement("div",{className:W.a.Image},r.a.createElement("img",{src:a,alt:n})),r.a.createElement("div",{className:W.a.Wrapper},r.a.createElement("h1",{className:W.a.Main,style:p.main},i),r.a.createElement("div",{className:W.a.Line,style:p.line}),r.a.createElement("p",{className:W.a.Description,style:p.description},l)),r.a.createElement("div",{className:W.a.Links},c&&r.a.createElement(O.b,{className:W.a.Left,to:o,style:p["button left"]},c),m&&r.a.createElement("a",{className:W.a.Right,href:u,style:p["button right"],target:"_blank",rel:"noopener noreferrer"},m)),s&&r.a.createElement("button",{className:W.a.Scroll,onClick:function(){null!=document.getElementById(s)&&document.getElementById(s).scrollIntoView({behavior:"smooth"})}},r.a.createElement("span",{className:W.a.Circle}),r.a.createElement("span",{className:W.a.Knob})))},M=a(15),j=a.n(M),H=function(e){var t=e.id,a=e.meta,n=e.main,i=e.description,l=e.styles;return i=(""+i).split("\n").flatMap((function(e,t,a){return a.length-1!==t?[e,r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null))]:e})),r.a.createElement("div",{className:j.a.Introduction,id:t},r.a.createElement("div",{className:j.a.Wrapper},a&&r.a.createElement("h2",{className:j.a.Meta,style:l.meta},a),r.a.createElement("h1",{className:j.a.Main,style:l.main},n),r.a.createElement("div",{className:j.a.Line,style:l.line}),i&&r.a.createElement("p",{className:j.a.Description,style:l.description},i)))},P=a(13),B=a.n(P),w=function(e){var t=e.id,a=e.image,n=e.meta,i=e.main,l=e.description,o=e.linkTo,c=e.linkText,u=e.newTab,m=e.styles;return r.a.createElement("div",{className:B.a.Interstitial,id:t},r.a.createElement("div",{className:B.a.Image,style:{backgroundImage:"url("+a+")"}}),r.a.createElement("div",{className:B.a.Wrapper},n&&r.a.createElement("h2",{className:B.a.Meta,style:m.meta},n),r.a.createElement("h1",{className:B.a.Main,style:m.main},i),n&&r.a.createElement("div",{className:B.a.Line,style:m.line}),r.a.createElement("p",{className:B.a.Description,style:m.description},l)),c&&r.a.createElement(O.b,{className:B.a.Link,to:o,style:m.button,target:u&&"_blank"},c))},T=function(){var e=I()[0].pages,t=I()[0].styles;I()[1];return r.a.createElement(o.c,null,e.map((function(a,n){return r.a.createElement(o.a,{path:a.url,exact:!0,render:function(){return function(a){return e[a].content.map((function(n,i){var l,o=JSON.parse("{\n                ".concat(e[a].content[i].content.map((function(e){return'\n                    "'.concat(e.attribute,'": "').concat(e.value,'"')})),"\n                }")),c=JSON.parse("{\n                ".concat(t[n.type].map((function(e){return'\n                    "'.concat(e.name,'": {\n                        ').concat(e.options.map((function(e){return'"'.concat(e.attribute,'": "').concat(e.value,'"')})),"\n                    }")})),"\n                }"));switch(n.type){case"Banner":l=r.a.createElement(L,Object.assign({},o,{styles:c,key:i}));break;case"Introduction":l=r.a.createElement(H,Object.assign({},o,{styles:c,key:i}));break;case"Interstitial":l=r.a.createElement(w,Object.assign({},o,{styles:c,key:i}))}return l}))}(n)},key:a.url})})),r.a.createElement(o.a,{render:function(){return r.a.createElement("p",null,"Not Found!")}}))},R=function(){return r.a.createElement(o.a,{render:function(e){e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(T,null))}})};a(38);F({MODIFY_PAGE:function(e,t){return Object(c.a)(Object(c.a)({},e),t)},REMOVE_PAGE:function(e,t){return Object(c.a)(Object(c.a)({},e),t)}},{pages:[{name:"Home",url:"/",content:[]}]}),F({MODIFY_STYLES:function(e,t){return Object(c.a)(Object(c.a)({},e),t)}},{styles:{Introduction:[{name:"meta",options:[{name:"Font Family",attribute:"fontFamily",type:"text",value:""},{name:"Font Size",attribute:"fontSize",type:"text",value:""},{name:"Font Weight",attribute:"fontWeight",type:"text",value:""},{name:"Letter Spacing",attribute:"letterSpacing",type:"text",value:""},{name:"Line Height",attribute:"lineHeight",type:"text",value:""},{name:"Color",attribute:"color",type:"text",value:""}]},{name:"main",options:[{name:"Font Family",attribute:"fontFamily",type:"text",value:""},{name:"Font Size",attribute:"fontSize",type:"text",value:""},{name:"Font Weight",attribute:"fontWeight",type:"text",value:""},{name:"Letter Spacing",attribute:"letterSpacing",type:"text",value:""},{name:"Line Height",attribute:"lineHeight",type:"text",value:""},{name:"Color",attribute:"color",type:"text",value:""}]},{name:"line",options:[{name:"Width",attribute:"width",type:"text",value:""},{name:"Height",attribute:"height",type:"text",value:""},{name:"Color",attribute:"backgroundColor",type:"text",value:""}]},{name:"description",options:[{name:"Font Family",attribute:"fontFamily",type:"text",value:""},{name:"Font Size",attribute:"fontSize",type:"text",value:""},{name:"Font Weight",attribute:"fontWeight",type:"text",value:""},{name:"Letter Spacing",attribute:"letterSpacing",type:"text",value:""},{name:"Line Height",attribute:"lineHeight",type:"text",value:""},{name:"Color",attribute:"color",type:"text",value:""}]}],Interstitial:[{name:"meta",options:[{name:"Font Family",attribute:"fontFamily",type:"text",value:""},{name:"Font Size",attribute:"fontSize",type:"text",value:""},{name:"Font Weight",attribute:"fontWeight",type:"text",value:""},{name:"Letter Spacing",attribute:"letterSpacing",type:"text",value:""},{name:"Line Height",attribute:"lineHeight",type:"text",value:""},{name:"Color",attribute:"color",type:"text",value:""}]},{name:"main",options:[{name:"Font Family",attribute:"fontFamily",type:"text",value:""},{name:"Font Size",attribute:"fontSize",type:"text",value:""},{name:"Font Weight",attribute:"fontWeight",type:"text",value:""},{name:"Letter Spacing",attribute:"letterSpacing",type:"text",value:""},{name:"Line Height",attribute:"lineHeight",type:"text",value:""},{name:"Color",attribute:"color",type:"text",value:""}]},{name:"line",options:[{name:"Width",attribute:"width",type:"text",value:""},{name:"Height",attribute:"height",type:"text",value:""},{name:"Color",attribute:"backgroundColor",type:"text",value:""}]},{name:"description",options:[{name:"Font Family",attribute:"fontFamily",type:"text",value:""},{name:"Font Size",attribute:"fontSize",type:"text",value:""},{name:"Font Weight",attribute:"fontWeight",type:"text",value:""},{name:"Letter Spacing",attribute:"letterSpacing",type:"text",value:""},{name:"Line Height",attribute:"lineHeight",type:"text",value:""},{name:"Color",attribute:"color",type:"text",value:""}]},{name:"button",options:[{name:"Font Family",attribute:"fontFamily",type:"text",value:""},{name:"Font Weight",attribute:"fontWeight",type:"text",value:""},{name:"Color",attribute:"color",type:"text",value:""},{name:"Border Color",attribute:"borderColor",type:"text",value:""},{name:"Background Color",attribute:"backgroundColor",type:"text",value:""}]}],Banner:[{name:"main",options:[{name:"Font Family",attribute:"fontFamily",type:"text",value:""},{name:"Font Size",attribute:"fontSize",type:"text",value:""},{name:"Font Weight",attribute:"fontWeight",type:"text",value:""},{name:"Letter Spacing",attribute:"letterSpacing",type:"text",value:""},{name:"Line Height",attribute:"lineHeight",type:"text",value:""},{name:"Color",attribute:"color",type:"text",value:""}]},{name:"line",options:[{name:"Width",attribute:"width",type:"text",value:""},{name:"Height",attribute:"height",type:"text",value:""},{name:"Color",attribute:"backgroundColor",type:"text",value:""}]},{name:"description",options:[{name:"Font Family",attribute:"fontFamily",type:"text",value:""},{name:"Font Size",attribute:"fontSize",type:"text",value:""},{name:"Font Weight",attribute:"fontWeight",type:"text",value:""},{name:"Letter Spacing",attribute:"letterSpacing",type:"text",value:""},{name:"Line Height",attribute:"lineHeight",type:"text",value:""},{name:"Color",attribute:"color",type:"text",value:""}]},{name:"button left",options:[{name:"Font Family",attribute:"fontFamily",type:"text",value:""},{name:"Font Weight",attribute:"fontWeight",type:"text",value:""},{name:"Color",attribute:"color",type:"text",value:""},{name:"Border Color",attribute:"borderColor",type:"text",value:""},{name:"Background Color",attribute:"backgroundColor",type:"text",value:""}]},{name:"button right",options:[{name:"Font Family",attribute:"fontFamily",type:"text",value:""},{name:"Font Weight",attribute:"fontWeight",type:"text",value:""},{name:"Color",attribute:"",type:"text",value:""},{name:"Border Color",attribute:"borderColor",type:"text",value:""},{name:"Background Color",attribute:"backgroundColor",type:"text",value:""}]}]}}),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O.a,{basename:"/websitebuilder"},r.a.createElement(R,null))),document.getElementById("root"))},4:function(e,t,a){e.exports={Hierarchy:"Hierarchy_Hierarchy__otl-8",Button:"Hierarchy_Button__3Dbmn",Icon:"Hierarchy_Icon__1dX6J",Main:"Hierarchy_Main__3GDX0",Page:"Hierarchy_Page__3Jur4",Wrapper:"Hierarchy_Wrapper__oM8-W",Name:"Hierarchy_Name__3awOm",Remove:"Hierarchy_Remove__2UpIt",Expand:"Hierarchy_Expand__2szM_",Components:"Hierarchy_Components__1lG6p",Component:"Hierarchy_Component__20At0",Type:"Hierarchy_Type__1A69a",ActiveComponent:"Hierarchy_ActiveComponent__Rd-Iq",Options:"Hierarchy_Options__11yL6",Add:"Hierarchy_Add___7PDW",ActivePage:"Hierarchy_ActivePage__1R24h",AddPage:"Hierarchy_AddPage__5W61H",Reveal:"Hierarchy_Reveal__2pM8k"}},8:function(e,t,a){e.exports={Banner:"Banner_Banner__3-EBE",Image:"Banner_Image__2c9iR",Wrapper:"Banner_Wrapper__2FOCx",Main:"Banner_Main__3wx7d",fadeIn:"Banner_fadeIn__1ukeV",Line:"Banner_Line__2sTrf",Description:"Banner_Description__2Wf0g",Links:"Banner_Links__9_Qvw",Left:"Banner_Left__3EIO4",Right:"Banner_Right__3HQSW",Scroll:"Banner_Scroll__32HLX",Circle:"Banner_Circle__cm1Nq",Knob:"Banner_Knob__3RfFo"}}},[[28,1,2]]]);
//# sourceMappingURL=main.af3f01e7.chunk.js.map