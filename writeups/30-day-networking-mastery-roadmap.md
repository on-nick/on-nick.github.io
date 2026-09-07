# 🌐 30-Day Networking Mastery Roadmap
## For Cybersecurity & Cloud Security Professionals

**Study Time:** 3–4 hours per day | **Goal:** CCNA-level knowledge, SOC analysis, penetration testing fundamentals, and cloud security engineering.

---

## Day 1 — Networking Fundamentals: Models, Types & Topologies
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Explain OSI and TCP/IP models layer by layer
* [ ] Identify and compare LAN, WAN, MAN
* [ ] Describe network topologies and use cases

### 📚 Theory
* [ ] **OSI Model (7 Layers):** Physical → Data Link → Network → Transport → Session → Presentation → Application. Mnemonic: "Please Do Not Throw Sausage Pizza Away."
* [ ] **TCP/IP Model (4 Layers):** Network Interface → Internet → Transport → Application. Maps to OSI: Network Interface=L1+L2, Internet=L3, Transport=L4, Application=L5+L6+L7.
* [ ] **LAN:** Small area, high speed. **WAN:** Large area, leased lines/MPLS/VPNs. **MAN:** City-wide.
* [ ] **Topologies:** Bus (obsolete), Star (most common), Ring (Token Ring legacy), Mesh (redundant), Hybrid.
* [ ] **Client-Server:** Centralized, scalable, secure. **P2P:** Decentralized, lower cost, harder to manage.
* [ ] **Metrics:** Bandwidth (max capacity), Latency (delay), Throughput (actual rate), Jitter (variation).

### 🧪 Hands-On Lab (Cisco Packet Tracer)
* [ ] **Setup:** 4 PCs + 1 switch + 1 server
* [ ] **Config:** PC0=192.168.1.10, PC1=.11, PC2=.12, PC3=.13, Server=.1, mask=255.255.255.0, gateway=192.168.1.1
* [ ] **Commands:** `ping 192.168.1.1`, `ping` to other PCs, test HTTP from PC browsers
* [ ] **Expected:** All PCs ping each other and access HTTP server
* [ ] **Troubleshoot:** Change subnet mask to 255.255.0.0 on one PC. Change gateway to wrong IP. Document what breaks.

### 🧠 Exercises
* [ ] Draw OSI and TCP/IP side by side with protocols/devices
* [ ] 3 real-world examples each of LAN, WAN, MAN
* [ ] Calculate throughput for 1GB file at 100 Mbps with 10ms latency
* [ ] **Subnetting:** Network address for 192.168.50.75/24?

### 🔐 Cybersecurity Connection
* **Network Security:** OSI layers identify attack locations (L2 ARP spoofing, L3 IP spoofing, L7 app attacks)
* **SOC Analysis:** Map alerts to OSI layers
* **Penetration Testing:** Target specific layers
* **Cloud Security:** Security groups = L3/4, NACLs = L3/4

### 📝 Daily Review
* [ ] Summarize learnings
* [ ] Commands: `ping`, `ipconfig`, `ifconfig`/`ip addr`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 2 — Network Devices, Architectures & Encapsulation
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Identify network devices and their OSI layers
* [ ] Compare client-server vs P2P
* [ ] Analyze performance metrics

### 📚 Theory
* [ ] **Devices:** Hub (L1, broadcasts), Switch (L2, MAC forwarding), Router (L3, IP forwarding), Firewall (L3-7), AP (L2), Modem (L1-2), Bridge (L2), Gateway (entry/exit)
* [ ] **Client-Server vs P2P:** Centralized control vs decentralized. Security vs cost tradeoffs.
* [ ] **Encapsulation:** Data → Segment → Packet → Frame → Bits (down). Decapsulation removes headers (up).
* [ ] **PDU:** Application=data, Transport=segment, Network=packet, Data Link=frame, Physical=bits.
* [ ] **Metrics:** Bandwidth (theoretical), Throughput (actual), Latency (one-way), RTT (round-trip), Jitter, Packet Loss.

### 🧪 Hands-On Lab (Packet Tracer)
* [ ] **Setup:** 1 hub + 1 switch + 1 router + 4 PCs + 1 server
* [ ] **Config:** Hub→Switch→Router→Server. Configure router interfaces and PCs.
* [ ] **Commands:** `show ip interface brief`, `show running-config`, `ping`, `tracert`
* [ ] **Expected:** Hub broadcasts all; switch unicasts intelligently
* [ ] **Troubleshoot:** Disconnect cable; misconfigure subnet mask

### 🧠 Exercises
* [ ] OSI layer for each device
* [ ] Draw encapsulation with headers
* [ ] 1 Gbps bandwidth, 400 Mbps throughput — 5 reasons
* [ ] **Subnetting:** Divide 192.168.10.0/24 into 4 equal subnets

### 🔐 Cybersecurity Connection
* **Network Security:** Strategic firewall/IDS placement
* **SOC Analysis:** Know device logs
* **Penetration Testing:** VLAN hopping, router misconfigs, firewall gaps
* **Cloud Security:** Virtual appliances mirror physical functions

### 📝 Daily Review
* [ ] Summarize learnings
* [ ] Commands: `show ip interface brief`, `tracert`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 3 — Physical Layer, Cables & Ethernet
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand physical layer components
* [ ] Explain Ethernet standards
* [ ] Identify cable types

### 📚 Theory
* [ ] **Physical Layer (L1):** Raw bits, voltage, pins, cables, signaling.
* [ ] **Cables:** UTP/STP (Cat5e=1Gbps, Cat6=1-10Gbps, Cat6a=10Gbps, Cat7=10Gbps shielded), Fiber (single-mode=long, multi-mode=short), Coaxial (legacy).
* [ ] **Connectors:** RJ-45 (8 pins, T568A/B), LC/SC/ST (fiber), Console (RJ-45 to USB/DB-9).
* [ ] **Standards:** 10BASE-T, 100BASE-TX, 1000BASE-T, 10GBASE-T.
* [ ] **Cables:** Straight-through (different devices), Crossover (same devices). Modern = Auto-MDIX.
* [ ] **Signals:** Baseband (single), Broadband (multiplexed), Simplex/Half-Duplex/Full-Duplex.

### 🧪 Hands-On Lab (Packet Tracer)
* [ ] **Setup:** Network with different cable types. Observe link lights.
* [ ] **Config:** Connect with correct cables. Change speed/duplex.
* [ ] **Commands:** `show interfaces status`, `ethtool eth0`, adapter properties
* [ ] **Expected:** Green=good, Amber=issues, mismatched duplex=degradation
* [ ] **Troubleshoot:** Wrong cable type. Half vs full duplex.

### 🧠 Exercises
* [ ] Max distance: Cat6 UTP? Single-mode fiber?
* [ ] Draw T568B pinout
* [ ] When to use crossover today?
* [ ] **Subnetting:** 3 subnets, 50+ hosts from 172.16.0.0/22

### 🔐 Cybersecurity Connection
* **Network Security:** Physical security = first line. Cable tapping, closet access.
* **SOC Analysis:** Physical issues mimic security incidents
* **Penetration Testing:** Unsecured jacks, lobby ports
* **Cloud Security:** Physical abstracted; Direct Connect relevance

### 📝 Daily Review
* [ ] Summarize learnings
* [ ] Commands: `show interfaces status`, `ethtool`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 4 — Data Link Layer: Ethernet, MAC & Switches
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Explain Ethernet frame structure
* [ ] Understand MAC addressing
* [ ] Describe switch operations

### 📚 Theory
* [ ] **Ethernet Frame:** Preamble(7B), SFD(1B), Dest MAC(6B), Src MAC(6B), Type/Length(2B), Data(46-1500B), FCS(4B).
* [ ] **MAC:** 48-bit, XX:XX:XX:XX:XX:XX. OUI=first 3 bytes. UAA=burned-in, LAA=software.
* [ ] **Switch Operations:** Learning (src MAC→CAM), Forwarding (known dest), Flooding (unknown dest), Filtering (same port), Aging (300s).
* [ ] **Traffic:** Unicast (one-to-one), Multicast (one-to-group, 01:00:5E), Broadcast (one-to-all, FF:FF:FF:FF:FF:FF).

### 🧪 Hands-On Lab (Packet Tracer + Wireshark)
* [ ] **Setup:** 1 switch, 4 PCs, same subnet
* [ ] **Config:** Assign IPs in same subnet
* [ ] **Commands:** `show mac address-table`, `ip link show`, `getmac`, `ipconfig /all`. Wireshark filter `eth`.
* [ ] **Expected:** Switch learns MACs. Wireshark shows frame details.
* [ ] **Troubleshoot:** Clear MAC table (`clear mac address-table dynamic`). Ping and watch repopulate.

### 🧠 Exercises
* [ ] OUI of 00:1A:2B:3C:4D:5E?
* [ ] Unknown dest MAC — what happens?
* [ ] Max and min Ethernet frame size?
* [ ] **Subnetting:** 10.0.0.0/8 → subnets for 500 hosts each

### 🔐 Cybersecurity Connection
* **Network Security:** MAC spoofing, CAM overflow, MAC flooding
* **SOC Analysis:** Unusual MACs, rapid CAM changes
* **Penetration Testing:** `macchanger`, `yersinia`
* **Cloud Security:** Virtual switches use MAC learning

### 📝 Daily Review
* [ ] Summarize learnings
* [ ] Commands: `show mac address-table`, `getmac`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 5 — ARP, Duplex, Speed & Domains
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Explain ARP
* [ ] Understand duplex and speed
* [ ] Differentiate collision/broadcast domains

### 📚 Theory
* [ ] **ARP:** Resolves IPv4→MAC. Request=broadcast "Who has this IP?" Reply=unicast with MAC. Cache stored locally. Gratuitous ARP=self-announcement. Proxy ARP=router responds for another network.
* [ ] **Duplex/Speed:** Half-duplex (send OR receive, CSMA/CD). Full-duplex (send AND receive, no collisions). Auto-negotiation (can fail).
* [ ] **Collision Domains:** Where frames collide. Switch port=separate. Hub=single. Full-duplex=none.
* [ ] **Broadcast Domains:** Where broadcasts reach all. Routers separate. Switches without VLANs=single. VLANs separate at L2.

### 🧪 Hands-On Lab (Packet Tracer + Linux + Wireshark)
* [ ] **Setup:** 1 switch, 1 router, 3 PCs in different subnets
* [ ] **Config:** Router: 192.168.1.1/24 and 192.168.2.1/24. 2 PCs in subnet 1, 1 in subnet 2.
* [ ] **Commands:** `arp -a`, `ip neigh`, `ip neigh flush all`, Wireshark `arp`, `show interfaces status`, `show arp`
* [ ] **Expected:** ARP populates on ping. Wireshark shows request (broadcast) and reply (unicast).
* [ ] **Troubleshoot:** Clear ARP cache. Create duplex mismatch. Identify domains.

### 🧠 Exercises
* [ ] ARP process: 192.168.1.10 → 192.168.1.20
* [ ] Collision/broadcast domains: 1 hub, 1 switch (8 ports), 1 router (2 interfaces)
* [ ] Two devices, same IP — what happens?
* [ ] **Subnetting:** 192.168.5.0/24 → 100, 50, 20 hosts using VLSM

### 🔐 Cybersecurity Connection
* **Network Security:** ARP spoofing/poisoning
* **SOC Analysis:** Monitor gratuitous ARP storms
* **Penetration Testing:** `arpspoof`, `ettercap`, `bettercap`
* **Cloud Security:** ARP in virtualization

### 📝 Daily Review
* [ ] Summarize learnings
* [ ] Commands: `arp -a`, `ip neigh`, `show arp`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 6 — VLANs, Access Ports & Native VLAN
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand VLAN concepts
* [ ] Configure access ports
* [ ] Explain Native VLAN security

