"use strict";(self.webpackChunktreezy_s_1=self.webpackChunktreezy_s_1||[]).push([[7077],{37077:(I,E,s)=>{s.r(E),s.d(E,{InstalledPluginsPage:()=>T,ProtectedInstalledPluginsPage:()=>c});var t=s(74081),d=s(27279),i=s(51926),o=s(27997),P=s(73354),r=s(27875),a=s(74758),g=s(70774),L=s(38101),v=s(93153),M=s(50086),e=s(32370),B=s(86967),n=s(87006),W=s(364),C=s(61020),K=s(40464),R=s(59461),U=s(44328),j=s(64797),y=s(85811),p=s(47599),Z=s(15816),$=s(97442),z=s(13576),G=s(87830),N=s(47184),S=s(71563),F=s(49204),Q=s(47853),Y=s(75719),H=s(74919),J=s(29206),V=s(98934),X=s(43433),b=s(8175);const T=()=>{const{formatMessage:_}=(0,C.Z)(),{notifyStatus:D}=(0,i.G)(),h=(0,n.lm)(),{get:x}=(0,n.kY)();(0,n.go)();const{status:m,data:O,error:A}=(0,K.useQuery)(["plugins"],async()=>{const{data:l}=await x("/admin/plugins");return l});return d.useEffect(()=>{O&&D(_({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:_({id:"global.plugins",defaultMessage:"Plugins"})})),A&&h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})},[O,A,_,D,h]),m!=="success"&&m!=="error"?(0,t.jsx)(o.A,{children:(0,t.jsx)(P.o,{"aria-busy":!0,children:(0,t.jsx)(n.dO,{})})}):(0,t.jsx)(o.A,{children:(0,t.jsxs)(P.o,{children:[(0,t.jsx)(r.T,{title:_({id:"global.plugins",defaultMessage:"Plugins"}),subtitle:_({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),(0,t.jsx)(a.D,{children:(0,t.jsxs)(g.i,{colCount:2,rowCount:O?.plugins?.length??0+1,children:[(0,t.jsx)(L.h,{children:(0,t.jsxs)(v.Tr,{children:[(0,t.jsx)(M.Th,{children:(0,t.jsx)(e.Z,{variant:"sigma",textColor:"neutral600",children:_({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(M.Th,{children:(0,t.jsx)(e.Z,{variant:"sigma",textColor:"neutral600",children:_({id:"global.description",defaultMessage:"description"})})})]})}),(0,t.jsx)(B.p,{children:O?.plugins.map(({name:l,displayName:u,description:f})=>(0,t.jsxs)(v.Tr,{children:[(0,t.jsx)(M.Td,{children:(0,t.jsx)(e.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold",children:_({id:`global.plugins.${l}`,defaultMessage:u})})}),(0,t.jsx)(M.Td,{children:(0,t.jsx)(e.Z,{textColor:"neutral800",children:_({id:`global.plugins.${l}.description`,defaultMessage:f})})})]},l))})]})})]})})},c=()=>{const{formatMessage:_}=(0,C.Z)(),D=(0,R.v9)(U.s);return(0,t.jsxs)(n.O4,{permissions:D.marketplace?.main,children:[(0,t.jsx)(W.q,{title:_({id:"global.plugins",defaultMessage:"Plugins"})}),(0,t.jsx)(T,{})]})}},27997:(I,E,s)=>{s.d(E,{A:()=>r});var t=s(74081),d=s(72450),i=s(93415);const o=(0,d.ZP)(i.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,P=(0,d.ZP)(i.x)`
  overflow-x: hidden;
`,r=({sideNav:a,children:g})=>(0,t.jsxs)(o,{hasSideNav:Boolean(a),children:[a,(0,t.jsx)(P,{paddingBottom:10,children:g})]})}}]);
