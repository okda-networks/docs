"use strict";(self.webpackChunkokda_networks=self.webpackChunkokda_networks||[]).push([[383],{3455:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=o(4848),s=o(8453);const r={sidebar_position:1,title:"Iproute2-sysrepo Overview"},i="Overview",a={id:"onm/IPRoute2-Sysrepo/overview",title:"Iproute2-sysrepo Overview",description:"IPRoute2-Sysrepo is a Sysrepo plugin designed to configure Linux networking using NETCONF/YANG. It offers the following advantages:",source:"@site/docs/1-onm/IPRoute2-Sysrepo/1-overview.md",sourceDirName:"1-onm/IPRoute2-Sysrepo",slug:"/onm/IPRoute2-Sysrepo/overview",permalink:"/onm/IPRoute2-Sysrepo/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/okda-networks/docs_source/tree/main/docs/1-onm/IPRoute2-Sysrepo/1-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Iproute2-sysrepo Overview"},sidebar:"tutorialSidebar",previous:{title:"IPRoute2-Sysrepo",permalink:"/category/iproute2-sysrepo"},next:{title:"Iproute2-sysrepo Quick Start",permalink:"/onm/IPRoute2-Sysrepo/basic-config"}},c={},l=[];function u(e){const n={br:"br",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"IPRoute2-Sysrepo is a Sysrepo plugin designed to configure Linux networking using NETCONF/YANG. It offers the following advantages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Transactional Configuration: Configuration changes are executed as a bulk sequence of generated iproute2 commands. In the event that one command fails, an automatic rollback process is triggered to revert all previously executed commands."}),"\n",(0,t.jsx)(n.li,{children:"Dependency Resolution: Commands are sorted before execution to ensure that all dependencies are met. For instance, if you create a dummy link and a bridge, and then assign the link to the bridge, IPRoute2-Sysrepo will create the bridge first and delete it last to maintain consistency."}),"\n",(0,t.jsx)(n.li,{children:"Configuration persistence for linux networking using sysrepo data stores."}),"\n",(0,t.jsx)(n.li,{children:"Operational data load and streaming for linux networking."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"IPRoute2-sysrepo code is designed as a wrapper around the original IPRoute2 code,\nwith very minimal changes, ensuring compatibility with all versions of IPRoute2.\nIt is committed to staying current with the newest releases of IPRoute2."}),"\n",(0,t.jsx)(n.h1,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(n.p,{children:"IPRoute2-Sysrepo consits of the following components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IPRoute2 YANG Modules:"}),(0,t.jsx)(n.br,{}),"\n","a YANG representation of IPRoute2 configuration syntax and operational data."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"cmdgen:"}),(0,t.jsx)(n.br,{}),"\n","Responsible applying config changes on IPRoute2 YANG modules as IPRoute2 commands, does following actions:",(0,t.jsx)(n.br,{}),"\n","1- Subscribes to the YANG modules config change events.",(0,t.jsx)(n.br,{}),"\n","2- Transalates sysrepo config changes transaction to a set of iproute2 config commands and a set of rollback commands.",(0,t.jsx)(n.br,{}),"\n","4- Feeds the commands config change command set to IPRoute2 to applied on the linux Kernel and waits for the response.",(0,t.jsx)(n.br,{}),"\n","5- If one or more config change commands fails, the rollback command set are applied.",(0,t.jsx)(n.br,{}),"\n","6- Final config transation result is generated and return to sysrepo subscbribers."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"oper-data:"}),(0,t.jsx)(n.br,{}),"\n","Responsible for loading linux IPRoute2 configuraiotn at startup and providing operational data on demand:\n1- On application startup, it generates a set of show commands to populate linux sysem running configuration to sysrepo IPRoute2 YANG modules.",(0,t.jsx)(n.br,{}),"\n","2- Subscribes to the YANG modules operational data pull requests.",(0,t.jsx)(n.br,{}),"\n","3- Transalates sysrepo operational data pull requests to a set of IPRoute2 show commands.",(0,t.jsx)(n.br,{}),"\n","4- Feeds the show commands to IPRoute2 and retrives their outputs in JSON format.",(0,t.jsx)(n.br,{}),"\n","5- Maps the JSON outputs of IPRoute2 to the corresponding IPRoute2 YANG modules and updates sysrepo operational data store with the mapped data."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Below digram illustrates this architecture:"}),"\n",(0,t.jsx)("img",{src:"/img/iproute2-sysrepo-arch.png",alt:"IPRoute2-Sysrepo Architecture",style:{width:"60%",height:"auto"}})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);