### 📚 Theory
* [ ] **VLAN:** Logical L2 segmentation. Different VLANs need router. Benefits: security, cost reduction, broadcast control. IDs 0-4095. Default=VLAN 1.
* [ ] **Access Ports:** Single VLAN. End devices. No tags.
* [ ] **Native VLAN:** VLAN on trunk carrying untagged traffic. Default=VLAN 1. Best practice: change to unused VLAN.
* [ ] **Security:** VLAN hopping (trick switch), Double tagging (exploits Native VLAN mismatch). Mitigation: disable unused ports, access mode, change Native VLAN, port security.

### 🧪 Hands-On Lab (Packet Tracer)
* [ ] **Setup:** 1 switch, 4 PCs. VLAN 10=Sales, VLAN 20=Engineering.
* [ ] **Config:**
```
vlan 10; name Sales; exit
vlan 20; name Engineering; exit
interface fa0/1; switchport mode access; switchport access vlan 10
interface fa0/2; switchport mode access; switchport access vlan 10
interface fa0/3; switchport mode access; switchport access vlan 20
interface fa0/4; switchport mode access; switchport access vlan 20
```
* [ ] **Commands:** `show vlan brief`, `show vlan id 10`, `show interfaces switchport`
* [ ] **Expected:** Same VLAN=ping works. Different VLAN=ping fails.
* [ ] **Troubleshoot:** Verify assignments. Test inter-VLAN (should fail).

### 🧠 Exercises
* [ ] Why can't different VLANs communicate without router?
* [ ] 3 security risks of VLAN 1 as Native VLAN?
* [ ] 200 devices, separate departments — VLANs help how?
* [ ] **Subnetting:** Map VLAN 10→192.168.10.0/24, VLAN 20→192.168.20.0/24

### 🔐 Cybersecurity Connection
* **Network Security:** VLANs = fundamental segmentation
* **SOC Analysis:** Monitor unauthorized VLAN changes
* **Penetration Testing:** VLAN hopping, DTP, double tagging
* **Cloud Security:** Subnets act like VLANs

### 📝 Daily Review
* [ ] Summarize learnings
* [ ] Commands: `vlan`, `switchport mode access`, `show vlan brief`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 7 — REVISION DAY: Data Link Layer Mastery
**Estimated Time:** 3 hours

### 🎯 Learning Objectives
* [ ] Review Days 4-6
* [ ] Build complex Layer 2 lab
* [ ] Troubleshoot Layer 2

### 📚 Theory Review
* [ ] Ethernet frame structure
* [ ] MAC addressing, OUI, traffic types
* [ ] Switch operations: learning, forwarding, flooding, filtering, aging
* [ ] ARP: request, reply, cache, gratuitous, proxy
* [ ] Duplex, speed, collision/broadcast domains
* [ ] VLANs: creation, assignment, access ports, Native VLAN

### 🧪 Hands-On Lab (Packet Tracer)
* [ ] **Setup:** 2 switches. VLAN 10 (Sales): 2 PCs each. VLAN 20 (Engineering): 2 PCs each. VLAN 30 (Management): 1 PC + 1 server.
* [ ] **Config:** Create VLANs 10,20,30. Configure access ports. Configure trunk between switches.
* [ ] **Commands:** `show vlan brief`, `show mac address-table`, `show interfaces trunk`, `ping`
* [ ] **Expected:** Intra-VLAN works across switches. Inter-VLAN fails.
* [ ] **Troubleshoot:** Misconfigure port VLAN. Simulate MAC conflict. Fix duplex mismatch.

### 🧠 Exercises
* [ ] Troubleshooting: User in VLAN 10 can't ping another in VLAN 10 on different switch. 5 causes?
* [ ] **Subnetting:** 172.16.0.0/16 → 8 subnets using FLSM
* [ ] Design 3-floor office, 3 departments, each floor = VLAN

### 🔐 Cybersecurity Connection
* [ ] VLANs vs flat network security?
* [ ] Layer 2 attacks in flat network?
* [ ] How to secure trunk link?

### 📝 Daily Review
* [ ] Summarize Layer 2 concepts
* [ ] Create Layer 2 command cheat sheet
* [ ] Document troubleshooting
* [ ] Update GitHub with diagram

---

## Day 8 — IPv4 Addressing, Public/Private IPs & CIDR
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand IPv4 structure and classes
* [ ] Differentiate public and private IPs
* [ ] Explain CIDR notation

### 📚 Theory
* [ ] **IPv4:** 32-bit, 4 octets, dotted decimal. Network + Host portions.
* [ ] **Classes:** A (1-126, /8), B (128-191, /16), C (192-223, /24), D (224-239, multicast), E (240-255, experimental).
* [ ] **Private (RFC 1918):** 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.
* [ ] **Special:** Loopback 127.0.0.0/8, Link-Local 169.254.0.0/16, Broadcast 255.255.255.255.
* [ ] **CIDR:** IP/prefix (e.g., 192.168.1.0/24). Replaced classful. Flexible subnetting, route aggregation.
* [ ] **Static vs Dynamic:** Static=manual (servers/devices). Dynamic=DHCP (end users).

### 🧪 Hands-On Lab (Linux + Packet Tracer)
* [ ] **Setup:** Configure devices with different IP classes/CIDR
* [ ] **Config:** `ip addr add 192.168.100.10/24 dev eth0`
* [ ] **Commands:** `ip addr`, `ipconfig /all`, `ipcalc`, `ping`
* [ ] **Expected:** Same subnet=communicate. Different subnet=fail without router.
* [ ] **Troubleshoot:** Misconfigure subnet mask. Private IP to public internet (fails without NAT).

### 🧠 Exercises
* [ ] 255.255.240.0 in CIDR?
* [ ] Usable hosts in /27?
* [ ] Is 172.32.0.0 private?
* [ ] **Subnetting:** 203.0.113.0/24 → 4 subnets, 50+ hosts each

### 🔐 Cybersecurity Connection
* **Network Security:** Private IPs + NAT hide topology. Don't rely on obscurity.
* **SOC Analysis:** Recognize private vs public in logs
* **Penetration Testing:** CIDR defines target ranges
* **Cloud Security:** VPC CIDR design prevents overlap

### 📝 Daily Review
* [ ] Summarize learnings
* [ ] Commands: `ip addr`, `ipconfig /all`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 9 — Subnetting Part 1: FLSM & Intensive Practice
**Estimated Time:** 4 hours

### 🎯 Learning Objectives
* [ ] Master FLSM
* [ ] Calculate subnet masks, network addresses, broadcasts
* [ ] Determine usable host ranges

### 📚 Theory
* [ ] **Why Subnetting:** Reduce broadcasts, improve security, efficient IPs, simplify management.
* [ ] **Subnet Mask:** 32-bit. Network bits=1, host bits=0.
* [ ] **FLSM:** All subnets use SAME mask. Formula: 2^n >= subnets. Hosts: 2^h - 2.
* [ ] **Quick Method:** Powers of 2: 128,64,32,16,8,4,2,1. Mask values: 128,192,224,240,248,252,254,255. Block size = 256 - mask value.
* [ ] **Formulas:** Subnets=2^n. Hosts=2^h-2. Block=256-mask value.

### 🧪 Hands-On Lab (Paper + Packet Tracer)
* [ ] **Setup:** 4 subnets from 192.168.1.0/24 using FLSM
* [ ] **Config:** Borrow 2 bits (/26). Subnets: .0/26, .64/26, .128/26, .192/26. Router with 4 interfaces. Assign PCs.
* [ ] **Commands:** `show ip route`, `show ip interface brief`, `ping`
* [ ] **Expected:** Correct calculations. Inter-subnet works through router.
* [ ] **Troubleshoot:** Wrong subnet mask. Verify manually.

### 🧠 Exercises (Intensive Practice)
* [ ] **Ex1:** 172.16.0.0/16 → 8 subnets. New mask? List all.
* [ ] **Ex2:** 10.0.0.0/8 → 16 subnets. New mask? First 4 subnets?
* [ ] **Ex3:** 192.168.5.0/24 → 2 subnets, 100 hosts each. Mask? List.
* [ ] **Ex4:** 192.168.10.0/28 → block size, network, range, broadcast?
* [ ] **Ex5:** Host 172.20.45.67/20 → network, broadcast, range?
* [ ] **Ex6:** How many /30 from 10.10.0.0/16?
* [ ] **Ex7:** Need 500 hosts/subnet. Smallest mask?
* [ ] **Ex8:** 203.0.113.0/27 → list all subnets
* [ ] **Ex9:** /23 → usable hosts? Mask?
* [ ] **Ex10:** 192.168.100.0/24 → 8 subnets, assign VLANs 10-17

### 🔐 Cybersecurity Connection
* **Network Security:** Subnetting enables security zones
* **SOC Analysis:** Subnet boundaries identify lateral movement
* **Penetration Testing:** Pivoting between subnets
* **Cloud Security:** VPC subnet design critical

### 📝 Daily Review
* [ ] Summarize formulas
* [ ] Write subnetting cheat sheet
* [ ] Document errors
* [ ] Update GitHub

---

## Day 10 — Subnetting Part 2: VLSM & Advanced Practice
**Estimated Time:** 4 hours

### 🎯 Learning Objectives
* [ ] Master VLSM
* [ ] Allocate IPs efficiently
* [ ] Design real-world IP plans

### 📚 Theory
* [ ] **VLSM:** Subnets have DIFFERENT masks. Max efficiency. Requires classless protocols (OSPF, EIGRP, BGP, RIPv2).
* [ ] **Process:** 1) List largest to smallest. 2) Allocate largest first. 3) Continue fitting. 4) Document.
* [ ] **Summarization:** Combine routes. Reduce table size. Find common prefix.
* [ ] **Sizes:** WAN=/30 or /31. Small=/28 or /29. Medium=/26 or /25. Large=/24+.

### 🧪 Hands-On Lab (Packet Tracer)
* [ ] **Setup:** Company: HQ(200), Branch A(50), Branch B(25), 2 WAN links(2 each), Server farm(10), Management(5).
* [ ] **Config:** Use 10.0.0.0/8. Apply VLSM. Configure routers/PCs.
* [ ] **Commands:** `show ip route`, `show ip interface brief`, `ping`, `traceroute`
* [ ] **Expected:** All communicate. No overlap. Efficient.
* [ ] **Troubleshoot:** Create overlapping subnet. Verify summarization.

### 🧠 Exercises (VLSM Practice)
* [ ] **Ex1:** 192.168.1.0/24 → 60, 30, 14, 2(WAN), 2(WAN)
* [ ] **Ex2:** 172.20.0.0/22 → 400, 200, 100, 50, 4 WAN links
* [ ] **Ex3:** Summarize: 192.168.0.0/24 through 192.168.3.0/24
* [ ] **Ex4:** Summarize: 10.10.0.0/24 through 10.10.7.0/24
* [ ] **Ex5:** 3-site company, 10.0.0.0/16. A:500, B:250, C:100. 2 WAN + /28 mgmt per site.
* [ ] **Ex6:** Host 172.16.85.130/22. Is 172.16.88.1 same subnet?
* [ ] **Ex7:** 10.1.0.0/23, 10.1.2.0/23, 10.1.4.0/23 — summarize?
* [ ] **Ex8:** 203.0.113.0/24 → 100, 50, 20, 2 WAN links
* [ ] **Ex9:** Summarize: 172.16.16.0/24 through 172.16.19.0/24
* [ ] **Ex10:** 50 branches (20 hosts) + HQ (500). Use 10.0.0.0/8. First 5 branches.

### 🔐 Cybersecurity Connection
* **Network Security:** VLSM = precise segmentation
* **SOC Analysis:** Read routing tables, identify anomalies
* **Penetration Testing:** Nmap uses CIDR
* **Cloud Security:** AWS/Azure/GCP CIDR planning

### 📝 Daily Review
* [ ] Summarize VLSM process
* [ ] Write VLSM template
* [ ] Document exercises
* [ ] Update GitHub

---

## Day 11 — IPv6 Fundamentals, Addressing & Dual Stack
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand IPv6 structure and types
* [ ] Write and compress IPv6 addresses
* [ ] Explain dual-stack and transitions

