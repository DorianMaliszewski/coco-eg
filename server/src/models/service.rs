pub struct ServiceDhcpServerSharedNetworkName {
    pub name: String
}
pub struct ServiceNatRule {
    pub order: i128,
    pub description: Option<String>,
    pub outbound_interface: Option<String>,
    pub rule_type: Option<String>
}
pub struct ServiceDnsForwarding {
    pub cache_size:i128,
    pub listen_on: Vec<String>
}
pub struct ServiceSsh {
    pub port: String,
    pub portocol_version: String,
}
pub struct ServiceGui {
    pub http_port: Option<String>,
    pub https_port: Option<String>,
    pub older_ciphers: Option<bool>,
}
pub struct ServiceDns {
    pub forwarding: Option<ServiceDnsForwarding>,
}
pub struct ServiceNat {
    pub rules: Vec<ServiceNatRule>
}
pub struct ServiceDhcpServer {
    pub disabled: Option<bool>,
    pub hostfile_update: Option<bool>,
    pub shared_network_name: Vec<ServiceDhcpServerSharedNetworkName>
}
pub struct Service {
    pub dhcp_server: Option<ServiceDhcpServer>,
    pub dns: Option<ServiceDns>,
    pub gui: Option<ServiceGui>,
    pub nat: Option<ServiceNat>,
    pub ssh: Option<ServiceSsh>
}
