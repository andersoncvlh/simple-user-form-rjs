(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{ETMN:function(e,t,a){"use strict";a.r(t);var o=a("nKUr"),n=a("q1tI"),r=a.n(n),i=a("ofer"),l=a("tRbT"),c=a("r9w1"),s=a("ZGBi"),d=a("VmPI");t.default=function(){return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(i.a,{variant:"h6",gutterBottom:!0,children:"Payment method"}),Object(o.jsxs)(l.a,{container:!0,spacing:3,children:[Object(o.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(c.a,{required:!0,id:"cardName",label:"Name on card",fullWidth:!0,autoComplete:"cc-name"})}),Object(o.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(c.a,{required:!0,id:"cardNumber",label:"Card number",fullWidth:!0,autoComplete:"cc-number"})}),Object(o.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(c.a,{required:!0,id:"expDate",label:"Expiry date",fullWidth:!0,autoComplete:"cc-exp"})}),Object(o.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(c.a,{required:!0,id:"cvv",label:"CVV",helperText:"Last three digits on signature strip",fullWidth:!0,autoComplete:"cc-csc"})}),Object(o.jsx)(l.a,{item:!0,xs:12,children:Object(o.jsx)(s.a,{control:Object(o.jsx)(d.a,{color:"secondary",name:"saveCard",value:"yes"}),label:"Remember credit card details for next time"})})]})]})}},T7gt:function(e,t,a){"use strict";a.r(t);var o=a("nKUr"),n=a("q1tI"),r=a.n(n),i=a("R/WZ"),l=a("ofer"),c=a("eD//"),s=a("wx14"),d=a("Ff2n"),p=(a("17x9"),a("iuhU")),m=a("H2TA"),b=a("VD++"),u=a("ucBr"),h=a("bfFb"),g=a("MquD"),x=a("i8i4"),j="undefined"===typeof window?n.useEffect:n.useLayoutEffect,f=n.forwardRef((function(e,t){var a=e.alignItems,o=void 0===a?"center":a,r=e.autoFocus,i=void 0!==r&&r,l=e.button,c=void 0!==l&&l,m=e.children,f=e.classes,v=e.className,y=e.component,O=e.ContainerComponent,C=void 0===O?"li":O,S=e.ContainerProps,N=(S=void 0===S?{}:S).className,k=Object(d.a)(S,["className"]),w=e.dense,z=void 0!==w&&w,L=e.disabled,E=void 0!==L&&L,T=e.disableGutters,R=void 0!==T&&T,I=e.divider,B=void 0!==I&&I,W=e.focusVisibleClassName,F=e.selected,P=void 0!==F&&F,$=Object(d.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),V=n.useContext(g.a),A={dense:z||V.dense||!1,alignItems:o},D=n.useRef(null);j((function(){i&&D.current&&D.current.focus()}),[i]);var M=n.Children.toArray(m),q=M.length&&Object(u.a)(M[M.length-1],["ListItemSecondaryAction"]),U=n.useCallback((function(e){D.current=x.findDOMNode(e)}),[]),H=Object(h.a)(U,t),G=Object(s.a)({className:Object(p.a)(f.root,v,A.dense&&f.dense,!R&&f.gutters,B&&f.divider,E&&f.disabled,c&&f.button,"center"!==o&&f.alignItemsFlexStart,q&&f.secondaryAction,P&&f.selected),disabled:E},$),_=y||"li";return c&&(G.component=y||"div",G.focusVisibleClassName=Object(p.a)(f.focusVisible,W),_=b.a),q?(_=G.component||y?_:"div","li"===C&&("li"===_?_="div":"li"===G.component&&(G.component="div")),n.createElement(g.a.Provider,{value:A},n.createElement(C,Object(s.a)({className:Object(p.a)(f.container,N),ref:H},k),n.createElement(_,G,M),M.pop()))):n.createElement(g.a.Provider,{value:A},n.createElement(_,Object(s.a)({ref:H},G),M))})),v=Object(m.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(f),y=n.forwardRef((function(e,t){var a=e.children,o=e.classes,r=e.className,i=e.disableTypography,c=void 0!==i&&i,m=e.inset,b=void 0!==m&&m,u=e.primary,h=e.primaryTypographyProps,x=e.secondary,j=e.secondaryTypographyProps,f=Object(d.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),v=n.useContext(g.a).dense,y=null!=u?u:a;null==y||y.type===l.a||c||(y=n.createElement(l.a,Object(s.a)({variant:v?"body2":"body1",className:o.primary,component:"span",display:"block"},h),y));var O=x;return null==O||O.type===l.a||c||(O=n.createElement(l.a,Object(s.a)({variant:"body2",className:o.secondary,color:"textSecondary",display:"block"},j),O)),n.createElement("div",Object(s.a)({className:Object(p.a)(o.root,r,v&&o.dense,b&&o.inset,y&&O&&o.multiline),ref:t},f),y,O)})),O=Object(m.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(y),C=a("tRbT"),S=[{name:"Product 1",desc:"A nice thing",price:"$9.99"},{name:"Product 2",desc:"Another thing",price:"$3.45"},{name:"Product 3",desc:"Something else",price:"$6.51"},{name:"Product 4",desc:"Best thing of all",price:"$14.11"},{name:"Shipping",desc:"",price:"Free"}],N=["1 Material-UI Drive","Reactville","Anytown","99999","USA"],k=[{name:"Card type",detail:"Visa"},{name:"Card holder",detail:"Mr John Smith"},{name:"Card number",detail:"xxxx-xxxx-xxxx-1234"},{name:"Expiry date",detail:"04/2024"}],w=Object(i.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}}));t.default=function(){var e=w();return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(l.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(o.jsxs)(c.a,{disablePadding:!0,children:[S.map((function(t){return Object(o.jsxs)(v,{className:e.listItem,children:[Object(o.jsx)(O,{primary:t.name,secondary:t.desc}),Object(o.jsx)(l.a,{variant:"body2",children:t.price})]},t.name)})),Object(o.jsxs)(v,{className:e.listItem,children:[Object(o.jsx)(O,{primary:"Total"}),Object(o.jsx)(l.a,{variant:"subtitle1",className:e.total,children:"$34.06"})]})]}),Object(o.jsxs)(C.a,{container:!0,spacing:2,children:[Object(o.jsxs)(C.a,{item:!0,xs:12,sm:6,children:[Object(o.jsx)(l.a,{variant:"h6",gutterBottom:!0,className:e.title,children:"Shipping"}),Object(o.jsx)(l.a,{gutterBottom:!0,children:"John Smith"}),Object(o.jsx)(l.a,{gutterBottom:!0,children:N.join(", ")})]}),Object(o.jsxs)(C.a,{item:!0,container:!0,direction:"column",xs:12,sm:6,children:[Object(o.jsx)(l.a,{variant:"h6",gutterBottom:!0,className:e.title,children:"Payment details"}),Object(o.jsx)(C.a,{container:!0,children:k.map((function(e){return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(C.a,{item:!0,xs:6,children:Object(o.jsx)(l.a,{gutterBottom:!0,children:e.name})}),Object(o.jsx)(C.a,{item:!0,xs:6,children:Object(o.jsx)(l.a,{gutterBottom:!0,children:e.detail})})]},e.name)}))})]})]})]})}},kmcv:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return X}));var o=a("rePB"),n=a("nKUr"),r=a("q1tI"),i=a.n(r),l=a("R/WZ"),c=a("wx14"),s=(a("17x9"),a("H2TA")),d={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},p=function(e){return Object(c.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var m=Object(s.a)((function(e){return{"@global":{html:d,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(c.a)({margin:0},p(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,a=void 0===t?null:t;return e.classes,r.createElement(r.Fragment,null,a)})),b=a("Ff2n"),u=a("iuhU"),h=a("NqtD"),g=a("kKAo"),x=r.forwardRef((function(e,t){var a=e.classes,o=e.className,n=e.color,i=void 0===n?"primary":n,l=e.position,s=void 0===l?"fixed":l,d=Object(b.a)(e,["classes","className","color","position"]);return r.createElement(g.a,Object(c.a)({square:!0,component:"header",elevation:4,className:Object(u.a)(a.root,a["position".concat(Object(h.a)(s))],a["color".concat(Object(h.a)(i))],o,"fixed"===s&&"mui-fixed"),ref:t},d))})),j=Object(s.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(x),f=r.forwardRef((function(e,t){var a=e.classes,o=e.className,n=e.component,i=void 0===n?"div":n,l=e.disableGutters,s=void 0!==l&&l,d=e.variant,p=void 0===d?"regular":d,m=Object(b.a)(e,["classes","className","component","disableGutters","variant"]);return r.createElement(i,Object(c.a)({className:Object(u.a)(a.root,a[p],o,!s&&a.gutters),ref:t},m))})),v=Object(s.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(o.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(f),y=r.forwardRef((function(e,t){var a=e.active,o=e.alternativeLabel,n=void 0!==o&&o,i=e.classes,l=e.className,s=e.completed,d=e.disabled,p=(e.index,e.orientation),m=void 0===p?"horizontal":p,h=Object(b.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return r.createElement("div",Object(c.a)({className:Object(u.a)(i.root,i[m],l,n&&i.alternativeLabel,a&&i.active,s&&i.completed,d&&i.disabled),ref:t},h),r.createElement("span",{className:Object(u.a)(i.line,{horizontal:i.lineHorizontal,vertical:i.lineVertical}[m])}))})),O=Object(s.a)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(y),C=r.createElement(O,null),S=r.forwardRef((function(e,t){var a=e.activeStep,o=void 0===a?0:a,n=e.alternativeLabel,i=void 0!==n&&n,l=e.children,s=e.classes,d=e.className,p=e.connector,m=void 0===p?C:p,h=e.nonLinear,x=void 0!==h&&h,j=e.orientation,f=void 0===j?"horizontal":j,v=Object(b.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),y=r.isValidElement(m)?r.cloneElement(m,{orientation:f}):null,O=r.Children.toArray(l),S=O.map((function(e,t){var a={index:t,active:!1,completed:!1,disabled:!1};return o===t?a.active=!0:!x&&o>t?a.completed=!0:!x&&o<t&&(a.disabled=!0),r.cloneElement(e,Object(c.a)({alternativeLabel:i,connector:y,last:t+1===O.length,orientation:f},a,e.props))}));return r.createElement(g.a,Object(c.a)({square:!0,elevation:0,className:Object(u.a)(s.root,s[f],d,i&&s.alternativeLabel),ref:t},v),S)})),N=Object(s.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(S),k=(a("TOwV"),r.forwardRef((function(e,t){var a=e.active,o=void 0!==a&&a,n=e.alternativeLabel,i=e.children,l=e.classes,s=e.className,d=e.completed,p=void 0!==d&&d,m=e.connector,h=e.disabled,g=void 0!==h&&h,x=e.expanded,j=void 0!==x&&x,f=e.index,v=e.last,y=e.orientation,O=Object(b.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]),C=m?r.cloneElement(m,{orientation:y,alternativeLabel:n,index:f,active:o,completed:p,disabled:g}):null,S=r.createElement("div",Object(c.a)({className:Object(u.a)(l.root,l[y],s,n&&l.alternativeLabel,p&&l.completed),ref:t},O),C&&n&&0!==f?C:null,r.Children.map(i,(function(e){return r.isValidElement(e)?r.cloneElement(e,Object(c.a)({active:o,alternativeLabel:n,completed:p,disabled:g,expanded:j,last:v,icon:f+1,orientation:y},e.props)):null})));return C&&!n&&0!==f?r.createElement(r.Fragment,null,C,S):S}))),w=Object(s.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(k),z=a("ofer"),L=a("5AJ6"),E=Object(L.a)(r.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),T=Object(L.a)(r.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),R=a("HR5l"),I=r.createElement("circle",{cx:"12",cy:"12",r:"12"}),B=r.forwardRef((function(e,t){var a=e.completed,o=void 0!==a&&a,n=e.icon,i=e.active,l=void 0!==i&&i,c=e.error,s=void 0!==c&&c,d=e.classes;if("number"===typeof n||"string"===typeof n){var p=Object(u.a)(d.root,l&&d.active,s&&d.error,o&&d.completed);return s?r.createElement(T,{className:p,ref:t}):o?r.createElement(E,{className:p,ref:t}):r.createElement(R.a,{className:p,ref:t},I,r.createElement("text",{className:d.text,x:"12",y:"16",textAnchor:"middle"},n))}return n})),W=Object(s.a)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(B),F=r.forwardRef((function(e,t){var a=e.active,o=void 0!==a&&a,n=e.alternativeLabel,i=void 0!==n&&n,l=e.children,s=e.classes,d=e.className,p=e.completed,m=void 0!==p&&p,h=e.disabled,g=void 0!==h&&h,x=e.error,j=void 0!==x&&x,f=(e.expanded,e.icon),v=(e.last,e.optional),y=e.orientation,O=void 0===y?"horizontal":y,C=e.StepIconComponent,S=e.StepIconProps,N=Object(b.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),k=C;return f&&!k&&(k=W),r.createElement("span",Object(c.a)({className:Object(u.a)(s.root,s[O],d,g&&s.disabled,i&&s.alternativeLabel,j&&s.error),ref:t},N),f||k?r.createElement("span",{className:Object(u.a)(s.iconContainer,i&&s.alternativeLabel)},r.createElement(k,Object(c.a)({completed:m,active:o,error:j,icon:f},S))):null,r.createElement("span",{className:s.labelContainer},l?r.createElement(z.a,{variant:"body2",component:"span",display:"block",className:Object(u.a)(s.label,i&&s.alternativeLabel,m&&s.completed,o&&s.active,j&&s.error)},l):null,v))}));F.muiName="StepLabel";var P=Object(s.a)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(F),$=a("ye/S"),V=a("VD++"),A=r.forwardRef((function(e,t){var a=e.children,o=e.classes,n=e.className,i=e.color,l=void 0===i?"default":i,s=e.component,d=void 0===s?"button":s,p=e.disabled,m=void 0!==p&&p,g=e.disableElevation,x=void 0!==g&&g,j=e.disableFocusRipple,f=void 0!==j&&j,v=e.endIcon,y=e.focusVisibleClassName,O=e.fullWidth,C=void 0!==O&&O,S=e.size,N=void 0===S?"medium":S,k=e.startIcon,w=e.type,z=void 0===w?"button":w,L=e.variant,E=void 0===L?"text":L,T=Object(b.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),R=k&&r.createElement("span",{className:Object(u.a)(o.startIcon,o["iconSize".concat(Object(h.a)(N))])},k),I=v&&r.createElement("span",{className:Object(u.a)(o.endIcon,o["iconSize".concat(Object(h.a)(N))])},v);return r.createElement(V.a,Object(c.a)({className:Object(u.a)(o.root,o[E],n,"inherit"===l?o.colorInherit:"default"!==l&&o["".concat(E).concat(Object(h.a)(l))],"medium"!==N&&[o["".concat(E,"Size").concat(Object(h.a)(N))],o["size".concat(Object(h.a)(N))]],x&&o.disableElevation,m&&o.disabled,C&&o.fullWidth),component:d,disabled:m,focusRipple:!f,focusVisibleClassName:Object(u.a)(o.focusVisible,y),ref:t,type:z},T),r.createElement("span",{className:o.label},R,a,I))})),D=Object(s.a)((function(e){return{root:Object(c.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object($.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object($.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object($.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object($.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object($.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object($.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object($.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(A),M=a("G7As"),q=a("bfFb"),U=r.forwardRef((function(e,t){var a=e.classes,o=e.className,n=e.color,i=void 0===n?"primary":n,l=e.component,s=void 0===l?"a":l,d=e.onBlur,p=e.onFocus,m=e.TypographyClasses,g=e.underline,x=void 0===g?"hover":g,j=e.variant,f=void 0===j?"inherit":j,v=Object(b.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),y=Object(M.a)(),O=y.isFocusVisible,C=y.onBlurVisible,S=y.ref,N=r.useState(!1),k=N[0],w=N[1],L=Object(q.a)(t,S);return r.createElement(z.a,Object(c.a)({className:Object(u.a)(a.root,a["underline".concat(Object(h.a)(x))],o,k&&a.focusVisible,"button"===s&&a.button),classes:m,color:i,component:s,onBlur:function(e){k&&(C(),w(!1)),d&&d(e)},onFocus:function(e){O(e)&&w(!0),p&&p(e)},ref:L,variant:f},v))})),H=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(U),G=a("nhWg"),_=a("T7gt"),J=a("Dz+C"),K=a("ETMN");function Z(){return Object(n.jsxs)(z.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(H,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var Y=Object(l.a)((function(e){return{appBar:{position:"relative"},layout:Object(o.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(o.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),Q=["Personal information","Products","Payment details","Review your order"],X=!0;t.default=function(){var e=Y(),t=Object(r.useState)(0),a=t[0],o=t[1],l=Object(r.useState)([]),c=l[0],s=l[1],d=Object(r.useState)(0),p=d[0],b=d[1],u=function(e){var t=c.slice(),a=t.indexOf(e);if(-1!==a){e.selected=!e.selected,t.splice(a,1,e);var o=h();s(t),b(o)}else console.log("N\xe3o encontrado")},h=function(){var e=0,t=c.filter((function(e){return e.selected}));return t&&t.length>0&&(e=t.map((function(e){return e.price})).reduce((function(e,t){return e+t}))),parseFloat(e.toFixed(2))};return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(m,{}),Object(n.jsx)(j,{position:"absolute",color:"default",className:e.appBar,children:Object(n.jsx)(v,{children:Object(n.jsx)(z.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Company name"})})}),Object(n.jsxs)("main",{className:e.layout,children:[Object(n.jsxs)(g.a,{className:e.paper,children:[Object(n.jsx)(z.a,{component:"h1",variant:"h4",align:"center",children:"Life insurance quote"}),Object(n.jsx)(N,{activeStep:a,className:e.stepper,children:Q.map((function(e){return Object(n.jsx)(w,{children:Object(n.jsx)(P,{children:e})},e)}))}),Object(n.jsx)(i.a.Fragment,{children:a===Q.length?Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(z.a,{variant:"h5",gutterBottom:!0,children:"Thank you for your order."}),Object(n.jsx)(z.a,{variant:"subtitle1",children:"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped."})]}):Object(n.jsxs)(i.a.Fragment,{children:[function(e){switch(e){case 0:return Object(n.jsx)(G.default,{});case 1:return Object(n.jsx)(J.default,{products:c,onChange:u,price:p});case 2:return Object(n.jsx)(K.default,{});case 3:return Object(n.jsx)(_.default,{});default:throw new Error("Unknown step")}}(a),Object(n.jsxs)("div",{className:e.buttons,children:[0!==a&&Object(n.jsx)(D,{onClick:function(){o(a-1)},className:e.button,children:"Back"}),Object(n.jsx)(D,{variant:"contained",color:"primary",onClick:function(){o(a+1)},className:e.button,children:a===Q.length-1?"Place order":"Next"})]})]})})]}),Object(n.jsx)(Z,{})]})]})}},nhWg:function(e,t,a){"use strict";a.r(t);var o=a("nKUr"),n=a("q1tI"),r=a.n(n),i=a("ofer"),l=a("tRbT"),c=a("r9w1"),s=a("ZGBi"),d=a("VmPI");t.default=function(){return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(i.a,{variant:"h6",gutterBottom:!0,children:"Personal informations"}),Object(o.jsxs)(l.a,{container:!0,spacing:3,children:[Object(o.jsx)(l.a,{item:!0,xs:12,sm:6,children:Object(o.jsx)(c.a,{required:!0,id:"firstName",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"given-name"})}),Object(o.jsx)(l.a,{item:!0,xs:12,sm:6,children:Object(o.jsx)(c.a,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"family-name"})}),Object(o.jsx)(l.a,{item:!0,xs:12,children:Object(o.jsx)(c.a,{required:!0,id:"address1",name:"address1",label:"Address line 1",fullWidth:!0,autoComplete:"shipping address-line1"})}),Object(o.jsx)(l.a,{item:!0,xs:12,children:Object(o.jsx)(c.a,{id:"address2",name:"address2",label:"Address line 2",fullWidth:!0,autoComplete:"shipping address-line2"})}),Object(o.jsx)(l.a,{item:!0,xs:12,sm:6,children:Object(o.jsx)(c.a,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"shipping address-level2"})}),Object(o.jsx)(l.a,{item:!0,xs:12,sm:6,children:Object(o.jsx)(c.a,{id:"state",name:"state",label:"State/Province/Region",fullWidth:!0})}),Object(o.jsx)(l.a,{item:!0,xs:12,sm:6,children:Object(o.jsx)(c.a,{required:!0,id:"zip",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"shipping postal-code"})}),Object(o.jsx)(l.a,{item:!0,xs:12,sm:6,children:Object(o.jsx)(c.a,{required:!0,id:"country",name:"country",label:"Country",fullWidth:!0,autoComplete:"shipping country"})}),Object(o.jsx)(l.a,{item:!0,xs:12,children:Object(o.jsx)(s.a,{control:Object(o.jsx)(d.a,{color:"secondary",name:"saveAddress",value:"yes"}),label:"Use this address for payment details"})})]})]})}}}]);