### 📚 Theory
* [ ] **Why IPv6:** IPv4 exhaustion. 2^128 addresses. Built-in IPsec. Better QoS.
* [ ] **Structure:** 128 bits, 8 groups of 4 hex. Compression: omit leading zeros; replace one consecutive all-zero group with :: (once only).
* [ ] **Types:** Global Unicast (2000::/3), Link-Local (FE80::/10), Unique Local (FC00::/7), Loopback (::1), Multicast (FF00::/8), Anycast.
* [ ] **Components:** Interface ID (last 64 bits), Subnet ID, Global Routing Prefix.
* [ ] **Subnetting:** Standard=/64. ISP gives /48 or /56. /48 = 65,536 /64 subnets.
* [ ] **Dual Stack:** IPv4 + IPv6 simultaneously. Most common transition.
* [ ] **Transitions:** Tunneling (6to4, Teredo), Translation (NAT64, DNS64).

### 🧪 Hands-On Lab (Linux + Packet Tracer)
* [ ] **Setup:** Configure IPv6 on Linux and Packet Tracer
* [ ] **Config:** `ip -6 addr add 2001:db8:1::1/64 dev eth0`. Enable forwarding: `sysctl -w net.ipv6.conf.all.forwarding=1`
* [ ] **Commands:** `ip -6 addr`, `ip -6 route`, `ping6`, `show ipv6 interface brief`, `show ipv6 route`
* [ ] **Expected:** Correct assignment. Ping6 works. Link-local auto-configures.
* [ ] **Troubleshoot:** Practice compressing/expanding. Verify link-local vs global.

### 🧠 Exercises
* [ ] Compress: 2001:0DB8:0000:1234:0000:0000:0000:ABCD
* [ ] Expand: FE80::1
* [ ] What is FF02::1?
* [ ] ISP gives 2001:DB8:ACAD::/48. How many /64 subnets?
* [ ] **Subnetting:** From 2001:DB8:ACAD::/48, allocate first 3 /64 subnets

### 🔐 Cybersecurity Connection
* **Network Security:** IPv6 often overlooked. Firewalls may not inspect it.
* **SOC Analysis:** IPv6 logs differ. Understand compressed notation.
* **Penetration Testing:** IPv6 attack vector if unmonitored
* **Cloud Security:** Major clouds support IPv6. Dual-stack VPCs.

### 📝 Daily Review
* [ ] Summarize IPv6 types and compression
* [ ] Commands: `ip -6 addr`, `ping6`, `show ipv6 route`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 12 — Routers, Routing Tables & Static Routing
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand router functions and components
* [ ] Read routing tables
* [ ] Configure static and default routes

### 📚 Theory
* [ ] **Router Functions:** Forward packets between networks (L3). Use routing tables. Strip/rebuild L2 headers.
* [ ] **Components:** CPU, RAM (running config, routing table, ARP), ROM (bootstrap), Flash (IOS), NVRAM (startup config), Interfaces.
* [ ] **Routing Table:** Destination Network, Subnet Mask, Next Hop, Exit Interface, Metric, Administrative Distance.
* [ ] **Route Types:** Directly Connected, Static, Dynamic.
* [ ] **Static Routing:** Manual. Secure, predictable, no overhead. Not scalable. Syntax: `ip route [dest] [mask] [next-hop] [exit-int]`
* [ ] **Default Route:** 0.0.0.0/0 or ::/0. Gateway of last resort. Essential for internet.
* [ ] **Administrative Distance:** Connected=0, Static=1, EIGRP=90, OSPF=110, RIP=120. Lower=preferred.

### 🧪 Hands-On Lab (Packet Tracer)
* [ ] **Setup:** 3 routers in triangle. Each connects to LAN.
* [ ] **Config:**
```
interface g0/0; ip address 192.168.1.1 255.255.255.0; no shutdown
interface g0/1; ip address 10.0.0.1 255.255.255.252; no shutdown
ip route 192.168.2.0 255.255.255.0 10.0.0.2
ip route 192.168.3.0 255.255.255.0 10.0.0.2
ip route 0.0.0.0 0.0.0.0 10.0.0.2
```
* [ ] **Commands:** `show ip route`, `show ip route static`, `show ip interface brief`, `ping`, `traceroute`
* [ ] **Expected:** All networks reachable. Default route present. C=connected, S=static, S*=default.
* [ ] **Troubleshoot:** Remove static route. Misconfigure next-hop. Compare tables.

### 🧠 Exercises
* [ ] Packet for 172.16.50.10. Routes: 172.16.0.0/16 and 172.16.50.0/24. Which used? Why?
* [ ] Difference: `ip route ... 10.1.1.1` vs `ip route ... GigabitEthernet0/0`?
* [ ] Why "gateway of last resort"?
* [ ] **Subnetting:** 4 routers, 30 hosts each LAN. 10.0.0.0/16 FLSM. Calculate /30 WAN links.

### 🔐 Cybersecurity Connection
* **Network Security:** Static routes harder to manipulate. Don't adapt.
* **SOC Analysis:** Routing table changes = reconnaissance
* **Penetration Testing:** Dynamic protocols targeted. Static immune but bypassable.
* **Cloud Security:** Cloud route tables = equivalent.

### 📝 Daily Review
* [ ] Summarize learnings
* [ ] Commands: `show ip route`, `ip route`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 13 — Dynamic Routing: RIP & OSPF Introduction
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand dynamic routing
* [ ] Configure RIPv2
* [ ] Introduce OSPF

### 📚 Theory
* [ ] **Dynamic Routing:** Auto-learn and adapt. Scalable, fault-tolerant. Uses bandwidth/CPU.
* [ ] **Categories:** Distance Vector (RIP, EIGRP), Link State (OSPF, IS-IS), Path Vector (BGP).
* [ ] **RIP:** Distance vector. Metric=hop count (max 15). RIPv1=classful, broadcast. RIPv2=classless, multicast 224.0.0.9, authentication. Updates every 30s. Slow convergence.
* [ ] **OSPF:** Link state. Metric=cost (bandwidth). Classless. Dijkstra SPF. Multicast 224.0.0.5/6. Fast convergence. Hierarchical with areas.
* [ ] **Metrics:** Hop count (RIP), Bandwidth/cost (OSPF), Delay/Load/Reliability (EIGRP).

### 🧪 Hands-On Lab (Packet Tracer)
* [ ] **Setup:** 3 routers in line: R1—R2—R3. Each has LAN.
* [ ] **Config:**
**RIPv2:**
```
router rip; version 2; no auto-summary; network 192.168.1.0; network 10.0.0.0
```
**OSPF:**
```
router ospf 1; router-id 1.1.1.1; network 192.168.1.0 0.0.0.255 area 0; network 10.0.0.0 0.0.0.3 area 0
```
* [ ] **Commands:** `show ip protocols`, `show ip route`, `debug ip rip`, `show ip ospf neighbor`, `show ip ospf database`, `show ip ospf interface`
* [ ] **Expected:** R routes in table. O routes in table. Neighbors form. All LANs communicate.
* [ ] **Troubleshoot:** Break link, watch convergence. Compare RIP vs OSPF speed. Check auth mismatches.

### 🧠 Exercises
* [ ] Why RIP limited to 15 hops?
* [ ] Main advantage of OSPF over RIP?
* [ ] Same route from RIP (AD 120) and OSPF (AD 110). Which installed?
* [ ] **Subnetting:** OSPF areas 0,1,2. Area 0=1000 hosts, Area 1=500, Area 2=200. Design with 10.0.0.0/8.

### 🔐 Cybersecurity Connection
* **Network Security:** Dynamic protocols can be attacked. RIP no auth by default. OSPF supports MD5/SHA.
* **SOC Analysis:** Unexpected routing updates = attacks
* **Penetration Testing:** `zodiac`, `loki` inject false routes.
* **Cloud Security:** BGP used internally. Hybrid cloud connectivity.

### 📝 Daily Review
* [ ] Summarize learnings
* [ ] Commands: `router rip`, `router ospf`, `show ip ospf neighbor`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 14 — OSPF Advanced: Neighbors, Areas, Metrics & ECMP
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand OSPF neighbor relationships and states
* [ ] Design multi-area OSPF
* [ ] Explain ECMP

### 📚 Theory
* [ ] **Neighbor Requirements:** Area ID match, Hello/Dead timers match, Auth match, Subnet mask match (broadcast), Stub flag match, MTU match.
* [ ] **Neighbor States:** Down → Init → Two-Way → ExStart → Exchange → Loading → Full.
* [ ] **DR/BDR Election:** On broadcast networks. Reduces adjacencies. Highest priority wins (default 1, 0=never). Tiebreaker=highest Router ID.
* [ ] **Areas:** Area 0=backbone. Standard, Stub, Totally Stubby, NSSA.
* [ ] **LSA Types:** Type 1 (Router), Type 2 (Network/DR), Type 3 (Summary/ABR), Type 4 (ASBR-Summary), Type 5 (External), Type 7 (NSSA External).
* [ ] **ECMP:** Equal-Cost Multi-Path. Multiple same-metric paths. Load balancing. Default up to 4 paths.

### 🧪 Hands-On Lab (Packet Tracer)
* [ ] **Setup:** Multi-area: Area 0 (R1 backbone) → R2 (Area 1) + R3 (Area 2). R4 in Area 0 with ECMP to R1.
* [ ] **Config:**
```
R1: router ospf 1; router-id 1.1.1.1; network 10.0.0.0 0.0.0.3 area 0; network 10.0.0.4 0.0.0.3 area 0; network 10.0.0.8 0.0.0.3 area 0
R2: router ospf 1; router-id 2.2.2.2; network 10.0.0.0 0.0.0.3 area 0; network 192.168.1.0 0.0.0.255 area 1
```
* [ ] **Commands:** `show ip ospf neighbor`, `show ip ospf database`, `show ip ospf interface`, `show ip route`, `show ip ospf border-routers`
* [ ] **Expected:** Neighbors FULL. R1=ABR. ECMP paths in table. Inter-area=O IA.
* [ ] **Troubleshoot:** Change hello timer. Create area mismatch. Verify DR/BDR.

### 🧠 Exercises
* [ ] List 7 OSPF neighbor states in order
* [ ] Same Router ID in same area — what happens?
* [ ] Why backbone area (Area 0)?
* [ ] How does ECMP work?
* [ ] **Subnetting:** 3-area OSPF. Area 0=10.0.0.0/24, Area 1=10.1.0.0/20, Area 2=10.2.0.0/20. WAN links=/30 from 10.255.0.0/24.

### 🔐 Cybersecurity Connection
* **Network Security:** OSPF auth prevents unauthorized routers. Without it = route injection.
* **SOC Analysis:** Neighbor state changes, LSA floods = instability or attacks
* **Penetration Testing:** Fake LSA injection, DR hijacking. `irpas` exploits weak OSPF.
* **Cloud Security:** Understanding dynamic routing for hybrid connectivity.

### 📝 Daily Review
* [ ] Summarize learnings
* [ ] Commands: `show ip ospf neighbor`, `show ip ospf database`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 15 — Transport Layer: TCP Deep Dive
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand TCP segment structure
* [ ] Explain three-way handshake and termination
* [ ] Describe flow control and error handling

### 📚 Theory
* [ ] **TCP:** Connection-oriented, reliable, ordered. Used for HTTP, HTTPS, SSH, FTP, SMTP.
* [ ] **Segment Structure:** Source Port(16b), Dest Port(16b), Sequence Number(32b), Ack Number(32b), Data Offset(4b), Reserved(6b), Flags(6b), Window Size(16b), Checksum(16b), Urgent Pointer(16b), Options, Data.
* [ ] **Flags:** SYN, ACK, FIN, RST, PSH, URG.
* [ ] **Three-Way Handshake:** 1) Client SYN. 2) Server SYN-ACK. 3) Client ACK.
* [ ] **Termination (Four-Way):** 1) Client FIN. 2) Server ACK. 3) Server FIN. 4) Client ACK.
* [ ] **Flow Control:** Sliding window. Receiver advertises window size. Sender adjusts.
* [ ] **Error Handling:** Checksum, sequence numbers, acknowledgments, retransmission.

