pub struct InterfaceEthernetFirewallInbound {
    pub ipv6_name: Option<String>,
    pub name: Option<String>,
}
pub struct InterfaceEthernetFirewallOutbound {
    pub ipv6_name: Option<String>,
    pub name: Option<String>,
}
pub struct InterfaceEthernetFirewallLocalbound {
    pub ipv6_name: Option<String>,
    pub name: Option<String>,
}
pub struct InterfaceEthernetFirewall {
    pub inbound: Option<InterfaceEthernetFirewallInbound>,
    pub outbound: Option<InterfaceEthernetFirewallOutbound>,
    pub localbound: Option<InterfaceEthernetFirewallLocalbound>,
}
pub struct InterfaceEthernetPoe {
    output: Option<String>
}
pub struct InterfaceIpv6 {
    pub dup_addr_detect_transmits: Option<String>
}
pub struct InterfaceSwitchSwitchPortInterfaceVlan {
    pub pvid: Option<i128>,
    pub vid: Vec<i128>
}
pub struct InterfaceSwitchSwitchPortInterface { 
    pub vlan: Option<InterfaceSwitchSwitchPortInterfaceVlan>,
}
pub struct InterfaceSwitchSwitchPort {
    pub interfaces: Vec<InterfaceSwitchSwitchPortInterface>,
    pub vlan_aware: Option<bool>
}

pub struct InterfaceSwitchVifIpv6Address {
    pub autoconf: Option<bool>
}
pub struct InterfaceSwitchVifIpv6 {
    pub dup_addr_detect_transmits: Option<String>,
    pub address: Option<InterfaceSwitchVifIpv6Address>

}
pub struct InterfaceSwitchVif {
    pub id: i128,
    pub address: Option<String>,
    pub description: Option<String>,
    pub firewall: Option<InterfaceEthernetFirewall>,
    pub mtu: Option<i128>,
    pub ipv6: Option<InterfaceSwitchVifIpv6>
}

pub struct InterfaceEthernet {
    pub name: String, 
    pub description: Option<String>,
    pub duplex: Option<String>,
    pub speed: Option<String>,
    pub poe: Option<InterfaceEthernetPoe>,
    pub address: Option<String>,
    pub firewall: Option<InterfaceEthernetFirewall>,
}

pub struct InterfaceLoopback {
    pub name: String,
}

pub struct InterfaceSwitch {
    pub name: String,
    pub description: Option<String>,
    pub firewall: Option<InterfaceEthernetFirewall>,
    pub ipv6: Option<InterfaceIpv6>,
    pub mtu: Option<i128>,
    pub switch_port: Option<InterfaceSwitchSwitchPort>,
        pub vif: Vec<InterfaceSwitchVif>

}
pub struct Interfaces {
    pub ethernet: Vec<InterfaceEthernet>,
    pub loopback: Option<InterfaceLoopback>,
    pub switch: Vec<InterfaceSwitch>
}
