use super::{firewall::Firewall, interfaces::Interfaces, port_forward::PortForward, service::Service};

pub struct ConfigFile {
    pub firewall: Option<Firewall>,
    pub interfaces: Option<Interfaces>,
    pub port_forward: Option<PortForward>,
    pub service: Option<Service>
}