### 🧪 Hands-On Lab (Wireshark + Linux)
* [ ] **Setup:** Capture TCP traffic to web server or SSH session.
* [ ] **Config:** Start Wireshark. Browse HTTP or SSH to server.
* [ ] **Commands:** Wireshark filter `tcp.port==80` or `tcp.port==22`. Linux: `netstat -tuln`, `ss -tuln`, `curl -v http://example.com`
* [ ] **Expected:** See SYN, SYN-ACK, ACK. See sequence/ack numbers. See window sizes.
* [ ] **Troubleshoot:** Identify retransmissions. Observe window size changes. Filter RST packets.

### 🧠 Exercises
* [ ] Draw three-way handshake with flags and sequence numbers
* [ ] Why four-way termination instead of three-way?
* [ ] What does RST indicate?
* [ ] Receiver window=640. Sender sent bytes 1-1000. What happens?
* [ ] **Subnetting:** 8 server racks, 30 hosts each. Design with 10.20.0.0/20 FLSM.

### 🔐 Cybersecurity Connection
* **Network Security:** SYN floods = DDoS. SYN cookies mitigate. RST attacks terminate connections.
* **SOC Analysis:** Unusual flag combinations (SYN-FIN) = scanning/evasion
* **Penetration Testing:** SYN scans (`-sS`) avoid full connections
* **Cloud Security:** Load balancers manage TCP. Health checks require TCP knowledge.

### 📝 Daily Review
* [ ] Summarize TCP handshake, termination, flow control
* [ ] Commands: `netstat -tuln`, `ss -tuln`, `curl -v`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 16 — Transport Layer: UDP, Ports & Sockets
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand UDP
* [ ] Explain ports and sockets
* [ ] List common protocols and ports

### 📚 Theory
* [ ] **UDP:** Connectionless, unreliable, no ordering, no flow control. Faster. Used for DNS, DHCP, VoIP, video, gaming.
* [ ] **Header:** Source Port(16b), Dest Port(16b), Length(16b), Checksum(16b). Much smaller than TCP.
* [ ] **Ports:** 0-65535. Well-Known=0-1023, Registered=1024-49151, Dynamic=49152-65535.
* [ ] **Sockets:** IP + Port = unique endpoint. Example: 192.168.1.10:8080.
* [ ] **Common Ports:** HTTP=80(TCP), HTTPS=443(TCP), SSH=22(TCP), FTP=21/20(TCP), DNS=53(TCP/UDP), DHCP=67/68(UDP), SMTP=25(TCP), POP3=110(TCP), IMAP=143(TCP), SNMP=161(UDP), NTP=123(UDP), Telnet=23(TCP), RDP=3389(TCP), LDAP=389(TCP), SMB=445(TCP).

### 🧪 Hands-On Lab (Linux + Wireshark)
* [ ] **Setup:** Capture DNS queries and HTTP traffic.
* [ ] **Config:** Use `dig`, `nslookup` for DNS. Use `curl` for HTTP.
* [ ] **Commands:** `netstat -tulpn`, `ss -tulpn`, `lsof -i`, `dig example.com`, `nslookup example.com`, Wireshark `udp.port==53`, `tcp.port==80`
* [ ] **Expected:** DNS over UDP (and TCP for large). HTTP over TCP. Identify source/dest ports.
* [ ] **Troubleshoot:** Check which process uses port: `lsof -i :80`. Identify ephemeral ports.

### 🧠 Exercises
* [ ] List 10 well-known ports and protocols
* [ ] When UDP over TCP? 3 scenarios.
* [ ] Socket for web server at 203.0.113.50 on HTTPS?
* [ ] Firewall blocks outbound UDP 53. What breaks? How can DNS still work?
* [ ] **Subnetting:** 5 departments, 60 hosts each. Design with 172.16.0.0/22 FLSM.

### 🔐 Cybersecurity Connection
* **Network Security:** Open ports = attack surface. UDP scanning harder than TCP.
* **SOC Analysis:** Monitor unusual ports. C2 uses non-standard ports.
* **Penetration Testing:** Nmap `-sV` identifies services. UDP scans (`-sU`) slow but critical.
* **Cloud Security:** Security groups/NACLs filter by port/protocol.

### 📝 Daily Review
* [ ] Summarize UDP vs TCP, ports, sockets
* [ ] Commands: `netstat -tulpn`, `ss -tulpn`, `lsof -i`, `dig`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 17 — Application Protocols Part 1: DNS, DHCP, HTTP/HTTPS, FTP/SFTP, SSH
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand DNS resolution
* [ ] Explain DHCP lease process
* [ ] Describe HTTP/HTTPS, FTP/SFTP, SSH

### 📚 Theory
* [ ] **DNS:** Translates domain names to IPs. Hierarchy: Root → TLD → Second-level → Subdomain.
* [ ] **DNS Records:** A(IPv4), AAAA(IPv6), MX(mail), NS(name server), CNAME(alias), TXT(text), PTR(reverse), SOA(start of authority).
* [ ] **Resolution:** Recursive query → Root → TLD → Authoritative → Answer. Caching via TTL.
* [ ] **DHCP DORA:** Discover(broadcast) → Offer(unicast) → Request(broadcast) → Acknowledge(unicast).
* [ ] **DHCP Lease:** Renewal at 50%, rebinding at 87.5%. Options: Gateway, DNS, domain, NTP.
* [ ] **HTTP:** Port 80. Request/response. Stateless. Methods: GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH. Status: 1xx(info), 2xx(success), 3xx(redirect), 4xx(client error), 5xx(server error).
* [ ] **HTTPS:** Port 443. HTTP over TLS/SSL. Encrypts data. Uses certificates.
* [ ] **FTP:** Port 21(control), 20(data). Unencrypted. Active and passive modes.
* [ ] **SFTP:** Port 22. Over SSH. Encrypted.
* [ ] **SSH:** Port 22. Encrypted remote access. Public-key cryptography. Supports tunneling and port forwarding.

### 🧪 Hands-On Lab (Linux + Wireshark + Packet Tracer)
* [ ] **Setup:** Configure DNS and DHCP in Packet Tracer. Test from Linux.
* [ ] **Config:** Add DNS server with A records. Add DHCP server with pool.
* [ ] **Commands:** `dig example.com`, `nslookup example.com`, `host example.com`, `dig +trace example.com`, `curl -I http://example.com`, `curl -I https://example.com`, `ssh user@host`, `scp file.txt user@host:/path`. Wireshark: `dns`, `http`, `ssh`.
* [ ] **Expected:** DNS resolves. DHCP assigns IPs. HTTP/HTTPS return headers. SSH connects.
* [ ] **Troubleshoot:** Change DNS server. Release/renew DHCP. Capture FTP vs SFTP.

### 🧠 Exercises
* [ ] Walk through DNS resolution for www.example.com
* [ ] DHCP server down — what IP does client get?
* [ ] Difference between HTTP 301 and 302?
* [ ] Why SFTP over FTP?
* [ ] **Subnetting:** 12 labs, 25 hosts each. Design with 192.168.0.0/20 FLSM.

### 🔐 Cybersecurity Connection
* **Network Security:** DNS hijacking, cache poisoning, tunneling. DHCP spoofing. HTTP=plaintext.
* **SOC Analysis:** Monitor DNS to suspicious domains, unusual DHCP, cleartext protocols.
* **Penetration Testing:** DNS enum (`dnsrecon`, `fierce`), DHCP starvation (`yersinia`), SSH brute force (`hydra`).
* **Cloud Security:** Route 53, Azure DNS, Cloud DNS. Cloud DHCP in VPCs. Always HTTPS.

### 📝 Daily Review
* [ ] Summarize DNS, DHCP, HTTP/HTTPS, FTP/SFTP, SSH
* [ ] Commands: `dig`, `nslookup`, `curl`, `ssh`, `scp`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 18 — Application Protocols Part 2: Email, NTP, SNMP, LDAP, SMB, RDP, ICMP
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand email protocols
* [ ] Explain NTP, SNMP, LDAP, SMB, RDP
* [ ] Describe ICMP

### 📚 Theory
* [ ] **SMTP:** Port 25(unencrypted), 587(TLS). Sends email. Commands: HELO, MAIL FROM, RCPT TO, DATA, QUIT.
* [ ] **POP3:** Port 110, 995(SSL). Downloads email. Usually deletes from server.
* [ ] **IMAP:** Port 143, 993(SSL). Synchronizes email. Keeps on server. Supports folders.
* [ ] **NTP:** Port 123(UDP). Synchronizes time. Critical for logs, certificates, Kerberos. Stratum levels: 0=atomic clock, 1-15=servers, 16=unsynchronized.
* [ ] **SNMP:** Port 161(UDP). Monitors network devices. v1=community strings(insecure), v2c=improved, v3=auth+encryption(secure). Components: Manager, Agent, MIB, OID. Operations: Get, GetNext, Set, Trap, Inform.
* [ ] **LDAP:** Port 389, 636(LDAPS). Directory services. Authentication (AD). Hierarchical: DC, OU, CN.
* [ ] **SMB:** Port 445(TCP). File/printer sharing. Windows networking. SMB1=insecure(deprecated), SMB2, SMB3=encrypted.
* [ ] **RDP:** Port 3389(TCP). Remote GUI to Windows. Can tunnel over SSH.
* [ ] **ICMP:** Network Layer (L3). Diagnostics and errors. Types: Echo Request(8, ping), Echo Reply(0), Destination Unreachable(3), Time Exceeded(11), Redirect(5).

### 🧪 Hands-On Lab (Linux + Wireshark)
* [ ] **Setup:** Test various protocols from Linux.
* [ ] **Config:** Configure NTP: `timedatectl set-ntp true`. Query SNMP: `snmpwalk -v2c -c public <ip> 1.3.6.1`. Query LDAP: `ldapsearch -x -H ldap://server -b "dc=example,dc=com"`.
* [ ] **Commands:** `ping -c 4 8.8.8.8`, `traceroute 8.8.8.8`, `ntpdate -q pool.ntp.org`, `snmpwalk -v2c -c public <ip>`, `smbclient -L //server`, `telnet <ip> 25`. Wireshark: `icmp`, `smb2`, `ldap`.
* [ ] **Expected:** Ping shows RTT. Traceroute shows hops. SNMP returns device info. SMB lists shares.
* [ ] **Troubleshoot:** Block ICMP, observe ping. Compare SNMP v1 vs v3. Test SMB1 vs SMB3.

### 🧠 Exercises
* [ ] Why IMAP better than POP3 for multi-device?
* [ ] What stratum is your NTP server? How to check?
* [ ] Why SNMP v1/v2c insecure? What does v3 add?
* [ ] What info from `snmpwalk`?
* [ ] **Subnetting:** Hospital: 6 VLANs — Admin(50), Patient Records(100), Medical Devices(30), Guest(200), Management(10), Servers(20). Design with 10.50.0.0/22 VLSM.

### 🔐 Cybersecurity Connection
* **Network Security:** SMTP without TLS leaks email. SNMP v1/v2c easily guessed. SMB1=EternalBlue. RDP exposed=major risk.
* **SOC Analysis:** Monitor unauthorized RDP, SNMP scans, SMB lateral movement.
* **Penetration Testing:** Email harvesting, SNMP enum (`onesixtyone`), SMB exploitation (`impacket`), RDP brute force.
* **Cloud Security:** AWS Directory Service, Azure AD. Cloud monitoring uses SNMP-like APIs.

### 📝 Daily Review
* [ ] Summarize email, NTP, SNMP, LDAP, SMB, RDP, ICMP
* [ ] Commands: `ping`, `traceroute`, `snmpwalk`, `smbclient`, `ldapsearch`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 19 — Network Services: DHCP, DNS, NAT/PAT & Port Forwarding
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Configure DHCP on router/server
* [ ] Understand NAT, PAT, port forwarding
* [ ] Troubleshoot DNS resolution

