"use strict";(self.webpackChunkokda_networks=self.webpackChunkokda_networks||[]).push([[142],{7742:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(4848),s=n(8453);const r={sidebar_position:1},i="Overview",a={id:"IPRoute2-Sysrepo/overview",title:"Overview",description:"IPRoute2-Sysrepo is an enhanced version of IPRoute2, built on the YANG model to incorporate several advanced features, including:",source:"@site/docs/IPRoute2-Sysrepo/1-overview.md",sourceDirName:"IPRoute2-Sysrepo",slug:"/IPRoute2-Sysrepo/overview",permalink:"/IPRoute2-Sysrepo/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/okda-networks/docs_source/tree/main/docs/IPRoute2-Sysrepo/1-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"IPRoute2-Sysrepo",permalink:"/category/iproute2-sysrepo"},next:{title:"Basic Configuration",permalink:"/IPRoute2-Sysrepo/basic-config"}},c={},d=[];function l(e){const o={br:"br",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(o.p,{children:"IPRoute2-Sysrepo is an enhanced version of IPRoute2, built on the YANG model to incorporate several advanced features, including:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Configuration persistance using sysrepo data stores."}),"\n",(0,t.jsx)(o.li,{children:"Transactional configuration via NETCONF and ONM-CLI and other yang compliant configuration tools."}),"\n",(0,t.jsx)(o.li,{children:"Operational data load and streaming."}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"IPRoute2-sysrepo code is designed as a wrapper around the original IPRoute2 code, with very minimal changes, ensuring compatibility with all versions of IPRoute2. It is committed to staying current with the newest releases of IPRoute2."}),"\n",(0,t.jsx)(o.h1,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(o.p,{children:"IPRoute2-Sysrepo consits of the following components:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"IPRoute2 YANG Modules:"}),(0,t.jsx)(o.br,{}),"\n","a YANG representation of IPRoute2 configuration syntax and operational data."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"cmdgen:"}),(0,t.jsx)(o.br,{}),"\n","Responsible applying config changes on IPRoute2 YANG modules as IPRoute2 commands, does following actions:",(0,t.jsx)(o.br,{}),"\n","1- Subscribes to the YANG modules config change events.",(0,t.jsx)(o.br,{}),"\n","2- Transalates sysrepo config changes transaction to a set of iproute2 config commands and a set of rollback commands.",(0,t.jsx)(o.br,{}),"\n","4- Feeds the commands config change command set to IPRoute2 to applied on the linux Kernel and waits for the response.",(0,t.jsx)(o.br,{}),"\n","5- If one or more config change commands fails, the rollback command set are applied.",(0,t.jsx)(o.br,{}),"\n","6- Final config transation result is generated and return to sysrepo subscbribers."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"oper-data:"}),(0,t.jsx)(o.br,{}),"\n","Responsible for loading linux IPRoute2 configuraiotn at startup and providing operational data on demand:\n1- On application startup, it generates a set of show commands to populate linux sysem running configuration to sysrepo IPRoute2 YANG modules.",(0,t.jsx)(o.br,{}),"\n","2- Subscribes to the YANG modules operational data pull requests.",(0,t.jsx)(o.br,{}),"\n","3- Transalates sysrepo operational data pull requests to a set of IPRoute2 show commands.",(0,t.jsx)(o.br,{}),"\n","4- Feeds the show commands to IPRoute2 and retrives their outputs in JSON format.",(0,t.jsx)(o.br,{}),"\n","5- Maps the JSON outputs of IPRoute2 to the corresponding IPRoute2 YANG modules and updates sysrepo operational data store with the mapped data."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"Below digram illustrates this architecture:"}),"\n",(0,t.jsx)("img",{src:"/img/iproute2-sysrepo-arch.png",alt:"IPRoute2-Sysrepo Architecture",style:{width:"60%",height:"auto"}})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>a});var t=n(6540);const s={},r=t.createContext(s);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);