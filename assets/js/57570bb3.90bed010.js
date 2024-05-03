"use strict";(self.webpackChunkokda_networks=self.webpackChunkokda_networks||[]).push([[836],{6008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(4848),s=t(8453);const o={sidebar_position:1},r="Installation",l={id:"onm/Getting-Started/installation",title:"Installation",description:"We are working on creating compiled packages for ONM, until that work is complete you are welcome to test the system by compiling the source files.",source:"@site/docs/onm/Getting-Started/installation.md",sourceDirName:"onm/Getting-Started",slug:"/onm/Getting-Started/installation",permalink:"/onm/Getting-Started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/okda-networks/docs_source/tree/main/docs/onm/Getting-Started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/category/getting-started"},next:{title:"IPRoute2-Sysrepo",permalink:"/category/iproute2-sysrepo"}},a={},c=[{value:"System Requirments:",id:"system-requirments",level:2},{value:"Required packagaes:",id:"required-packagaes",level:3},{value:"Libyang:",id:"libyang",level:3},{value:"Sysrepo:",id:"sysrepo",level:3},{value:"JSON-C",id:"json-c",level:3},{value:"ONM Packages",id:"onm-packages",level:2},{value:"IPRoute2-Sysrepo",id:"iproute2-sysrepo",level:3},{value:"ONM-CLI",id:"onm-cli",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"We are working on creating compiled packages for ONM, until that work is complete you are welcome to test the system by compiling the source files."}),"\n",(0,i.jsx)(n.h2,{id:"system-requirments",children:"System Requirments:"}),"\n",(0,i.jsx)(n.h3,{id:"required-packagaes",children:"Required packagaes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo apt update\nsudo apt install libelf-dev libbpf-dev libbsd-dev libcap-dev libmnl-dev libselinux-dev libjson-c-dev bison flex git cmake build-essential libpcre2-dev\n"})}),"\n",(0,i.jsx)(n.h3,{id:"libyang",children:"Libyang:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'git clone https://github.com/CESNET/libyang.git\ncd libyang/\ngit checkout v2.1.148\nmkdir build; cd build\ncmake -D CMAKE_BUILD_TYPE:String="Release" ..\nmake\nsudo make install\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sysrepo",children:"Sysrepo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'git clone https://github.com/sysrepo/sysrepo.git\ncd sysrepo\ngit checkout v2.2.150\nmkdir build; cd build\ncmake -DCMAKE_BUILD_TYPE:String="Release" ..\nmake\nsudo make install\nldconfig\n'})}),"\n",(0,i.jsx)(n.h3,{id:"json-c",children:"JSON-C"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/json-c/json-c.git\nmkdir json-c-build\ncd json-c-build\ncmake ../json-c\nmake\nmake test\nsudo make install\nldconfig\n"})}),"\n",(0,i.jsx)(n.h2,{id:"onm-packages",children:"ONM Packages"}),"\n",(0,i.jsx)(n.h3,{id:"iproute2-sysrepo",children:"IPRoute2-Sysrepo"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone --recursive https://github.com/okda-networks/iproute2-sysrepo.git\ncd iproute2-sysrepo\nmake\nsudo make install\n"})}),"\n",(0,i.jsx)(n.p,{children:"After successful installation, you will need to load IPRoute2-Sysrepo yang modules to sysrepo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd yang/\nsysrepoctl -i ietf-inet-types.yang\nsysrepoctl -i ietf-yang-types.yang\nsysrepoctl -i iproute2-cmdgen-extensions.yang\nsysrepoctl -i iproute2-ip-netns.yang\nsysrepoctl -i iproute2-ip-link.yang\nsysrepoctl -i iproute2-ip-nexthop.yang\nsysrepoctl -i iproute2-net-types.yang\nsysrepoctl -i iproute2-ip-route.yang\nsysrepoctl -i iproute2-tc-qdisc.yang\nsysrepoctl -i iproute2-tc-filter.yang\n"})}),"\n",(0,i.jsx)(n.h3,{id:"onm-cli",children:"ONM-CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/okda-networks/onm-cli.git\ncd onm-cli\nmake\nsudo make install\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);