### 📚 Theory
* [ ] **DHCP Config (Cisco):**
```
ip dhcp pool LAN1
 network 192.168.1.0 255.255.255.0
 default-router 192.168.1.1
 dns-server 8.8.8.8
 domain-name example.com
 lease 8
ip dhcp excluded-address 192.168.1.1 192.168.1.10
```
* [ ] **DNS Resolution:** Hosts file → Local cache → Recursive resolver → Root → TLD → Authoritative → Answer.
* [ ] **NAT:** Translates private to public. Static NAT=one-to-one. Dynamic NAT=pool mapping. PAT=many-to-one using ports (most common).
* [ ] **Port Forwarding:** Maps external port to internal IP:port. Example: External 8080 → Internal 192.168.1.10:80.

### 🧪 Hands-On Lab (Packet Tracer + Linux)
* [ ] **Setup:** Router with LAN and WAN. DHCP on LAN. NAT/PAT on WAN.
* [ ] **Config:**
```
! DHCP
ip dhcp pool LAN
 network 192.168.1.0 255.255.255.0
 default-router 192.168.1.1
 dns-server 8.8.8.8
ip dhcp excluded-address 192.168.1.1 192.168.1.10

! NAT/PAT
interface g0/0; ip nat inside
interface g0/1; ip nat outside
access-list 1 permit 192.168.1.0 0.0.0.255
ip nat inside source list 1 interface g0/1 overload

! Port Forwarding
ip nat inside source static tcp 192.168.1.10 80 interface g0/1 8080
```
* [ ] **Commands:** `show ip dhcp binding`, `show ip dhcp pool`, `show ip nat translations`, `show ip nat statistics`, `clear ip nat translation *`. Linux: `dhclient -r`, `dhclient`.
* [ ] **Expected:** PCs get IP via DHCP. NAT translations visible. Port forwarding works.
* [ ] **Troubleshoot:** DHCP pool exhausted. NAT inside/outside interfaces wrong. Port forwarding ACL issue.

### 🧠 Exercises
* [ ] PC gets 169.254.x.x — meaning? Fix?
* [ ] NAT vs PAT?
* [ ] 1 public IP, 50 internal hosts — which NAT?
* [ ] Configure port forwarding: SSH internal 192.168.1.20:22 to external 2222.
* [ ] **Subnetting:** ISP has 100 customers, each needs /28. Design from 203.0.113.0/24. How many customers?

### 🔐 Cybersecurity Connection
* **Network Security:** NAT != firewall. Port forwarding creates exposure. DHCP snooping prevents rogue servers.
* **SOC Analysis:** Monitor NAT logs for suspicious outbound. Track port forwarding.
* **Penetration Testing:** NAT bypass, UPnP exploitation, port forwarding enum.
* **Cloud Security:** Cloud NAT, NAT Gateway, Azure NAT Gateway. NAT vs public IPs.

### 📝 Daily Review
* [ ] Summarize DHCP, DNS, NAT/PAT, port forwarding
* [ ] Commands: `show ip dhcp binding`, `show ip nat translations`, `dhclient`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 20 — Proxy, Load Balancing, ACLs & REVISION
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand proxy servers
* [ ] Explain load balancing basics
* [ ] Configure and test ACLs

### 📚 Theory
* [ ] **Proxy Servers:** Forward proxy (client→proxy→internet, hides client, filters, caches). Reverse proxy (internet→proxy→server, load balancing, SSL termination, caching, WAF). Transparent proxy (intercepts without client config).
* [ ] **Load Balancing:** Distributes traffic across servers. Algorithms: Round-robin, Least Connections, IP Hash, Weighted. Types: Layer 4 (IP/port), Layer 7 (content). Health Checks monitor availability.
* [ ] **ACLs:** Filter traffic by rules. Standard ACL=source IP only (1-99, 1300-1999). Extended ACL=source/dest IP, protocol, port (100-199, 2000-2699). Direction: Inbound/Outbound. Implicit deny at end. Placement: Standard near destination, Extended near source.

### 🧪 Hands-On Lab (Packet Tracer)
* [ ] **Setup:** Router with 2 LANs and WAN. Configure ACLs.
* [ ] **Config:**
```
! Standard ACL — Block 192.168.2.0 from 192.168.1.0
access-list 10 deny 192.168.2.0 0.0.0.255
access-list 10 permit any
interface g0/0; ip access-group 10 out

! Extended ACL — Allow HTTP/HTTPS only
access-list 100 permit tcp any any eq 80
access-list 100 permit tcp any any eq 443
access-list 100 deny ip any any log
interface g0/1; ip access-group 100 in
```
* [ ] **Commands:** `show access-lists`, `show ip interface g0/0`, `ping`, `traceroute`
* [ ] **Expected:** Standard ACL blocks source. Extended ACL allows only specified protocols. Log entries for denied traffic.
* [ ] **Troubleshoot:** ACL blocking legitimate traffic. Wrong direction. Missing implicit deny.

### 🧠 Exercises
* [ ] Difference between standard and extended ACL?
* [ ] Where to place standard ACL? Extended ACL? Why?
* [ ] What is the implicit deny?
* [ ] Write an ACL to block Telnet (port 23) from 192.168.10.0/24 to anywhere.
* [ ] **Subnetting:** A company has 8 departments needing 30-60 hosts each. Design with 172.20.0.0/21 using VLSM.

### 🔐 Cybersecurity Connection
* **Network Security:** ACLs = first line of defense. Reverse proxies protect backends. Load balancers distribute DDoS impact.
* **SOC Analysis:** Monitor ACL hits and denies. Proxy logs show user activity.
* **Penetration Testing:** ACL bypass techniques. Proxy enumeration. Load balancer detection (`lbd`).
* **Cloud Security:** AWS ALB/NLB, Azure Load Balancer, Cloud Load Balancing. Security groups = cloud ACLs.

### 📝 Daily Review
* [ ] Summarize proxy, load balancing, ACLs
* [ ] Commands: `access-list`, `show access-lists`, `ip access-group`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 21 — Wireless Networking
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand Wi-Fi fundamentals
* [ ] Explain 802.11 standards, channels, and security
* [ ] Describe wireless authentication

### 📚 Theory
* [ ] **Wi-Fi Fundamentals:** Wireless LAN using radio waves. 2.4 GHz and 5 GHz bands. Subject to interference, attenuation, and range limitations.
* [ ] **802.11 Standards:** 802.11b (11 Mbps, 2.4GHz), 802.11a (54 Mbps, 5GHz), 802.11g (54 Mbps, 2.4GHz), 802.11n (600 Mbps, 2.4/5GHz, MIMO), 802.11ac (1.3+ Gbps, 5GHz, wider channels), 802.11ax (Wi-Fi 6, 9.6 Gbps, OFDMA, 2.4/5/6GHz).
* [ ] **SSID:** Service Set Identifier. Network name. Can be hidden (not a security measure).
* [ ] **Channels:** 2.4GHz has 14 channels, only 1, 6, 11 are non-overlapping. 5GHz has more channels, less interference.
* [ ] **Security:** WEP (Wired Equivalent Privacy, cracked, never use), WPA (TKIP, deprecated), WPA2 (AES-CCMP, current standard), WPA3 (SAE, forward secrecy, latest).
* [ ] **Authentication:** Open (no auth), PSK (Pre-Shared Key, home/small office), Enterprise (802.1X with RADIUS, corporate).
* [ ] **Wireless Concepts:** BSS (Basic Service Set, single AP), ESS (Extended Service Set, multiple APs same SSID), BSSID (AP MAC address), RSSI (signal strength), SNR (signal-to-noise ratio).

### 🧪 Hands-On Lab (Linux + Packet Tracer)
* [ ] **Setup:** Configure wireless network in Packet Tracer. Use Linux `iw` commands if wireless adapter available.
* [ ] **Config:** Add AP, configure SSID, WPA2-PSK with passphrase. Connect wireless laptops.
* [ ] **Commands:** `iw list`, `iw dev wlan0 scan`, `iwconfig`, `nmcli dev wifi list`, `nmcli dev wifi connect "SSID" password "pass"`
* [ ] **Expected:** Wireless devices connect and communicate. Signal strength visible.
* [ ] **Troubleshoot:** Wrong passphrase. Wrong security type. Channel interference.

### 🧠 Exercises
* [ ] Why are channels 1, 6, 11 recommended for 2.4GHz?
* [ ] What is the main weakness of WEP?
* [ ] Difference between WPA2-Personal and WPA2-Enterprise?
* [ ] What is the advantage of Wi-Fi 6 (802.11ax) over Wi-Fi 5 (802.11ac)?
* [ ] **Subnetting:** A hotel needs 4 wireless networks: Guest(200), Staff(50), Management(20), IoT(100). Design with 10.100.0.0/22 VLSM.

### 🔐 Cybersecurity Connection
* **Network Security:** WEP and WPA-TKIP are broken. Use WPA2-AES minimum, WPA3 preferred. Rogue APs are a major threat. Wireless isolation prevents guest-to-guest attacks.
* **SOC Analysis:** Monitor for unauthorized APs, unusual wireless associations, and weak encryption.
* **Penetration Testing:** Wireless audits include WPA cracking (`aircrack-ng`), rogue AP detection, and Evil Twin attacks.
* **Cloud Security:** Cloud-managed wireless (Cisco Meraki, Aruba Central). Centralized policy and monitoring.

### 📝 Daily Review
* [ ] Summarize wireless standards, channels, security
* [ ] Commands: `iw`, `iwconfig`, `nmcli`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 22 — Network Security: Firewalls, ACLs, IDS/IPS & Segmentation
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand firewall types and rules
* [ ] Explain IDS/IPS differences
* [ ] Design network segmentation and DMZ

### 📚 Theory
* [ ] **Firewalls:** Filter traffic based on rules. Types: Packet-filtering (stateless, L3/L4), Stateful (tracks connections, L3-L4), Application/Proxy (L7, inspects content), Next-Generation (NGFW, includes IDS/IPS, app control, threat intel).
* [ ] **Firewall Rules:** Typically deny by default, allow explicitly. Order matters (top to bottom). Stateful firewalls track connection state (NEW, ESTABLISHED, RELATED).
* [ ] **IDS (Intrusion Detection System):** Monitors and alerts. Passive. Types: NIDS (network-based), HIDS (host-based). Signatures vs anomaly detection.
* [ ] **IPS (Intrusion Prevention System):** Monitors, alerts, AND blocks. Inline. Can drop malicious traffic.
* [ ] **Network Segmentation:** Divide network into zones. Benefits: limit blast radius, control traffic, improve compliance. Methods: VLANs, subnets, firewalls, ACLs.
* [ ] **DMZ (Demilitarized Zone):** Perimeter network for public-facing services. Between internal network and internet. Web servers, mail servers, DNS servers placed here.
* [ ] **Zero Trust Basics:** Never trust, always verify. Assume breach. Verify every access request. Micro-segmentation. Least privilege.

### 🧪 Hands-On Lab (Packet Tracer + Linux)
* [ ] **Setup:** Build network with internal LAN, DMZ, and internet. Router with ACLs acts as firewall.
* [ ] **Config:**
```
! Allow DMZ to serve HTTP/HTTPS to internet
access-list 101 permit tcp any 192.168.10.0 0.0.0.255 eq 80
access-list 101 permit tcp any 192.168.10.0 0.0.0.255 eq 443
! Deny DMZ from initiating to internal
access-list 101 deny ip 192.168.10.0 0.0.0.255 192.168.1.0 0.0.0.255
! Allow internal to internet
access-list 101 permit ip 192.168.1.0 0.0.0.255 any
```
* [ ] **Commands:** `show access-lists`, `show ip interface`, `ping`, `traceroute`. Linux: `iptables -L` (if available).
* [ ] **Expected:** DMZ serves web traffic. DMZ cannot initiate to internal. Internal reaches internet.
* [ ] **Troubleshoot:** ACL too restrictive. Wrong direction. Missing permit.

### 🧠 Exercises
* [ ] Difference between stateful and stateless firewall?
* [ ] IDS vs IPS — when would you choose one over the other?
* [ ] Design a DMZ for a company with web server, mail server, and DNS server.
* [ ] What are the 3 core principles of Zero Trust?
* [ ] **Subnetting:** Design a segmented network: Internal(500), DMZ(10), Management(15), Guest(100). Use 10.0.0.0/21 VLSM.

