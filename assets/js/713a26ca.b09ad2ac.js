"use strict";(self.webpackChunkokda_networks=self.webpackChunkokda_networks||[]).push([[459],{5371:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var t=i(4848),a=i(8453),r=i(1470),o=i(9365);const s={sidebar_position:1,sidebar_label:"Link Aggregation (Bonding)",title:"Linux Link Aggregation (Bonding)",image:"/img/doc-link-agg/topology2.png"},l="Linux Link Aggregation (Bonding)",d={id:"linux-networking/Link-Agg",title:"Linux Link Aggregation (Bonding)",description:"This guide provides instructions for configuring link aggregation",source:"@site/docs/2-linux-networking/1-Link-Agg.md",sourceDirName:"2-linux-networking",slug:"/linux-networking/Link-Agg",permalink:"/linux-networking/Link-Agg",draft:!1,unlisted:!1,editUrl:"https://github.com/okda-networks/docs_source/tree/main/docs/2-linux-networking/1-Link-Agg.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Link Aggregation (Bonding)",title:"Linux Link Aggregation (Bonding)",image:"/img/doc-link-agg/topology2.png"},sidebar:"tutorialSidebar",previous:{title:"Linux Networking",permalink:"/category/linux-networking"},next:{title:"VLANs",permalink:"/linux-networking/Vlans"}},c={},p=[{value:"Topology:",id:"topology",level:2},{value:"Bond Modes",id:"bond-modes",level:2},{value:"Active-Backup",id:"active-backup",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Verify",id:"verify",level:4},{value:"Balance-rr",id:"balance-rr",level:3},{value:"Configuration:",id:"configuration-1",level:4},{value:"Verify",id:"verify-1",level:4},{value:"Balance-xor",id:"balance-xor",level:3},{value:"Configuration",id:"configuration-2",level:4},{value:"Verify",id:"verify-2",level:4},{value:"Broadcast",id:"broadcast",level:3},{value:"Configuration",id:"configuration-3",level:4},{value:"Verify",id:"verify-3",level:4},{value:"802.3ad",id:"8023ad",level:3},{value:"Balance-tlb",id:"balance-tlb",level:3},{value:"Balance-alb",id:"balance-alb",level:3}];function m(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"linux-link-aggregation-bonding",children:"Linux Link Aggregation (Bonding)"}),"\n",(0,t.jsx)(e.p,{children:"This guide provides instructions for configuring link aggregation\nin Linux. Link aggregation, or bonding, combines multiple network\ninterfaces for improved performance and resilience.\nLearn how to set up and optimize link aggregation configurations\nefficiently."}),"\n",(0,t.jsx)(e.h2,{id:"topology",children:"Topology:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"topology2",src:i(4456).A+"",width:"800",height:"172"})}),"\n",(0,t.jsx)(e.h2,{id:"bond-modes",children:"Bond Modes"}),"\n",(0,t.jsxs)(e.p,{children:["We will go through the following bond modes configuration on\n",(0,t.jsx)(e.code,{children:"dent1"})," and ",(0,t.jsx)(e.code,{children:"dent2"})," devices:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#active-backup",children:"Active-Backup"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#balance-rr",children:"Balance-rr"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#balance-xor",children:"Balance-xor"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#broadcast",children:"Broadcast"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#8023ad",children:"802.3ad"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#balance-tlb",children:"Balance-tlb"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#balance-alb",children:"Balance-alb"})}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"active-backup",children:"Active-Backup"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Active-Backup"})," mode utilizes one active interface with another standby\ninterface for fault tolerance. Provides failover only."]}),"\n",(0,t.jsxs)(e.p,{children:["the mode uses arp request for monitoring link availability,\nalternatively it can use ",(0,t.jsx)(e.code,{children:"MIIMON"})," for monitoring."]}),"\n",(0,t.jsx)(e.h4,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["create ",(0,t.jsx)(e.code,{children:"bond1"})," with following parameters:","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"Active-Backup"})," as bonding mode."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"enp0s4"})," as primary link."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"arp_interval"})," 1000ms to send arp request every 1 sec."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"arp_ip_target"})," is ",(0,t.jsx)(e.code,{children:"1.1.1.2"})," which is the br1 ip on ",(0,t.jsx)(e.code,{children:"dent-2"}),", if no arp response from ",(0,t.jsx)(e.code,{children:"1.1.1.2"})," switchover will be triggered."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["set ",(0,t.jsx)(e.code,{children:"bond1"})," as master on ",(0,t.jsx)(e.code,{children:"enp0s4"})," and ",(0,t.jsx)(e.code,{children:"enp0s5"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["set add ",(0,t.jsx)(e.code,{children:"bond1"})," and ",(0,t.jsx)(e.code,{children:"enps011"})," (where PC1 is connected) to bridge ",(0,t.jsx)(e.code,{children:"br1"}),"."]}),"\n"]}),"\n","\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{value:"onmcli",label:"ONM-CLI",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"dent-1# conf t\ndent-1(config)# links-iproute2\ndent-1(config-links-iproute2)# bond bond1\ndent-1(config-bond[name='bond1'])# bond-info mode active-backup\ndent-1(config-bond[name='bond1'])# bond-info primary enp0s4\ndent-1(config-bond[name='bond1'])# bond-info arp_interval 1000\ndent-1(config-bond[name='bond1'])# bond-info arp_ip_target 1.1.1.2\ndent-1(config-bond[name='bond1'])# master br1\ndent-1(config-bond[name='bond1'])# exit\ndent-1(config-links-iproute2)# link enp0s4\ndent-1(config-[name='enp0s4'])# master bond1\ndent-1(config-[name='enp0s4'])# exit\ndent-1(config-links-iproute2)# link enp0s5\ndent-1(config-[name='enp0s5'])# master bond1\ndent-1(config-[name='enp0s5'])# exit\ndent-1(config-links-iproute2)# link enp0s11\ndent-1(config-[name='enp0s11'])# master br1\ndent-1(config-[name='enp0s11'])# admin-status up\ndent-1(config-[name='enp0s11'])# commit\n"})})}),(0,t.jsx)(o.A,{value:"iproute2",label:"iproute2",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"ip link add name bond1 type bond mode active-backup primary enp0s4 arp_ip_target 1.1.1.2 arp_interval 1000\nip link set name enp0s4 master bond1\nip link set name enp0s5 master bond1\nip link add name br1 type bridge stp_state 1\nip link set name bond1 up master br1\nip link set name enp0s4 up\nip link set name enp0s5 up\nip link set name br1 up\nip link set name enp0s11 up master br1\n"})})}),(0,t.jsx)(o.A,{value:"netconf",label:"NETCONF",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-xml",children:'\n<links xmlns="urn:okda:iproute2:ip:link" xmlns:yang="urn:ietf:params:xml:ns:yang:1" yang:operation="none">\n    <bond>\n        <name>bond1</name>\n        <master>br1</master>\n        <bond-info>\n            <mode>active-backup</mode>\n            <primary yang:operation="create">enp0s4</primary>\n            <arp_ip_target yang:operation="create">1.1.1.2</arp_ip_target>\n            <arp_interval yang:operation="create">1000</arp_interval>\n        </bond-info>\n    </bond>\n    <bridge>\n        <name>br1</name>\n        <br-info>\n            <stp_state>1</stp_state>\n        </br-info>\n    </bridge>\n    <link>\n        <name>enp0s4</name>\n        <master>bond1</master>\n    </link>\n    <link>\n        <name>enp0s5</name>\n        <master>bond1</master>\n    </link>\n    <link>\n        <name>enp0s11</name>\n        <admin-status>up</admin-status>\n        <master>br1</master>\n    </link>\n</links>\n'})})})]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"NOTE:"})," Links must be ",(0,t.jsx)(e.code,{children:"DOWN"})," before adding them to the bond device."]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"verify",children:"Verify"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["We can see that the active link is the primary one ",(0,t.jsx)(e.code,{children:"enp0s4"})]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"root@dent-1:~# cat /proc/net/bonding/bond1\nEthernet Channel Bonding Driver: v3.7.1 (April 27, 2011)\n\nBonding Mode: fault-tolerance (active-backup)\nPrimary Slave: enp0s4 (primary_reselect always)\nCurrently Active Slave: enp0s4\n\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["if we try to ping from ",(0,t.jsx)(e.code,{children:"PC1"})," (192.168.10.1) to ",(0,t.jsx)(e.code,{children:"PC2"})," (192.168.10.3):"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"PC1> ping 192.168.10.3\n64 bytes from 192.168.10.3: icmp_seq=373 ttl=64 time=3.47 ms\n64 bytes from 192.168.10.3: icmp_seq=374 ttl=64 time=3.56 ms\n64 bytes from 192.168.10.3: icmp_seq=375 ttl=64 time=3.54 ms\n64 bytes from 192.168.10.3: icmp_seq=376 ttl=64 time=1.53 ms\n64 bytes from 192.168.10.3: icmp_seq=377 ttl=64 time=3.77 ms\n64 bytes from 192.168.10.3: icmp_seq=378 ttl=64 time=3.72 ms\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Currently, the ",(0,t.jsx)(e.code,{children:"bond1"})," link is continusouly monitoring the availablility\nof ",(0,t.jsx)(e.code,{children:"enp0s4"})," (primary/active) link using arp requests to the specified ",(0,t.jsx)(e.code,{children:"arp_ip_target"}),":"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"arp_ip_capture",src:i(6667).A+"",width:"1234",height:"256"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Now we shut down ",(0,t.jsx)(e.code,{children:"enp0s4"})," (primary/active) on ",(0,t.jsx)(e.code,{children:"dent-2"}),", and check if the failover happen\non ",(0,t.jsx)(e.code,{children:"dent-1"})," and if ",(0,t.jsx)(e.code,{children:"enp0s5"})," become active link."]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"dent-2(config-links-iproute2)# link enp0s4\ndent-2(config-[name='enp0s4'])# admin-status down\ndent-2(config-[name='enp0s4'])# commit\n"})}),"\n",(0,t.jsxs)(e.p,{children:["from the logs we can see the switchover is triggered and ",(0,t.jsx)(e.code,{children:"enp0s5"})," takes over:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"root@dent-1:~# \n[25711.548944] bond1: (slave enp0s4): link status definitely down, disabling slave\n[25711.554258] device enp0s4 left promiscuous mode\n[25711.568937] bond1: now running without any active interface!\n[25711.579690] br1: port 1(bond1) entered disabled state\n[25711.583592] br1: topology change detected, propagating\n[25712.636845] bond1: (slave enp0s5): link status definitely up\n[25712.642074] bond1: (slave enp0s5): making interface the new active one\n[25712.646451] device enp0s5 entered promiscuous mode\n[25712.671080] bond1: active interface up!\n[25712.672767] br1: port 1(bond1) entered blocking state\n[25712.673948] br1: port 1(bond1) entered listening state\n[25728.125383] br1: port 1(bond1) entered learning state\n[25743.484653] br1: port 1(bond1) entered forwarding state\n[25743.485585] br1: topology change detected, sending tcn bpdu\n"})}),"\n",(0,t.jsxs)(e.p,{children:["if we check the ",(0,t.jsx)(e.code,{children:"/proc/net/bonding/bond1"}),", we can see ",(0,t.jsx)(e.code,{children:"enp0s5"})," is active now:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"root@dent-1:~# cat /proc/net/bonding/bond1\nEthernet Channel Bonding Driver: v3.7.1 (April 27, 2011)\n\nBonding Mode: fault-tolerance (active-backup)\nPrimary Slave: enp0s4 (primary_reselect always)\nCurrently Active Slave: enp0s5\n"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"TIP:"})," When STP is enabled and the switchover triggered,\nthere will be some packet drops, and the connectivity will be lost for few seconds.\nif we disable the ",(0,t.jsx)(e.code,{children:"STP"})," on ",(0,t.jsx)(e.code,{children:"br1"})," (",(0,t.jsx)(e.code,{children:"stp_state = 0"}),") the link will immediately move from blocking to forwarding state\nresulting in no drops during failover."]}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Let's bring ",(0,t.jsx)(e.code,{children:"enp0s4"})," up again, and we should see that ",(0,t.jsx)(e.code,{children:"enp0s4"})," become active\nagain, as we have ",(0,t.jsx)(e.code,{children:"primary_reselect = always"}),":"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"dent-2(config-links-iproute2)# link enp0s4\ndent-2(config-[name='enp0s4'])# admin-status up\ndent-2(config-[name='enp0s4'])# commit\n"})}),"\n",(0,t.jsx)(e.p,{children:"And here we can see that enp0s4 become active again:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"root@dent-1:~# [25847.868834] bond1: (slave enp0s4): link status definitely up\n[25847.874298] bond1: (slave enp0s4): making interface the new active one\n[25847.879784] device enp0s5 left promiscuous mode\n[25847.894837] device enp0s4 entered promiscuous mode\n[25850.492669] br1: port 1(bond1) neighbor 8000.0c:8c:30:dd:00:01 lost\n[25851.004572] bond1: (slave enp0s5): link status definitely down, disabling slave\n"})}),"\n",(0,t.jsx)(e.h3,{id:"balance-rr",children:"Balance-rr"}),"\n",(0,t.jsx)(e.p,{children:"This mode Sequentially sends packets over available interfaces for increased throughput, but may cause TCP out-of-order issues. Offers load balancing and failover."}),"\n",(0,t.jsx)(e.h4,{id:"configuration-1",children:"Configuration:"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{value:"onmcli",label:"ONM-CLI",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"dent-1# conf t\ndent-1(config)# links-iproute2\ndent-1(config-links-iproute2)# bond bond1\ndent-1(config-bond[name='bond1'])# bond-info mode balance-rr\ndent-1(config-bond[name='bond1'])# bond-info arp_interval 1000\ndent-1(config-bond[name='bond1'])# bond-info arp_ip_target 1.1.1.2\ndent-1(config-bond[name='bond1'])# master br1\ndent-1(config-bond[name='bond1'])# exit\ndent-1(config-links-iproute2)# link enp0s4\ndent-1(config-[name='enp0s4'])# master bond1\ndent-1(config-[name='enp0s4'])# exit\ndent-1(config-links-iproute2)# link enp0s5\ndent-1(config-[name='enp0s5'])# master bond1\ndent-1(config-[name='enp0s5'])# exit\ndent-1(config-links-iproute2)# link enp0s11\ndent-1(config-[name='enp0s11'])# master br1\ndent-1(config-[name='enp0s11'])# admin-status up\ndent-1(config-[name='enp0s11'])# commit\n"})})}),(0,t.jsx)(o.A,{value:"iproute2",label:"iproute2",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"ip link add name bond1 type bond mode balance-rr arp_ip_target 1.1.1.2 arp_interval 1000\nip link set name enp0s4 master bond1\nip link set name enp0s5 master bond1\nip link add name br1 type bridge\nip link set name bond1 up master br1\nip link set name enp0s4 up\nip link set name enp0s5 up\nip link set name br1 up\nip link set name enp0s11 up master br1\n"})})}),(0,t.jsx)(o.A,{value:"netconf",label:"NETCONF",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-xml",children:'\n<links xmlns="urn:okda:iproute2:ip:link" xmlns:yang="urn:ietf:params:xml:ns:yang:1" yang:operation="none">\n    <bond>\n        <name>bond1</name>\n        <master>br1</master>\n        <bond-info>\n            <mode>balance-rr</mode>\n            <arp_ip_target yang:operation="create">1.1.1.2</arp_ip_target>\n            <arp_interval yang:operation="create">1000</arp_interval>\n        </bond-info>\n    </bond>\n    <bridge>\n        <name>br1</name>\n        <br-info>\n            <stp_state>1</stp_state>\n        </br-info>\n    </bridge>\n    <link>\n        <name>enp0s4</name>\n        <master>bond1</master>\n    </link>\n    <link>\n        <name>enp0s5</name>\n        <master>bond1</master>\n    </link>\n    <link>\n        <name>enp0s11</name>\n        <admin-status>up</admin-status>\n        <master>br1</master>\n    </link>\n</links>\n'})})})]}),"\n",(0,t.jsx)(e.h4,{id:"verify-1",children:"Verify"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["When flapping ",(0,t.jsx)(e.code,{children:"enp0s5"})," on ",(0,t.jsx)(e.code,{children:"dent-2"}),":"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"[30398.588782] bond1: (slave enp0s5): interface is now down\n[30424.188809] bond1: (slave enp0s5): interface is now up\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"We can see the current active link member:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"root@dent-1:~# cat /proc/net/bonding/bond1\n\nEthernet Channel Bonding Driver: v3.7.1 (April 27, 2011)\n\nBonding Mode: load balancing (round-robin)\nMII Status: up\nMII Polling Interval (ms): 0\nUp Delay (ms): 0\nDown Delay (ms): 0\nPeer Notification Delay (ms): 0\nARP Polling Interval (ms): 1000\nARP IP target/s (n.n.n.n form): 1.1.1.2\n\nSlave Interface: enp0s4 <--\nMII Status: up          <--\nSpeed: 1000 Mbps\nDuplex: full\nLink Failure Count: 1\nPermanent HW addr: 0c:c7:c2:08:00:01\nSlave queue ID: 0\n\nSlave Interface: enp0s5 <--\nMII Status: up          <--\nSpeed: 1000 Mbps\nDuplex: full\nLink Failure Count: 2\nPermanent HW addr: 0c:c7:c2:08:00:02\nSlave queue ID: 0\n"})}),"\n",(0,t.jsx)(e.h3,{id:"balance-xor",children:"Balance-xor"}),"\n",(0,t.jsx)(e.p,{children:"This mode Uses a hash policy to select interface for packet transmission, ensuring specific traffic goes over the same interface. Offers load balancing and failover."}),"\n",(0,t.jsx)(e.h4,{id:"configuration-2",children:"Configuration"}),"\n",(0,t.jsxs)(e.p,{children:["We configured the ",(0,t.jsx)(e.code,{children:"bond1"})," as ",(0,t.jsx)(e.code,{children:"balance-xr"})," and set the hashing policy to use\nlayer3 and layer4 info."]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{value:"onmcli",label:"ONM-CLI",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"dent-1# conf t\ndent-1(config)# links-iproute2\ndent-1(config-links-iproute2)# bond bond1\ndent-1(config-bond[name='bond1'])# bond-info mode balance-xor\ndent-1(config-bond[name='bond1'])# bond-info xmit_hash_policy layer3+4\ndent-1(config-bond[name='bond1'])# bond-info arp_interval 1000\ndent-1(config-bond[name='bond1'])# bond-info arp_ip_target 1.1.1.2\ndent-1(config-bond[name='bond1'])# master br1\ndent-1(config-bond[name='bond1'])# exit\ndent-1(config-links-iproute2)# link enp0s4\ndent-1(config-[name='enp0s4'])# master bond1\ndent-1(config-[name='enp0s4'])# exit\ndent-1(config-links-iproute2)# link enp0s5\ndent-1(config-[name='enp0s5'])# master bond1\ndent-1(config-[name='enp0s5'])# exit\ndent-1(config-links-iproute2)# link enp0s11\ndent-1(config-[name='enp0s11'])# master br1\ndent-1(config-[name='enp0s11'])# admin-status up\ndent-1(config-[name='enp0s11'])# commit \n"})})}),(0,t.jsx)(o.A,{value:"iproute2",label:"iproute2",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"ip link add name bond1 type bond mode balance-xor arp_ip_target 1.1.1.2 arp_interval 1000 xmit_hash_policy layer3+4 \nip link set name enp0s4 master bond1\nip link set name enp0s5 master bond1\nip link add name br1 type bridge\nip link set name bond1 up master br1\nip link set name enp0s4 up\nip link set name enp0s5 up\nip link set name br1 up\nip link set name enp0s11 up master br1\n"})})}),(0,t.jsx)(o.A,{value:"netconf",label:"NETCONF",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-xml",children:'\n<links xmlns="urn:okda:iproute2:ip:link" xmlns:yang="urn:ietf:params:xml:ns:yang:1" yang:operation="none">\n    <bond>\n        <name>bond1</name>\n        <master>br1</master>\n        <bond-info>\n            <mode yang:operation="create">balance-xor</mode>\n            <arp_ip_target yang:operation="create">1.1.1.2</arp_ip_target>\n            <arp_interval yang:operation="create">1000</arp_interval>\n            <xmit_hash_policy yang:operation="create">layer3+4</xmit_hash_policy>\n        </bond-info>\n    </bond>\n    <bridge>\n        <name>br1</name>\n        <br-info>\n            <stp_state>1</stp_state>\n        </br-info>\n    </bridge>\n    <link>\n        <name>enp0s4</name>\n        <master>bond1</master>\n    </link>\n    <link>\n        <name>enp0s5</name>\n        <master>bond1</master>\n    </link>\n    <link>\n        <name>enp0s11</name>\n        <admin-status>up</admin-status>\n        <master>br1</master>\n    </link>\n</links>\n'})})})]}),"\n",(0,t.jsx)(e.h4,{id:"verify-2",children:"Verify"}),"\n",(0,t.jsx)(e.p,{children:"In the following capture we can see that same link is used for a single flow,\nhere we are testing with ping which will count L3 info only:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"balance-xor-capture",src:i(4805).A+"",width:"1499",height:"248"})}),"\n",(0,t.jsx)(e.h3,{id:"broadcast",children:"Broadcast"}),"\n",(0,t.jsx)(e.p,{children:"This mode Sends everything over all standby interfaces. Provides failover only."}),"\n",(0,t.jsx)(e.h4,{id:"configuration-3",children:"Configuration"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{value:"onmcli",label:"ONM-CLI",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"dent-1# conf t\ndent-1(config)# links-iproute2\ndent-1(config-links-iproute2)# bond bond1\ndent-1(config-bond[name='bond1'])# bond-info mode broadcast\ndent-1(config-bond[name='bond1'])# bond-info arp_interval 1000\ndent-1(config-bond[name='bond1'])# bond-info arp_ip_target 1.1.1.2\ndent-1(config-bond[name='bond1'])# master br1\ndent-1(config-bond[name='bond1'])# exit\ndent-1(config-links-iproute2)# link enp0s4\ndent-1(config-[name='enp0s4'])# master bond1\ndent-1(config-[name='enp0s4'])# exit\ndent-1(config-links-iproute2)# link enp0s5\ndent-1(config-[name='enp0s5'])# master bond1\ndent-1(config-[name='enp0s5'])# exit\ndent-1(config-links-iproute2)# link enp0s11\ndent-1(config-[name='enp0s11'])# master br1\ndent-1(config-[name='enp0s11'])# admin-status up\ndent-1(config-[name='enp0s11'])# commit \n"})})}),(0,t.jsx)(o.A,{value:"iproute2",label:"iproute2",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"ip link add name bond1 type bond mode broadcast arp_ip_target 1.1.1.2 arp_interval 1000\nip link set name enp0s4 master bond1\nip link set name enp0s5 master bond1\nip link add name br1 type bridge\nip link set name bond1 up master br1\nip link set name enp0s4 up\nip link set name enp0s5 up\nip link set name br1 up\nip link set name enp0s11 up master br1\n"})})}),(0,t.jsx)(o.A,{value:"netconf",label:"NETCONF",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-xml",children:'\n<links xmlns="urn:okda:iproute2:ip:link" xmlns:yang="urn:ietf:params:xml:ns:yang:1" yang:operation="none">\n    <bond>\n        <name>bond1</name>\n        <master>br1</master>\n        <bond-info>\n            <mode yang:operation="create">broadcast</mode>\n            <arp_ip_target yang:operation="create">1.1.1.2</arp_ip_target>\n            <arp_interval yang:operation="create">1000</arp_interval>\n        </bond-info>\n    </bond>\n    <bridge>\n        <name>br1</name>\n        <br-info>\n            <stp_state>1</stp_state>\n        </br-info>\n    </bridge>\n    <link>\n        <name>enp0s4</name>\n        <master>bond1</master>\n    </link>\n    <link>\n        <name>enp0s5</name>\n        <master>bond1</master>\n    </link>\n    <link>\n        <name>enp0s11</name>\n        <admin-status>up</admin-status>\n        <master>br1</master>\n    </link>\n</links>\n'})})})]}),"\n",(0,t.jsx)(e.h4,{id:"verify-3",children:"Verify"}),"\n",(0,t.jsxs)(e.p,{children:["From ",(0,t.jsx)(e.code,{children:"PC1"})," icmp outputs, can see that the packet now is being duplicated and sent out via all\nactive links"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"PC1> ping 192.168.10.3\n4 bytes from 192.168.10.3: icmp_seq=159 ttl=64 time=3.78 ms\n64 bytes from 192.168.10.3: icmp_seq=159 ttl=64 time=4.90 ms (DUP!)\n64 bytes from 192.168.10.3: icmp_seq=159 ttl=64 time=6.40 ms (DUP!)\n64 bytes from 192.168.10.3: icmp_seq=159 ttl=64 time=6.70 ms (DUP!)\n64 bytes from 192.168.10.3: icmp_seq=160 ttl=64 time=1.56 ms\n64 bytes from 192.168.10.3: icmp_seq=160 ttl=64 time=2.05 ms (DUP!)\n64 bytes from 192.168.10.3: icmp_seq=160 ttl=64 time=2.26 ms (DUP!)\n64 bytes from 192.168.10.3: icmp_seq=160 ttl=64 time=2.38 ms (DUP!)\n"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"NOTE:"})," The request is duplicated to two packets, and response as well, that's why we\nsee the ",(0,t.jsx)(e.code,{children:"(DUP!)"})," flags."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"8023ad",children:"802.3ad"}),"\n",(0,t.jsx)(e.p,{children:"This mode Bundles multiple connections in parallel for redundancy and load balancing. Requires IEEE 802.1AX support on switches. Provides redundancy and load balancing."}),"\n",(0,t.jsx)(e.h3,{id:"balance-tlb",children:"Balance-tlb"}),"\n",(0,t.jsx)(e.p,{children:"This mode Uses a hash policy to select interface for packet transmission, ensuring specific traffic goes over the same interface. Offers load balancing and failover."}),"\n",(0,t.jsx)(e.h3,{id:"balance-alb",children:"Balance-alb"}),"\n",(0,t.jsx)(e.p,{children:"This mode Utilizes ARP negotiation for both send and receive traffic, dynamically redistributing traffic. Provides adaptive load balancing (ALB) for IPv4 traffic."})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(m,{...n})}):m(n)}},9365:(n,e,i)=>{i.d(e,{A:()=>o});i(6540);var t=i(4164);const a={tabItem:"tabItem_Ymn6"};var r=i(4848);function o(n){let{children:e,hidden:i,className:o}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:i,children:e})}},1470:(n,e,i)=>{i.d(e,{A:()=>y});var t=i(6540),a=i(4164),r=i(3104),o=i(6347),s=i(205),l=i(7485),d=i(1682),c=i(9466);function p(n){return t.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,t.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(n){const{values:e,children:i}=n;return(0,t.useMemo)((()=>{const n=e??function(n){return p(n).map((n=>{let{props:{value:e,label:i,attributes:t,default:a}}=n;return{value:e,label:i,attributes:t,default:a}}))}(i);return function(n){const e=(0,d.X)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,i])}function u(n){let{value:e,tabValues:i}=n;return i.some((n=>n.value===e))}function b(n){let{queryString:e=!1,groupId:i}=n;const a=(0,o.W6)(),r=function(n){let{queryString:e=!1,groupId:i}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:e,groupId:i});return[(0,l.aZ)(r),(0,t.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(a.location.search);e.set(r,n),a.replace({...a.location,search:e.toString()})}),[r,a])]}function h(n){const{defaultValue:e,queryString:i=!1,groupId:a}=n,r=m(n),[o,l]=(0,t.useState)((()=>function(n){let{defaultValue:e,tabValues:i}=n;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!u({value:e,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${i.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=i.find((n=>n.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:e,tabValues:r}))),[d,p]=b({queryString:i,groupId:a}),[h,g]=function(n){let{groupId:e}=n;const i=function(n){return n?`docusaurus.tab.${n}`:null}(e),[a,r]=(0,c.Dv)(i);return[a,(0,t.useCallback)((n=>{i&&r.set(n)}),[i,r])]}({groupId:a}),f=(()=>{const n=d??h;return u({value:n,tabValues:r})?n:null})();(0,s.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((n=>{if(!u({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);l(n),p(n),g(n)}),[p,g,r]),tabValues:r}}var g=i(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(4848);function v(n){let{className:e,block:i,selectedValue:t,selectValue:o,tabValues:s}=n;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=n=>{const e=n.currentTarget,i=l.indexOf(e),a=s[i].value;a!==t&&(d(e),o(a))},p=n=>{let e=null;switch(n.key){case"Enter":c(n);break;case"ArrowRight":{const i=l.indexOf(n.currentTarget)+1;e=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(n.currentTarget)-1;e=l[i]??l[l.length-1];break}}e?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":i},e),children:s.map((n=>{let{value:e,label:i,attributes:r}=n;return(0,x.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:n=>l.push(n),onKeyDown:p,onClick:c,...r,className:(0,a.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":t===e}),children:i??e},e)}))})}function k(n){let{lazy:e,children:i,selectedValue:a}=n;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(e){const n=r.find((n=>n.props.value===a));return n?(0,t.cloneElement)(n,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((n,e)=>(0,t.cloneElement)(n,{key:e,hidden:n.props.value!==a})))})}function j(n){const e=h(n);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(k,{...e,...n})]})}function y(n){const e=(0,g.A)();return(0,x.jsx)(j,{...n,children:p(n.children)},String(e))}},6667:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/arp_ip_target_capture-d0edc485535e050dcc970a18f79b01ef.png"},4805:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/balance-xor-icmp-effb987c32406b8e650095cb6e2ddeb7.png"},4456:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/topology2-586d4b5a468e51df8d63d2eb7905e9d5.png"},8453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>s});var t=i(6540);const a={},r=t.createContext(a);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);