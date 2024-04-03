"use strict";(self.webpackChunkokda_networks=self.webpackChunkokda_networks||[]).push([[4897],{9021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);const o={sidebar_position:1},r="Installation",a={id:"Getting-Started/installation",title:"Installation",description:"We are working on creating compiled packages for ONM, until that work is complete you are welcome to test the system by compiling it from the source code.",source:"@site/docs/Getting-Started/installation.md",sourceDirName:"Getting-Started",slug:"/Getting-Started/installation",permalink:"/Getting-Started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Getting-Started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/category/getting-started"},next:{title:"IPRoute2-Sysrepo",permalink:"/category/iproute2-sysrepo"}},l={},c=[{value:"System Requirments:",id:"system-requirments",level:2},{value:"Required packagaes:",id:"required-packagaes",level:3},{value:"Libyang:",id:"libyang",level:3},{value:"Sysrepo:",id:"sysrepo",level:3},{value:"ONM Packages",id:"onm-packages",level:2},{value:"IPRoute2-Sysrepo",id:"iproute2-sysrepo",level:3},{value:"ONM-CLI",id:"onm-cli",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.p,{children:"We are working on creating compiled packages for ONM, until that work is complete you are welcome to test the system by compiling it from the source code."}),"\n",(0,i.jsx)(t.h2,{id:"system-requirments",children:"System Requirments:"}),"\n",(0,i.jsx)(t.h3,{id:"required-packagaes",children:"Required packagaes:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo apt update\nsudo apt install -y libbsd-dev libcap-dev libmnl-dev libselinux-dev libjson-c-dev linux-modules-extra-$(uname -r)\n"})}),"\n",(0,i.jsx)(t.h3,{id:"libyang",children:"Libyang:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'git clone https://github.com/CESNET/libyang.git\ncd libyang/\nmkdir build; cd build\ncmake -D CMAKE_BUILD_TYPE:String="Release" ..\nmake\nsudo make install\n'})}),"\n",(0,i.jsx)(t.h3,{id:"sysrepo",children:"Sysrepo:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'git clone https://github.com/sysrepo/sysrepo.git\ncd sysrepo\nmkdir build; cd build\ncmake -DCMAKE_BUILD_TYPE:String="Release" ..\nmake\nsudo make install\n'})}),"\n",(0,i.jsx)(t.h2,{id:"onm-packages",children:"ONM Packages"}),"\n",(0,i.jsx)(t.h3,{id:"iproute2-sysrepo",children:"IPRoute2-Sysrepo"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"git clone --recursive https://github.com/okda-networks/iproute2-sysrepo.git\ncd iproute2-sysrepo\nmake\nsudo make install\n"})}),"\n",(0,i.jsx)(t.p,{children:"After successful installation, you will need to load the yang modules to sysrepo:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"cd iproute2-sysrep/yang/\nsysrepoctl -i ietf-inet-types.yang\nsysrepoctl -i ietf-yang-types.yang\nsysrepoctl -i iproute2-cmdgen-extensions.yang\nsysrepoctl -i iproute2-ip-link.yang\nsysrepoctl -i iproute2-ip-netns.yang\nsysrepoctl -i iproute2-ip-nexthop.yang\nsysrepoctl -i iproute2-ip-route.yang\nsysrepoctl -i iproute2-tc-filter.yang\nsysrepoctl -i iproute2-tc-qdisc.yang\n"})}),"\n",(0,i.jsx)(t.h3,{id:"onm-cli",children:"ONM-CLI"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"git clone https://github.com/okda-networks/onm-cli.git\ncd onm-cli\nmake\nsudo make install\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);