### 🔐 Cybersecurity Connection
* **Network Security:** Defense in depth requires firewalls at multiple layers. Segmentation limits lateral movement.
* **SOC Analyst:** Must understand firewall logs, IDS alerts, and network topology to triage incidents.
* **Penetration Testing:** Testers map network segments, find firewall bypasses, and test segmentation effectiveness.
* **Cloud Security:** Cloud firewalls (AWS Security Groups, Azure NSG, GCP Firewall Rules). Cloud IDS/IPS services.

### 📝 Daily Review
* [ ] Summarize firewalls, IDS/IPS, segmentation, DMZ, Zero Trust
* [ ] Commands: `access-list`, `show access-lists`, `iptables -L`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 23 — Network Security: VPN, IPSec, TLS & Network Monitoring
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand VPN types and use cases
* [ ] Explain IPSec and TLS basics
* [ ] Configure network monitoring and logging

### 📚 Theory
* [ ] **VPN (Virtual Private Network):** Extends private network over public internet. Types: Site-to-Site (connects networks), Remote Access (connects users). Protocols: IPsec, SSL/TLS, L2TP, PPTP (deprecated), WireGuard.
* [ ] **IPSec:** Suite of protocols for secure IP communications. Modes: Transport (end-to-end) and Tunnel (gateway-to-gateway). Components: AH (Authentication Header, integrity), ESP (Encapsulating Security Payload, encryption+integrity), IKE (Internet Key Exchange, key management). SA (Security Association) defines parameters.
* [ ] **TLS (Transport Layer Security):** Encrypts application layer traffic. Successor to SSL. TLS 1.2 and 1.3 are current. Uses certificates, asymmetric encryption for handshake, symmetric for data.
* [ ] **Network Monitoring:** Continuous observation of network health and performance. Tools: SNMP, Syslog, NetFlow/sFlow, packet captures.
* [ ] **Logging:** Centralized log collection (SIEM). Syslog (UDP 514, TCP 6514 for TLS). Log sources: firewalls, routers, switches, servers, endpoints.
* [ ] **Network Monitoring Tools:** Nagios, Zabbix, PRTG, SolarWinds, LibreNMS, Prometheus + Grafana.

### 🧪 Hands-On Lab (Linux + Packet Tracer)
* [ ] **Setup:** Configure site-to-site VPN in Packet Tracer (if supported) or use Linux OpenVPN/WireGuard.
* [ ] **Config (Linux OpenVPN):** Install `openvpn`. Configure client with `.ovpn` file.
* [ ] **Commands:** `openvpn --config client.ovpn`, `ip route` (check tunnel), `ping` through VPN tunnel. `tcpdump -i tun0`. `syslog` configuration in `/etc/rsyslog.conf`.
* [ ] **Expected:** VPN tunnel established. Traffic routes through tunnel. Logs captured.
* [ ] **Troubleshoot:** Certificate mismatch. Routing issues. Firewall blocking VPN ports.

### 🧠 Exercises
* [ ] Difference between site-to-site and remote access VPN?
* [ ] What does IPSec ESP provide that AH does not?
* [ ] Why is TLS 1.3 better than TLS 1.2?
* [ ] What is the difference between NetFlow and packet capture?
* [ ] **Subnetting:** Two offices need site-to-site VPN. Office A: 300 hosts. Office B: 150 hosts. Each needs /29 management subnet. Design with 172.25.0.0/22 VLSM.

### 🔐 Cybersecurity Connection
* **Network Security:** VPNs encrypt data in transit. TLS protects web traffic. Monitoring detects anomalies early.
* **SOC Analysis:** VPN logs show who connected when. TLS inspection (if deployed) reveals encrypted threats. SIEM correlates logs.
* **Penetration Testing:** Test VPN configurations for weak encryption, certificate issues, and split tunneling risks.
* **Cloud Security:** Cloud VPN (AWS VPN, Azure VPN Gateway, Cloud VPN). TLS everywhere in cloud. Cloud monitoring (CloudWatch, Azure Monitor).

### 📝 Daily Review
* [ ] Summarize VPN, IPSec, TLS, monitoring, logging
* [ ] Commands: `openvpn`, `ip route`, `tcpdump`, `rsyslog`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 24 — Network Security: Attack Concepts & Defenses
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand DDoS concepts
* [ ] Explain port scanning, ARP spoofing, DNS attacks, MitM
* [ ] Describe defensive measures

### 📚 Theory
* [ ] **DDoS (Distributed Denial of Service):** Overwhelms target with traffic. Types: Volumetric (UDP flood, ICMP flood), Protocol (SYN flood, Ping of Death), Application (HTTP flood, Slowloris). Defenses: Rate limiting, scrubbing centers, CDN, blackholing.
* [ ] **Port Scanning:** Identifies open ports and services. Types: TCP SYN scan, TCP Connect scan, UDP scan, FIN/NULL/Xmas scans. Tools: Nmap, Masscan. Defense: Firewalls, IDS/IPS, port knocking.
* [ ] **ARP Spoofing:** Attacker sends fake ARP replies to redirect traffic. Enables MitM. Defense: Dynamic ARP Inspection (DAI), static ARP entries, private VLANs.
* [ ] **DNS Attacks:** DNS spoofing/poisoning (fake records), DNS tunneling (data exfiltration via DNS queries), DNS amplification (DDoS). Defense: DNSSEC, DNS filtering, monitoring query volume.
* [ ] **Man-in-the-Middle (MitM):** Attacker intercepts communication. Methods: ARP spoofing, DNS spoofing, rogue AP, SSL stripping. Defense: HTTPS/HSTS, certificate pinning, network segmentation, monitoring.

### 🧪 Hands-On Lab (Linux — Authorized Local Lab Only)
* [ ] **Setup:** Use intentionally vulnerable lab environment or isolated VM network.
* [ ] **Config:** Use Kali Linux or similar in isolated environment.
* [ ] **Commands (Defensive Only):**
  - Detect ARP spoofing: `arp -a`, `ip neigh`, Wireshark filter `arp`
  - Detect port scans: Review firewall logs, `iptables` logging
  - Monitor DNS queries: `tcpdump port 53`, `dnstop`
  - Check for unusual traffic: `iftop`, `nethogs`
* [ ] **Expected:** Identify suspicious patterns. Document defensive responses.
* [ ] **Troubleshoot:** Distinguish legitimate scans from malicious. False positives in IDS.

### 🧠 Exercises
* [ ] What is the difference between DoS and DDoS?
* [ ] How does a SYN flood work? What is the defense?
* [ ] What is DNS tunneling and why is it dangerous?
* [ ] List 5 signs of ARP spoofing on a network.
* [ ] **Subnetting:** A SOC needs to monitor 4 network segments: Corporate(400), Guest(150), Servers(50), IoT(75). Design with 10.200.0.0/22 VLSM.

### 🔐 Cybersecurity Connection
* **Network Security:** Understanding attacks is essential for defense. Layered security (defense in depth) mitigates single points of failure.
* **SOC Analysis:** Analysts detect DDoS patterns, port scans, and DNS anomalies. Correlation rules identify multi-stage attacks.
* **Penetration Testing:** Authorized testing of defenses. Validate DAI, DNSSEC, and firewall effectiveness.
* **Cloud Security:** Cloud DDoS protection (AWS Shield, Azure DDoS Protection). Cloud-native IDS/IPS.

### 📝 Daily Review
* [ ] Summarize DDoS, port scanning, ARP spoofing, DNS attacks, MitM
* [ ] Commands: `arp -a`, `tcpdump port 53`, `iftop`, `iptables -L`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 25 — Network Monitoring & Troubleshooting Tools Part 1
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Master ping, traceroute, ipconfig/ifconfig/ip
* [ ] Use netstat/ss, arp, nslookup/dig, route, curl
* [ ] Troubleshoot common network issues

### 📚 Theory
* [ ] **ping:** Tests reachability using ICMP echo. Shows RTT, packet loss. Options: `-c` count, `-t` TTL, `-s` size, `-I` interface, `-n` no DNS.
* [ ] **traceroute/tracert:** Shows path/route taken. Uses ICMP or UDP with increasing TTL. Identifies where path breaks.
* [ ] **ipconfig/ifconfig/ip:** Display network interface configuration. `ipconfig /all` (Windows), `ifconfig` (legacy Linux), `ip addr` (modern Linux), `ip link`, `ip route`.
* [ ] **netstat/ss:** Display network connections, routing tables, interface stats. `ss` is faster replacement for `netstat`. `ss -tuln` = TCP/UDP listening, no resolve.
* [ ] **arp:** Display/manipulate ARP cache. `arp -a` (Windows), `ip neigh` (Linux).
* [ ] **nslookup/dig/host:** DNS query tools. `dig` most powerful. `dig +trace` for full resolution path.
* [ ] **route:** Display/manipulate routing table. `route print` (Windows), `ip route` (Linux).
* [ ] **curl:** Transfer data with URLs. Supports HTTP, HTTPS, FTP, etc. `curl -I` for headers, `-v` verbose, `-L` follow redirects.

### 🧪 Hands-On Lab (Linux + Packet Tracer)
* [ ] **Setup:** Network with intentional misconfigurations.
* [ ] **Configuration Tasks:** Create scenarios: wrong IP, wrong mask, wrong gateway, DNS failure, DHCP failure.
* [ ] **Commands:**
  - Wrong IP: `ping` fails. Check with `ip addr`.
  - Wrong mask: `ping` to some hosts fails. Verify with `ipcalc`.
  - Wrong gateway: Can't reach other subnets. Check `ip route`.
  - DNS failure: `ping 8.8.8.8` works but `ping google.com` fails. Test with `dig`.
  - DHCP failure: Client gets APIPA (169.254.x.x). Check `ipconfig /all`.
* [ ] **Expected:** Identify root cause using systematic troubleshooting.
* [ ] **Troubleshoot:** Document each scenario, symptom, root cause, and fix.

### 🧠 Exercises
* [ ] A user can ping 8.8.8.8 but not www.google.com. What is the likely issue? How to verify?
* [ ] `traceroute` stops at hop 5. What does this indicate? Is the destination reachable?
* [ ] `netstat -tuln` shows a service on 0.0.0.0:8080. What does 0.0.0.0 mean?
* [ ] Use `curl -v` to inspect HTTP headers and redirects.
* [ ] **Subnetting:** A helpdesk needs to troubleshoot 6 remote sites, each with 25 hosts. Design with 192.168.0.0/21 FLSM.

### 🔐 Cybersecurity Connection
* **Network Security:** These tools are used for baseline monitoring. Unusual `arp` entries indicate spoofing. Unexpected `netstat` connections indicate compromise.
* **SOC Analysis:** Analysts use these tools daily for triage. `dig` investigates DNS-based threats. `curl` tests C2 endpoints.
* **Penetration Testing:** Same tools used for reconnaissance. Understanding them helps defenders detect scans.
* **Cloud Security:** Cloud instances use these same Linux tools. CloudWatch/Azure Monitor provide GUI equivalents.

### 📝 Daily Review
* [ ] Summarize troubleshooting tools and methodology
* [ ] Commands: `ping`, `traceroute`, `ip addr`, `ss -tuln`, `dig`, `curl -v`
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 26 — Network Monitoring & Troubleshooting Tools Part 2
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Master tcpdump and Wireshark
* [ ] Use nmap for authorized discovery
* [ ] Troubleshoot complex scenarios

### 📚 Theory
* [ ] **tcpdump:** Command-line packet analyzer. Powerful filtering. `tcpdump -i eth0` (interface), `tcpdump host 192.168.1.1` (host filter), `tcpdump port 80` (port filter), `tcpdump -w capture.pcap` (write to file), `tcpdump -r capture.pcap` (read from file).
* [ ] **Wireshark:** GUI packet analyzer. Deep inspection of protocols. Filters: Display filters (e.g., `ip.addr==192.168.1.1`, `tcp.port==80`, `dns`, `http`). Capture filters (tcpdump syntax).
* [ ] **nmap:** Network discovery and security auditing. **Use only in authorized environments.**
  - `nmap -sn 192.168.1.0/24` (ping sweep)
  - `nmap -sS 192.168.1.1` (SYN scan, stealth)
  - `nmap -sV 192.168.1.1` (service detection)
  - `nmap -O 192.168.1.1` (OS detection)
  - `nmap -A 192.168.1.1` (aggressive, all features)
* [ ] **Troubleshooting Scenarios:**
  - VLAN mismatch: Trunk not passing VLAN. Check `show vlan brief`, `show interfaces trunk`.
  - Trunk problems: Native VLAN mismatch. DTP issues.
  - Routing failure: Missing route, wrong next-hop, AD conflict.
  - ACL blocking: `show access-lists`, `show ip interface`.
  - NAT problems: Inside/outside interfaces wrong. ACL missing. `show ip nat translations`.
  - Duplicate IP: IP conflict detection, gratuitous ARP.

### 🧪 Hands-On Lab (Linux + Packet Tracer)
* [ ] **Setup:** Complex network with multiple issues.
* [ ] **Config:** Use tcpdump and Wireshark to capture and analyze traffic.
* [ ] **Commands:**
  - `tcpdump -i eth0 -w capture.pcap`
  - `tcpdump -r capture.pcap 'tcp port 80'`
  - Wireshark: Open capture, apply display filters
  - `nmap -sn 192.168.1.0/24` (authorized lab only)
  - `nmap -sS -p 22,80,443 192.168.1.1` (authorized lab only)
* [ ] **Expected:** Identify protocols, flags, and anomalies in captures. Map network with nmap.
* [ ] **Troubleshoot:** Use packet captures to diagnose VLAN, routing, ACL, NAT issues.

### 🧠 Exercises
* [ ] Write a tcpdump command to capture only HTTP traffic from host 192.168.1.10.
* [ ] In Wireshark, how do you filter for TCP packets with the SYN flag set?
* [ ] What is the difference between `nmap -sS` and `nmap -sT`?
* [ ] A user cannot reach a server. Walk through your systematic troubleshooting steps.
* [ ] **Subnetting:** A NOC monitors 10 data centers, each with 8 subnets of 30 hosts. Design with 10.0.0.0/16 FLSM per data center.

### 🔐 Cybersecurity Connection
* **Network Security:** Packet captures reveal malware C2 traffic. nmap identifies attack surface.
* **SOC Analysis:** Wireshark is essential for deep-dive investigations. tcpdump for remote capture.
* **Penetration Testing:** nmap is the standard reconnaissance tool. Wireshark analyzes exploit traffic.
* **Cloud Security:** VPC Flow Logs = cloud tcpdump. Understand them for cloud forensics.

### 📝 Daily Review
* [ ] Summarize tcpdump, Wireshark, nmap, troubleshooting scenarios
* [ ] Commands: `tcpdump`, `nmap -sn`, `nmap -sS`, Wireshark filters
* [ ] Document mistakes
* [ ] Update GitHub

---

## Day 27 — Packet Analysis Deep Dive with Wireshark
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Analyze ARP, ICMP, DNS, TCP handshake in Wireshark
* [ ] Inspect HTTP, HTTPS/TLS, DHCP packets
* [ ] Identify suspicious traffic patterns

### 📚 Theory
* [ ] **Wireshark Analysis Goals:** Verify normal behavior, identify misconfigurations, detect malicious activity, document evidence.
* [ ] **ARP Analysis:** Look for gratuitous ARP storms. Check for ARP spoofing (multiple MACs for same IP). Filter: `arp`.
* [ ] **ICMP Analysis:** Echo request/reply for ping. Time exceeded for traceroute. Destination unreachable for routing issues. Filter: `icmp`.
* [ ] **DNS Analysis:** Query and response packets. Check for NXDOMAIN floods. Filter: `dns`. Look for suspicious domains.
* [ ] **TCP Handshake Analysis:** SYN → SYN-ACK → ACK. Look for SYN floods (many SYNs, no ACKs). Filter: `tcp.flags.syn==1`.
* [ ] **HTTP Analysis:** Request methods, response codes, headers, cookies. Filter: `http`. Check for cleartext credentials.
* [ ] **HTTPS/TLS Analysis:** Certificate exchange, cipher suites, TLS version. Filter: `tls` or `ssl`. Look for weak ciphers.
* [ ] **DHCP Analysis:** DORA process. Filter: `dhcp` or `bootp`. Check for rogue DHCP servers.
* [ ] **TCP Flags Analysis:** SYN, ACK, FIN, RST, PSH, URG. Unusual combinations (SYN-FIN, NULL flags) may indicate scanning.
* [ ] **Suspicious Patterns:** Large outbound transfers, beaconing (regular intervals), DNS tunneling (unusual query sizes), protocol mismatch (HTTP on non-standard port).

### 🧪 Hands-On Lab (Wireshark + Linux)
* [ ] **Setup:** Generate various traffic types and capture in Wireshark.
* [ ] **Configuration Tasks:**
  - Generate ARP: Clear ARP cache and ping
  - Generate ICMP: `ping`, `traceroute`
  - Generate DNS: `dig`, `nslookup`
  - Generate TCP: Browse HTTP site, SSH to server
  - Generate DHCP: Release and renew lease
* [ ] **Commands:**
  - Wireshark filters: `arp`, `icmp`, `dns`, `tcp.port==80`, `tls`, `dhcp`, `tcp.flags.syn==1 and tcp.flags.ack==0`
  - Export specific packets: File → Export Specified Packets
* [ ] **Expected:** Identify each protocol's packet structure and normal behavior.
* [ ] **Troubleshoot:** Find retransmissions. Identify duplicate ACKs. Spot potential scanning.

### 🧠 Exercises
* [ ] Capture a TCP handshake. What are the sequence numbers in each packet?
* [ ] Filter for all DNS queries to a specific domain.
* [ ] How can you detect a possible port scan in Wireshark?
* [ ] What does a TCP RST packet indicate in a capture?
* [ ] **Subnetting:** A security operations center needs to deploy sensors across 4 VLANs: User(300), Server(50), Management(20), Guest(100). Design with 172.30.0.0/22 VLSM.

### 🔐 Cybersecurity Connection
* **Network Security:** Packet analysis is the foundation of network forensics. Identifies malware, data exfiltration, and unauthorized access.
* **SOC Analysis:** Tier 2/3 analysts use Wireshark for incident response. Identifies C2 beacons and lateral movement.
* **Penetration Testing:** Analyze exploit success. Verify payload delivery. Check for IDS evasion.
* **Cloud Security:** Analyze VPC Flow Logs. Mirror traffic to IDS appliances.

### 📝 Daily Review
* [ ] Summarize Wireshark analysis techniques
* [ ] Write favorite display filters
* [ ] Document suspicious patterns identified
* [ ] Update GitHub with capture files and analysis notes

---

## Day 28 — Cloud Networking Fundamentals
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Understand VPC/VNet concepts
* [ ] Explain subnets, route tables, gateways
* [ ] Describe security groups and NACLs

### 📚 Theory
* [ ] **Virtual Networks:** Software-defined networks in cloud. AWS=VPC, Azure=VNet, GCP=VPC.
* [ ] **VPC/VNet Concepts:** Isolated network within cloud. Private by default. Custom IP ranges (CIDR). Multi-AZ/region support.
* [ ] **Subnets:** Subdivisions of VPC. Public subnets (have route to internet gateway). Private subnets (no direct internet). Map to availability zones.
* [ ] **Route Tables:** Define traffic routing within VPC. Main route table + custom route tables. Routes: local (default), internet gateway, NAT gateway, VPN gateway, peering.
* [ ] **Internet Gateway (IGW):** Provides internet access to public subnets. One per VPC typically.
* [ ] **NAT Gateway:** Allows outbound internet from private subnets. No inbound. Managed service (vs self-managed NAT instance).
* [ ] **Security Groups:** Stateful virtual firewalls at instance level. Allow rules only. Evaluate all rules. Default deny.
* [ ] **Network ACLs:** Stateless firewalls at subnet level. Allow and deny rules. Ordered evaluation. Default allow.
* [ ] **Load Balancers:** Distribute traffic. Layer 4 (NLB/Network LB) and Layer 7 (ALB/Application LB). Health checks.
* [ ] **VPN Connectivity:** Site-to-Site VPN (IPSec from on-prem to cloud). Client VPN (remote access).
* [ ] **Hybrid Networking:** Direct Connect (AWS), ExpressRoute (Azure), Cloud Interconnect (GCP). Dedicated private connection.

### 🧪 Hands-On Lab (AWS/Azure/GCP Free Tier or Console Simulation)
* [ ] **Setup:** Create a VPC with public and private subnets (use free tier or read documentation).
* [ ] **Configuration Tasks:**
  - Create VPC with CIDR 10.0.0.0/16
  - Create public subnet 10.0.1.0/24 and private subnet 10.0.2.0/24
  - Attach Internet Gateway to VPC
  - Create route table for public subnet: 0.0.0.0/0 → IGW
  - Create NAT Gateway in public subnet
  - Create route table for private subnet: 0.0.0.0/0 → NAT Gateway
  - Create Security Group: allow SSH (22) and HTTP (80) from your IP
  - Create NACL: allow inbound 22,80,443; deny all else
* [ ] **Commands:** AWS CLI: `aws ec2 describe-vpcs`, `aws ec2 describe-subnets`, `aws ec2 describe-route-tables`. Azure CLI: `az network vnet list`.
* [ ] **Expected:** Public subnet instances reach internet. Private subnet instances reach internet via NAT. Security groups and NACLs filter correctly.
* [ ] **Troubleshoot:** No internet access = route table wrong. Security group too restrictive. NACL blocking return traffic.

### 🧠 Exercises
* [ ] What is the difference between a security group and a NACL?
* [ ] Why would you use a NAT gateway instead of a NAT instance?
* [ ] A private subnet instance cannot reach the internet. List 5 possible causes.
* [ ] Design a 3-tier architecture in AWS: Web tier (public), App tier (private), DB tier (private).
* [ ] **Subnetting:** A cloud VPC uses 10.0.0.0/16. Needs 4 public subnets and 4 private subnets across 2 AZs, each supporting 250 hosts. Design the IP plan.

### 🔐 Cybersecurity Connection
* **Network Security:** Cloud networks require the same security principles. Defense in depth with security groups + NACLs. Least privilege access.
* **SOC Analysis:** CloudTrail and VPC Flow Logs provide audit trails. Monitor for unauthorized VPC changes.
* **Penetration Testing:** Cloud penetration testing requires provider notification. Test security group rules, IAM permissions, and network segmentation.
* **Cloud Security:** Cloud-native security tools (AWS GuardDuty, Azure Sentinel, GCP Security Command Center).

### 📝 Daily Review
* [ ] Summarize VPC, subnets, gateways, security groups, NACLs, load balancers, VPN
* [ ] Commands: AWS CLI, Azure CLI for networking
* [ ] Document mistakes
* [ ] Update GitHub with cloud architecture diagram

---

## Day 29 — Automation for Networking with Python
**Estimated Time:** 3.5 hours

### 🎯 Learning Objectives
* [ ] Write basic Python scripts for networking
* [ ] Understand socket programming basics
* [ ] Parse logs and validate IPs

### 📚 Theory
* [ ] **Why Network Automation:** Reduce human error, increase speed, enable consistency, scale operations. Infrastructure as Code (IaC).
* [ ] **Python for Networking:** Cross-platform, extensive libraries, readable syntax. Key libraries: `socket`, `ipaddress`, `subprocess`, `paramiko` (SSH), `netmiko` (network devices), `requests` (APIs), `scapy` (packet crafting).
* [ ] **Socket Programming Basics:** Create TCP/UDP sockets. Connect to services. Send/receive data.
* [ ] **IP Address Validation:** Use `ipaddress` module to validate IPv4/IPv6, check if in subnet, iterate over hosts.
* [ ] **Port Checking:** Test if port is open on target. Use `socket` to attempt connection.
* [ ] **Log Parsing:** Read log files, extract relevant fields, identify patterns. Use regex for structured parsing.
* [ ] **Network Automation Concepts:** Configuration management (Ansible, Puppet, Chef), API-driven networking (REST APIs), NETCONF/YANG for device configuration.
* [ ] **API Fundamentals:** HTTP methods (GET, POST, PUT, DELETE). JSON data format. Authentication (API keys, tokens). Rate limiting.

### 🧪 Hands-On Lab (Python + Linux)
* [ ] **Setup:** Python 3 installed. Use `ipython` or script files.
* [ ] **Configuration Tasks:**

**Script 1: IP Validation**
```python
import ipaddress

def validate_ip(ip):
    try:
        ipaddress.ip_address(ip)
        return True
    except ValueError:
        return False

print(validate_ip("192.168.1.1"))      # True
print(validate_ip("256.1.1.1"))        # False
print(validate_ip("2001:db8::1"))      # True
```

**Script 2: Port Checker**
```python
import socket

def check_port(host, port):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(2)
    result = sock.connect_ex((host, port))
    sock.close()
    return result == 0

print(check_port("127.0.0.1", 22))     # True/False
print(check_port("127.0.0.1", 8080))   # True/False
```

**Script 3: Subnet Calculator**
```python
import ipaddress

subnet = ipaddress.ip_network("192.168.1.0/24")
print(f"Network: {subnet.network_address}")
print(f"Broadcast: {subnet.broadcast_address}")
print(f"Hosts: {subnet.num_addresses - 2}")
print(f"First host: {list(subnet.hosts())[0]}")
```

**Script 4: Simple Log Parser**
```python
import re

def parse_auth_log(filepath):
    pattern = r'(\d{4}-\d{2}-\d{2}).*Failed password for .* from (\d+\.\d+\.\d+\.\d+)'
    with open(filepath, 'r') as f:
        for line in f:
            match = re.search(pattern, line)
            if match:
                print(f"Failed login on {match.group(1)} from {match.group(2)}")

# parse_auth_log('/var/log/auth.log')
```

* [ ] **Commands:** `python3 script.py`, `pip3 list`
* [ ] **Expected:** Scripts run successfully. Output is correct.
* [ ] **Troubleshoot:** Python version issues. Module not found (install with pip). Syntax errors.

### 🧠 Exercises
* [ ] Write a Python script that takes a CIDR and lists all usable host addresses.
* [ ] Write a script that pings a list of IPs and reports which are up.
* [ ] Modify the log parser to count failed attempts per IP address.
* [ ] Use the `requests` library to query a public API (e.g., ipinfo.io).
* [ ] **Subnetting:** A DevOps team needs to automate IP allocation for 50 microservices, each needing a /28. Design with 10.0.0.0/16. Write a Python script to generate the allocation.

### 🔐 Cybersecurity Connection
* **Network Security:** Automation enables rapid response to threats. Automated ACL updates, quarantine scripts.
* **SOC Analysis:** Python scripts parse SIEM exports, automate indicator lookups, generate reports.
* **Penetration Testing:** Python is used for custom exploit development, scanning tools, and post-exploitation scripts.
* **Cloud Security:** Cloud APIs are automated with Python (Boto3 for AWS, Azure SDK, GCP client libraries).

### 📝 Daily Review
* [ ] Summarize Python networking concepts
* [ ] Save all scripts to GitHub
* [ ] Document mistakes and solutions
* [ ] Update GitHub with Python networking project

---

## Day 30 — Capstone Project: Enterprise Network Lab
**Estimated Time:** 4 hours

### 🎯 Learning Objectives
* [ ] Design and build a complete enterprise network
* [ ] Configure all major technologies covered in 30 days
* [ ] Document as a professional GitHub portfolio project

### 📋 Capstone Requirements

Build a realistic enterprise network in **Cisco Packet Tracer** containing:

#### Network Design
* [ ] **3 VLANs:**
  - VLAN 10: Management (192.168.10.0/24)
  - VLAN 20: Users (192.168.20.0/23 — 500+ hosts)
  - VLAN 30: Servers/DMZ (192.168.30.0/24)
  - VLAN 99: Native VLAN (unused, for security)
* [ ] **2 Switches:** Connected via trunk with 802.1Q. VLANs configured on both.
* [ ] **1 Router:** Inter-VLAN routing via router-on-a-stick or Layer 3 switch.
* [ ] **1 DHCP Server:** Or router-based DHCP for each VLAN. Excludes: .1-.10 in each subnet.
* [ ] **1 DNS Server:** Internal DNS resolving `corp.local` domain. Forwarder to 8.8.8.8.
* [ ] **NAT/PAT:** Router translates internal networks to single public IP (203.0.113.1/30).
* [ ] **Port Forwarding:** External port 8080 → internal web server 192.168.30.10:80.
* [ ] **OSPF:** Dynamic routing between router and any additional routers (if multi-site).
* [ ] **ACLs:**
  - Standard ACL: Block VLAN 20 from accessing VLAN 10 Management
  - Extended ACL: Allow VLAN 20 to access only HTTP/HTTPS in DMZ. Deny all other DMZ access.
  - Extended ACL: Allow Management VLAN full access. Log denied attempts.
* [ ] **Security Concepts:**
  - Change Native VLAN to 99
  - Disable unused switch ports
  - Configure port security on access ports (max 2 MACs, sticky)
  - Document DMZ placement

#### Devices to Include
* [ ] 2 Layer 2 Switches
* [ ] 1 Router (or 1 Layer 3 Switch)
* [ ] 4 PCs in User VLAN
* [ ] 2 PCs in Management VLAN
* [ ] 1 Web Server in DMZ (HTTP + HTTPS)
* [ ] 1 DNS Server
* [ ] 1 DHCP Server (or use router)
* [ ] 1 External PC (simulating internet user)

#### Testing Checklist
* [ ] Intra-VLAN communication works
* [ ] Inter-VLAN routing works (where permitted by ACL)
* [ ] DHCP assigns correct IPs per VLAN
* [ ] DNS resolves internal and external names
* [ ] NAT/PAT allows internet access from internal VLANs
* [ ] Port forwarding allows external access to web server
* [ ] ACLs correctly block/allow traffic
* [ ] OSPF neighbors reach FULL state (if configured)
* [ ] All PCs can ping 8.8.8.8 (through NAT)

#### Documentation Requirements (GitHub Portfolio)
Create a professional README.md with:

```markdown
# Enterprise Network Lab

## Network Diagram
[Insert topology diagram screenshot]

## IP Addressing Plan
| VLAN | Network | Usable Range | Gateway | Purpose |
|------|---------|-------------|---------|---------|
| 10 | 192.168.10.0/24 | .11-.254 | .1 | Management |
| 20 | 192.168.20.0/23 | .1-.254 | .1 | Users |
| 30 | 192.168.30.0/24 | .11-.254 | .1 | DMZ/Servers |

## Device Inventory
- Switch1: VLANs 10,20,30,99. Trunk to Switch2. Access ports assigned.
- Switch2: VLANs 10,20,30,99. Trunk to Switch1.
- Router: Router-on-a-stick. DHCP, NAT, OSPF, ACLs.
- DNS Server: 192.168.30.5
- Web Server: 192.168.30.10

## Configuration Snippets
### VLAN Configuration
[Show switch VLAN config]

### Router-on-a-Stick
[Show subinterface config]

### DHCP
[Show DHCP pool config]

### NAT/PAT
[Show NAT config]

### OSPF
[Show OSPF config]

### ACLs
[Show ACL config]

## Troubleshooting Report
| Issue | Symptom | Root Cause | Solution |
|-------|---------|-----------|----------|
| Inter-VLAN failure | Can't ping across VLANs | Missing router subinterface | Added subinterface for VLAN 20 |
| NAT failure | No internet access | Inside/outside not set | Configured ip nat inside/outside |

## Security Improvements
- Changed Native VLAN from 1 to 99
- Disabled unused ports
- Configured port security
- Implemented ACLs for segmentation
- DMZ isolated from internal networks

## Tools Used
- Cisco Packet Tracer
- Wireshark (for packet capture verification)
- Python (for IP planning script)

## Lessons Learned
[Your reflections]
```

### 🔐 Cybersecurity Connection
* This capstone demonstrates defense in depth: segmentation, ACLs, NAT, port security, and DMZ design.
* SOC analysts must understand these architectures to investigate incidents.
* Penetration testers must understand these defenses to test them effectively.
* Cloud security engineers map these concepts to VPCs, security groups, and NACLs.

### 📝 Daily Review
* [ ] Complete all testing
* [ ] Take screenshots of topology, configurations, and successful tests
* [ ] Write comprehensive README.md
* [ ] Push to GitHub as portfolio project
* [ ] Share link on LinkedIn or resume

---

## Final Networking Skills Checklist

After completing this 30-day roadmap, you should be able to:

### Explain
* [ ] OSI and TCP/IP models layer by layer
* [ ] How switches learn and forward frames
* [ ] ARP resolution process
* [ ] VLAN concepts and trunking (802.1Q)
* [ ] IPv4 and IPv6 addressing
* [ ] Subnetting (FLSM and VLSM)
* [ ] Static vs dynamic routing
* [ ] OSPF neighbor states and area design
* [ ] TCP three-way handshake and flow control
* [ ] UDP characteristics and use cases
* [ ] DNS resolution process
* [ ] DHCP DORA process
* [ ] NAT, PAT, and port forwarding
* [ ] Firewall types and ACLs
* [ ] IDS vs IPS
* [ ] VPN and IPSec basics
* [ ] Wireless security (WPA2/WPA3)
* [ ] Cloud networking (VPC, subnets, security groups)
* [ ] Common network attacks and defenses

### Configure
* [ ] Cisco switches (VLANs, trunking, port security)
* [ ] Cisco routers (interfaces, static routes, OSPF)
* [ ] DHCP server (Cisco or Linux)
* [ ] DNS server (basic records)
* [ ] NAT/PAT and port forwarding
* [ ] Standard and extended ACLs
* [ ] Basic wireless security
* [ ] Cloud VPC with public/private subnets
* [ ] Python scripts for IP validation and port checking

### Troubleshoot
* [ ] Wrong IP, subnet mask, or gateway
* [ ] DNS resolution failures
* [ ] DHCP failures (APIPA)
* [ ] VLAN mismatches and trunk problems
* [ ] Routing failures (missing routes, next-hop issues)
* [ ] ACL blocking legitimate traffic
* [ ] NAT translation issues
* [ ] Duplicate IP addresses
* [ ] Duplex mismatches
* [ ] Wireless connectivity issues

### Analyze
* [ ] Read routing tables and identify best paths
* [ ] Interpret MAC address tables
* [ ] Analyze ARP caches
* [ ] Capture and analyze packets in Wireshark
* [ ] Identify TCP flags and connection states
* [ ] Detect suspicious traffic patterns
* [ ] Parse network logs with Python
* [ ] Map networks with nmap (authorized)

### Secure
* [ ] Design network segmentation with VLANs and subnets
* [ ] Implement ACLs for traffic filtering
* [ ] Configure port security on switches
* [ ] Secure wireless networks (WPA2/WPA3)
* [ ] Design DMZ architectures
* [ ] Understand Zero Trust principles
* [ ] Apply cloud security groups and NACLs
* [ ] Recognize and defend against common attacks

---

## Recommended Next Steps

1. **Certifications:** Pursue CCNA, CompTIA Network+, or Cloud certifications (AWS/Azure/GCP)
2. **Hands-On:** Build a physical lab with used Cisco equipment or continue with GNS3/EVE-NG
3. **Specialize:** Deep dive into cybersecurity (CEH, OSCP) or cloud networking (AWS Advanced Networking)
4. **Contribute:** Share your GitHub portfolio, write blog posts, help others learn
5. **Stay Current:** Follow networking blogs, subscribe to security newsletters, participate in CTFs

---

*Good luck on your networking journey! Consistency and hands-on practice are the keys to mastery.*

